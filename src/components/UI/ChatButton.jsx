import styles from "./css/ChatButton.module.css";
const ChatButton = () => {
  return (
    <>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=919668221451"
        className={styles.whatsapp_chat}
      >
        <img
          src="https://www.balajirice.in/assets/images/whatsapp.png"
          alt=""
          srcset=""
        />
      </a>
    </>
  );
};

export default ChatButton;
