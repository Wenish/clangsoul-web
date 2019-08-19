<template fill-height>
  <v-container>
      <StreamLinks/>
      <Releases/>
      <div>just vibe</div>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Releases from '@/components/Releases'
import StreamLinks from '@/components/StreamLinks'

export default {
  name: 'home',
  components: {
    Releases,
    StreamLinks
  }
}
</script>
