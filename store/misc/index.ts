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



// import { StoreOptions } from "vuex";

// interface MiscState {
//   modal: false;
// }

// export default {
//   namespaced: true,
//   state: {
//     modal: false,
//   },
//   getters: {
//     modalState(state) {
//       return state.modal
//     },
//   },
//   mutations: {
//     SET_MODALSTATE(state, data) {
//       state.modal = data
//     },
//   },
//   actions: {
//     updateModalState({ commit }, data: any) {
//       commit("SET_MODALSTATE", data)
//     },
//   },
// } as StoreOptions<MiscState>;

