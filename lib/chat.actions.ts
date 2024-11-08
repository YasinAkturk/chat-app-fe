"use server";

import httpService from "@/services/axios";

export async function getMessages() {
  try {
    const response = await httpService.get("/getMessages");
    return response.data; // Başarılı yanıtı döndür
  } catch (error: any) {
    console.log("error", error);
    return { error: error.response ? error.response.data : error.message }; // Hata durumunda hatayı döndür
  }
}
