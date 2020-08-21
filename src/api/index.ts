import axios from "axios";
const apiUrl = "http://localhost:3000";
const token: object = {}
const Api = () =>
  axios.create({
    baseURL: apiUrl,
    timeout: 50000,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
export default Api(token);
