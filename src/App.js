import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";

import WelcomePage from './components/WelcomePage'
import CharacterList from "./components/CharacterList";
import LocationsList from './components/LocationsList';
import EpisodeList from './components/EpisodeList';

import { Route } from 'react-router-dom';




export default function App() {
  return (
    <main>
      <Header />
      <div>
        <TabNav />
        <Route exact path="/" component={ WelcomePage }/>
        <Route path="/characters" component={ CharacterList }/>
        <Route path="/locations" component={ LocationsList }/>
        <Route path="/episodes" component={ EpisodeList }/>
      </div>
      
    </main>
  );
}
