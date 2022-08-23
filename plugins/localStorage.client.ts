// import VuexPersistence from "vuex-persist"
import VuexPersistenceState from "vuex-persist"
 
export default ({ store }: any): void => {
  new VuexPersistenceState({
    key: "booking-site",
  }).plugin(store)
}
