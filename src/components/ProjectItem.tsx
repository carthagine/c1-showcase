import { Project } from "./ProjectsList";
import styles from "./Sidebar.module.css";
import cx from "classnames";

export interface ProjectItemProps {
  /** The project to display */
  project: Project;
  /** Whether this project is currently selected */
  selected: boolean;
  /** Called when the project item is clicked */
  onSelectProject: (projectId: string) => void;
  /** Called when the project's options menu is clicked */
  onOptionsClick: (projectId: string) => void;
}

/**
 * Renders a single project item in the projects list sidebar.
 * Displays the project's color indicator, name, and an options menu.
 * Supports selection state and click handlers for both the project and its options.
 */
const ProjectItem = ({
  project,
  selected,
  onSelectProject,
  onOptionsClick,
}: ProjectItemProps) => {
  return (
    <div
      className={cx(styles.projectItemContainer, {
        [styles.projectItemSelected]: selected,
      })}
      onClick={() => onSelectProject(project.id)}
    >
      <div
        className={styles.projectItemColorDot}
        style={{ backgroundColor: project.color }}
      />

      <span
        className={cx(styles.projectItemName, {
          [styles.projectItemNameSelected]: selected,
        })}
      >
        {project.name}
      </span>

      {selected && (
        <button
          className={styles.projectItemOptionsButton}
          onClick={(e) => {
            e.stopPropagation();
            onOptionsClick(project.id);
          }}
        >
          . . .
        </button>
      )}
    </div>
  );
};

export default ProjectItem;