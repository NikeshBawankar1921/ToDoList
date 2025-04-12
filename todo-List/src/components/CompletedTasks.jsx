import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';
import Header from './Header';
import TaskCard from './TaskCard';

// Component to display the list of completed tasks
export default function CompletedTasks() {
  // Access the global task list from context
  const { tasks } = useContext(TaskContext);

  // Filter out only the completed tasks
  const completed = tasks.filter(task => task.completed);

  return (
    <>
      {/* Page header/navigation bar */}
      <Header />

      {/* Heading for the completed tasks section */}
      <h2 className="text-2xl m-4">Completed Tasks</h2>

      {/* Map through the completed tasks and render a TaskCard for each */}
      {completed.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
}
