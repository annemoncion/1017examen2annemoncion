<template>
  <div class="home">
    <h1>
        Bonjour
        <span v-if="showProfile">Anne Moncion </span>
        !
    </h1>
    <p v-if="!showProfile">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at elementum turpis, id pharetra arcu. Aenean egestas faucibus felis, suscipit tempus felis condimentum consequat. Sed vel dui turpis. Nam vitae dui vitae mi lacinia congue. Donec et magna nec odio iaculis euismod. Sed sit amet pharetra ante. Suspendisse tincidunt pulvinar ligula, pellentesque porta odio sodales sed. Donec iaculis nibh nec lectus pellentesque, vel euismod metus lobortis. Sed tincidunt tortor eget turpis cursus luctus. Mauris vestibulum rhoncus risus, id vulputate orci rutrum nec. Sed eleifend mi sed felis congue pharetra. Integer volutpat dapibus elit, vel feugiat mauris euismod a. Duis eget arcu sed ligula aliquam vestibulum.</p>
    <div v-if="showProfile" class="profile">
        <p><strong>Nom:</strong> Anne Moncion</p>
        <p><strong>Âge:</strong> 27 ans</p>
        <p><strong>Profession:</strong> Développeuse Front-end</p>
        <p><strong>Passe-temps:</strong> Couture</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accueil',
  components: {
      Projet,
      Contact,
  },
  data() {
      return {
          showProfile: false,
      }
  },
  created() {
    let loggedIn = false;
  
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
    padding: 4rem 1rem;
}

p {
    margin: 0 auto;
    max-width: 600px;
}

</style>