import React, { useState } from "react";
import styles from "./ProjectDashboard.module.css";
import { NavigationSection } from "@/components/MainNavigation";
import { Project } from "@/components/ProjectsList";
import { Task, TaskStatus } from "@/components/KanbanBoard";
import { FilterState } from "@/components/DashboardHeader";
import { BoardViewMode } from "@/components/ProjectBoard";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import { User } from "@/components/UserProfile";
import { RootState } from "@/components/ProjectDashboard";
import { carthagineLog, carthagineInspect } from "carthagine/debug";

export type RootState = {
  currentSection: NavigationSection;
  currentUser: User;
  teamMembers: User[];
  projects: Project[];
  selectedProjectId: string;
  tasks: Task[];
  filters: FilterState;
  boardViewMode: BoardViewMode;
};

/**
 * Main dashboard component that manages the application state and layout
 */
const ProjectDashboard: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<NavigationSection>(
    initialState.currentSection
  );
  const [currentUser, setCurrentUser] = useState(initialState.currentUser);
  const [teamMembers, setTeamMembers] = useState(initialState.teamMembers);
  const [projects, setProjects] = useState<Project[]>(initialState.projects);
  const [selectedProjectId, setSelectedProjectId] = useState(
    initialState.selectedProjectId
  );
  const [tasks, setTasks] = useState<Task[]>(initialState.tasks);
  const [filters, setFilters] = useState<FilterState>(initialState.filters);
  const [boardViewMode, setBoardViewMode] = useState<BoardViewMode>(
    initialState.boardViewMode
  );
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  
  // DEBUG: Shows Carthagine's state inspector to help you find your way around,
  //        debug and make sure everything is in order. You can remove this later.
  carthagineInspect("ProjectDashboard", {
      currentSection,
      currentUser,
      teamMembers,
      projects,
      selectedProjectId,
      tasks,
      filters,
      boardViewMode,
      isSidebarCollapsed
    });

  const currentProject: Project =
    projects.find((p) => p.id === selectedProjectId) || projects[0];

  const filteredTasks = tasks.filter(
    (task) =>
      task.projectId === selectedProjectId &&
      task.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
  );

  const assignedUsersMap = teamMembers.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {} as Record<string, typeof teamMembers[number]>);

  // Event Handlers
  const handleToggleCollapse = () => {
    carthagineLog("Sidebar collapse toggled");
    setIsSidebarCollapsed((prev) => !prev);
  };

  const handleSelectSection = (section: NavigationSection) => {
    carthagineLog("Navigation section selected:", section);
    setCurrentSection(section);
  };

  const handleSelectProject = (projectId: string) => {
    carthagineLog("Project selected:", projectId);
    setSelectedProjectId(projectId);
  };

  const handleAddProject = () => {
    const projectName = prompt("Enter new project name:");
    if (projectName) {
      const newProject: Project = {
        id: `project-${Date.now()}`,
        name: projectName,
        color: "rgb(0, 128, 128)",
      };
      setProjects([...projects, newProject]);
      carthagineLog("Added new project:", newProject);
    }
  };

  const handleWriteMessage = () => {
    carthagineLog("Write a message clicked");
  };

  const handleSearchChange = (newQuery: string) => {
    carthagineLog("Search query updated:", newQuery);
    setFilters((prev) => ({
      ...prev,
      searchQuery: newQuery,
    }));
  };

  const handleCalendarClick = () => {
    carthagineLog("Calendar icon clicked");
  };

  const handleMessagesClick = () => {
    carthagineLog("Messages icon clicked");
  };

  const handleNotificationsClick = () => {
    carthagineLog("Notifications icon clicked");
  };

  const handleProfileClick = () => {
    carthagineLog("Profile section clicked");
  };

  const handleEditProject = () => {
    carthagineLog("Edit project clicked");
  };

  const handleShareProject = () => {
    carthagineLog("Share project clicked");
  };

  const handleTaskFilterSelect = (selectedFilter: string) => {
    carthagineLog("Task filter selected:", selectedFilter);
    setFilters((prev) => ({
      ...prev,
      taskFilter: selectedFilter,
    }));
  };

  const handleDateFilterSelect = (selectedDate: string) => {
    carthagineLog("Date filter selected:", selectedDate);
    setFilters((prev) => ({
      ...prev,
      dateFilter: selectedDate,
    }));
  };

  const handleShareClick = () => {
    carthagineLog("Toolbar share clicked");
  };

  const handleViewModeToggle = (newMode: BoardViewMode) => {
    carthagineLog("View mode toggled to:", newMode);
    setBoardViewMode(newMode);
  };

  const handleAddTask = (status: TaskStatus) => {
    carthagineLog("Add Task clicked for status:", status);
    const title = prompt("Enter new task title:");
    if (title) {
      const order = tasks.filter((t) => t.status === status).length + 1;
      const newTask: Task = {
        id: `task-${Date.now()}`,
        projectId: selectedProjectId,
        title,
        description: "",
        status,
        priority: status === "done" ? "completed" : "low",
        order,
        assignedTo: [],
        commentsCount: 0,
        filesCount: 0,
      };
      setTasks([...tasks, newTask]);
      carthagineLog("Added new task:", newTask);
    }
  };

  const handleTaskClick = (taskId: string) => {
    carthagineLog("Task card clicked:", taskId);
  };

  const handleTaskOptionsClick = (taskId: string) => {
    carthagineLog("Task options clicked for task:", taskId);
  };

  const handleReorderTasks = (updatedTasks: Task[]) => {
    carthagineLog("Tasks reordered");
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.container}>
      <Sidebar
        currentSection={currentSection}
        projects={projects}
        selectedProjectId={selectedProjectId}
        onToggleCollapse={handleToggleCollapse}
        onSelectSection={handleSelectSection}
        onSelectProject={handleSelectProject}
        onAddProject={handleAddProject}
        onWriteMessage={handleWriteMessage}
      />
      <MainContent
        searchQuery={filters.searchQuery}
        onSearchChange={handleSearchChange}
        currentUser={currentUser}
        tasks={filteredTasks}
        project={currentProject}
        filters={filters}
        boardViewMode={boardViewMode}
        assignedUsersMap={assignedUsersMap}
        onCalendarClick={handleCalendarClick}
        onMessagesClick={handleMessagesClick}
        onNotificationsClick={handleNotificationsClick}
        onProfileClick={handleProfileClick}
        onEditProject={handleEditProject}
        onShareProject={handleShareProject}
        onTaskFilterSelect={handleTaskFilterSelect}
        onDateFilterSelect={handleDateFilterSelect}
        onShareClick={handleShareClick}
        onViewModeToggle={handleViewModeToggle}
        onAddTask={handleAddTask}
        onTaskClick={handleTaskClick}
        onTaskOptionsClick={handleTaskOptionsClick}
        onReorderTasks={handleReorderTasks}
      />
    </div>
  );
};

export default ProjectDashboard;

// === State initialization ===

// Function to get the initial state of the application based on the provided mockup

export function getInitialState(): RootState {
  return {
    currentSection: "tasks",
    currentUser: {
      id: "user-1",
      name: "Anima Agrawal",
      location: "U.P, India",
      avatarUrl: "/user-avatar.png",
    },
    teamMembers: [
      { id: "user-1", name: "Anima Agrawal", location: "U.P, India", avatarUrl: "/avatar-1.png" },
      { id: "user-2", name: "John Doe", location: "New York, USA", avatarUrl: "/avatar-2.png" },
      { id: "user-3", name: "Jane Smith", location: "London, UK", avatarUrl: "/avatar-3.png" },
    ],
    projects: [
      { id: "project-1", name: "Mobile App", color: "rgb(122, 197, 85)" },
      { id: "project-2", name: "Website Redesign", color: "rgb(255, 165, 0)" },
      { id: "project-3", name: "Design System", color: "rgb(228, 204, 253)" },
      { id: "project-4", name: "Wireframes", color: "rgb(118, 165, 234)" },
    ],
    selectedProjectId: "project-1",
    tasks: [
      {
        id: "task-1",
        projectId: "project-1",
        title: "Brainstorming",
        description: "Brainstorming brings team members' diverse experience into play.",
        status: "todo",
        priority: "low",
        order: 1,
        assignedTo: ["user-1", "user-2", "user-3"],
        commentsCount: 12,
        filesCount: 0,
      },
      {
        id: "task-2",
        projectId: "project-1",
        title: "Research",
        description: "User research helps you to create an optimal product for users.",
        status: "todo",
        priority: "high",
        order: 2,
        assignedTo: ["user-1", "user-2"],
        commentsCount: 10,
        filesCount: 3,
      },
      {
        id: "task-3",
        projectId: "project-1",
        title: "Onboarding Illustrations",
        description: "",
        status: "inProgress",
        priority: "low",
        order: 1,
        imageUrl: "/task-image.jpg",
        assignedTo: ["user-1", "user-2", "user-3"],
        commentsCount: 14,
        filesCount: 15,
      },
      {
        id: "task-4",
        projectId: "project-1",
        title: "Moodboard",
        description: "",
        status: "inProgress",
        priority: "low",
        order: 2,
        imageUrl: "/unsplash-BS-1XGRkIH4.png",
        assignedTo: ["user-1"],
        commentsCount: 9,
        filesCount: 10,
      },
      {
        id: "task-5",
        projectId: "project-1",
        title: "Mobile App Design",
        description: "",
        status: "done",
        priority: "completed",
        order: 1,
        imageUrl: "/completed-task-image.jpg",
        assignedTo: ["user-1", "user-2"],
        commentsCount: 12,
        filesCount: 15,
      },
      {
        id: "task-6",
        projectId: "project-1",
        title: "Design System",
        description: "It just needs to adapt the UI from what you did before",
        status: "done",
        priority: "completed",
        order: 2,
        assignedTo: ["user-1", "user-2", "user-3"],
        commentsCount: 12,
        filesCount: 15,
      },
    ],
    filters: {
      searchQuery: "",
      taskFilter: "Filter",
      dateFilter: "Today",
    },
    boardViewMode: "board",
  };
}

// === Initial state variable ===

export const initialState = getInitialState();