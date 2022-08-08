import { GetterTree, ActionTree, MutationTree } from "vuex"

import axios from "~/plugins/axios";
// import { RootState } from './types'

let authToken
if(process.client) {
  authToken = localStorage.getItem("authToken")
};

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authToken}`
  }
}

const api = axios

export const state = () => ({
  user: null,
  loading: false,
  authToken: ""
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  userData(state) {
    return state.user
  },
  getToken(state) {
    return state.authToken
  }
}

export const mutations: MutationTree<RootState> = {
  SET_USER(state, data) {
    state.user = data
  },
  SET_LOADING(state, data) {
    state.loading = data
  },
  SET_TOKEN(state, data) {
    state.authToken = data
    localStorage.setItem("authToken", data)
  },
}

export const actions: ActionTree<RootState, RootState> = {

  findUser: async ({ commit }) => {
    try {
      const res = await api.get(
        "/account", config
      )
      if (res.data.success === true) {
        commit("SET_USER", res.data.data)
      }
      return res
    } finally {
    }
  },
}