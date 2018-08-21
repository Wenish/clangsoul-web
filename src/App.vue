<template>
    <v-app>
        <Navbar/>
        <Toolbar/>
        <Content/>
    </v-app>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Toolbar from '@/components/Toolbar.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Toolbar,
    Content
  }
}
</script>
