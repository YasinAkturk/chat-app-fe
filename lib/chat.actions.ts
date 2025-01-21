"use server";

import httpService from "@/services/axios";

interface GetMessageI {
  receiverId: string;
}

export async function getMessages(params: GetMessageI) {
  console.log("🚀 ~ getMessages ~ params:", params)
  
  try {
    const response = await httpService.get("/getMessages", { params });
    return response.data; 
  } catch (error: any) {
    console.log("error", error);
    return { error: error.response ? error.response.data : error.message }; 
  }
}