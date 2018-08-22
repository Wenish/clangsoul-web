<template>
<v-toolbar dense fixed clipped-left app>
    <!--<v-icon class="mx-3">fab fa-youtube</v-icon>-->
    <img class="img" alt="Clangsoul logo" src="../assets/logoClangsoulWhite.png">
    <v-toolbar-title class="mr-5 align-center">
        <span class="title">Clangsoul</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <ToolbarMenu/>
</v-toolbar>
</template>

<script>
import {
    mapState,
    mapMutations
} from 'vuex'
import ToolbarMenu from '@/components/ToolbarMenu'

export default {
    components: {
        ToolbarMenu
    }
}
</script>

<style scoped>
.img {
    height: 30px;
}
</style>
