<template>
    <v-app dark>
        <Toolbar/>
        <Content/>
    </v-app>
</template>

<script>
// @ is an alias to /src
import Toolbar from '@/components/Toolbar.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'app',
  components: {
    Toolbar,
    Content
  }
}
</script>

<style lang="css">
.application.theme--dark {
    background: #001011;
}

.flex:hover {
    filter: drop-shadow(0 0 30px #333);
    transition-duration: 0.2s;
    cursor: default;
}


.application .theme--dark.v-toolbar, .theme--dark .v-toolbar {
    background-color: #080808;
    filter: drop-shadow(0 0 20px #333); 
}

.application .theme--dark.v-card, .theme--dark .v-card {
    background-color: #192B35;
}
</style>