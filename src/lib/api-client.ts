import Axios from "axios";
import { env } from "process";

export const api = Axios.create({
    baseURL: env.NEXT_API_URL,
    params: {
      apikey: env.NEXT_PUBLIC_ALPHAVANTAGE_API_KEY, 
    },
  });