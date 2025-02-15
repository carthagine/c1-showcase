import styles from "./Sidebar.module.css";
import AddProject from "../../public/add-project.svg";
import ProjectItem from "./ProjectItem";
import { carthagineLog } from "carthagine/debug";

export type Project = {
  id: string;
  name: string;
  // The project color is stored as a CSS string (e.g., "rgb(122, 197, 85)")
  color: string;
};

export interface ProjectsListProps {
  /** List of all available projects */
  projects: Project[];
  /** ID of the currently selected project */
  selectedProjectId: string;
  /** Called when a project is selected from the list */
  onSelectProject: (projectId: string) => void;
  /** Called when the add project button is clicked */
  onAddProject: () => void;
}

/**
 * Displays a list of projects in the sidebar with a header and add button.
 * Renders each project as a ProjectItem component and handles project selection.
 */
const ProjectsList = ({
  projects,
  selectedProjectId,
  onSelectProject,
  onAddProject,
}: ProjectsListProps) => {
  const handleOptionsClick = (projectId: string) => {
    carthagineLog('Project options clicked:', projectId);
  };

  return (
    <div className={styles.projectsListContainer}>
      <div className={styles.projectsListHeader}>
        <span className={styles.projectsListTitle}>
          my projects
        </span>
        <button
          onClick={onAddProject}
          className={styles.projectsListAddButton}
        >
          <AddProject className={styles.projectsListAddIcon} />
        </button>
      </div>

      <div className={styles.projectsListGrid}>
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            selected={project.id === selectedProjectId}
            onSelectProject={onSelectProject}
            onOptionsClick={handleOptionsClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;