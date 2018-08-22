<template>
<v-toolbar dense fixed clipped-left app>
  <v-toolbar-side-icon @click.stop="TOGGLE_NAVBAR"></v-toolbar-side-icon>
  <!--<v-icon class="mx-3">fab fa-youtube</v-icon>-->
  <v-toolbar-title class="mr-5 align-center">
    <span class="title">Clangsoul</span>
  </v-toolbar-title>
</v-toolbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['TOGGLE_NAVBAR'])
  }
}
</script>
