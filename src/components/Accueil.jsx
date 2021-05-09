import React from "react";
import photo_amine from "../images/photo_amine.png";
import photo_amine2 from "../images/photo_amine.jpg";
import translate from "translate";
translate.engine = "libre";
translate.from = "fr";


const Accueil = (props) => {
    const language = props.data.language;
        const paragraphProfileFr = "Fort de ma passion pour le domaine du développement web et un grand sens de la curiosité, je suis une personne dynamique, rigoureuse, et très investie dans mon travail. je souhaite intégrer une entreprise dynamique, dont le vecteur de réussite et la dimension humaine sont primordiales, mais aussi une entreprise qui saura m'accompagner pour atteindre mon vrai potentiel."
        const paragraphProfileEn = "With my passion for the field of web development and a great sense of curiosity, I am a dynamic, rigorous person, and very invested in my work. I want to integrate a dynamic company, whose vector of success and the human dimension are essential, but also a company which will know how to support me to reach my true potential."
        const nameFr = "STAMBOULI AMINE";
        const nameEn = "STAMBOULI AMINE";
        const profileFr = "Developpeur React js/Node JS";
        const profilrEn = "React js/Node JS developer";
        const choiceLanguage = () => {
            if (language === "fr") {
                return paragraphProfileFr
            }
            else {
                return paragraphProfileEn
            }
        }
        const choiceName = () => {
            if (language === "fr") {
                return nameFr
            }
            else {
                return nameEn
            }
        }
        const choiceProfile = () => {
            if(language === "fr") {
                return profileFr
            } else {
                return profilrEn
            }
        }
        return (
        <div className="accueil">
            <div className="profile_pro">
                <div style={{textAlign: 'center'}} className="nameProfile">
                  <h1 style={{ color: 'black', fontSize: "x-large" }}>{choiceName()}</h1>
                  <h1 className="poste" style={{color: 'peru'}}>{choiceProfile()}</h1>
                </div>
                <img className="profile-picture2" src={photo_amine2} alt="profile_picture" />
                <div className="profile">
                    <div className="profile_paragraphe">
                        <p>
                           { choiceLanguage() }
                       </p>
                    </div>
                    <div style={{ width: "50%", padding: "0%" }}>
                        <img
                            className="profile-picture"
                            style={{ marginBottom: "15%", width: "70%"}}
                            src={photo_amine}
                            alt="profile"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accueil;