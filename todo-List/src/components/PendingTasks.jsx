import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';
import Header from './Header';
import TaskCard from './TaskCard';

// Component to display the list of pending (incomplete) tasks
export default function PendingTasks() {
  // Access the global task list from context
  const { tasks } = useContext(TaskContext);

  // Filter out only the tasks that are not completed
  const pending = tasks.filter(task => !task.completed);

  return (
    <>
      {/* Page header/navigation bar */}
      <Header />

      {/* Heading for the pending tasks section */}
      <h2 className="text-2xl m-4">Pending Tasks</h2>

      {/* Map through the pending tasks and render a TaskCard for each */}
      {pending.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
}
