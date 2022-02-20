import { StoreOptions } from "vuex";

interface AppointmentState {
  appointment: Array<any>;
  selectedDate: String;
  selectedTime: String;

}

export default {
  namespaced: true,
  state: {
    appointment: [],
    selectedDate: "",
    selectedTime: ""
  },

  getters: {
    getSelectedTime(state) {
      return state.selectedTime
    },
    getSelectedDate(state) {
      return state.selectedDate
    }
  },

  mutations: {
    SET_SELECTEDDATE(state, data) {
      state.selectedDate = data
    },
    SET_SELECTEDTIME(state, data) {
      state.selectedTime = data
    }
  },
  actions: {

  },
} as StoreOptions<AppointmentState>;
