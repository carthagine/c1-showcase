import cx from "classnames";
import styles from "./MainContent.module.css";
import DropdownIcon from "../../public/dropdown.svg";

export type User = {
  id: string;
  name: string;
  location: string;
  avatarUrl: string;
};

export interface UserProfileProps {
  /** The current user's information */
  user: User;
  /** Callback fired when the profile section is clicked */
  onProfileClick: () => void;
  /** Optional className for the container */
  className?: string;
}

/**
 * UserProfile displays the current user's information in the header, including their
 * name, location, and avatar. The entire component is clickable to trigger profile actions.
 */
const UserProfile = ({ 
  user, 
  onProfileClick,
  className 
}: UserProfileProps) => {
  return (
    <button
      onClick={onProfileClick}
      className={cx(
        styles.userProfileButton,
        className
      )}
    >
      <div className={styles.userProfileInfo}>
        <div className={styles.userProfileName}>
          {user.name}
        </div>
        <div className={styles.userProfileLocation}>
          {user.location}
        </div>
      </div>

      <img 
        src={user.avatarUrl}
        alt={`${user.name}'s avatar`}
        className={styles.userProfileAvatar}
      />

      <DropdownIcon 
        className={styles.userProfileDropdown}
        aria-hidden="true"
      />
    </button>
  );
};

export default UserProfile;