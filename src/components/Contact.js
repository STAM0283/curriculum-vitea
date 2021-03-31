import React, {useState } from "react";
import axios from "axios";


const Contact = (props) => {
    const language = props.data.language;
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [object, setObject] = useState('');
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState("");

    const handleName = (event) => {
        setName(event.target.value);
      };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleObject = (e) => {
    setObject(e.target.value);
  };
    const handleMessage = (e) => {
        setMessage(e.target.value);
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
        axios.post("https://sendmail-nodemailer.herokuapp.com/send-email", data)
            .then(response => {
                console.log("my data", response);
                setSent(response.data);
                setName("");
                setEmail("");
                setObject("");
                setMessage("");
                alert("Votre message a été envoyé avec succé !")

            }).catch(() => {
                console.log("message not sent")
            })

    }

    return (
        <div className="contener">
            <h3>{language === "fr" ? "FORMULAIRE DE CONTACT" : language === "en" ? "Contact form" : "نموذج الاتصال"}</h3>
            <form onSubmit={formSubmit} className="formContact">
                <div>
                    <label htmlFor="name">{language === "fr" ? "Nom" : language === "en" ? "Name" : "اللقب"}</label>
                    <br />
                    <input value={name} className="name" type="text" name="name" placeholder={language === "fr" ? "Votre nom" : language === "en" ? "Your name" : "اسم العائلة"} onChange={handleName} />
                </div>
                <div>
                    <label htmlFor="email">{language === "fr" ? "E-mail" : language === "en" ? "E-mail" : "بريد إلكتروني"}</label>
                    <br />
                    <input value={email} className="email" type="email" name="email" placeholder={language === "fr" ? "Votre email" : language === "en" ? "Your email" : "بريدك الإلكتروني"} onChange={handleEmail} />
                </div>
                <div>
                    <label htmlFor="object">{language === "fr" ? "Objet" : language === "en" ? "Object" : "الموضوع"}</label>
                    <br />
                    <input value={object} className="object" type="text" name="object" placeholder={language === "fr" ? "Objet" : language === "en" ? "Object" : "الموضوع"} onChange={handleObject} />
                </div>
                <div>
                    <label htmlFor="message">{language === "fr" ? "Message" : language === "en" ? "Message" : "الرسالة"}</label>
                    <br />
                    <textarea value={message} cols="40" rows="6" className="message" type="text" name="message" placeholder={language === "fr" ? "Votre message" : language === "en" ? "your message" : "رسالتك"} onChange={handleMessage} />
                </div>
                <div className={sent ? "msg msgAppear" : "msg"}>{language === "fr" ? "Le message a été envoyé" : language === "en" ? "Message has been sent" : "تم ارسال الرسالة"}</div>
                <div className="btn">
                    <button type="submit">{language === "fr" ? "Envoyer" : language === "en" ? "Send" : "إرسال"}</button>
                    <button type="button" id="btn2" onClick={reinitialisation}>{language === "fr" ? "Réinitialiser" : language === "en" ? "Reset" : "إعادة ضبط"}</button>
                </div>
            </form>

        </div>
    )
}


export default Contact; 