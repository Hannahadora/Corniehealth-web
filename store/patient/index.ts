import { GetterTree, ActionTree, MutationTree } from "vuex"
// import { RootState } from './types'

import axios from "~/plugins/axios";

const api = axios

export const state = () => ({
  patients: [],
  user: {},
  loading: false
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getUser(state) {
    return state.patients
  },
}

export const mutations: MutationTree<RootState> = {
  SET_PATIENTS(state, data) {
    state.patients = data
  },
  SET_USER(state, data) {
    state.user = data
  },
  SET_LOADING(state, data) {
    state.loading = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  registerPatient: async ({ commit, dispatch }, data) => {
    commit("SET_LOADING", true);
    try {
      const res = await api.post("/api/v1/")
      // if(res.status === 'true') {
      commit("SET_PATIENTS", res.data)
      // }
      console.log(res)
      return res
    } catch (err) {
      console.log(err);
    } finally {
      commit("SET_LOADING", false);
    }
  },
  verifyUser: async ({ commit, dispatch }, data) => {
    commit("SET_LOADING", true);
    try {
      const res = await api.post("/api/v1/")
      // if(res.status === 'true') {
      commit("SET_USER", res.data)
      // }
      return res
      console.log(res)
    } catch (err) {
      console.log(err);
    } finally {
      commit("SET_LOADING", false);
    }
  }

}
