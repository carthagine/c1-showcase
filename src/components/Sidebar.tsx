import styles from "./Sidebar.module.css";
import cx from "classnames";
import SidebarHeader from "@/components/SidebarHeader";
import MainNavigation, { NavigationSection } from "@/components/MainNavigation";
import ProjectsList, { Project } from "@/components/ProjectsList";
import ThoughtsWidget from "@/components/ThoughtsWidget";

/**
 * Main sidebar component that combines navigation, projects list, and thoughts widget.
 * Handles all navigation and project selection interactions by passing appropriate
 * handlers to child components.
 */
export interface SidebarProps {
  /** Currently selected navigation section */
  currentSection: NavigationSection;
  /** List of all available projects */
  projects: Project[];
  /** ID of the currently selected project */
  selectedProjectId: string;
  /** Called when the sidebar collapse arrows are clicked */
  onToggleCollapse: () => void;
  /** Called when a navigation section is selected */
  onSelectSection: (section: NavigationSection) => void;
  /** Called when a project is selected from the list */
  onSelectProject: (projectId: string) => void;
  /** Called when the add project button is clicked */
  onAddProject: () => void;
  /** Called when the "Write a message" button is clicked */
  onWriteMessage: () => void;
}

const Sidebar = ({
  currentSection,
  projects,
  selectedProjectId,
  onToggleCollapse,
  onSelectSection,
  onSelectProject,
  onAddProject,
  onWriteMessage,
}: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <SidebarHeader onToggleCollapse={onToggleCollapse} />

      <MainNavigation
        currentSection={currentSection}
        onSelectSection={onSelectSection}
      />

      <div className={styles.sidebarDivider} />

      <ProjectsList
        projects={projects}
        selectedProjectId={selectedProjectId}
        onSelectProject={onSelectProject}
        onAddProject={onAddProject}
      />

      <div className={styles.thoughtsWidgetContainer}>
        <ThoughtsWidget onWriteMessage={onWriteMessage} />
      </div>
    </div>
  );
};

export default Sidebar;