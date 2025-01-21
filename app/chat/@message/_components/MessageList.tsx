import React, { useEffect, useRef } from "react";
import { IMessageItems } from "../types"; // IMessageItems tipini dönen veri yapısına uygun olarak güncelleyin
import { useChatContext } from "../../context/ChatContext";

interface Props {
  messages: IMessageItems;
  currentUserId: string | null; // Mevcut kullanıcının ID'sini alarak `incoming` yönünü ayarlamak için kullanacağız
}

// Boş olduğunda gösterilecek "Empty" bileşeni
const EmptyComponent = () => (
  <div className="flex items-center justify-center h-full text-gray-500">
    Henüz mesaj yok.
  </div>
);
const NotUserComponent = () => (
  <div className="flex items-center justify-center h-full text-gray-500">
    Bir sohbet seçiniz.
  </div>
);

const MessageList = React.memo(({ messages, currentUserId }: Props) => {
  const { selectedUserId } = useChatContext();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="grow h-4/5 border-y py-3 px-4 bg-slate-100 scrollbar-thumb-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-transparent overflow-y-scroll flex flex-col gap-2">
      {selectedUserId?.id === null ? (
        <NotUserComponent />
      ) : messages.length === 0 ? (
        <EmptyComponent /> // `messages` boşsa boş bileşen göster
      ) : (
        messages.map((item, index: number) => {
          // Gelen mesajın `incoming` yönünü belirleme
          const incoming = item.sender !== currentUserId;

          return (
            <div
              key={index}
              className={`flex ${incoming ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`w-fit rounded-xl p-2 ${
                  incoming
                    ? "bg-white border rounded-bl-none"
                    : "bg-blue-500 text-white border rounded-br-none"
                }`}
              >
                {item.content} {/* `message` yerine `content` kullanıyoruz */}
              </div>
            </div>
          );
        })
      )}
      <div ref={messagesEndRef} />
    </div>
  );
});

export default MessageList;
