import { GetterTree, ActionTree, MutationTree } from "vuex"
// import { RootState } from './types'

import axios from "~/plugins/axios";

const api = axios

export const state = () => ({
  practitioners: [],
  loading: false,
  searchedLocations: [],
  practitionerProfile: {}
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getRelatedPractitioners(state) {
    return state.practitioners
  },
  getRelatedLocations(state) {
    return state.searchedLocations
  },

  selectedPractitioner(state) {
    return state.practitionerProfile
  },

}

export const mutations: MutationTree<RootState> = {
  SET_PRACTITIONERS(state, data) {
    state.practitioners = data
  },
  SET_LOADING(state, data) {
    state.loading = data
  },
  SET_LOCATIONS(state, data) {
    state.searchedLocations = data
  },
  SET_PRACTITIONER(state, data) {
    state.practitionerProfile = data
  },

}

export const actions: ActionTree<RootState, RootState> = {
  // findPractitioners: async ({ commit }, search) => {
  //   commit("SET_LOADING", true);
  //   try {
  //     const res = await api.get(`/booking_site_open/find?search=${search}`)
  //     // if(res.success === 'true') {
  //     commit("SET_PRACTITIONERS", res.data)
  //     // }
  //     return res
  //   } finally {
  //     commit("SET_LOADING", false);
  //   }
  // },
  findBySpecialty: async ({ commit }, search) => {
    commit("SET_LOADING", true);
    try {
      const res = await api.get(`/booking_site_open/find/searchBySpecialty?search=${search}`)
      // if(res.success === 'true') {
      commit("SET_PRACTITIONERS", res.data)
      // }
      return res
    } finally {
      commit("SET_LOADING", false);
    }
  },
  findByPractice: async ({ commit }, search) => {
    commit("SET_LOADING", true);
    try {
      const res = await api.get(`/booking_site_open/find/searchByPacticeName?search=${search}`)
      // if(res.success === 'true') {
      commit("SET_PRACTITIONERS", res.data)
      // }
      return res
    } finally {
      commit("SET_LOADING", false);
    }
  },
  findLocations: async ({ commit }, query) => {
    commit("SET_LOADING", true);
    try {
      const res = await api.get(`/booking-website/locations?query=${query}`)
      // if(res.success === 'true') {
      commit("SET_LOCATIONS", res.data)
      // }
      return res
    } finally {
      commit("SET_LOADING", false);
    }
  },
  async findPractitionersAll({ commit }, { specialty, location, hospital, min, max, language, gender }) {
    commit("SET_LOADING", true);
    try {
      // const pracQuery = [
      //   "specialty", "location", "hospital", "min", "max", "language", "gender"
      // ]
      // pracQuery.map(query => query)
      const res = await api.get(`/booking-website/search/practitioners?specialty=${specialty}&location=${location}&hospital=${hospital}&min=${min}&max=${max}&language=${language}&gender=${gender}`)
      // if(res.success === 'true') {
      commit("SET_PRACTITIONERS", res.data.data)
      // }
      return res
    } finally {
      commit("SET_LOADING", false);
    }
  },
  async findPractitionersPart({ commit }, { specialty, location }) {
    commit("SET_LOADING", true);
    try {
      const res = await api.get(`/booking-website/search/practitioners?specialty=${specialty}&location=${location}`)
      // if(res.success === 'true') {
      commit("SET_PRACTITIONERS", res.data.data)
      // }
      return res
    } finally {
      commit("SET_LOADING", false);
    }
  },
  providersDropdown: async ({ commit }, query) => {
    commit("SET_LOADING", true);
    try {
      const res = await api.get(`/booking-website/specialty-practices?query=${query}`)
      // if(res.success === 'true') {
      // commit("SET_PRACTITIONERS", res.data)
      // }
      return res
    } finally {
      commit("SET_LOADING", false);
    }
  },
  getAPractitionerProfile: async ({ commit }, practitionerId: string) => {
    commit("SET_LOADING", true);
    try {
      const res = await api.get(`/booking-website/get-profile/${practitionerId}`)
      // if(res.success === 'true') {
      commit("SET_PRACTITIONER", res.data)
      // }
      return res
    } finally {
      commit("SET_LOADING", false);
    }
  }
}
