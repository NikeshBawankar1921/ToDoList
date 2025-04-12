import React, { createContext, useState } from 'react';

// Creating a new context for task management
export const TaskContext = createContext();

// TaskProvider component to wrap around the app and provide task-related data & functions
export function TaskProvider({ children }) {
  // Local state to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task to the task list
  const addTask = (task) => {
    setTasks(prev => [...prev, task]);
  };

  // Function to mark a specific task as completed based on its ID
  const markAsCompleted = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: true, completedAt: new Date().toISOString() } // Add completion timestamp
          : task
      )
    );
  };

  // Function to delete a specific task by its ID
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  // Function to edit/update a specific task's details based on its ID
  const editTask = (id, updatedTask) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, ...updatedTask } // Merge existing task with new updates
          : task
      )
    );
  };

  return (
    // Providing task list and management functions to all child components via context
    <TaskContext.Provider value={{ tasks, addTask, markAsCompleted, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
}
