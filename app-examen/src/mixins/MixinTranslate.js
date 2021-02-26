// Variable comprenant toutes les traductions des libellés du site.
// Chaque objet doit contenir les mêmes propriétés pour que la traduction soit fonctionnelle partout.

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
          // Si la clé de traduction passée en paramètre est introuvable, retourner un string vide.  
          if (!value) return '';

          // Récupérer les données de traduction.
          let data = TRANSLATIONS;

          // Définir la langue de traduction ici.
          let locale = 'fr';

          // S'assurer que le paramètre est de type "String".
          value = value.toString();
          
          // Parcourir l'objet "data" dans la langue de traduction choisie et retrouver la valeur de la clé de traduction.
          if (data[locale][value]) {
              // Retourner la valeur de la clé de traduction.
              return data[locale][value];
          }
          // Si la valeur de la clé de traduction n'existe pas, retourner la clé elle-même.
          else {
              return value;
          }
        }
    }
    
}

