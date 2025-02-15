import styles from "./MainContent.module.css";
import cx from "classnames";
import HeaderTools from "@/components/HeaderTools";
import { User } from "@/components/UserProfile";
import SearchIcon from "../../public/search.svg";

export type FilterState = {
  // The search query entered in the header's search bar.
  searchQuery: string;
  // The currently selected filter option from the tasks filter dropdown.
  taskFilter: string;
  // The currently selected date filter (e.g., "Today").
  dateFilter: string;
};

export interface DashboardHeaderProps {
  /** Current value of the search input */
  searchQuery: string;
  /** Callback fired when search input changes */
  onSearchChange: (newQuery: string) => void;
  /** Current user information passed to HeaderTools */
  user: User;
  /** Callback fired when calendar icon is clicked */
  onCalendarClick: () => void;
  /** Callback fired when messages icon is clicked */
  onMessagesClick: () => void;
  /** Callback fired when notifications icon is clicked */
  onNotificationsClick: () => void;
  /** Callback fired when profile section is clicked */
  onProfileClick: () => void;
  /** Optional className for the container */
  className?: string;
}

/**
 * DashboardHeader component renders the top bar of the main content area,
 * containing a search input and utility tools (calendar, messages, notifications, profile).
 * The search functionality is controlled externally via props.
 */
const DashboardHeader = ({
  searchQuery,
  onSearchChange,
  user,
  onCalendarClick,
  onMessagesClick,
  onNotificationsClick,
  onProfileClick,
  className,
}: DashboardHeaderProps) => {
  return (
    <header className={cx(styles.dashboardHeader, className)}>
      <div className={styles.searchContainer}>
        <label htmlFor="search" className={styles.searchLabel}>
          Search
        </label>
        <div className={styles.searchInputWrapper}>
          <SearchIcon className={styles.searchIcon} />
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search for anything..."
            className={styles.searchInput}
          />
        </div>
      </div>

      <HeaderTools
        user={user}
        onCalendarClick={onCalendarClick}
        onMessagesClick={onMessagesClick}
        onNotificationsClick={onNotificationsClick}
        onProfileClick={onProfileClick}
      />
    </header>
  );
};

export default DashboardHeader;