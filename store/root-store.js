export const state = () => ({
  allowCountries: {}
})

export const mutations = {
  changeAllowCountries (state, countries) {
    state.allowCountries = countries
  }
}

export const actions = {
  loadAllowCountriesToStore ({ commit }, countries) {
    commit('changeAllowCountries', countries)
  }
}
