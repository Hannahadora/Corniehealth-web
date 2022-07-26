import { GetterTree, ActionTree, MutationTree } from "vuex"
// import { RootState } from './types'

import axios from "~/plugins/axios"

const api = axios

export const state = () => ({
  practitioners: null,
  searchedLocations: [],
  practitionerProfile: {},
  initPractitionerData: {},
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
  getInitPractitionerData(state) {
    return state.initPractitionerData
  },
}

export const mutations: MutationTree<RootState> = {
  SET_PRACTITIONERS(state, data) {
    state.practitioners = data
  },
  SET_PRACTITIONER(state, data) {
    state.practitionerProfile = data
  },
  SET_INITPRACTITIONERDATA(state, data) {
    state.initPractitionerData = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  searchForPractitioners: async ({ commit }, search: any) => {
    try {
      const res: any = await api.get(`/booking-website/search?query=${search}`)
      if (res.data.success === true) {
        commit("SET_PRACTITIONERS", res.data.data)
      }
      return res
    } finally {
    }
  },

  findLocations: async ({ commit }, query) => {
    try {
      const res = await api.get(`/booking-website/locations?query=${query}`)
      return res
    } finally {
    }
  },

  findHospitals: async ({ commit }, query) => {
    try {
      const res = await api.get(`/booking-website/hospitals?query=${query}`)
      return res
    } finally {
    }
  },

  findPractitionerByName: async ({ commit }, query) => {
    try {
      const res = await api.get(
        `/booking-website/search/practitionerByName?query=${query}`
      )
      return res
    } finally {
    }
  },

  async findPractitionersAll({ commit }, query) {
    try {
      const res = await api.get(`/booking-website/search/practitioners`, {
        params: query,
      })
      commit("SET_PRACTITIONERS", res.data.data)
      return res
    } finally {
    }
  },

  async fetchPractice({ commit }, { specialty, location }) {
    try {
      const res: any = await api.get(
        `/booking-website/practice/search?specialty=${
          specialty ?? ""
        }&location=${location ?? ""}`
      )
      if (res.data.success === true) {
        commit("SET_PRACTITIONERS", res.data.data)
      }
      return res
    } finally {
    }
  },

  getAPractitionerProfile: async ({ commit }, practitionerId: string) => {
    try {
      const res = await api.get(
        `/booking-website/get-profile/${practitionerId}`
      )
      // if(res.success === 'true') {
      commit("SET_PRACTITIONER", res.data.data)
      // }
      return res
    } finally {
    }
  },
}
