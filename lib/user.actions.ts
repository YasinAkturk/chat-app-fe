"use server";

import httpService from "@/services/axios";

export async function getFriendsWithLastMessage() {
  try {
    const response = await httpService.get("/getFriendsWithLastMessage");
    return response.data; // Başarılı yanıtı döndür
  } catch (error: any) {
    console.log("error", error);
    return { error: error.response ? error.response.data : error.message }; // Hata durumunda hatayı döndür
  }
}
