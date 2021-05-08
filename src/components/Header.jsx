import React from "react";
import NavBar from "./NavBar";
import MenuBurger from './MenuBurger'

const Header = (props) => {
  const language = props.data.language;
  const setLanguage = props.data.setLanguage;
  return (
    <div className = "header">
      <NavBar data ={{
              language,
              setLanguage
        }} />
        <MenuBurger />
    </div>
  );
};

export default Header;
