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
          <v-icon>{{item.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-title v-text="item.text"></v-list-tile-title>
      </v-list-tile>
    </v-list>
    <v-list-tile class="mt-3" @click="">
      <v-list-tile-action>
        <v-icon color="grey darken-1">add_circle_outline</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>Browse Channels</v-list-tile-title>
    </v-list-tile>
    <v-list-tile @click="">
      <v-list-tile-action>
        <v-icon color="grey darken-1">settings</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>Manage Subscriptions</v-list-tile-title>
    </v-list-tile>
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
      }, {
        icon: 'fas fa-search',
        text: 'bla'
      },
    ],
    items2: [{
        icon: 'fas fa-youtube',
        text: 'Joseph',
        link: ''
      },
      {
        icon: 'fas fa-facebook',
        text: 'facebook',
        link: ''
      },
      {
        icon: 'fas fa-soundcloud',
        text: 'Apple',
        link: ''
      },
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
