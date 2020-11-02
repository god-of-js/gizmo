import axios from "axios";
import { getToken } from "@/utils/cookies";
// process.env.VUE_APP_API_URL
const token = getToken();
export const Api = () =>
  axios.create({
    baseURL: process.env.VUE_APP_API_URL ,
    timeout: 50000,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
