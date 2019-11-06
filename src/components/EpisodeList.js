import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodesList(props) {

    const [episodes, setEpisodes] = useState([])

    useEffect(() => {

        const getEpisodes = () => {

            axios
                .get('https://rickandmortyapi.com/api/episode/')
                .then(response => {
                    console.log(response.data.results);
                    setEpisodes(response.data.results);
                })
                .catch(error => {
                    console.error('Server Error', error);
                  });
        }

        getEpisodes();
    }, []);

    return(
        <div className='episode-list grid-view'>
            {episodes.map(episode =>(
                <div className='episode-details' key={episode.id}>
                    <EpisodeCard
                        name={episode.name}
                        episode={episode.episode}
                        date={episode.air_date}/>
                </div>
            ))}
        </div>
    )
}
