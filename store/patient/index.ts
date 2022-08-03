import { GetterTree, ActionTree, MutationTree  } from "vuex"
// import { RootState } from './types'

import axios from "~/plugins/axios";

const api = axios

export const state = () => ({
  user: {},
  loading: false
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getUser(state) {
    return state.user
  },
}

export const mutations: MutationTree<RootState> = {
  SET_USER(state, data) {
    state.user = data
  },
  SET_LOADING(state, data) {
    state.loading = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  
  findPatient: async ({ commit }, id) => {
    try {
      const res = await api.get(
        `/patient/get-patient/${id}`
      )
      if(res.data.success === true) {
        commit("SET_USER", res.data.data)
      }
      return res
    } finally {
    }
  },
}