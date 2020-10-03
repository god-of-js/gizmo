import axios from "axios";
const baseUrl = "http://localhost:3000";
import { getToken } from "@/utils/cookies";
const token = getToken();
export const Api = () =>
  axios.create({
    baseURL: baseUrl,
    timeout: 50000,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
