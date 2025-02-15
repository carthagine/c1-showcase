import { FC } from "react";
import styles from "./MainContent.module.css";
import ProjectHeader from "@/components/ProjectHeader";
import BoardToolbar from "@/components/BoardToolbar";
import KanbanBoard, { Task, TaskStatus } from "@/components/KanbanBoard";
import { Project } from "@/components/ProjectsList";
import { FilterState } from "@/components/DashboardHeader";
import { User } from "@/components/UserProfile";

export type BoardViewMode = "board" | "list";

/**
 * ProjectBoard organizes the main project view, containing the project header,
 * board toolbar, and kanban board. It handles filtering tasks based on the search
 * query and forwards all necessary events to child components.
 */
export type ProjectBoardProps = {
  /** The current project's details */
  project: Project;
  /** Full list of tasks for the current project */
  tasks: Task[];
  /** Current filter state including search query */
  filters: FilterState;
  /** Current board view mode */
  boardViewMode: BoardViewMode;
  /** Map of user IDs to User objects for resolving task assignments */
  assignedUsersMap: Record<string, User>;
  /** Called when the edit project button is clicked */
  onEditProject: () => void;
  /** Called when the share project button is clicked */
  onShareProject: () => void;
  /** Called when a task filter option is selected */
  onTaskFilterSelect: (selectedFilter: string) => void;
  /** Called when a date filter option is selected */
  onDateFilterSelect: (selectedDate: string) => void;
  /** Called when the share button in toolbar is clicked */
  onShareClick: () => void;
  /** Called when the view mode is toggled */
  onViewModeToggle: (newMode: BoardViewMode) => void;
  /** Called when add task is clicked in any column */
  onAddTask: (status: TaskStatus) => void;
  /** Called when a task card is clicked */
  onTaskClick: (taskId: string) => void;
  /** Called when a task's options menu is clicked */
  onTaskOptionsClick: (taskId: string) => void;
  /** Called when tasks are reordered */
  onReorderTasks: (updatedTasks: Task[]) => void;
};

const ProjectBoard: FC<ProjectBoardProps> = ({
  project,
  tasks,
  filters,
  boardViewMode,
  assignedUsersMap,
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
}) => {
  const filteredTasks = tasks.filter(task => {
    if (!filters.searchQuery) return true;

    const query = filters.searchQuery.toLowerCase();
    return (
      task.title.toLowerCase().includes(query) ||
      task.description.toLowerCase().includes(query)
    );
  });

  return (
    <main className={styles.projectBoardContainer}>
      <ProjectHeader
        projectName={project.name}
        onEditProject={onEditProject}
        onShareProject={onShareProject}
        className={styles.projectBoardHeader}
      />

      <BoardToolbar
        filters={{
          taskFilter: filters.taskFilter,
          dateFilter: filters.dateFilter,
        }}
        boardViewMode={boardViewMode}
        onTaskFilterSelect={onTaskFilterSelect}
        onDateFilterSelect={onDateFilterSelect}
        onShareClick={onShareClick}
        onViewModeToggle={onViewModeToggle}
      />

      <KanbanBoard
        tasks={filteredTasks}
        assignedUsersMap={assignedUsersMap}
        onAddTask={onAddTask}
        onTaskClick={onTaskClick}
        onTaskOptionsClick={onTaskOptionsClick}
        onReorderTasks={onReorderTasks}
      />
    </main>
  );
};

export default ProjectBoard;