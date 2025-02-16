import React from 'react';
import styles from './TaskCard.module.css';

export interface TaskCardProps {
  priority: string;
  title: string;
  description: string;
  avatars: string[];
  commentsCount: number;
  filesCount: number;
}

const TaskCard: React.FC<TaskCardProps> = ({
  priority,
  title,
  description,
  avatars,
  commentsCount,
  filesCount
}) => {
  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert('Context menu clicked');
  };

  return (
    <div className={styles.card}>
      {priority && (
        <div
          className={`${styles.priority} ${priority === 'High' ? styles.high : ''} ${
            priority === 'Completed' ? styles.completed : ''
          }`}
        >
          {priority}
        </div>
      )}
      <h3 className={styles.heading}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.bottomRow}>
        <div className={styles.avatarGroup}>
          {avatars.map((avatarUrl, i) => (
            <img src={avatarUrl} alt="Assignee Avatar" key={i} />
          ))}
        </div>
        <div className={styles.stats}>
          <span>{commentsCount} comments</span>
          <span>{filesCount} files</span>
        </div>
      </div>
      <button className={styles.menuButton} onClick={handleMenu}>•••</button>
    </div>
  );
};

export default TaskCard;
