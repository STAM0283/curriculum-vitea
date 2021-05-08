import React from "react";
import data from '../translate/dataTranslate';
console.log(data.experience1Fr);

const Experience = (props) => {
  const language = props.data.language;
  return (
    <div className="experience">
      <div className="experience1" style={{ transition: "all 1s ease-out" }}>
        <h2>{language === "fr" ? data.experience3Fr : data.experience1En}</h2>
        <p>{language === "fr" ? data.paragraph3Fr : data.paragraph1En}</p>

      </div>
      <div className="experience2" style={{ transition: "all 1s ease-out" }}>
        <h2>{language === "fr" ? data.experience2Fr : data.experience2En}</h2>
        <p>{language === "fr" ? data.paragraph2Fr : data.paragraph2En}</p>

      </div>
      <div className="experience3" style={{ transition: "all 1s ease-out" }}>
        <h2>{language === "fr" ? data.experience1Fr : data.experience3En}</h2>
        <p>{language === "fr" ? data.paragraph1Fr : data.paragraph3En}</p>

      </div>
      <div className="experience4" style={{ transition: "all 1s ease-out" }}>
        <h2>{language === "fr" ? data.experience4Fr : data.experience4En}</h2>
        <p>{language === "fr" ? data.paragraph4Fr : data.paragraph4En}</p>
      </div>
    </div>
  );
};

export default Experience;
