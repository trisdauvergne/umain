export interface IOrder {
    order: {
        cart: string[],
        esitmatedDelivery: string,
        orderId: number,
        orderedAt: string,
        restuarantId: number,
        status: string,
        totalPrice: number,
    }
}

export interface IPizzaApiCartItem {
    menuItemId: number,
    quantity: number
}