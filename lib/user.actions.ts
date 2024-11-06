"use server";

import httpService from "@/services/axios";

export async function getAllFriend() {
  try {
    const response = await httpService.get("/getAllFriend");
    console.log("🚀 ~ getAllFriend ~ response:", response)
    return response.data; // Başarılı yanıtı döndür
  } catch (error: any) {
    console.log("error", error);
    return { error: error.response ? error.response.data : error.message }; // Hata durumunda hatayı döndür
  }
}
