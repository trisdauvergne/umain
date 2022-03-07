export const fetchData = async (url: string) => {
    const data = await fetch(url);
    console.log('in fetch data', data);
    if (data.ok) {
        const returnData = await data.json();
        return returnData;
    } else {
        const errorMessage = `An error occurred: ${data.status}`;
        throw new Error(errorMessage);
    }
};