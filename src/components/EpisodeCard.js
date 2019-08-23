import React from "react";
import {Card} from 'semantic-ui-react';

export default function EpisodeCard(props) {

  return (

    <Card>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='info'>Episode: {props.episode} <br/>Air Date: {props.date}</span>
      </Card.Meta>
    </Card.Content>
  </Card>

  );
}
