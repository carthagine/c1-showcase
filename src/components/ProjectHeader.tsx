import styles from "./MainContent.module.css";
import cx from "classnames";
import EditProject from "../../public/edit-project.svg";
import ShareProject from "../../public/share-project.svg";

export interface ProjectHeaderProps {
  /** The name of the current project to display */
  projectName: string;
  /** Fired when the edit project button is clicked */
  onEditProject: () => void;
  /** Fired when the share project button is clicked */
  onShareProject: () => void;
  /** Optional className for the container */
  className?: string;
}

/**
 * ProjectHeader displays the current project's title and action buttons.
 * Located at the top of the ProjectBoard, it provides controls for editing
 * and sharing the current project.
 */
const ProjectHeader = ({
  projectName,
  onEditProject,
  onShareProject,
  className
}: ProjectHeaderProps) => {
  return (
    <div className={cx(styles.projectHeaderContainer, className)}>
      <h1 className={styles.projectHeaderTitle}>
        {projectName}
      </h1>
      
      <div className={styles.projectHeaderActions}>
        <button
          onClick={onEditProject}
          className={styles.projectHeaderButton}
          aria-label="Edit project"
        >
          <EditProject className={styles.projectHeaderIcon} />
        </button>
        
        <button
          onClick={onShareProject}
          className={styles.projectHeaderButton}
          aria-label="Share project"
        >
          <ShareProject className={styles.projectHeaderIcon} />
        </button>
      </div>
    </div>
  );
};

export default ProjectHeader;