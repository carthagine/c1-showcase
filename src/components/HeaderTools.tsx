import styles from "./MainContent.module.css";
import cx from "classnames";
import Calendar from "../../public/calendar.svg";
import MessageQuestion from "../../public/message-question.svg";
import Notification from "../../public/notification.svg";
import UserProfile, { User } from "./UserProfile";

/**
 * HeaderTools renders the utility icons and user profile section in the dashboard header.
 * Includes calendar, messages, and notifications icons, along with the user profile.
 * All elements are interactive with hover states.
 */
export interface HeaderToolsProps {
  /** Fired when the calendar icon is clicked */
  onCalendarClick: () => void;
  /** Fired when the messages icon is clicked */
  onMessagesClick: () => void;
  /** Fired when the notifications icon is clicked */
  onNotificationsClick: () => void;
  /** The current user's information, passed to UserProfile */
  user: User;
  /** Fired when the profile section is clicked */
  onProfileClick: () => void;
  /** Optional className for the container */
  className?: string;
}

const HeaderTools = ({
  onCalendarClick,
  onMessagesClick,
  onNotificationsClick,
  user,
  onProfileClick,
  className
}: HeaderToolsProps) => {
  return (
    <div className={cx(styles.headerToolsContainer, className)}>
      <button
        onClick={onCalendarClick}
        className={styles.headerToolsButton}
      >
        <Calendar className={styles.headerToolsIcon} />
      </button>
      
      <button
        onClick={onMessagesClick}
        className={styles.headerToolsButton}
      >
        <MessageQuestion className={styles.headerToolsIcon} />
      </button>
      
      <button
        onClick={onNotificationsClick}
        className={styles.headerToolsButton}
      >
        <Notification className={styles.headerToolsIcon} />
      </button>

      <UserProfile
        user={user}
        onProfileClick={onProfileClick}
        className={styles.headerToolsProfile}
      />
    </div>
  );
};

export default HeaderTools;