import React, {
    useState,
    useEffect,
} from 'react';
import { IRestaurant } from '../../interfaces/Restaurant';
import { fetchData } from '../../utils/fetchData';

const Restaurants = () => {
    const [ restaurants, setRestaurants ] = useState([]);

    const fetchRestaurantData = async () => {
        const data = await fetchData(`https://private-anon-1a660f2cea-pizzaapp.apiary-mock.com/restaurants/`);
        setRestaurants(data);
    };

    const fetchMenuData = async (restaurantId: number) => {
        console.log('fetchMenuData called')
        const data = await fetchData(`https://private-anon-1a660f2cea-pizzaapp.apiary-mock.com/restaurants/${restaurantId}/menu`);
        console.log('fetchMenuData data:', data);
    }

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    console.log('in restaurants component', restaurants);

    if (restaurants && restaurants.length > 0) {
        return (
          <div>
              <h3 data-testid="restaurant-heading">Restaurants</h3>
              {restaurants.map((restaurant: IRestaurant, i: number) => (
                <div key={i}>
                    <h4>{restaurant.name}</h4>
                    <p>{restaurant.address1}</p>
                    <p>{restaurant.address2}</p>
                    <button onClick={() => fetchMenuData(restaurant.id)}>View menu</button>
                </div>))}
          </div>
        )
    } else {
        return (
            <div>
                <h3>Restaurants loading...</h3>
            </div>
        )
    }
}

export default Restaurants;