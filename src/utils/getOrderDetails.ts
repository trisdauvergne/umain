export const getOrderDetails = async (orderId: number) => {
    const data = await fetch(`https://private-anon-941fd21a9a-pizzaapp.apiary-mock.com/orders/${orderId}`);
    if (data.ok) {
        const orderDetails = await data.json();
        return orderDetails;
    } else {
        const errorMessage = `An error occurred: ${data.status}`;
        throw new Error(errorMessage);
    }
}