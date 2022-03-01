import { GetterTree, ActionTree, MutationTree } from "vuex"
// import { RootState } from './types'


// const api = axios

export const state = () => ({
  modal: false
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  modalState(state) {
    return state.modal
  },
}

export const mutations: MutationTree<RootState> = {
  SET_MODALSTATE(state, data) {
    state.modal = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  updateModalState({ commit }, data: any) {
    commit("SET_MODALSTATE", data)
  },

}
