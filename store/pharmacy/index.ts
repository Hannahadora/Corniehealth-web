import { GetterTree, ActionTree, MutationTree } from "vuex"
// import { RootState } from './types'

import axios from "~/plugins/axios"

const api = axios

export const state = () => ({
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {

}

export const mutations: MutationTree<RootState> = {

}

export const actions: ActionTree<RootState, RootState> = {

  fetchProductLocations: async ({ commit }, query) => {
    try {
      const res = await api.get("/patient-portal/catalogue-product/get-locations")
      return res
    } catch(err: any) {
      console.log(err)
    } 
  },
  searchProduct: async ({ commit }, search) => {
    const queryString = Object.keys(search).map(filter => {
      if (search[filter] || Number.isInteger(search[filter])) {
        return `${filter}=${search[filter]}`;
      }
      return null;
    }).filter(item => item).join("&");
    try {
      const res = await api.get(`/patient-portal/catalogue-product/search-catalogue?${queryString}`)
      return res
    } catch(err: any) {
      console.log(err)
    } 
  },

}
