import React from 'react';
import { FiLink2 } from 'react-icons/fi';
import { HiOutlineDatabase } from 'react-icons/hi';
import styles from './ProjectHeader.module.css';

const ProjectHeader: React.FC = () => {
  const handleFilter = () => alert('Filter clicked');
  const handleDateSelect = () => alert('Date menu opened');
  const handleInvite = () => alert('Invite dialog opened');
  const handleShare = () => alert('Share clicked');

  return (
    <div className={styles.projectHeader}>
      <div className={styles.titleRow}>
        <h1>Mobile App</h1>
        <div className={styles.iconRow}>
          <FiLink2 />
          <HiOutlineDatabase />
        </div>
      </div>
      <div className={styles.controlsRow}>
        <div className={styles.buttons}>
          <button onClick={handleFilter}>Filter ▾</button>
          <button onClick={handleDateSelect}>Today ▾</button>
        </div>
        <div className={styles.shareSection}>
          <button onClick={handleInvite}>Invite</button>
          <div className={styles.avatars}>
            <img src="https://i.pravatar.cc/30?img=10" alt="User" />
            <img src="https://i.pravatar.cc/30?img=11" alt="User" />
            <img src="https://i.pravatar.cc/30?img=12" alt="User" />
            <div className={styles.avatarMore}>+2</div>
          </div>
          <button onClick={handleShare} className={styles.shareBtn}>Share</button>
          <div className={styles.viewToggle}>
            <div className={styles.grid} />
            <div className={styles.list} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;