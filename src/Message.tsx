import { FiCopy, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import Markdown from "react-markdown";
import styles from "./Message.module.css";

const Message = ({ message }) => {
  const isAI = message.role === "assistant";

  return (
    <div
      className={`${styles.message} ${
        isAI ? styles.aiMessage : styles.userMessage
      }`}
    >
      <div className={styles.avatar}>
        {isAI ? (
          <div className={styles.aiAvatar}>AI</div>
        ) : (
          <div className={styles.userAvatar}>Вы</div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <Markdown>{message.content}</Markdown>
        </div>
        
        <div className={styles.footer}>
          <span className={styles.timestamp}>
            {new Date(message.timestamp).toLocaleTimeString()}
          </span>
          {isAI && (
            <div className={styles.actions}>
              <button className={styles.actionButton} title="Копировать">
                <FiCopy size={16} />
              </button>
              <button className={styles.actionButton} title="Лайк">
                <FiThumbsUp size={16} />
              </button>
              <button className={styles.actionButton} title="Дизлайк">
                <FiThumbsDown size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
