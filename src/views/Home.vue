<template fill-height>
  <v-container>
      <Releases/>
      <div>just vibe</div>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Releases from '@/components/Releases'

export default {
  name: 'home',
  components: {
    Releases
  }
}
</script>
