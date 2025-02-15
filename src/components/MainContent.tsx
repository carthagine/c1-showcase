import React from "react";
import styles from "./MainContent.module.css";
import cx from "classnames";
import DashboardHeader, { FilterState } from "@/components/DashboardHeader";
import ProjectBoard, { BoardViewMode } from "@/components/ProjectBoard";
import { User } from "@/components/UserProfile";
import { Task, TaskStatus } from "@/components/KanbanBoard";
import { Project } from "@/components/ProjectsList";

/**
 * MainContent serves as the primary container for the dashboard's main area,
 * composing the DashboardHeader and ProjectBoard components. It orchestrates
 * the flow of data and events between these components and the parent application.
 */
export type MainContentProps = {
  /** Current search query value */
  searchQuery: string;
  /** Handler for search query changes */
  onSearchChange: (newQuery: string) => void;
  /** Currently logged in user */
  currentUser: User;
  /** Current project's tasks */
  tasks: Task[];
  /** Current project details */
  project: Project;
  /** Current filter state */
  filters: FilterState;
  /** Current board view mode */
  boardViewMode: BoardViewMode;
  /** Map of user IDs to User objects */
  assignedUsersMap: Record<string, User>;
  /** Handler for calendar icon click */
  onCalendarClick: () => void;
  /** Handler for messages icon click */
  onMessagesClick: () => void;
  /** Handler for notifications icon click */
  onNotificationsClick: () => void;
  /** Handler for profile section click */
  onProfileClick: () => void;
  /** Handler for edit project button click */
  onEditProject: () => void;
  /** Handler for share project button click */
  onShareProject: () => void;
  /** Handler for task filter selection */
  onTaskFilterSelect: (selectedFilter: string) => void;
  /** Handler for date filter selection */
  onDateFilterSelect: (selectedDate: string) => void;
  /** Handler for share button click in toolbar */
  onShareClick: () => void;
  /** Handler for view mode toggle */
  onViewModeToggle: (newMode: BoardViewMode) => void;
  /** Handler for adding new tasks */
  onAddTask: (status: TaskStatus) => void;
  /** Handler for task click */
  onTaskClick: (taskId: string) => void;
  /** Handler for task options menu click */
  onTaskOptionsClick: (taskId: string) => void;
  /** Handler for task reordering */
  onReorderTasks: (updatedTasks: Task[]) => void;
  /** Optional className for styling */
  className?: string;
};

const MainContent: React.FC<MainContentProps> = ({
  searchQuery,
  onSearchChange,
  currentUser,
  tasks,
  project,
  filters,
  boardViewMode,
  assignedUsersMap,
  onCalendarClick,
  onMessagesClick,
  onNotificationsClick,
  onProfileClick,
  onEditProject,
  onShareProject,
  onTaskFilterSelect,
  onDateFilterSelect,
  onShareClick,
  onViewModeToggle,
  onAddTask,
  onTaskClick,
  onTaskOptionsClick,
  onReorderTasks,
  className,
}) => {
  return (
    <div className={cx(styles.mainContent, className)}>
      <DashboardHeader
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        user={currentUser}
        onCalendarClick={onCalendarClick}
        onMessagesClick={onMessagesClick}
        onNotificationsClick={onNotificationsClick}
        onProfileClick={onProfileClick}
        className={styles.dashboardHeader}
      />
      <ProjectBoard
        project={project}
        tasks={tasks}
        filters={filters}
        boardViewMode={boardViewMode}
        assignedUsersMap={assignedUsersMap}
        onEditProject={onEditProject}
        onShareProject={onShareProject}
        onTaskFilterSelect={onTaskFilterSelect}
        onDateFilterSelect={onDateFilterSelect}
        onShareClick={onShareClick}
        onViewModeToggle={onViewModeToggle}
        onAddTask={onAddTask}
        onTaskClick={onTaskClick}
        onTaskOptionsClick={onTaskOptionsClick}
        onReorderTasks={onReorderTasks}
        className={styles.projectBoard}
      />
    </div>
  );
};

export default MainContent;