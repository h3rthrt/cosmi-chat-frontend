import { FiMessageSquare, FiPlus } from "react-icons/fi";
import styles from "./Sidebar.module.css";

const Sidebar = ({
  conversations,
  onNewConversation,
  onSelectConversation,
}) => {
  return (
    <div className={styles.sidebar}>
      <button className={styles.newChatButton} onClick={onNewConversation}>
        <FiPlus size={18} />
        <span>Новый чат</span>
      </button>
      <div className={styles.conversationList}>
        {conversations.map((conv) => (
          <button
            key={conv.id}
            className={styles.conversationItem}
            onClick={() => onSelectConversation(conv)}
          >
            <FiMessageSquare size={16} />
            <span className={styles.conversationTitle}>
              {conv.title ||
                `Чат от ${new Date(conv.createdAt).toLocaleDateString()}`}
            </span>
          </button>
        ))}
      </div>
      <div className={styles.sidebarFooter}>
        <div className={styles.userMenu}>
          <div className={styles.userAvatar}>U</div>
          <span className={styles.userName}>Пользователь</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
