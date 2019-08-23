import React from "react";

import HomeIcon from '@material-ui/icons/Home';
import TerrainIcon from '@material-ui/icons/Terrain';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PeopleIcon from '@material-ui/icons/People';
import styled from 'styled-components'

import { NavLink } from "react-router-dom";

// import WelcomePage from './WelcomePage'
// import CharacterList from "./CharacterList";
// import LocationsList from './LocationsList';
// import EpisodeList from './EpisodeList';


// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

const Nav = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin:20px;
`;

  export default function TabNav() {

  return (
    <div>
      <Nav>
        <div>
          <NavLink to="/">Home <HomeIcon/> </NavLink>
        </div>
        <div>
          <NavLink to="/characters">Characters <PeopleIcon/> </NavLink>
        </div>
        <div>
          <NavLink to="/locations">Locations <TerrainIcon/> </NavLink>
        </div>
        <div>
          <NavLink to="/episodes">Episodes <LiveTvIcon/> </NavLink>
        </div>
      </Nav>
    </div>
  );
};

