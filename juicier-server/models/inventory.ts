import {prop, getModelForClass} from '@typegoose/typegoose'
import { Ingrediant } from './ingrediant';


//create model class
export class Inventory {
    @prop({required: true})
    public name?: string;

    @prop({required: true})
    public category?: string;

    @prop({required: true})
    public image?: string;

    @prop({required: true})
    public amount?: number;

    @prop({required: true})
    public location?: string;

 }

export const InventoryModel = getModelForClass(Inventory);