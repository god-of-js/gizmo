import axios from "axios";
const apiUrl = "http://localhost:3000";
import { getToken } from '@/services/cookies';
const token = getToken();
interface ApiType {
  post: any,
  delete: any
}
export const Api = (token: string) =>
  axios.create({
    baseURL: apiUrl,
    timeout: 50000,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  

