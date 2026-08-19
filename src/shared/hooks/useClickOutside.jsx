import { useEffect } from "react";

export function useClickOutside({ isOpen, ref, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, ref, onClose]);
}
