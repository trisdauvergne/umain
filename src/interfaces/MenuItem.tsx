export interface IMenuItem {
    id: number,
    category: string,
    name: string,
    topping?: string[],
    price: number,
    rank?: number,
}