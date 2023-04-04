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
                res.json({error: "Success!", username: user.username, favouriteBurger: user.favouriteBurger});
            }else{
                res.status(400).json({error: "Invalid password"});
            }

        }else{
            res.status(400).json({error: "User does not exist"});
        }

    }catch(error){
        res.status(400).json({error});
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
//Recipe Handling

//Post
app.post("/burgers", async(req, res) => {
    const {name, description, image, amount, location, ingrediants}= req.body;
    const burger = await BurgerModel.create({name, description, image, amount, location, ingrediants});
    res.send(burger);
})


// app.post('/recipe/create', async (req, res) =>{
//     const recipeData = [
//         {
//             name: "Hammer",
//             image: "assets/hammer.png",
//             description: "Use me to nail things",
//             amount: 0,
//             ingrediants: [
//                 {inventoryId: "wood id", amountNeeded: 1},
//                 {inventoryId: "rock id", amountNeeded: 1},
//             ]
//         },
//         {
//             name: "Saw",
//             image: "assets/saw.png",
//             description: "Use me to make things half",
//             amount: 0,
//             ingrediants: [
//                 {inventoryId: "wood id", amountNeeded: 2},
//                 {inventoryId: "metal id", amountNeeded: 1},
//             ]
//         },
//     ]

//     // const {name, category, image, amount, location} = req.body;
//     // const inventory = await InventoryModel.create({name, category, image, amount, location});
//     // res.send(inventory);

//     for(const recipe of recipeData){
//         await BurgerModel.create(recipe);
//     }

//     res.send({success:true})
// })

//get all my recipes
app.get('/recipe', async (req,res)=>{
    try{
        const recipes = await BurgerModel.find().populate('ingrediants.ingrediantId').exec();

        const recipesWithAvailability = await Promise.all(
            recipes.map(async (recipe) =>{
            //1. loop through each recipe
            const ingrediants = recipe.ingrediants;
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

            //3. return the recipe with new craftable property
            return {...recipe.toObject(), craftable };

        })
        )

        //4. respond with new recipe data that includes craftable
        res.send(recipesWithAvailability)

    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"})
        
    }
   
})




//listener
app.listen(port, () => {
    console.log("[server]: server running at http://localhost:" + port);
    
})