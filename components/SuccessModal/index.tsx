"use client";

import { useEffect } from "react";
import styles from "./SuccessModal.module.css";

type SuccessModalProps = {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
};

export default function SuccessModal({
  isOpen,
  title,
  message,
  onClose,
}: SuccessModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-modal-title"
        aria-describedby="success-modal-message"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.badge}>✦ REQUEST SENT</div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}>✓</span>
        </div>
        <h3 id="success-modal-title">{title}</h3>
        <p id="success-modal-message">{message}</p>
        <button type="button" className={styles.closeButton} onClick={onClose}>
          Back to form
        </button>
      </div>
    </div>
  );
}
