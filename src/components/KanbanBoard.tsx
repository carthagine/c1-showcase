import { useMemo } from "react";
import styles from "./MainContent.module.css";
import KanbanColumn from "@/components/KanbanColumn";
import { User } from "@/components/UserProfile";

export type Task = {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  order: number;
  imageUrl?: string;
  assignedTo: string[];
  commentsCount: number;
  filesCount: number;
};

export type TaskStatus = "todo" | "inProgress" | "done";

export type TaskPriority = "low" | "high" | "completed";

export interface KanbanBoardProps {
  /** Full list of tasks to be split into columns */
  tasks: Task[];
  /** Map of user IDs to User objects for resolving task assignments */
  assignedUsersMap: Record<string, User>;
  /** Called when the Add Task button is clicked in any column */
  onAddTask: (status: TaskStatus) => void;
  /** Called when a task card is clicked */
  onTaskClick: (taskId: string) => void;
  /** Called when a task's options menu is clicked */
  onTaskOptionsClick: (taskId: string) => void;
  /** Optional callback for when tasks are reordered via drag and drop */
  onReorderTasks?: (updatedTasks: Task[]) => void;
}

/**
 * KanbanBoard displays tasks organized in three columns (Todo, In Progress, Done).
 * It handles filtering and sorting tasks into the appropriate columns and forwards
 * all necessary events to the KanbanColumn components.
 */
const KanbanBoard = ({
  tasks,
  assignedUsersMap,
  onAddTask,
  onTaskClick,
  onTaskOptionsClick,
  onReorderTasks,
}: KanbanBoardProps) => {
  const { todoTasks, inProgressTasks, doneTasks } = useMemo(() => {
    const filterAndSort = (status: TaskStatus) => 
      tasks
        .filter(task => task.status === status)
        .sort((a, b) => a.order - b.order);

    return {
      todoTasks: filterAndSort('todo'),
      inProgressTasks: filterAndSort('inProgress'),
      doneTasks: filterAndSort('done'),
    };
  }, [tasks]);

  const columns = [
    {
      status: 'todo' as const,
      tasks: todoTasks,
      title: 'To Do',
      color: 'rgb(80, 48, 229)',
    },
    {
      status: 'inProgress' as const,
      tasks: inProgressTasks,
      title: 'On Progress',
      color: 'rgb(255, 165, 0)',
    },
    {
      status: 'done' as const,
      tasks: doneTasks,
      title: 'Done',
      color: 'rgb(118, 165, 234)',
    },
  ];

  return (
    <div className={styles.kanbanBoard}>
      {columns.map(({ status, tasks, title, color }) => (
        <KanbanColumn
          key={status}
          status={status}
          tasks={tasks}
          assignedUsersMap={assignedUsersMap}
          onAddTask={onAddTask}
          onTaskClick={onTaskClick}
          onTaskOptionsClick={onTaskOptionsClick}
          onReorderTasks={onReorderTasks}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;