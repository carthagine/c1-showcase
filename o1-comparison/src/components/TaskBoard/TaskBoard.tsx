import React, { useState } from 'react';
import TaskColumn from '../TaskColumn/TaskColumn';
import styles from './TaskBoard.module.css';

const TaskBoard: React.FC = () => {
  // Example state to demonstrate boards
  const [columns] = useState([
    {
      title: 'To Do',
      color: '#907AFF', // purple
      items: [
        {
          priority: 'Low',
          title: 'Brainstorming',
          description: 'Brainstorming brings team members\' diverse experience into play.',
          avatars: [
            'https://i.pravatar.cc/30?img=14',
            'https://i.pravatar.cc/30?img=15',
            'https://i.pravatar.cc/30?img=16'
          ],
          commentsCount: 12,
          filesCount: 0
        },
        {
          priority: 'High',
          title: 'Research',
          description: 'User research helps you to create an optimal product for users.',
          avatars: [
            'https://i.pravatar.cc/30?img=17',
            'https://i.pravatar.cc/30?img=18',
          ],
          commentsCount: 10,
          filesCount: 3
        },
        {
          priority: 'High',
          title: 'Wireframes',
          description: 'Low fidelity wireframes include the most basic content and visuals.',
          avatars: [
            'https://i.pravatar.cc/30?img=19',
            'https://i.pravatar.cc/30?img=20',
            'https://i.pravatar.cc/30?img=21'
          ],
          commentsCount: 9,
          filesCount: 10
        }
      ]
    },
    {
      title: 'On Progress',
      color: '#FCAF3D', // orange
      items: [
        {
          priority: 'Low',
          title: 'Onboarding Illustrations',
          description: '',
          avatars: [
            'https://i.pravatar.cc/30?img=22',
            'https://i.pravatar.cc/30?img=23',
            'https://i.pravatar.cc/30?img=24'
          ],
          commentsCount: 14,
          filesCount: 15
        },
        {
          priority: 'Low',
          title: 'Moodboard',
          description: '',
          avatars: [
            'https://i.pravatar.cc/30?img=25',
          ],
          commentsCount: 9,
          filesCount: 10
        }
      ]
    },
    {
      title: 'Done',
      color: '#8BC48A', // green
      items: [
        {
          priority: 'Completed',
          title: 'Mobile App Design',
          description: '',
          avatars: [
            'https://i.pravatar.cc/30?img=26',
            'https://i.pravatar.cc/30?img=27'
          ],
          commentsCount: 12,
          filesCount: 15
        },
        {
          priority: 'Completed',
          title: 'Design System',
          description: 'It just needs to adapt the UI from what you did before',
          avatars: [
            'https://i.pravatar.cc/30?img=28',
            'https://i.pravatar.cc/30?img=29'
          ],
          commentsCount: 12,
          filesCount: 15
        }
      ]
    }
  ]);

  return (
    <div className={styles.board}>
      {columns.map((col) => (
        <TaskColumn
          key={col.title}
          title={col.title}
          color={col.color}
          items={col.items}
        />
      ))}
    </div>
  );
};

export default TaskBoard;