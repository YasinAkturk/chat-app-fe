"use client";
import React, { useState, useCallback, useEffect } from "react";
import { IMessageItems } from "./types";
import UserStatus from "./_components/UserStatus";
import MessageList from "./_components/MessageList";
import MessageInput from "./_components/MessageInput";
import { getMessages } from "@/lib/chat.actions";
import Cookies from "js-cookie";
import { useChatContext } from "../context/ChatContext";
import { socket } from "@/utils/socket";

export default function Page() {
  const [statu, setStatu] = useState(false);
  const [openEmoji, setOpenEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState<IMessageItems>([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const { selectedUserId, messages, setMessages } = useChatContext();

  // Cookie'yi `useEffect` içinde güvenli bir şekilde alıyoruz
  useEffect(() => {
    const userId = Cookies.get("userId");
    if (userId) {
      setCurrentUserId(userId);
    }
  }, []);

  useEffect(() => {
    socket.on("receiveMessage", (message: IMessageItems) => {
      // Yeni gelen mesajları listeye ekle
      setMessageList((prevMessages:any) => [...prevMessages, message]);
    });

    // Dinlemeyi temizle
    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const fetchMessages = async (selectedUserId: any) => {
    const response: any = await getMessages({
      receiverId: selectedUserId.id,
    });
    if (response?.error) {
      console.log("response", response?.error);
    } else {
      console.log("Başarılı", response);
      setMessageList(response);
    }
  };
  useEffect(() => {
    if (selectedUserId) {
      fetchMessages(selectedUserId);
    }
  }, [selectedUserId]);

  const toggleEmojiPicker = useCallback(() => {
    setOpenEmoji((prev) => !prev);
  }, []);

  const addEmoji = useCallback((e: any) => {
    const sym = e.unified.split("-");
    const codeArray = sym.map((el: any) => "0x" + el);
    const emoji = String.fromCodePoint(...codeArray);
    setMessage((prev) => prev + emoji);
  }, []);

  const sendMessage = useCallback(() => {
    if (!message.trim()) return; // Boş mesaj gönderilmesin
    socket.emit("sendMessage", {
      sender: currentUserId,
      receiver: selectedUserId,
      content: message,
    });

    setMessage(''); // Mesajı gönderdikten sonra inputu temizle
  }, [message, currentUserId, selectedUserId]);

  return (
    <>
      <UserStatus statu={statu} />
      <MessageList messages={messageList} currentUserId={currentUserId} />
      <MessageInput
        message={message}
        setMessage={setMessage}
        openEmoji={openEmoji}
        toggleEmojiPicker={toggleEmojiPicker}
        addEmoji={addEmoji}
        sendMessage={sendMessage}
      />
    </>
  );
}
