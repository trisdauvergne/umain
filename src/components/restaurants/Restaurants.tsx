import React, {
    useState,
    useEffect
} from 'react';
import { IRestaurant } from '../../interfaces/Restaurant';

const Restaurants = () => {
    const [ restaurants, setRestaurants ] = useState([]);

    useEffect(() => {
        fetch(`https://private-anon-1a660f2cea-pizzaapp.apiary-mock.com/restaurants/`)
        .then((response) => response.json())
        .then((actualData) => setRestaurants(actualData))
        .catch((err) => {
        console.log(err.message);
        });
    }, []);

    console.log('in restaurants component', restaurants);

    if (restaurants && restaurants.length > 0) {
        return (
          <div>
              <h3>Restaurants component</h3>
              {restaurants.map((restaurant: IRestaurant, i: number) => (
                <div key={i}>
                    <h4>{restaurant.name}</h4>
                    <p>{restaurant.address1}</p>
                    <p>{restaurant.address2}</p>
                    <button>View menu</button>
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

export default Restaurants