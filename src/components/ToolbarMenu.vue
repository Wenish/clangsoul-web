<template>
<v-menu bottom left>
    <v-btn slot="activator" dark icon>
        <v-icon>more_vert</v-icon>
    </v-btn>
    <v-list>
        <v-list-tile v-for="item in items" :key="item.text" avatar :href="item.link" target="_blank">
          <v-list-tile-action>
            <v-icon large :color="item.color">{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="item.text"></v-list-tile-title>
        </v-list-tile>
    </v-list>
</v-menu>
</template>

<script>
export default {
    name: 'ToolbarMenu',
    data: () => ({
        items: [{
            icon: 'mdi-youtube-play',
            color: 'red darken-2',
            text: 'Youtube',
            link: 'https://www.youtube.com/clangsoul'
          },
          {
            icon: 'mdi-spotify',
            color: 'teal darken-2',
            text: 'Spotify',
            link: 'https://open.spotify.com/artist/2UMPXGNnurwP45ae7lPdAG'
          },
          {
            icon: 'mdi-apple',
            color: 'grey darken-1',
            text: 'Apple',
            link: 'https://itunes.apple.com/us/artist/clangsoul/1394721108'
          },
          {
            icon: 'mdi-soundcloud',
            color: 'orange darken-2',
            text: 'Soundcloud',
            link: 'https://soundcloud.com/clangsoul'
          },
          {
            icon: 'mdi-facebook',
            color: 'blue darken-2',
            text: 'Facebook',
            link: 'https://www.facebook.com/clangsoul'
          }
        ]
    })
}
</script>
