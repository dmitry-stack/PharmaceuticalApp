import { useEffect, useState } from "react";
import * as styles from "./Toast.module.css";

export function Toast({ message, description = "", onClose, duration = 1500 }) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const closeAnimationTimer = setTimeout(() => {
      setIsClosing(true);
    }, duration);

    const removeTimer = setTimeout(() => {
      onClose();
    }, duration + 300);

    return () => {
      clearTimeout(closeAnimationTimer);
      clearTimeout(removeTimer);
    };
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${isClosing ? styles.toastClosing : ""}`}>
      <h1>{message}</h1>
      <p>{description}</p>
    </div>
  );
}
