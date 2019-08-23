import React, { useState, useEffect} from "react";
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='video' />
    Episodes
  </a>
)

export default function CharacterCard(props) {

  // const[character, setCharacter] = useState();

  const { name, picture, species, status, origin, location} = props;

  return (
    <Card
    image={picture}
    header={name}
    meta={species}
    meta={status}
    description={origin}
    description={location}
    />
    );
  
}
