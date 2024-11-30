import Axios from "axios";
import { env } from "process";


export const api = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    params: {
      apikey: process.env.NEXT_PUBLIC_API_KEY, 
    },
  });