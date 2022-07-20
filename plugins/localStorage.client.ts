import VuexPersistence from "vuex-persist"
 
export default ({ store }: any): void => {
  new VuexPersistence({
    key: "booking-site",
  }).plugin(store)
}
