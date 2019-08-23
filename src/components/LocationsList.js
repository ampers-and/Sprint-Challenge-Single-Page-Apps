import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList(props) {

    const [locations, setLocations] = useState([])

    useEffect(() => {

        const getLocations = () => {

            axios
                .get('https://rickandmortyapi.com/api/location/')
                .then(response => {
                    console.log(response.data.results);
                    setLocations(response.data.results);
                })
                .catch(error => {
                    console.error('Server Error', error);
                  });
        }

        getLocations();
    }, []);

    return(
        <div className='location-list'>
            {locations.map(location =>(
                <div className='location-details' key={location.id} 
                    name={location.name}
                    type={location.type}
                    dimensions={location.dimensions}
                    residents={location.residents}>
                    <LocationCard/>
                </div>
            ))}
        </div>
    )
}
