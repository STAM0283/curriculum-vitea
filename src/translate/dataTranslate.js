import React from 'react';
const dataFr = {
    experience1Fr : "Développeur React JS et Node JS ( En apprentissage) Wild Code School : Mai 2020 à Déçembre 2020",
    experience2Fr : "Gérant d'Entreprise Commerce de Détail et Restauration Collective.TOP ALIM : Avril 2014 à Mars 2019",
    experience3Fr : "Passage de titre Développeur Web et Web mobile (Bac + 2) : 04/01/2021 - 28/04/2021",
    experience4Fr : "Réceptionniste-équipier polyvalent, SARL EVE : Mai 2009 à Juin 2012",
    experience1En : "React JS and Node JS Developer (Learning) Wild Code School: May 2020 to December 2020",
    experience2En : "Business Manager Retail Trade and Collective Catering TOP ALIM: April 2014 to March 2019",
    experience3En : "Passage of title Web Developer and Mobile Web (Bac + 2): 04/01/2021 - 28/04/2021",
    experience4En : "Versatile receptionist-team member, SARL EVE: May 2009 to June 2012",
    paragraph1Fr  : <p> <strong style={{color: 'red'}}>1)</strong> Refonte complète du site web du Festival international de théâtre - Sens Interdits ( avec <strong>Gatsby JS</strong>,
     <strong>Node Js</strong>, <strong>Strapi</strong> et <strong>Mysql</strong>).<br/> 
     <strong style={{color: 'red'}}>2)</strong> Création d'un Quiz multijoueur en ligne ( avec <strong>React Js</strong>). <br/> 
     <strong style={{color: 'red'}}>3)</strong> Participation a un <strong>hackathon</strong> pour relever les défis 
     de l’e-santé et la télémédecine, en partenariat avec Doctolib & Dataiku, d'une durée de 48H ( en juin 2020 ).<br/> 
     <strong style={{color: 'red'}}>4)</strong> Création d'un site vitrine en équipe ( en <strong>HTML5</strong>, <strong>CSS3</strong> et <strong>JavaScript</strong> )
     </p>,
    paragraph2Fr  : <p>Achat et vente de Produits Alimentaires divers à Lyon, les principales missions que j'ai mené ont consisté à :<br/><br/> 
    <strong style={{color: 'red'}}>1)</strong> la Gestion comptable et administrative;<br/>
    <strong style={{color: 'red'}}>2)</strong> Gérer les moyens budgétaires et matériels de la structure ou planifier les opérations financières;<br/> 
    <strong style={{color: 'red'}}>3)</strong> Accueillir, conseiller et encaisser la clientèle; Commander la marchandise à mettre en vente;<br/> 
    <strong style={{color: 'red'}}>4)</strong> Veiller au réapprovisionnement des stocks.</p>,
    paragraph3Fr  : <p>La création d'un site E-commerce ( <strong>ClassGo</strong> ) de A à Z, en <strong>React JS (Hooks)</strong>, <strong>Node JS</strong>,
     <strong>Express JS</strong> et <strong>Mysql</strong> :<br/><br/>
    <strong style={{color: 'red'}}>1)</strong> La création du logo du site et les maquettes graphiques en utilisant <strong>Figma</strong>.<br/>
    <strong style={{color: 'red'}}>2)</strong> La modélisation et la création de la base de données du projet sur Mysql workbench et Mysql CLI.<br/>
    <strong style={{color: 'red'}}>3)</strong> La création de l'API en Node JS et Express JS.<br/>
    <strong style={{color: 'red'}}>4)</strong> La création du Front-end avec un back-office en React JS ( Hooks et JSX ) et CSS3.</p>,
    paragraph4Fr  : <p>Blanchisserie, laverie, location de linge, nettoyage, pressing et teinturerie, et les missions principales étaient :<br/><br/>
    <strong style={{color: 'red'}}>1)</strong> Accueillir et renseigner les Clients;<br/>
    <strong style={{color: 'red'}}>2)</strong> Standard Téléphonique, et enregistrement des produits;<br/>
    <strong style={{color: 'red'}}>3)</strong> Encaissement et organisation du lieu du travail<br/>
    <strong style={{color: 'red'}}>4)</strong>La comptabilité Journalière</p>,
    paragraph1En  : <p> <strong style = {{color: 'red'}}> 1) </strong> Complete redesign of the International Theater Festival - Sens Interdits website (with <strong> Gatsby JS </strong>,
        <strong> Node Js </strong>, <strong> Strapi </strong> and <strong> Mysql </strong>). <br/>
        <strong style = {{color: 'red'}}> 2) </strong> Creation of an online multiplayer quiz (with <strong> React Js </strong>). <br/>
        <strong style = {{color: 'red'}}> 3) </strong> Participation in a <strong> hackathon </strong> to meet the challenges
        e-health and telemedicine, in partnership with Doctolib & Dataiku, lasting 48 hours (in June 2020). <br/>
        <strong style = {{color: 'red'}}> 4) </strong> Creation of a team showcase site (in <strong> HTML5 </strong>, <strong> CSS3 </strong> and <strong > JavaScript </strong>)
        </p>,
    paragraph2En  : <p> Purchase and sale of various Food Products in Lyon, the main missions I carried out consisted of: <br/> <br/>
    <strong style = {{color: 'red'}}> 1) </strong> Accounting and administrative management; <br/>
    <strong style = {{color: 'red'}}> 2) </strong> Manage the budgetary and material resources of the structure or plan financial operations; <br/>
    <strong style = {{color: 'red'}}> 3) </strong> Welcome, advise and collect customers; Order the merchandise to put on sale; <br/>
    <strong style = {{color: 'red'}}> 4) </strong> Ensure stock replenishment. </p>,
    paragraph3En  : <p> The creation of an E-commerce site (<strong> ClassGo </strong>) from A to Z, in <strong> React JS (Hooks) </strong>, <strong> Node JS </strong> ,
    <strong> Express JS </strong> and <strong> Mysql </strong>: <br/> <br/>
   <strong style = {{color: 'red'}}> 1) </strong> The creation of the website logo and graphic models using <strong> Figma </strong>. <br/>
   <strong style = {{color: 'red'}}> 2) </strong> Modeling and creation of the project database on Mysql workbench and Mysql CLI. <br/>
   <strong style = {{color: 'red'}}> 3) </strong> The creation of the API in Node JS and Express JS. <br/>
   <strong style = {{color: 'red'}}> 4) </strong> The creation of the Front-end with a back-office in React JS (Hooks and JSX) and CSS3. </p>,
    paragraph4En  : <p> Laundry, laundry, linen rental, cleaning, dry cleaning and dry cleaning, and the main missions were: <br/> <br/>
    <strong style = {{color: 'red'}}> 1) </strong> Welcome and inform Customers; <br/>
    <strong style = {{color: 'red'}}> 2) </strong> Telephone switchboard, and product registration; <br/>
    <strong style = {{color: 'red'}}> 3) </strong> Collection and organization of the workplace <br/>
    <strong style = {{color: 'red'}}> 4) </strong> Daily accounting </p>,
}
 export default dataFr;