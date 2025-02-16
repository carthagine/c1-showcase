import React from 'react';
import TaskCard from '../TaskCard/TaskCard';
import styles from './TaskColumn.module.css';

interface TaskItem {
  priority: string;
  title: string;
  description: string;
  avatars: string[];
  commentsCount: number;
  filesCount: number;
}

interface TaskColumnProps {
  title: string;
  color: string;
  items: TaskItem[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, color, items }) => {
  return (
    <div className={styles.column}>
      <div className={styles.columnHeader}>
        <span className={styles.dot} style={{ backgroundColor: color }} />
        <h2>{title}</h2>
        <span className={styles.count}>{items.length}</span>
        <button className={styles.addButton}>+</button>
      </div>
      <div className={styles.cards}>
        {items.map((item, idx) => (
          <TaskCard
            key={idx}
            priority={item.priority}
            title={item.title}
            description={item.description}
            avatars={item.avatars}
            commentsCount={item.commentsCount}
            filesCount={item.filesCount}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;