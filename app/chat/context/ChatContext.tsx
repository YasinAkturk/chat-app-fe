// context/ChatContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface ChatContextProps {
  selectedUserId: any;
  messages: any[];
  setSelectedUserId: (user: any) => void;
  setMessages: (messages: any[]) => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [selectedUserId, setSelectedUserId] = useState<any | null>(null);
  const [messages, setMessages] = useState<any[]>([]);

  return (
    <ChatContext.Provider
      value={{ selectedUserId, setSelectedUserId, messages, setMessages }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
