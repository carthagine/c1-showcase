import { useState } from "react";
import styles from "./MainContent.module.css";
import cx from "classnames";
import Filter from "../../public/filter.svg";
import Calendar from "../../public/calendar.svg";
import Share from "../../public/share.svg";
import BoardView from "../../public/board-view.svg";
import OptionsMenu from "../../public/options-menu.svg";
import Dropdown from "../../public/dropdown.svg";

export interface BoardToolbarProps {
  /** Current filter state containing taskFilter and dateFilter values */
  filters: {
    taskFilter: string;
    dateFilter: string;
  };
  /** Current board view mode (board/list) */
  boardViewMode: 'board' | 'list';
  /** Called when a task filter option is selected */
  onTaskFilterSelect: (selectedFilter: string) => void;
  /** Called when a date filter option is selected */
  onDateFilterSelect: (selectedDate: string) => void;
  /** Called when the share button is clicked */
  onShareClick: () => void;
  /** Called when the view mode is toggled */
  onViewModeToggle: (newMode: 'board' | 'list') => void;
}

/**
 * BoardToolbar provides filtering, sharing, and view mode controls for the Kanban board.
 * It allows users to filter tasks, select dates, share the board, and toggle between view modes.
 */
const BoardToolbar = ({
  filters,
  boardViewMode,
  onTaskFilterSelect,
  onDateFilterSelect,
  onShareClick,
  onViewModeToggle,
}: BoardToolbarProps) => {
  const [isTaskFilterOpen, setIsTaskFilterOpen] = useState(false);
  const [isDateFilterOpen, setIsDateFilterOpen] = useState(false);

  return (
    <div className={styles.boardToolbar}>
      <div className={styles.boardToolbarFilters}>
        <div className={styles.boardToolbarFilterGroup}>
          <button 
            className={styles.boardToolbarFilterButton}
            onClick={() => setIsTaskFilterOpen(!isTaskFilterOpen)}
          >
            <Filter className={styles.boardToolbarIcon} />
            <span className={styles.boardToolbarFilterText}>
              {filters.taskFilter}
            </span>
            <Dropdown className={styles.boardToolbarDropdownIcon} />
          </button>
          {isTaskFilterOpen && (
            <div className={styles.boardToolbarDropdownMenu}>
              {['All Tasks', 'Active', 'Completed'].map((option) => (
                <button
                  key={option}
                  className={styles.boardToolbarDropdownItem}
                  onClick={() => {
                    onTaskFilterSelect(option);
                    setIsTaskFilterOpen(false);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={styles.boardToolbarFilterGroup}>
          <button 
            className={styles.boardToolbarFilterButton}
            onClick={() => setIsDateFilterOpen(!isDateFilterOpen)}
          >
            <Calendar className={styles.boardToolbarIcon} />
            <span className={styles.boardToolbarFilterText}>
              {filters.dateFilter}
            </span>
            <Dropdown className={styles.boardToolbarDropdownIcon} />
          </button>
          {isDateFilterOpen && (
            <div className={styles.boardToolbarDropdownMenu}>
              {['Today', 'This Week', 'This Month'].map((option) => (
                <button
                  key={option}
                  className={styles.boardToolbarDropdownItem}
                  onClick={() => {
                    onDateFilterSelect(option);
                    setIsDateFilterOpen(false);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.boardToolbarControls}>
        <button
          onClick={onShareClick}
          className={styles.boardToolbarShareButton}
        >
          <Share className={styles.boardToolbarIcon} />
          <span className={styles.boardToolbarShareText}>Share</span>
        </button>

        <div className={styles.boardToolbarDivider} />

        <div className={styles.boardToolbarViewControls}>
          <button
            onClick={() => onViewModeToggle(boardViewMode === 'board' ? 'list' : 'board')}
            className={cx(styles.boardToolbarViewButton, {
              [styles.boardToolbarViewButtonActive]: boardViewMode === 'board'
            })}
          >
            <BoardView className={styles.boardToolbarViewIcon} />
          </button>
          <button className={styles.boardToolbarOptionsButton}>
            <OptionsMenu className={styles.boardToolbarOptionsIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardToolbar;