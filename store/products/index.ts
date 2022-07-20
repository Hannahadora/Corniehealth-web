import { GetterTree, ActionTree, MutationTree } from "vuex"
// import  RootState from '~/store'

// const api = axios

export const state = () => ({
  selectedProduct: {},
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  selectedProduct(state) {
    return state.selectedProduct
  },
}

export const mutations: MutationTree<RootState> = {
  SET_SELECTEDPRODUCT(state, data) {
    state.selectedProduct = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  selectProduct({ commit }, data: any) {
    commit("SET_SELECTEDPRODUCT", data)
  },

}

