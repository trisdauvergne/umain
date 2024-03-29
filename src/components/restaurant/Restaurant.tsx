import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../utils/fetchData';
import { IRestaurant } from '../../interfaces/Restaurant';
import {
    saveMenu,
    changeMenuVisibility,
    changeMenuDetailVisibility
} from '../../redux/menuSlice';
import {
    saveRestaurantName,
    saveRestaurantId
} from '../../redux/restaurantSlice';

const Restaurant = (restaurant: IRestaurant) => {
    const dispatch = useDispatch();

    const fetchMenuData = async (restaurantId: number, restaurant: IRestaurant) => {
        dispatch(changeMenuDetailVisibility(false));
        dispatch(saveMenu([]));
        // API url has changed
        const data = await fetchData(`https://private-anon-af5dcba044-pizzaapp.apiary-mock.com/restaurants/${restaurantId}/menu`);
        dispatch(saveMenu(data));
        dispatch(saveRestaurantName(restaurant.name));
        dispatch(saveRestaurantId(restaurantId));
        dispatch(changeMenuVisibility(true));
    };

  return (
        <div className='restaurant-info'>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address1}</p>
            <p>{restaurant.address2}</p>
            <p>Lat: {restaurant.latitude}, Long: {restaurant.longitude}</p>
            <button onClick={() => fetchMenuData(restaurant.id, restaurant)}>View menu</button>
        </div>
  )
}

export default Restaurant