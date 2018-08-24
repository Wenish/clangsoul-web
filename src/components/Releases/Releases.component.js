import { mapState, mapGetters } from 'vuex'
import Release from './Release'


export default {
    components: {
        Release
    },
    created(){
        this.$store.dispatch('GET_RELEASES')
    },
    computed: {
        ...mapGetters(['getReleasesAsArray'])
    }
}
