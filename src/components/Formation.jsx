import React from 'react';
import data from "../translate/dataTranslate2";

const Formation = (props) => {
    const language = props.data.language;
    return (
        <div className="formation">
            <div>
                <h2>{language === "fr" ? data.experience1Fr : data.experience1En}</h2>
                <p>{language === "fr" ? data.paragraph1Fr : data.paragraph1En}</p>
            </div>
            <div>
                <h2>{language === "fr" ? data.experience2Fr : data.experience2En}</h2>
                <p>{language === "fr" ? data.paragraph2Fr : data.paragraph2En}</p>
            </div>
            <div>
                <h2>{language === "fr" ? data.experience3Fr : data.experience3En}</h2>
                <p>{language === "fr" ? data.paragraph2Fr : data.paragraph3En}</p>
            </div>
            <div>
                <h2>{language === "fr" ? data.experience4Fr : data.experience4En}</h2>
                <p>{language === "fr" ? data.paragraph4Fr : data.paragraph4En}</p>
            </div>
        </div>

    );
};

export default Formation;