"use server";

import httpService from "@/services/axios";
import { cookies } from 'next/headers'
interface FormData {
  email: string;
  password: string;
}

export async function authenticate(formData: FormData) {
  try {
    const response:any = await httpService.post("/login", formData);
    console.log("🚀 ~ authenticate ~ response:", response)
    cookies().set('token', response.accessToken)
    cookies().set('userId', response.data._id)
    return response.data; // Başarılı yanıtı döndür
  } catch (error: any) {
    console.log("error", error);
    return { error: error.response ? error.response.data : error.message }; // Hata durumunda hatayı döndür
  }
}
export async function register(formData: FormData) {
  try {
    const response:any = await httpService.post("/register", formData);
    return response.data; // Başarılı yanıtı döndür
  } catch (error: any) {
    console.log("error", error);
    return { error: error.response ? error.response.data : error.message }; // Hata durumunda hatayı döndür
  }
}
