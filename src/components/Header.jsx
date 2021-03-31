import React from "react";
import NavBar from "./NavBar";

const Header = (props) => {
  const language = props.data.language;
  const setLanguage = props.data.setLanguage;
  return (
    <div className = "header">
      <NavBar data ={{
              language,
              setLanguage
        }} />
    </div>
  );
};

export default Header;
