import { GetterTree, ActionTree, MutationTree } from "vuex"
// import { RootState } from './types'


// const api = axios

export const state = () => ({
  appointment: [],
  selectedDate: "",
  selectedTime: ""
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getSelectedTime(state) {
    return state.selectedTime
  },
  getSelectedDate(state) {
    return state.selectedDate
  }
}

export const mutations: MutationTree<RootState> = {
  SET_SELECTEDDATE(state, data) {
    state.selectedDate = data
  },
  SET_SELECTEDTIME(state, data) {
    state.selectedTime = data
  }
}

export const actions: ActionTree<RootState, RootState> = {
  saveSelectedDate({ commit }, data: any) {
    commit("SET_SELECTEDDATE", data)
  },
  saveSelectedTime({ commit }, data: any) {
    commit("SET_SELECTEDTIME", data)
  },

}
