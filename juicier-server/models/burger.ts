import {prop, getModelForClass} from '@typegoose/typegoose'
import { Ingrediant } from './ingrediant';

//create model class
export class Burger {
    @prop({required: true})
    public name?: string;

    @prop({required: true})
    public image?: string;

    @prop({required: true})
    public description?: string;

    @prop({required: true})
    public amount?: number;

    @prop({required: true})
    public location?: string;

    //array of all ingrediants needed from my inventory
    @prop({type: [Ingrediant], required: true})
    public ingrediants?: Ingrediant[];
 }

export const BurgerModel = getModelForClass(Burger);