import axios from "axios"
// import store from "@/store";

// const authToken = () =>
//   store.state.user.authToken || localstore.get("authToken");

export default axios.create({
  // baseURL: "https://corniehealth.herokuapp.com/api/v1"
  baseURL: "https://dev.corniehealth.com/api/v1",
  // headers: {
  //   "Content-Type": "application/json",
  //   Authorization: 'bearer {token}'
  // }
})
