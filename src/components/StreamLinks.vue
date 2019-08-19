<template>
<div class="container">
    <div v-for="item in items" :key="item.text">
        <v-btn fab :href="item.link" target="_blank">
             <v-icon large :color="item.color">{{item.icon}}</v-icon>
        </v-btn>
    </div>
</div>
</template>

<script>
export default {
    name: 'StreamLinks',
    data: () => ({
        items: [
          {
            icon: 'mdi-instagram',
            color: 'white darken-2',
            text: 'Instagram',
            link: 'https://www.instagram.com/johnvolo/'
          },
          {
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
          }
          /*
          {
            icon: 'mdi-facebook',
            color: 'blue darken-2',
            text: 'Facebook',
            link: 'https://www.facebook.com/clangsoul'
          }
          */
        ]
    })
}
</script>



<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>