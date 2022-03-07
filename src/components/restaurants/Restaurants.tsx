import React, {
    useState,
    useEffect,
} from 'react';
import './restaurants.scss';
import { IRestaurant } from '../../interfaces/Restaurant';
import { fetchData } from '../../utils/fetchData';
import { useDispatch } from 'react-redux';
import {
    saveMenu,
} from '../../redux/menuSlice';
import {
    saveRestaurant
} from '../../redux/restaurantSlice';

const Restaurants = () => {
    const [ restaurants, setRestaurants ] = useState<IRestaurant[]>([]);
    const [ savedRestaurant, setSavedRestaurant ] = useState('');

    const dispatch = useDispatch();

    const fetchRestaurantData = async () => {
        const data = await fetchData(`https://private-anon-1a660f2cea-pizzaapp.apiary-mock.com/restaurants/`);
        setRestaurants(data);
    };

    const fetchMenuData = async (restaurantId: number, restaurant: IRestaurant) => {
        const data = await fetchData(`https://private-anon-1a660f2cea-pizzaapp.apiary-mock.com/restaurants/${restaurantId}/menu`);
        dispatch(saveMenu(data));
        dispatch(saveRestaurant(restaurant.name));
    }

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    console.log('in restaurants component', restaurants);

    if (restaurants && restaurants.length > 0) {
        return (
          <section className='restaurants'>
              <h2 className='section-heading'>Restaurants</h2>
              {restaurants.map((restaurant: IRestaurant, i: number) => (
                <div className='restaurant-info' key={i}>
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.address1}</p>
                    <p>{restaurant.address2}</p>
                    <button onClick={() => fetchMenuData(restaurant.id, restaurant)}>View menu</button>
                </div>))}
          </section>
        )
    } else {
        return (
            <section className='restaurants'>
                <h2 className='section-heading'>Restaurants loading...</h2>
            </section>
        )
    }
}

export default Restaurants;