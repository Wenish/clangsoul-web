import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'

const state = {
  isOpen: false
}

const getters = {
  [getterNames.getIsNavbarOpen]: (state, getters) => (
    state.isOpen
  )
}

const mutations = {
  [mutationTypes.OPEN_NAVBAR] (state) {
    state.isOpen = true
  },
  [mutationTypes.CLOSE_NAVBAR] (state) {
    state.isOpen = false
  },
  [mutationTypes.TOGGLE_NAVBAR] (state) {
    state.isOpen = !state.isOpen
  },
  [mutationTypes.SET_NAVBAR] (state, value) {
    state.isOpen = value
  }
}

export default {
  state,
  getters,
  mutations
}
