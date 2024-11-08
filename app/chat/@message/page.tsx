"use client";
import React, { useState, useCallback } from "react";
import { IMessageItems } from "./types";
import UserStatus from "./_components/UserStatus";
import MessageList from "./_components/MessageList";
import MessageInput from "./_components/MessageInput";
/* import { getMessages } from "@/lib/chat.actions"; */
// Mesaj listesini sabit tutabiliriz, bu sayede her render işleminde yeniden oluşturulmaz
const messageList: IMessageItems = [
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: true,
    outgoing: false,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: true,
    outgoing: false,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: true,
    outgoing: false,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: true,
    outgoing: false,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: true,
    outgoing: false,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: true,
    outgoing: false,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: true,
    outgoing: false,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: true,
    outgoing: false,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: true,
    outgoing: false,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: true,
    outgoing: false,
  },
  {
    message: "Buraya mesaj gelecek",
    incoming: false,
    outgoing: true,
  },
];
export default async function page() {
  const [statu, setStatu] = useState(false);
  const [openEmoji, setOpenEmoji] = useState(false);
  const [message, setMessage] = useState("");
  
  /* useEffect(() => {
    const response: any = await getMessages();
  if (response?.error) {
    console.log("response", response?.error);
  } else {
    console.log("Başarılı");
  }
  }, []) */
  
  const toggleEmojiPicker = useCallback(() => {
    setOpenEmoji((prev) => !prev);
  }, []);

  const addEmoji = useCallback((e: any) => {
    const sym = e.unified.split("-");
    const codeArray = sym.map((el: any) => "0x" + el);
    const emoji = String.fromCodePoint(...codeArray);
    setMessage((prev) => prev + emoji);
  }, []);
  return (
    <>
      <UserStatus statu={statu} />
      <MessageList messages={messageList} />
      <MessageInput
        message={message}
        setMessage={setMessage}
        openEmoji={openEmoji}
        toggleEmojiPicker={toggleEmojiPicker}
        addEmoji={addEmoji}
      />
    </>
  );
}
