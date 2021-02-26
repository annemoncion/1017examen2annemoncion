<template>
  <div class="home">
    <h1>
        {{ 'greetings' | translate }}
        <span v-if="showProfile">Anne Moncion </span>
        !
    </h1>
    <p v-if="!showProfile">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at elementum turpis, id pharetra arcu. Aenean egestas faucibus felis, suscipit tempus felis condimentum consequat. Sed vel dui turpis. Nam vitae dui vitae mi lacinia congue. Donec et magna nec odio iaculis euismod. Sed sit amet pharetra ante. Suspendisse tincidunt pulvinar ligula, pellentesque porta odio sodales sed. Donec iaculis nibh nec lectus pellentesque, vel euismod metus lobortis. Sed tincidunt tortor eget turpis cursus luctus. Mauris vestibulum rhoncus risus, id vulputate orci rutrum nec. Sed eleifend mi sed felis congue pharetra. Integer volutpat dapibus elit, vel feugiat mauris euismod a. Duis eget arcu sed ligula aliquam vestibulum.</p>
    <div v-if="showProfile" class="profile">
        <p><strong>{{ 'name' | translate }}:</strong> Anne Moncion</p>
        <p><strong>{{ 'age' | translate }}:</strong> 27 ans</p>
        <p><strong>{{ 'profession' | translate }}:</strong> Développeuse front-end</p>
        <p><strong>{{ 'hobbies' | translate }}:</strong> Couture</p>
    </div>
  </div>
</template>

<script>
import { MixinTranslate } from "@/mixins/MixinTranslate.js"

export default {
    // Comme définit présentement, le filtre de traduction doit être importé dans chaque composant qui l'utilise. Ce serait un comportement à revoir.
    mixins: [MixinTranslate],
    name: 'Accueil',
    data() {
        return {
            showProfile: true,
        }
    },
    created() {
        // Coder en dur le booléen qui statut de l'état de l'utilisateur: il peut être connecté ou non.
        let loggedIn = false;
    
        // Si l'utilisateur est connecté, afficher son profil.
        if (loggedIn) {
            this.showProfile = true;
            console.log(this.showProfile);
        }
    }
}
</script>

<style scoped>

.home {
    padding: 2rem;
    min-height: 60vh;
    max-width: 1200px;
    margin: 0 auto;
}

.profile {
    background-color: palegreen;
    padding: 4rem 2rem;
}

p {
    margin: 0 auto 1rem;
    text-align: left;
}

</style>