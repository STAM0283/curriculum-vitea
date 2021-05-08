import React from 'react';
import { useHistory } from 'react-router-dom';

const MenuBurger = () => {
  const history = useHistory();
  const homeDirection = () => {
    history.push('/');
  };
  const experienceDirection = () => {
    history.push('/experience');
  };
  const formationDirection = () => {
    history.push('/formation');
  };
  const comptetenceDirection = () => {
    history.push('/competences');
  };
  const portfolioDirection = () => {
    history.push('/portfolio');
  };
  const contactDirection = () => {
    history.push('/contact');
  };
  return (
    <nav role="navigation" className="navBurger">
      <div id="menuToggle">
        <input type="checkbox" />
        <span />
        <span />
        <span />
        <ul id="menu">
          <li aria-hidden onClick={homeDirection}>ACCUEIL</li>
          <li aria-hidden onClick={experienceDirection}>EXPERIENCE</li>
          <li aria-hidden onClick={formationDirection}>FORMATION</li>
          <li aria-hidden onClick={comptetenceDirection}>COMPETENCES</li>
          <li aria-hidden onClick={portfolioDirection}>PORTFOLIO</li>
          <li aria-hidden onClick={contactDirection}>CONTACT MAIL</li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuBurger;
