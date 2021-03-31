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
        const paragraphProfileAr = "مع شغفي بمجال تطوير الويب وشعور كبير بالفضول ، فأنا شخص ديناميكي وصارم ومستثمر للغاية في عملي. أرغب في الانضمام إلى شركة ديناميكية ، والتي يعتبر نجاحها والبعد الإنساني أمرًا أساسيًا ، ولكن أيضًا شركة ستعرف كيف تدعمني للوصول إلى إمكاناتي الحقيقية."
        const nameFr = "STAMBOULI AMINE";
        const nameEn = "STAMBOULI AMINE";
        const nameAr = "امين اسطامبولي";
        const profileFr = "developpeur React js/Node JS";
        const profilrEn = "React js/Node JS developer";
        const choiceLanguage = () => {
            if (language === "fr") {
                return paragraphProfileFr
            }
            else if (language === "en") {
                return paragraphProfileEn
            }
            else {
                return paragraphProfileAr
            }
        }
        const choiceName = () => {
            if (language === "fr") {
                return nameFr
            }
            else if (language === "en") {
                return nameEn
            }
            else {
                return nameAr
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

                <h1 style={{ color: "coral", fontSize: "xx-large", transition: "all 1s ease-out" }}>{choiceName()}</h1>
                <h1 className="poste" style={{ transition: "all 3s ease-out" }}>{choiceProfile()}</h1>
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
                            style={{ marginBottom: "15%", width: "85%", transition: "all 3s ease-out" }}
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