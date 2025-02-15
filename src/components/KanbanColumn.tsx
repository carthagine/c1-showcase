import styles from "./MainContent.module.css";
import cx from "classnames";
import TaskCard from "@/components/TaskCard";
import AddTask from "../../public/add-task.svg";
import { Task, TaskStatus } from "@/components/KanbanBoard";
import { User } from "@/components/UserProfile";

/**
 * KanbanColumn represents a single column in the Kanban board.
 * It displays a list of tasks filtered by status, with the ability to add new tasks.
 */
export type KanbanColumnProps = {
  /** The status this column represents (todo, inProgress, done) */
  status: TaskStatus;
  /** Array of tasks to display in this column - will be sorted by order */
  tasks: Task[];
  /** Map of user IDs to User objects for resolving task assignments */
  assignedUsersMap: Record<string, User>;
  /** Called when the "Add Task" button is clicked */
  onAddTask: (status: TaskStatus) => void;
  /** Called when a task card is clicked */
  onTaskClick: (taskId: string) => void;
  /** Called when a task's options menu is clicked */
  onTaskOptionsClick: (taskId: string) => void;
  /** Optional callback for when tasks are reordered via drag and drop */
  onReorderTasks?: (updatedTasks: Task[]) => void;
};

// Status-specific styling configurations
const STATUS_CONFIGS = {
  todo: {
    color: 'rgb(80, 48, 229)',
    title: 'To Do'
  },
  inProgress: {
    color: 'rgb(255, 165, 0)',
    title: 'On Progress'
  },
  done: {
    color: 'rgb(118, 165, 234)',
    title: 'Done'
  }
} as const;

const KanbanColumn = ({
  status,
  tasks,
  assignedUsersMap,
  onAddTask,
  onTaskClick,
  onTaskOptionsClick,
  onReorderTasks
}: KanbanColumnProps) => {
  const sortedTasks = [...tasks].sort((a, b) => a.order - b.order);
  const { color, title } = STATUS_CONFIGS[status];

  return (
    <div className={styles.kanbanColumn}>
      <div className={styles.kanbanColumnHeader}>
        <div className={styles.kanbanColumnTitle}>
          <div 
            className={styles.kanbanColumnDot}
            style={{ backgroundColor: color }}
          />
          <span className={styles.kanbanColumnName}>
            {title}
          </span>
        </div>
        <div className={styles.kanbanColumnCount}>
          <span>{tasks.length}</span>
        </div>
      </div>

      <div 
        className={styles.kanbanColumnBorder}
        style={{ borderColor: color }}
      />

      <div className={styles.kanbanColumnTasks}>
        {sortedTasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            assignedUsers={task.assignedTo.map(id => assignedUsersMap[id]).filter(Boolean)}
            onTaskClick={onTaskClick}
            onOptionsClick={onTaskOptionsClick}
          />
        ))}
      </div>

      <button
        onClick={() => onAddTask(status)}
        className={styles.kanbanColumnAddTask}
      >
        <AddTask className={styles.kanbanColumnAddTaskIcon} />
      </button>
    </div>
  );
};

export default KanbanColumn;