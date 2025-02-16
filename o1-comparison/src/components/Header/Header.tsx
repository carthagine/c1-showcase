import React from 'react';
import { FiCalendar, FiBell } from 'react-icons/fi';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search for anything..." />
      </div>
      <div className={styles.actions}>
        <button aria-label="Calendar">
          <FiCalendar />
        </button>
        <button aria-label="Notifications">
          <FiBell />
        </button>
        <div className={styles.userInfo}>
          <div className={styles.userText}>
            <p className={styles.name}>Anima Agrawal</p>
            <p className={styles.location}>U.P, India</p>
          </div>
          <div className={styles.avatar} />
        </div>
      </div>
    </header>
  );
};

export default Header;