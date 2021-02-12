const TRANSLATIONS = {
    en: {
        greetings: "Hi",

        homePage: "Home",
        projects: "Projects",
        contact: "Contact",

        contactMe: "Join us",
        firstName: "Firstname",
        lastName: "Lastname",
        name: "Name",
        email: "Email",
        categories: "Categories",
        technicalQuestion: "Technical question",
        soumission: "Submission request",
        generalInfo: "General information",

        age: "Age",
        profession: "Profession",
        hobbies: "Hobbies",

        myProjects: "My projects"
    },
    fr: {
        greetings: "Bonjour",

        homePage: "Accueil",
        projects: "Projets",
        contact: "Contact",

        contactMe: "Contactez-moi",
        firstName: "Prénom",
        lastName: "Nom",
        name: "Nom",
        email: "Courriel",
        categories: "Catégories",
        technicalQuestion: "Question technique",
        soumission: "Demande de soumission",
        generalInfo: "Informations générales",

        age: "Âge",
        profession: "Profession",
        hobbies: "Passe-temps",

        myProjects: "Mes projets"
    }
}

export const MixinTranslate = {

    filters: {
        translate: function (value) {
          if (!value) return '';
          let data = TRANSLATIONS;
          // Définir la langue de traduction ici.
          let locale = 'fr';
          value = value.toString();
          
          if (data[locale][value]) {
              return data[locale][value];
          }
          else {
              return value;
          }
        }
    }
    
}

