import React from 'react';
import { FiHome, FiMessageSquare, FiCheckSquare, FiUsers, FiSettings } from 'react-icons/fi';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo} />
        <h2 className={styles.logoText}>Project M.</h2>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li><a href="#"><FiHome /> Home</a></li>
          <li><a href="#"><FiMessageSquare /> Messages</a></li>
          <li><a href="#"><FiCheckSquare /> Tasks</a></li>
          <li><a href="#"><FiUsers /> Members</a></li>
          <li><a href="#"><FiSettings /> Settings</a></li>
        </ul>
      </nav>

      <div className={styles.projects}>
        <h3>MY PROJECTS</h3>
        <ul>
          <li className={styles.active}>Mobile App</li>
          <li>Website Redesign</li>
          <li>Design System</li>
          <li>Wireframes</li>
        </ul>
      </div>

      <div className={styles.thoughtsCard}>
        <div className={styles.lightBulb} />
        <h4>Thoughts Time</h4>
        <p>
          We don’t have any notice for you, till then you can share your thoughts with your peers.
        </p>
        <button>Write a message</button>
      </div>
    </aside>
  );
};

export default Sidebar;