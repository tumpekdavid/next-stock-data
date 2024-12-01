import Axios from "axios";


export const api = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    params: {
      apikey: process.env.NEXT_PUBLIC_API_KEY, 
    },
  });