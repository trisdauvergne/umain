import { ICartItem } from "../interfaces/CartItem";

export const submit = async (cart: ICartItem[]) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart)
      };
      
      const data = await fetch('https://private-anon-941fd21a9a-pizzaapp.apiary-mock.com/orders/', requestOptions);
      if (data.ok) {
        const orderData = await data.json();
        return orderData;
      } else {
        const errorMessage = `An error occurred: ${data.status}`;
        throw new Error(errorMessage);
      }
}