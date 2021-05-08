import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {NavLink} from "react-router-dom"; 

const NavBar = (props) => {
  const setLanguage = props.data.setLanguage;
  const language = props.data.language;
  const menuFr = ["ACCUEIL", "EXPERIENCE", "FORMATION", "COMPETENCES", "PORTFOLIO", "CONTACT MAIL"];
  const menuEn = ["HOME", "EXPERIENCE", "TRAINING", "SKILLS", "PORTFOLIO","CONTACT MAIL"];
    return (
        <div className = "navBar">
            <nav>
        <ul> 
        <div className="languagesChange">
            <label htmlFor="fr">FR</label>
            <input type="radio" name="lang" id="fr" onClick={ () => setLanguage("fr")} />
            <label htmlFor="en">EN</label>
            <input type="radio" name="lang" id="en" onClick={ () => setLanguage("en")} />
          </div>      
          <li>
            <NavLink exact activeClassName="current" to="/">
              <button
                type="button"
                className="btn btn-outline-primary btn-lg"
              >
                { language === "fr" ? menuFr[0] : menuEn[0]}
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/experience">
              <button
                type="button"
                className="btn btn-outline-primary"
              >
                { language === "fr" ? menuFr[1] : menuEn[1]}
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/formation">
              <button
                type="button"
                className="btn btn-outline-primary"
              >
            { language === "fr" ? menuFr[2] : menuEn[2]}
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/competences">
              <button
                type="button"
                className="btn btn-outline-primary"
              >
            { language === "fr" ? menuFr[3] : menuEn[3]}
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/portfolio">
              <button
                type="button"
                className="btn btn-outline-primary"
              >
            { language === "fr" ? menuFr[4] : menuEn[4]}
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/contact">
              <button
                type="button"
                className="btn btn-outline-primary"
              >
            { language === "fr" ? menuFr[5] : menuEn[5]}
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
        </div>
    );
};

export default NavBar;