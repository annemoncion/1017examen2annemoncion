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

    ready: function() {
		// S'assurer que la variable de langue existe à la racine du site,
        // sinon, lui donner la valeur "en" par défaut.
		if (!this.$root.locale)
			this.$root.$set('locale', 'en');
	},

    methods: {
        translate: function(namespace, locale) {

            // Prioriser la définition de la variable de langue si elle est définit à l'instanciation du mixin.
			locale = locale || this.locale || this.$root.locale;

			// Récupérer les données de traduction.
			var data = TRANSLATIONS;

			try {
                // Parcourir l'objet "data" et trouver la valeur de traduction correspondant à la clé de traduction.
				var translation = namespace.split('.').reduce(function(a, b) {
					return typeof a === 'object' ? a[b] : data[a][b];
				})[locale];
			} catch(e) {
                // Si la traduction est introuvable, afficher une erreur dans la console.
				console.warn('Aucune traduction trouvée pour %s en utilisant la langue %s (%s)', namespace, locale, e);
			}
            // Retourner la valeur de la traduction.
			return translation;
		}
    }
    
}

