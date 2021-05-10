import React, {useState } from "react";
import axios from "axios";


const Contact = (props) => {
    const language = props.data.language;
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [object, setObject] = useState('');
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState("");
    const [displayParagraph, setDisplayParagraph] = useState('none');
    const [displayParagraph2, setDisplayParagraph2] = useState('none');
    const messageSentFr = "votre message a été envoyé avec succès";
    const messageSentEn = "Your message has been sent successfully";
    const messageCompeteFieldFr = "Veuillez remplir tous les champs";
    const messageCompeteFieldEn = "please complete all fields"

    const handleName = (event) => {
        setName(event.target.value);
      };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleObject = (e) => {
    setObject(e.target.value);
  };
    const handleMessage = (event) => {
        setMessage(event.target.value);
    }
    const reinitialisation = () => {
        setName('');
        setEmail('');
        setObject('');
        setMessage('');
      };
    const formSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            object,
            message,
          };
          if (name !== '' || email !== '' || object !== '' || message !== '') {
            axios.post("https://cv-contact.herokuapp.com/send-email", data)
            .then(response => {
                console.log("my data", response);
                setSent(response.data);
                setName("");
                setEmail("");
                setObject("");
                setMessage("");
                setDisplayParagraph('block');
                setDisplayParagraph2('none');
                setTimeout(() => {
                setDisplayParagraph('none');
                }, 5000);

            }).catch(() => {
                console.log("message not sent")
            })
          }
          else {
            setDisplayParagraph2('block');
          }

    }

    return (
        <div className="contener">
            <h3>{language === "fr" ? "FORMULAIRE DE CONTACT" : "Contact form"}</h3>
            <form onSubmit={formSubmit} className="formContact">
                <div>
                    <label htmlFor="name">{language === "fr" ? "Nom" : "Name"}</label>
                    <br />
                    <input value={name} className="name" type="text" name="name" placeholder={language === "fr" ? "Votre nom" : "Your name"} onChange={handleName} />
                </div>
                <div>
                    <label htmlFor="email">{language === "fr" ? "E-mail" : "E-mail"}</label>
                    <br />
                    <input value={email} className="email" type="email" name="email" placeholder={language === "fr" ? "Votre email" : "Your email"} onChange={handleEmail} />
                </div>
                <div>
                    <label htmlFor="object">{language === "fr" ? "Objet" : language === "en" ? "Object" : "الموضوع"}</label>
                    <br />
                    <input value={object} className="object" type="text" name="object" placeholder={language === "fr" ? "Objet" : "Object"} onChange={handleObject} />
                </div>
                <div>
                    <label htmlFor="message">{language === "fr" ? "Message" : "Message"}</label>
                    <br />
                    <textarea value={message} cols="40" rows="6" className="message" type="text" name="message" placeholder={language === "fr" ? "Votre message" : "your message"} onChange={handleMessage} />
                </div>
                <div className={sent ? "msg msgAppear" : "msg"}>{language === "fr" ? "Le message a été envoyé" : "Message has been sent"}</div>
                <p style={{
          display: `${displayParagraph}`, color: 'green', fontWeight: 'bold', marginBottom: '10px', width: '60%', marginLeft: '20%',
        }}
        >
          {language === "fr" ? messageSentFr : messageSentEn}
        </p>
        <p style={{
          display: `${displayParagraph2}`, color: 'red', fontWeight: 'bold', marginBottom: '10px', width: '60%', marginLeft: '20%',
        }}
        >
          {language === "fr" ? messageCompeteFieldFr : messageCompeteFieldEn}
        </p>
                <div className="btn">
                    <button type="submit">{language === "fr" ? "Envoyer" : "Send"}</button>
                    <button type="button" id="btn2" onClick={reinitialisation}>{language === "fr" ? "Réinitialiser" : "Reset"}</button>
                </div>
            </form>

        </div>
    )
}


export default Contact; 