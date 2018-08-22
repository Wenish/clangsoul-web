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
