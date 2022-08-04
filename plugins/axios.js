import axios from "axios"

// let authToken
// if(process.client) {
//   authToken = localStorage.getItem("authToken")
// };

// const config = {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${authToken}`
//   }
// };

const url = "https://dev.corniehealth.com/api/v1";
// const baseURL = "https://corniehealth.herokuapp.com/api/v1";

export default axios.create({ baseURL: url })
