import React from 'react';
import { useHistory } from 'react-router-dom';

const MenuBurger = (props) => {
  const language = props.data.language;
  const menuFr = ["ACCUEIL", "EXPERIENCE", "FORMATION", "COMPETENCES", "PORTFOLIO", "CONTACT MAIL"];
  const menuEn = ["HOME", "EXPERIENCE", "TRAINING", "SKILLS", "PORTFOLIO","CONTACT MAIL"];
  const history = useHistory();
  const homeDirection = () => {
    history.push('/');
    document.location.reload();
  };
  const experienceDirection = () => {
    history.push('/experience');
    document.location.reload();
  };
  const formationDirection = () => {
    history.push('/formation');
    document.location.reload();
  };
  const comptetenceDirection = () => {
    history.push('/competences');
    document.location.reload();
  };
  const portfolioDirection = () => {
    history.push('/portfolio');
    document.location.reload();
  };
  const contactDirection = () => {
    history.push('/contact');
    document.location.reload();
  };
  return (
    <nav role="navigation" className="navBurger">
      <div id="menuToggle">
        <input type="checkbox" />
        <span />
        <span />
        <span />
        <ul id="menu">
          <li aria-hidden onClick={homeDirection}>{ language === "fr" ? menuFr[0] : menuEn[0]}</li>
          <li aria-hidden onClick={experienceDirection}>{ language === "fr" ? menuFr[1] : menuEn[1]}</li>
          <li aria-hidden onClick={formationDirection}>{ language === "fr" ? menuFr[2] : menuEn[2]}</li>
          <li aria-hidden onClick={comptetenceDirection}>{ language === "fr" ? menuFr[3] : menuEn[3]}</li>
          <li aria-hidden onClick={portfolioDirection}>{ language === "fr" ? menuFr[4] : menuEn[4]}</li>
          <li aria-hidden onClick={contactDirection}>{ language === "fr" ? menuFr[5] : menuEn[5]}</li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuBurger;
