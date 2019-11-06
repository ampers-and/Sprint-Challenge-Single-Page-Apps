import React, { useEffect, useState } from "react";
import axios from 'axios';
// import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character')
        .then(response => {
          console.log(response.data.results)
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getCharacters();
  }, []);

  return (
    <section className="character-list grid-view">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {characters.map( character => (
        <div className='character-details' key={character.id}>
          <CharacterCard
            name={character.name}
            picture={character.image}
            species={character.species} 
            status={character.status} 
            origin={character.origin.name}
            location={character.location.name}/>
        </div>
      ))}
    </section>
  );
}

function CharacterDetails({ character }) {
  const { name, picture, species, status, origin, location, episodes} = character;
  return (
    // <Link to={`/movies/${movie.id}`}>
     <CharacterCard character={character} />
    // </Link>
  );
}