import Message from "./Message.tsx";
import styles from "./MessageList.module.css";

const MessageList = ({ messages, isLoading }) => {
  return (
    <div className={styles.messageList}>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      {isLoading && (
        <div className={styles.loadingIndicator}>
          <div className={styles.typingIndicator}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageList;
