import React, {
    useState,
    useEffect,
} from 'react';
import './restaurants.scss';
import { IRestaurant } from '../../interfaces/Restaurant';
import { fetchData } from '../../utils/fetchData';
import Restaurant from '../restaurant/Restaurant';
import GetLocation from '../../utils/GetLocation';

const Restaurants = () => {
    const [ restaurants, setRestaurants ] = useState<IRestaurant[]>([]);
    const location = GetLocation();

    const fetchRestaurantData = async () => {
        const data = await fetchData(`https://private-anon-1a660f2cea-pizzaapp.apiary-mock.com/restaurants/`);
        setRestaurants(data);
    };

    useEffect(() => {
        fetchRestaurantData();
    }, []);


    if (restaurants && restaurants.length > 0) {
        return (
            <section className='restaurants'>
                <h2 data-testid='restaurant-heading' className='section-heading'>Restaurants</h2>
                <div className='restaurant-container'>
                {restaurants.map((restaurant: IRestaurant, i: number) => (
                    <Restaurant {...restaurant} key={i}/>
                    ))}
                </div>
                <p>{location.loaded ? JSON.stringify(location) : "Location data loading"}</p>
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