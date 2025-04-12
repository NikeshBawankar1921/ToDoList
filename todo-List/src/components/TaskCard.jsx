import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

// TaskCard component to display individual task details
export default function TaskCard({ task }) {
  // Accessing context functions for marking a task completed and deleting a task
  const { markAsCompleted, deleteTask } = useContext(TaskContext);

  return (
    // Card container with styling
    <div className="p-4 m-4 bg-white rounded-xl shadow-lg space-y-2 border-2 border-purple-400">
      
      {/* Task title */}
      <h3 className="font-bold text-xl">{task.title}</h3>

      {/* Task description */}
      <p>{task.description}</p>

      {/* Task creation time, formatted */}
      <p><b>Created At:</b> {new Date(task.createdAt).toLocaleString()}</p>

      {/* Task deadline, formatted */}
      <p><b>Deadline:</b> {new Date(task.deadline).toLocaleString()}</p>

      {/* Task priority */}
      <p><b>Priority:</b> {task.priority}</p>

      {/* Task status */}
      <p><b>Status:</b> {task.completed ? 'Completed' : 'Pending'}</p>

      {/* Button to mark the task as completed */}
      <button
        onClick={() => markAsCompleted(task.id)}
        className="px-2 py-1 bg-green-500 text-white rounded"
      >
        Complete
      </button>

      {/* Button to delete the task */}
      <button
        onClick={() => deleteTask(task.id)}
        className="px-2 py-1 bg-red-500 text-white rounded ml-2"
      >
        Delete
      </button>
    </div>
  );
}
