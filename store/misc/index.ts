import { GetterTree, ActionTree, MutationTree } from "vuex"
// import  RootState from '~/store'

// const api = axios

export const state = () => ({
  modal: false,
  location: "",
  specialty: "",
  practitionerLocations: []
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  modalState(state) {
    return state.modal
  },
  selectedSpecialty(state) {
    return state.specialty
  },
  selectedLocation(state) {
    return state.location
  },
  practitionerLocations(state) {
    return state.practitionerLocations
  },
}

export const mutations: MutationTree<RootState> = {
  SET_MODALSTATE(state, data) {
    state.modal = data
  },
  SET_LOCATION(state, data) {
    state.location = data
  },
  SET_SPECIALTY(state, data) {
    state.specialty = data
  },
  SET_PRACTITIONERLOCATIONS(state, data) {
    state.practitionerLocations = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  updateModalState({ commit }, data: any) {
    commit("SET_MODALSTATE", data)
  },
  updateSelectedLocation({ commit }, data: any) {
    commit("SET_LOCATION", data)
  },
  updateSelectedSpecialty({ commit }, data: any) {
    commit("SET_SPECIALTY", data)
  },
  updatePractitionerLocations({ commit }, data: any) {
    commit("SET_PRACTITIONERLOCATIONS", data)
  },

}

