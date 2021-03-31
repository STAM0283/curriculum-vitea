import React from 'react';
import {Switch, Route} from "react-router-dom";
import Accueil from "./Accueil";
import Experience from "./Experience";
import Formation from "./Formation";
import Competences from "./Competences"; 
import Portfolio from "./Portfolio";
import Contact from "./Contact"; 

const Main = (props) => { 
    const language = props.data.language;
    const setLanguage = props.data.setLanguage;
    return (
        <div className = "main">
            <Switch>
          <Route exact path="/">
            <Accueil data ={{
              language,
              setLanguage
        }} />
          </Route>
          <Route exact path="/experience">
            <Experience data ={{
              language,
              setLanguage
             }} />
          </Route>
          <Route exact path="/formation">
            <Formation data ={{
              language,
              setLanguage
             }} />
          </Route>
          <Route exact path="/competences">
            <Competences data ={{
              language,
              setLanguage
        }} />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact data ={{
              language,
              setLanguage
             }}/>
          </Route>
        </Switch>
        </div>
    );
};

export default Main;