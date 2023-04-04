import {prop, Ref} from '@typegoose/typegoose'
import { Inventory} from './inventory';
//map what our ingrediants object looks like
export class Ingrediant {
    @prop({required: true})
    public inventoryId?: Ref<Inventory>;

    @prop({required: true})
    public amountNeeded?: number;
}
