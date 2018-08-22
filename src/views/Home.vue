<template>
  <v-container fill-height>
      <div class="home">
        <img class="img" alt="Clangsoul logo" src="../assets/logoClangsoulBlack.png">
        just vibe
      </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
  }
}
</script>
<style scoped>
.img {
    margin: auto;
    width: 100%;
}
</style>
