import axios from "axios"
// import store from "@/store";

// const authToken = () =>
//   store.state.user.authToken || localstore.get("authToken");

export default axios.create({
  baseURL: "https://corniehealth.herokuapp.com",
  // headers: {
  //   "Content-Type": "application/json",
  //   Authorization: 'bearer {token}'
  // }
})