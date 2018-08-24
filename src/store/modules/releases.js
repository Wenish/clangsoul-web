import api from '@/api/releases'
import * as actionTypes from '../actionTypes'
import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'

const state = {
    releases: {}
}

const getters = {
    [getterNames.getReleasesAsArray]: (state, getters) => {
        var arr = [];
        Object.entries(state.releases).forEach(([key, val]) => {
            val.key = key
            arr.push(val)
        });
        return arr
    }
}

const actions = {
    async [actionTypes.GET_RELEASES]({
        commit,
        state
    }) {
        var releases = await api.getReleases();
        console.log(releases)
        commit(mutationTypes.UPDATE_RELEASES, releases)
    }
}

const mutations = {
    [mutationTypes.UPDATE_RELEASES](state, releases) {
        state.releases = {
            ...state.releases,
            ...releases
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
