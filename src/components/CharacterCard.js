import React, { useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LiveTvIcon from '@material-ui/icons/LiveTv'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function CharacterCard(props) {
  
  const classes = useStyles();

  // const[character, setCharacter] = useState();

  const { name, picture, species, status, origin, location, episodes} = props.character;

  return (
  <Card className={classes.card}>
      <CardActionArea>
      <CardMedia
          component="img"
          alt={name}
          height="140"
          image={picture}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {species}: {status}
        </Typography>
          <Typography variant="body2" component="p">
            Location: {location}
            Origin: {origin}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <LiveTvIcon />
          Episodes
        </Button>
      </CardActions>
    </Card>
    );
  
}
