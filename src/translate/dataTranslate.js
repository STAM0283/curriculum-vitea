import React from 'react';
const dataFr = {
    experience1Fr : "Développeur React JS et Node JS ( En apprentissage) Wild Code School : Mai 2020 à Déçembre 2020",
    experience2Fr : "Gérant d'Entreprise Commerce de Détail et Restauration Collective.TOP ALIM : Avril 2014 à Mars 2019",
    experience3Fr : "Passage de titre Développeur Web et Web mobile (Bac + 2) : 04/01/2021 - 28/04/2021</h2>",
    experience4Fr : "Réceptionniste-équipier polyvalent, SARL EVE : Mai 2009 à Juin 2012",
    experience1En : "React JS and Node JS Developer (Learning) Wild Code School: May 2020 to December 2020",
    experience2En : "Business Manager Retail Trade and Collective Catering TOP ALIM: April 2014 to March 2019",
    experience3En : "Retail Auto-Entrepreneur Manager: June 2012 to November 2014",
    experience4En : "Versatile receptionist-team member, SARL EVE: May 2009 to June 2012",
    experience1Ar : "Node JS Developer (التعلم) مدرسة Wild Code: من مايو 2020 إلى ديسمبر 2020",
    experience2Ar : "مدير أعمال تجارة التجزئة والتموين الجماعي TOP ALIM: من أبريل 2014 إلى مارس 2019",
    experience3Ar : "مدير رائد أعمال السيارات بالتجزئة: يونيو 2012 إلى نوفمبر 2014",
    experience4Ar : "عضو فريق الاستقبال متعدد الاستخدامات ، SARL EVE: مايو 2009 إلى يونيو 2012",
    paragraph1Fr  : <p> 1) Refonte complète du site web du Festival international de théâtre - Sens Interdits ( avec <strong>Gatsby JS</strong>,
     <strong>Node Js</strong>, <strong>Strapi</strong> et <strong>Mysql</strong>).<br/> 
     2) Création d'un Quiz multijoueur en ligne ( avec <strong>React Js</strong>). <br/> 
     3) Participation a un hackathon pour relever les défis de l’e-santé et la télémédecine, en partenariat avec Doctolib & Dataiku, d'une durée de 48H ( en juin 2020 ).<br/> 4) Création d'un site vitrine en équipe ( en HTML5, CSS3 et JavaScript )."</p>,
    paragraph2Fr  : <p>Achat et vente de Produits Alimentaires divers à Lyon, les principales missions que j'ai mené ont consisté à :<br/> 
    1) la Gestion comptable et administrative;<br/>
    2) Gérer les moyens budgétaires et matériels de la structure ou planifier les opérations financières;<br/> 
    3) Accueillir, conseiller et encaisser la clientèle; Commander la marchandise à mettre en vente;<br/> 
    4) Veiller au réapprovisionnement des stocks.</p>,
    paragraph3Fr  : <p>La création d'un site E-commerce ( ClassGo ) de A à Z, en React JS (Hooks), Node JS, Express JS et Mysql :<br/>
    1) La création du logo du site et les maquettes graphiques en utilisant Figma.<br/>
    2) La modélisation et la création de la base de données du projet sur Mysql workbench et Mysql CLI.<br/>
    3) La création de l'API en Node JS et Express JS.<br/>
    4) La création du Front-end avec un back-office en React JS ( Hooks et JSX ) et CSS3.</p>,
    paragraph4Fr  : <p>Blanchisserie, laverie, location de linge, nettoyage, pressing et teinturerie, et les missions principales étaient :<br/>
    1) Accueillir et renseigner les Clients;<br/>
    2) Standard Téléphonique, et enregistrement des produits;<br/>
    3) Encaissement et organisation du lieu du travail<br/>
    4) La comptabilité Journalière</p>,
    paragraph1En  : "Complete redesign of the International Theater Festival website - Sens Interdits (with Gatsby JS, Node Js, Strapi and Mysql). - Creation of an online multiplayer quiz (with React Js). - Participation in a hackathon to meet the challenges e-health and telemedicine, in partnership with Doctolib & Dataiku, lasting 48 hours (in June 2020). - Creation of a team showcase site (in HTML5, CSS3 and JavaScript).",
    paragraph2En  : "Purchase and sale of various Food Products in Lyon: The main missions that I led consisted of: Accounting and administrative management; Manage the structure's budgetary and material resources or plan operations financial; Welcome, advise and collect customers; Order the goods to put on sale; Ensure the replenishment of stocks.",
    paragraph3En  : "Sale of various food products, prepare the goods and pack them in checkouts, ensure the management of its stocks and their replenishment. In case of crowds, we have to organize ourselves to serve all customers as quickly as possible.",
    paragraph4En  : "Laundry, laundry, linen rental, cleaning, dry cleaning and dry cleaning, and the main tasks were: - Welcome clients; - Information; - Switchboard; - Product registration; - Collection; - Organization of the workplace; - Daily Accounting;",
    paragraph1Ar  : "إعادة تصميم كاملة لمهرجان المسرح الدولي - موقع Sens Interdits (مع Gatsby JS و Node Js و Strapi و ميسكل).- إنشاء مسابقة متعددة اللاعبين عبر الإنترنت (باستخدام React Js). - المشاركة في هاكاثون لمواجهة التحديات الصحة الإلكترونية والتطبيب عن بعد ، بالشراكة مع Doctolib و Dataiku ،لمدة 48 ساعة (في يونيو 2020) - إنشاء موقع عرض فريق (في HTML5 و CSS3 و JavaScript).",
    paragraph2Ar  : "شراء وبيع المنتجات الغذائية المختلفة في ليون: المهمات الرئيسية التي قادتها تتألف من: المحاسبة والتنظيم الإداري.إدارة ميزانية الهيكل والموارد المادية أو تخطيط العمليات         الأمور المالية؛ الترحيب وتقديم المشورة وجمع العملاء ؛ اطلب البضائع للبيع ضمان تجديد المخزونات.", 
    paragraph3Ar  : "بيع المنتجات الغذائية المختلفة وتجهيز البضائع وتعبئتهاالخروج ، والتأكد من إدارة مخزونها وتجديدها. في حالة الازدحام ،علينا أن ننظم أنفسنا لخدمة جميع العملاء في أسرع وقت ممكن.",
    paragraph4Ar  : "الغسيل والغسيل وتأجير البياضات والتنظيف والتنظيف الجاف والتنظيف الجاف وكانت المهام الرئيسية هي:         - استقبال الزبائن؛         - معلومة؛         - لوحة التبديل.         - تسجيل المنتج؛         - مجموعة؛         - تنظيم مكان العمل. - المحاسبة اليومية",
 }
 export default dataFr;