import { useState } from "react";
import cx from "classnames";
import styles from "./Sidebar.module.css";
import ThoughtsTime from "../../public/thoughts-time.svg";

export interface ThoughtsWidgetProps {
  /** Callback fired when the user clicks the "Write a message" button */
  onWriteMessage: () => void;
}

/**
 * A widget that encourages users to share their thoughts with their peers.
 * Displays at the bottom of the sidebar with a fixed message and a clickable
 * "Write a message" button.
 */
const ThoughtsWidget = ({ onWriteMessage }: ThoughtsWidgetProps) => {
  return (
    <div className={styles.thoughtsContainer}>
      <div className={styles.thoughtsWidget}>
        <div className={styles.thoughtsIconContainer}>
          <ThoughtsTime className={styles.thoughtsIcon} />
        </div>

        <div className={styles.thoughtsContent}>
          <h3 className={styles.thoughtsTitle}>
            Thoughts Time
          </h3>
          
          <p className={styles.thoughtsDescription}>
            We don't have any notice for you, till then you can share your thoughts with your peers.
          </p>

          <button
            onClick={onWriteMessage}
            className={styles.thoughtsButton}
          >
            <span className={styles.thoughtsButtonText}>
              Write a message
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThoughtsWidget;