export interface ICartItem {
    id: number,
    category: string,
    name: string,
    topping?: string[],
    price: number,
    rank?: number,
    restaurantId: number
};
