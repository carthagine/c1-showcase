import { FC } from "react";
import cx from "classnames";
import Comments from "../../public/comments.svg";
import Files from "../../public/files.svg";
import { Task } from "./KanbanBoard";
import { User } from "./UserProfile";
import styles from "./MainContent.module.css";

/**
 * TaskCard displays a single task in a Kanban board column.
 * It shows the task's priority, title, description, assigned users, and metadata.
 */
export interface TaskCardProps {
  /** The task data to display */
  task: Task;
  /** Array of User objects corresponding to task.assignedTo IDs */
  assignedUsers: User[];
  /** Fired when the card is clicked, typically to show task details */
  onTaskClick: (taskId: string) => void;
  /** Fired when the options menu is clicked */
  onOptionsClick: (taskId: string) => void;
}

const TaskCard: FC<TaskCardProps> = ({
  task,
  assignedUsers,
  onTaskClick,
  onOptionsClick,
}) => {
  const getPriorityClasses = (priority: string) => {
    const baseClasses = {
      low: [styles.taskCardPriorityLow, styles.taskCardPriorityLowText],
      high: [styles.taskCardPriorityHigh, styles.taskCardPriorityHighText],
      completed: [styles.taskCardPriorityCompleted, styles.taskCardPriorityCompletedText],
    };
    return baseClasses[priority as keyof typeof baseClasses] || [];
  };

  return (
    <div
      onClick={() => onTaskClick(task.id)}
      className={styles.taskCard}
    >
      <div className={styles.taskCardHeader}>
        <div className={cx(styles.taskCardPriority, ...getPriorityClasses(task.priority))}>
          <span>
            {task.priority === 'completed' ? 'Completed' : task.priority === 'high' ? 'High' : 'Low'}
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOptionsClick(task.id);
          }}
          className={styles.taskCardOptions}
          aria-label="Task options"
        >
          . . .
        </button>
      </div>

      <h3 className={styles.taskCardTitle}>
        {task.title}
      </h3>

      {task.description && (
        <p className={styles.taskCardDescription}>
          {task.description}
        </p>
      )}

      {task.imageUrl && (
        <img
          src={task.imageUrl}
          alt=""
          className={styles.taskCardImage}
          style={{ height: task.description ? '110px' : '180px' }}
        />
      )}

      <div className={styles.taskCardFooter}>
        <div className={styles.taskCardAssignees}>
          {assignedUsers.map((user, index) => (
            <img
              key={user.id}
              src={user.avatarUrl}
              alt={user.name}
              className={styles.taskCardAvatar}
              style={{ zIndex: assignedUsers.length - index }}
            />
          ))}
        </div>

        <div className={styles.taskCardMetadata}>
          <div className={styles.taskCardMetadataItem}>
            <Comments className={styles.taskCardIcon} />
            <span>{task.commentsCount} comments</span>
          </div>
          <div className={styles.taskCardMetadataItem}>
            <Files className={styles.taskCardIcon} />
            <span>{task.filesCount} files</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
