import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {NavLink} from "react-router-dom"; 

const NavBar = (props) => {
  const setLanguage = props.data.setLanguage;
  const language = props.data.language;
  const menuFr = ["ACCUEIL", "EXPERIENCE", "FORMATION", "COMPETENCES", "PORTFOLIO", "CONTACT MAIL"];
  const menuEn = ["HOME", "EXPERIENCE", "TRAINING", "SKILLS", "PORTFOLIO","CONTACT MAIL"];
  const menuAr = ["الصفحة الرئيسية", "الخبرة", "التدريب", "المهارات", "المحفظة", "البريد الإلكتروني"];
    return (
        <div className = "navBar">
            <nav>
        <ul>
        <div className="languagesChange" style={{color: "wheat"}}>
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
                { language === "fr" ? menuFr[0] : language === "en" ? menuEn[0] : menuAr[0]}
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/experience">
              <button
                type="button"
                className="btn btn-outline-primary"
              >
                { language === "fr" ? menuFr[1] : language === "en" ? menuEn[1] : menuAr[1]}
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/formation">
              <button
                type="button"
                className="btn btn-outline-primary"
              >
            { language === "fr" ? menuFr[2] : language === "en" ? menuEn[2] : menuAr[2]}
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/competences">
              <button
                type="button"
                className="btn btn-outline-primary"
              >
            { language === "fr" ? menuFr[3] : language === "en" ? menuEn[3] : menuAr[3]}
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/portfolio">
              <button
                type="button"
                className="btn btn-outline-primary"
              >
            { language === "fr" ? menuFr[4] : language === "en" ? menuEn[4] : menuAr[4]}
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/contact">
              <button
                type="button"
                className="btn btn-outline-primary"
              >
            { language === "fr" ? menuFr[5] : language === "en" ? menuEn[5] : menuAr[5]}
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
        </div>
    );
};

export default NavBar;