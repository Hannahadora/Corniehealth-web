import { GetterTree, ActionTree, MutationTree } from "vuex"
// import { RootState } from './types'

import axios from "~/plugins/axios";

const api = axios

export const state = () => ({
  practitioners: [],
  loading: false
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getrelatedPractioners(state) {
    return state.practitioners
  },
}

export const mutations: MutationTree<RootState> = {
  SET_PRACTITIONERS(state, data) {
    state.practitioners = data
  },
  SET_LOADING(state, data) {
    state.loading = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  findPractitioners: async ({ commit, dispatch }, search) => {
    commit("SET_LOADING", true);
    try {
      const res = await api.post(`/api/v1/booking-site_open/find?search=${search}`)
      // if(res.status === 'true') {
      commit("SET_PRACTITIONERS", res.data)
      // }
      console.log(res)
    } catch (err) {
      console.log(err);
    } finally {
      commit("SET_LOADING", false);
    }
  }

}
