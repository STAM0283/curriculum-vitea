import React from 'react';
import data from "../translate/dataTranslate2";

const Formation = (props) => {
    const language = props.data.language;
    return (
        <div className="formation">
            <div>
                <h2>{language === "fr" ? data.experience1Fr : language === "en" ? data.experience1En : data.experience1Ar}</h2>
                <p>{language === "fr" ? data.paragraph1Fr : language === "en" ? data.paragraph1En : data.paragraph1Ar}</p>
            </div>
            <div>
                <h2>{language === "fr" ? data.experience2Fr : language === "en" ? data.experience2En : data.experience2Ar}</h2>
                <p>{language === "fr" ? data.paragraph2Fr : language === "en" ? data.paragraph2En : data.paragraph2Ar}</p>
            </div>
            <div>
                <h2>{language === "fr" ? data.experience3Fr : language === "en" ? data.experience3En : data.experience3Ar}</h2>
                <p>{language === "fr" ? data.paragraph2Fr : language === "en" ? data.paragraph3En : data.paragraph3Ar}</p>
            </div>
            <div>
                <h2>{language === "fr" ? data.experience4Fr : language === "en" ? data.experience4En : data.experience4Ar}</h2>
                <p>{language === "fr" ? data.paragraph4Fr : language === "en" ? data.paragraph4En : data.paragraph4Ar}</p>
            </div>
        </div>

    );
};

export default Formation;