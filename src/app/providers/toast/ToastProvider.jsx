import { createContext, useContext, useState, useCallback } from "react";
import { Toast } from "@shared/ui/toast/Toast";
import * as styles from "./ToastProvider.modules.css";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback(
    (text, des = "This feature is in development") => {
      const id = crypto.randomUUID();
      setToasts((prev) => [...prev, { id, text, des }]);
    },
    [],
  );

  const hideToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}

      <div className={styles.toastContainer}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.text}
            description={toast.des}
            onClose={() => hideToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
