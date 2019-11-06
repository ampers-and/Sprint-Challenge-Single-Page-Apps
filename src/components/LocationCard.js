import React from "react";
import {Card} from 'semantic-ui-react';

export default function LocationCard(props) {

  return (

    <Card>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='info'>Type:{props.type} <br/>Dimension: {props.dimension}</span>
      </Card.Meta>
      <Card.Description>
        Residents: <a href={props.residents}>{props.residents.length}</a>
      </Card.Description>
    </Card.Content>
  </Card>

  );
}
