<template>
  <div class="profil">
    <h1>Mon profil</h1>
    <div class="infos">
        <p><strong>Nom:</strong> Anne Moncion</p>
        <p><strong>Âge:</strong> 27 ans</p>
        <p><strong>Profession:</strong> Développeuse front-end</p>
        <p><strong>Passions:</strong> La danse swing, la couture, la guitare</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>

.profil {
    padding: 2rem;
    min-height: 60vh;
    max-width: 1200px;
    margin: 0 auto;
}

p {
    margin: 0 auto;
    max-width: 600px;
}

</style>