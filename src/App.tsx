import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import Header from "./Header.tsx";
import InputArea from "./InputArea.tsx";
import MessageList from "./MessageList.tsx";
import Sidebar from "./Sidebar.tsx";
import { getAiResponseContent } from "./get-ai-response.ts";

export const App = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message) => {
    const newUserMessage = {
      id: Date.now(),
      content: message,
      role: "user",
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setIsLoading(true);

    // Здесь будет вызов API для получения ответа от AI
    try {
      // Имитация ответа от сервера
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          content: getAiResponseContent(message),
          role: "assistant",
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, aiResponse]);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Ошибка при получении ответа:", error);
      setIsLoading(false);
    }
  };

  const startNewConversation = () => {
    setMessages([]);
    setActiveConversation(null);
  };

  return (
    <div className={styles.container}>
      <Sidebar
        conversations={conversations}
        onNewConversation={startNewConversation}
        onSelectConversation={(conv) => {
          setActiveConversation(conv);
          setMessages(conv.messages);
        }}
      />
      <div className={styles.chatArea}>
        <Header />
        <MessageList messages={messages} isLoading={isLoading} />
        <div ref={messagesEndRef} />
        <InputArea onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};
