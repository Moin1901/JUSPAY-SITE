import { useNavigate } from "react-router-dom";
import styles from "./ComingSoon.module.css";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>🚀 Coming Soon</h1>

        <button className={styles.button} onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
