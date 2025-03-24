import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>CoSMI Chat</h1>
      <div className={styles.headerActions}>
        <button className={styles.headerButton}>Модель: GigaChat</button>
        <button className={styles.headerButton}>Очистить чат</button>
      </div>
    </div>
  );
};

export default Header;
