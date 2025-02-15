import styles from "./Sidebar.module.css";
import cx from "classnames";
import HomeIcon from "../../public/home.svg";
import MessagesIcon from "../../public/messages.svg";
import TasksIcon from "../../public/tasks.svg";
import MembersIcon from "../../public/members.svg";
import SettingsIcon from "../../public/settings.svg";

export type NavigationSection = "home" | "messages" | "tasks" | "members" | "settings";

export interface MainNavigationProps {
  /** The currently selected navigation section */
  currentSection: NavigationSection;
  /** Callback fired when a navigation item is clicked */
  onSelectSection: (section: NavigationSection) => void;
}

const NAV_ITEMS = [
  { section: 'home' as const, label: 'Home', Icon: HomeIcon },
  { section: 'messages' as const, label: 'Messages', Icon: MessagesIcon },
  { section: 'tasks' as const, label: 'Tasks', Icon: TasksIcon },
  { section: 'members' as const, label: 'Members', Icon: MembersIcon },
  { section: 'settings' as const, label: 'Settings', Icon: SettingsIcon },
] as const;

/**
 * MainNavigation component renders the primary navigation menu with items for Home, Messages, Tasks, Members, and Settings.
 * It highlights the current section and handles navigation item clicks.
 */
const MainNavigation = ({ currentSection, onSelectSection }: MainNavigationProps) => {
  return (
    <nav className={styles.navContainer}>
      {NAV_ITEMS.map(({ section, label, Icon }) => {
        const isSelected = section === currentSection;
        
        return (
          <button
            key={section}
            onClick={() => onSelectSection(section)}
            className={cx(styles.navItem, {
              [styles.navItemSelected]: isSelected
            })}
          >
            <Icon className={styles.navIcon} />
            <span className={styles.navLabel}>
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default MainNavigation;