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
        let data = await fetchData(`https://private-anon-1a660f2cea-pizzaapp.apiary-mock.com/restaurants/`);        
        const lng: number = Number(location.coordinates.lng);
        const lat: number = Number(location.coordinates.lat);
        console.log(lng, lat);
        console.log(location);
        
        // Function borrowed from here: https://yogeshnogia.medium.com/program-to-sort-the-given-array-of-objects-having-lat-lng-by-distance-from-your-given-location-9052eb45f86d
        
        const getDistanceFromLatLonInKm = (lat1: number, lon1: number, lat2: number,lon2: number) => {
            const R = 6371;
            const dLat = deg2rad(lat2-lat1);
            const dLon = deg2rad(lon2-lon1);
            const a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            const d = R * c;
            return d;
        }

        const deg2rad = (deg: number) => {
            return deg * (Math.PI/180)
        };

        for(let i = 0; i<data.length; i++) {
            let distance = getDistanceFromLatLonInKm(lat, lng, data[i].latitude, data[i].longitude); 
            data[i].distance = distance;
        };

        let dataByDistance = data.sort((a: any, b: any) => a.distance - b.distance)
        setRestaurants(dataByDistance);
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
                <p className='small-txt'>{location.loaded ? JSON.stringify(location) : "Location data loading"}</p>
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