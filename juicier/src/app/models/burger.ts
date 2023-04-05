export interface Burger {
    _id?: string,
    name: string,
    image: string,
    description: string,
    amount: number,
    location: string,
    craftable?: boolean,
    ingrediants: any[] //not ideal - rather specify
}
