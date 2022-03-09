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
  registerPatient: async ({ commit }, data) => {
    commit("SET_LOADING", true);
    try {
      const res = await api.post("/auth/signup", data)
      // if(res.success === 'true') {
      // commit("SET_PATIENTS", res.data)
      // }
      return res
    } finally {
      commit("SET_LOADING", false);
    }
  },
  emailVerification: async ({ commit }, data) => {
    commit("SET_LOADING", true);
    try {
      const res = await api.post("/auth/code/verify", data)
      // if(res.success === 'true') {
      // commit("SET_USER", res.data)
      // }
      return res
    } finally {
      commit("SET_LOADING", false);
    }
  },
  resendEmailVerification: async ({ commit }, data) => {
    commit("SET_LOADING", true);
    try {
      const res = await api.post("/auth/signup/resend-verification", data)
      // if(res.success === 'true') {
      // commit("SET_USER", res.data)
      // }
      return res
    } finally {
      commit("SET_LOADING", false);
    }
  },
  logPatientIn: async ({ commit }, data) => {
    commit("SET_LOADING", true);
    try {
      const res = await api.post("/auth/login", data)
      // if(res.success === 'true') {
      commit("SET_USER", res.data)
      // }
      return res
    } finally {
      commit("SET_LOADING", false);
    }
  },
  changePassword: async ({ commit }, data) => {
    commit("SET_LOADING", true);
    try {
      const res = await api.post("/auth/change-password", data)
      // if(res.success === 'true') {
      commit("SET_USER", res.data)
      // }
      return res
    } finally {
      commit("SET_LOADING", false);
    }
  },
  activateAccount: async ({ commit }, data) => {
    commit("SET_LOADING", true);
    try {
      const res = await api.post("/auth/account/activate", data)
      // if(res.success === 'true') {
      commit("SET_USER", res.data)
      // }
      return res
    } finally {
      commit("SET_LOADING", false);
    }
  },
  turnOn2FA: async ({ commit }, data) => {
    commit("SET_LOADING", true);
    try {
      const res = await api.post("/org/security/2fa/setup", data)
      // if(res.success === 'true') {
      // commit("SET_USER", res.data)
      // }
      return res
    } finally {
      commit("SET_LOADING", false);
    }
  },
  turnOff2FA: async ({ commit }, data) => {
    commit("SET_LOADING", true);
    try {
      const res = await api.post("/org/security/2fa/status/off", data)
      // if(res.success === 'true') {
      // commit("SET_USER", res.data)
      // }
      return res
    } finally {
      commit("SET_LOADING", false);
    }
  },


}
