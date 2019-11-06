import React, { useState, useEffect} from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard(props) {

  // const[character, setCharacter] = useState();

  const { name, picture, species, status, origin, location} = props;

  return (
    <Card>
      <Image src={picture} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='status'>{species}: {status}</span>
        </Card.Meta>
        <Card.Description>
          Origin: {origin} <br /> Location: {location}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='video' />
          Episodes
        </a>
      </Card.Content>
    </Card>
    );
  
}
