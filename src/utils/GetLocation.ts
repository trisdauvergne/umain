import {
    useState,
    useEffect
} from 'react'

const GetLocation = () => {
    const [ location, setLocation ] = useState({
        loaded: false,
        coordinates: {
            lat: '',
            lng: ''
        }
    });

    const onSuccess = (location: any) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };

    const onError = (error: any) => {
        setLocation((state) => ({
            ...state,
            loaded: true,
            error,
        }));
    }

    useEffect(() => {
        if(!('geolocation' in navigator)) {
            onError({
                error: {
                    code: 0,
                    message: 'Geolocation not supported',
                },
            })
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

  return location;
}

export default GetLocation;

