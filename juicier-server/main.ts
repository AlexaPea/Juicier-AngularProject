import express, {Express} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { BurgerModel } from './models/burger';
import { UserModel } from './models/user';
import bcrypt from 'bcryptjs';
//import models
import { InventoryModel } from './models/inventory';

//Import our typegoose & mongoose to connect to db
import mongoose from 'mongoose';


dotenv.config();

const app: Express= express();

//middleware
app.use(cors()); //to avoid cors error
app.use(express.json()); //get our params from body

//declare variables
const port = process.env.PORT;
const clusterUrl = process.env.CLUSTER;

//connection with mongo
mongoose.set('strictQuery', false);
mongoose.connect(clusterUrl!).then(() =>{
    console.log("MongoDb connected");
}).catch((error) => {
    console.log(error.message);
    
});


//endpoints
app.get("/", (req, res) => {
    res.send("working server")
})

//2 - auth end points
app.post("/user/signup", async (req,res) =>{

    try{
        let {username, favouriteBurger, role} = req.body;
        //hash password
        favouriteBurger = await bcrypt.hash(favouriteBurger,12);

        //create new user
        const user = await UserModel.create({username, favouriteBurger, role})

        res.json(user);

    }catch(error){
        res.status(400).json({error});
    }

})

app.post("/user/login", async (req,res) =>{
    //verify
    try{

        //get variables
        const {username, favouriteBurger} = req.body;

        //check if user exists
        const user = await UserModel.findOne({username: username});

        if(user){
            //check if favouriteBurger matches
            const result = await bcrypt.compare(favouriteBurger, user.favouriteBurger!);
            if(result){ //if password patches
                //OPTION: add JWT Here
                res.json({success: true, username: user.username, favouriteBurger: user.favouriteBurger});
            }else{
                res.json({success: false,error: "Invalid password"});
            }

        }else{
            res.json({success: false,error: "User does not exist"});
        }

    }catch(error){
        res.json({success: false,error});
    }

    
})

//====================================================================

//Adding inventory CRUD
//Read
app.get("/inventory", async(req, res) => {
    const inventory = await InventoryModel.find({});
    res.send(inventory);
})

//bread
app.get("/inventory/bread", async(req, res) => {
    const inventory = await InventoryModel.find({ category: "Bread" });
    res.send(inventory);
  })

//Post
app.post("/inventory", async(req, res) => {
    const {name, category, image, amount, location} = req.body;
    const inventory = await InventoryModel.create({name, category, image, amount, location});
    res.send(inventory);
})
//Update
app.put("/inventory/:id", async(req, res) => {
    const {id} = req.params;
    const {amount} = req.body;
    const inventory = await InventoryModel.findByIdAndUpdate(id, {amount}, {new: true});
    res.send(inventory);
})
//Delete
app.delete("/inventory/:id", async(req, res) => {
    const {id} = req.params;
    const inventory = await InventoryModel.findByIdAndDelete(id);
    res.send(inventory);
})


//=====================================================
//burger Handling

//Post
app.post("/burgers/create", async(req, res) => {
    const {name, description, image, amount, location, ingrediants}= req.body;
    const burger = await BurgerModel.create({name, description, image, amount, location, ingrediants});
    res.send(burger);
})


//get all my burgers
app.get('/burgers', async (req,res)=>{
    try{
        const burgers = await BurgerModel.find().populate('ingrediants.inventoryId').exec();

        const burgersWithAvailability = await Promise.all(
            burgers.map(async (burger) =>{
            //1. loop through each burger
            const ingrediants = burger.ingrediants;
            let craftable = true;

            //2. loop through each ingrediant and check if there is enough in inventory
            for(const ingrediant of ingrediants!){
                //2.1 get the inventory data for each ingrediants
                const inventory = await InventoryModel.findById(ingrediant.inventoryId).exec();
                //2.2 get the amount available of each ingrediant
                const amount = inventory!.amount;

                //2.3 check if not enough
                if(!amount || amount < ingrediant.amountNeeded!){
                    craftable = false;
                    break;
                }
            }

            //3. return the burgers with new craftable property
            return {...burger.toObject(), craftable };

        })
        )

        //4. respond with new burger data that includes craftable
        res.send(burgersWithAvailability)

    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"})
        
    }
   
})


//endpoint to craft the burger (option: checking if there are enough items)
app.post('/burgers/craft', async (req,res)=>{
    const { burgerId } = req.body;

    try {

        const {burgerId} = req.body;

        const burger = await BurgerModel.findById(burgerId).exec();

        if(burger){//checking if a burger has been found

            burger.amount!++ //incrementing burger amount
            burger.save();
    
            //Task - Update inventory amount

            //loop through each ingrediant
            const ingrediants = burger.ingrediants!

            for(const ingrediant of ingrediants){
                const inventoryId = ingrediant.inventoryId;
                const inventory = await InventoryModel.findById(inventoryId).exec();
                if(inventory){
                    inventory.amount! -= ingrediant.amountNeeded!; //subtract the amt needed to craft
                    await inventory.save();
                }
            }



        }

        res.send({success: true})
        
    } catch (err) {

        console.log(err);
        res.status(500).send({error: err})
    }
})






//listener
app.listen(port, () => {
    console.log("[server]: server running at http://localhost:" + port);
    
})