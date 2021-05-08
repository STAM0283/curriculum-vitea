import React from 'react';
import check from "../images/check.png";
import sport from "../images/sport.svg";
import game from "../images/game.png";
import travel from "../images/travel.png";
import coding from "../images/coding.svg";
import innovation from "../images/innovation.svg";
import html5 from "../images/html5.png";
import css3 from "../images/css3.png";
import javascript from "../images/javascript.png"; 
import node_js from "../images/node_js.png";
import mysql from "../images/mysql.svg";
import bootstrap from "../images/bootstrap.svg";
import react from "../images/react.svg";

const Competences = (props) => {
    const language = props.data.language;
    return (
        <div className="competences">
            <div style={{ textAlign: "start" }} className = "languages">
                <h2>{language === "fr" ? "LANGUAGES ET PLATEFORMES" : "LANGUAGES AND PLATFORMS"}</h2>
                <h3>HTML5<label htmlFor="file"></label>
                <img src = {html5} alt="icone html5" /></h3>
                <h3>CSS3<label htmlFor="file"></label>
                <img src = {css3} alt="icone css3" /></h3>
                <h3>JAVASCRIPT <label htmlFor="file"></label>
                <img src = {javascript} alt="icone javascript" /></h3>
                <h3>NODE JS <label htmlFor="file"></label>
                <img  style={{width: "10%"}} src = {node_js} alt="icone node js" /></h3>
                <h3>MYSQL <label htmlFor="file"></label>
                    <img src={mysql} alt="icone mysql" /></h3>
                <h2>{language === "fr" ? "FRAMEWORK ET BIBLIOTHÈQUE" : "FRAMEWORK AND LIBRARY"}</h2>
                <h3>BOOTSTRAP <label htmlFor="file"></label>
                <img src={bootstrap} alt="icone bootstrap"/></h3>
                <h3>REACT JS <label htmlFor="file"></label>
                <img src={react} alt="icone react js"/></h3>
                <h3 style={{color:"#006400"}}>EXPRESS JS <label for="file"></label></h3>
                <h3 style={{color:"#8A2BE2"}}>GATSBY JS <label for="file"></label></h3>


            </div>
            <section className = "otherCompetences">
                <div style={{ textAlign: "start" , height: "255px"}}>
                    <h2>{language === "fr" ? "AUTRES COMPETENCES" : "OTHER SKILLS"}</h2>
                    <h3><img src={check} style={{ width: "3%" }} alt=""/> GIT</h3>
                    <h3><img src={check} style={{ width: "3%" }} alt=""/> GITHUB</h3>
                    <h3><img src={check} style={{ width: "3%" }} alt=""/> SCRUM</h3>
                    <h3><img src={check} style={{ width: "3%" }} alt=""/> VSCODE</h3>
                    <h3><img src={check} style={{ width: "3%" }} alt=""/> POSTMAN</h3>


                </div>
                <div style={{ textAlign: "start" }}>
                    <h2>{language === "fr" ? "LANGUES" : "LANGUAGES"}</h2>
                    <h3>{language === "fr" ? "FRANÇAIS" : "FRENCH"} : <span style={{ fontStyle: "oblique", color: "DodgerBlue" }}>{language === "fr" ? "COURANT" : language === "en" ? "FLUENT" : "بطلاقة"}</span></h3>                                  
                    <h3>{language === "fr" ? "ANGLAIS" : "ENGLISH"} : <span style={{ fontStyle: "oblique", color: "DodgerBlue" }}>{language === "fr" ? "INTERMÉDIAIRE" : language === "en" ? "INTERMIDIATE" : "متوسط"}</span></h3>
                    <h3>{language === "fr" ? "ARABE" : "ARABIC"} : <span style={{ fontStyle: "oblique", color: "DodgerBlue" }}>{language === "fr" ? "COURANT" : language === "en" ? "FLUENT" : "بطلاقة"}</span></h3>
                </div>
                <div style={{ textAlign: "start" }}>
                    <h2>{language === "fr" ? "INTERETS" : "INTERESTS"}</h2>
                    <h3><img src={coding} alt="" />{language === "fr" ? "DEVELOPEMENT WEB" : "WEB DEVELOPMENT"}</h3>
                    <h3><img src={innovation} alt=""/>{language === "fr" ? "INNOVATION" : "INNOVATION"}</h3>
                    <h3><img src={sport} alt=""/>{language === "fr" ? "BASKETBALL" : "BASKETBALL"}</h3>
                    <h3><img src={game} alt=""/>{language === "fr" ? "JEUX VIDEOS" : "VIDEO GAMES"}</h3>
                    <h3><img src={travel} alt=""/>{language === "fr" ? "VOYAGER" : "TRAVEL"}</h3>
                </div>
            </section>

        </div>
    );
};

export default Competences;