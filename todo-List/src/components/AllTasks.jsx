import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';
import Header from './Header';
import TaskCard from './TaskCard';

// Component to display all the tasks (both completed and pending)
export default function AllTasks() {
  // Access the global task list from context
  const { tasks } = useContext(TaskContext);

  return (
    <>
      {/* Page header/navigation bar */}
      <Header />

      {/* Heading for the all tasks section */}
      <h2 className="text-2xl m-4">All Tasks</h2>

      {/* Map through all tasks and render a TaskCard for each */}
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
}
