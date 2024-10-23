import React, { useEffect, useRef } from "react";
import { IMessageItems } from "../types";
interface Props {
  messages: IMessageItems;
}
const MessageList = React.memo(({ messages }: Props) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="grow h-4/5 border-y py-3 px-4 bg-slate-100 scrollbar-thumb-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-transparent overflow-y-scroll flex flex-col gap-2"
    >
      {messages.map((item, index: number) => (
        <div
          key={index}
          className={`flex ${item.incoming ? "justify-start" : "justify-end"}`}
        >
          <div
            className={`w-fit rounded-xl p-2 ${
              item.incoming
                ? "bg-white border rounded-bl-none"
                : "bg-blue-500 text-white border rounded-br-none"
            }`}
          >
            {item.message}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
});

export default MessageList;
