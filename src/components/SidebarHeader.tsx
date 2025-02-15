import styles from "./Sidebar.module.css";
import cx from "classnames";
import Logo from "../../public/logo.svg";
import BackArrow from "../../public/back-arrow.svg";

export interface SidebarHeaderProps {
  /** Callback fired when either of the collapse arrows are clicked */
  onToggleCollapse: () => void;
}

/**
 * Header section of the sidebar containing the logo, app name, and collapse controls.
 * Renders the logo with "Project M." text and two collapse arrow buttons that trigger
 * the sidebar collapse functionality when clicked.
 */
const SidebarHeader = ({ onToggleCollapse }: SidebarHeaderProps) => {
  return (
    <div className={styles.sidebarHeaderContainer}>
      <div className={styles.sidebarHeaderLogo}>
        <Logo className={styles.sidebarHeaderLogoIcon} />
        <span className={styles.sidebarHeaderTitle}>
          Project M.
        </span>
      </div>

      <div className={styles.sidebarHeaderControls}>
        <button
          onClick={onToggleCollapse}
          className={styles.sidebarHeaderCollapseButton}
          aria-label="Collapse sidebar"
        >
          <BackArrow />
        </button>
        <button
          onClick={onToggleCollapse}
          className={cx(styles.sidebarHeaderCollapseButton, styles.sidebarHeaderCollapseButtonSecond)}
          aria-label="Collapse sidebar"
        >
          <BackArrow />
        </button>
      </div>
    </div>
  );
};

export default SidebarHeader;