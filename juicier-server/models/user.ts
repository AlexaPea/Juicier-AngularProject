import {prop, getModelForClass} from '@typegoose/typegoose';

class User{

    @prop({required:true})
    public username?: string;

    @prop({required:true})
    public favouriteBurger?: string;

    @prop({required:true})
    public role?: string;
}

export const UserModel = getModelForClass(User);