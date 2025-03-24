import { useEffect, useRef, useState } from "react";
import { FiMic, FiPaperclip, FiSend } from "react-icons/fi";
import styles from "./InputArea.module.css";

const InputArea = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  return (
    <div className={styles.inputArea}>
      <div className={styles.attachmentButtons}>
        <button className={styles.iconButton} title="Прикрепить файл">
          <FiPaperclip size={20} />
        </button>
        <button className={styles.iconButton} title="Голосовой ввод">
          <FiMic size={20} />
        </button>
      </div>
      <textarea
        ref={textareaRef}
        className={styles.textInput}
        placeholder="Напишите сообщение..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
        disabled={isLoading}
      />
      <button
        className={styles.sendButton}
        onClick={handleSend}
        disabled={!message.trim() || isLoading}
      >
        <FiSend size={20} />
      </button>
    </div>
  );
};

export default InputArea;
