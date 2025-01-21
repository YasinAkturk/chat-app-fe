import axios from "axios";
import { cookies } from "next/headers";

const token = cookies().get('token')
console.log("🚀 ~ token: LAAAAAAAAAAAAAAAAAN", token)
const httpService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

httpService.defaults.headers.common["Authorization"] =  token ? `Bearer ${token.value}` : undefined

console.log("🚀 ~ Authorization LAAAAAAAAAAAAAAAAAN", httpService.defaults.headers.common["Authorization"])
httpService.interceptors.response.use(
  (response) => Promise.resolve(response.data),
  (error) => {
    let status = error?.response?.status || 0;
    let message = error?.response?.data?.message;

    // axios timeout
    if (error.code === "ECONNABORTED") status = 504;

    return Promise.reject({ status, message, error });
  }
);

export default httpService;
