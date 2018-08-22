<template>
<v-navigation-drawer v-model="isNavbarOpen" fixed clipped app>
  <v-list dense>
    <v-list-tile v-for="item in items" :key="item.text" @click="">
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          {{ item.text }}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-subheader class="mt-3">Follow me</v-subheader>
    <v-list>
      <v-list-tile v-for="item in items2" :key="item.text" avatar @click="">
        <v-list-tile-action>
          <v-icon large :color="item.color">{{item.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-title v-text="item.text"></v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [{
        icon: 'library_music',
        text: 'Music'
      },
      {
        icon: 'event',
        text: 'Events'
      }
    ],
    items2: [{
        icon: 'mdi-youtube',
        color: 'red darken-2',
        text: 'Youtube',
        link: ''
      },
      {
        icon: 'mdi-facebook',
        color: 'blue darken-2',
        text: 'Facebook',
        link: ''
      },
      {
        icon: 'mdi-soundcloud',
        color: 'orange darken-2',
        text: 'Soundcloud',
        link: ''
      },
      {
        icon: 'mdi-apple',
        color: 'grey darken-1',
        text: 'Apple',
        link: ''
      },
      {
        icon: 'mdi-spotify',
        color: 'teal darken-2',
        text: 'Spotify',
        link: ''
      }
    ]
  }),
  props: {
    source: String
  },
  computed: {
    isNavbarOpen: {
      get() {
        return this.$store.state.navbar.isOpen
      },
      set(value) {
        this.$store.commit('SET_NAVBAR', value)
      }
    }
  }
}
</script>
