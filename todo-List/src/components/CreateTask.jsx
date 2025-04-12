import React, { useState, useContext } from 'react';
// Importing the TaskContext to access task management functions
import { TaskContext } from './TaskContext';
import Header from './Header';

// Component for creating a new task
export default function CreateTask() {
  // Local state to manage task input fields bassically key : value 
  const [task, setTask] = useState({
    title: '',
    description: '',
    deadline: '',
    priority: 'Low'
  });

  // Accessing the addTask function from the TaskContext
  const { addTask } = useContext(TaskContext);

  // Function to handle task addition
  const handleAddTask = () => {
    // Basic validation: check if title and deadline are provided
    if (!task.title || !task.deadline)
      return alert("Title and Deadline are required");

    // Add the task with additional details like id, timestamp, and completion status
    addTask({
      ...task,
      id: Date.now(), // Using current timestamp as a unique id
      createdAt: new Date().toISOString(), // ISO format timestamp
      completed: false // By default, task is not completed
    });

    // Clear the form inputs after adding the task
    setTask({
      title: '',
      description: '',
      deadline: '',
      priority: 'Low'
    });
  };

  return (
    <>
      <Header />
      {/* Task creation form container */}
      <div className="m-6 p-4 space-y-3 bg-gradient-to-tr from-sky-900 to-emerald-700 rounded-xl shadow-md text-white">
        <h2 className="text-xl font-semibold text-center text-white">Create a New Task</h2>

        {/* Input for task title */}
        <input
          className="w-full p-2 rounded border"
          placeholder="Task Title"
          value={task.title}
          onChange={e => setTask({ ...task, title: e.target.value })}
        />

        {/* Textarea for task description */}
        <textarea
          className="w-full p-2 rounded border"
          placeholder="Description"
          value={task.description}
          onChange={e => setTask({ ...task, description: e.target.value })}
        ></textarea>

        {/* Input for deadline (datetime-local type) */}
        <input
          type="datetime-local"
          className="w-full p-2 rounded border"
          value={task.deadline}
          onChange={e => setTask({ ...task, deadline: e.target.value })}
        />

        {/* Dropdown for selecting task priority */}
        <select
          className="w-full p-2 rounded border"
          value={task.priority}
          onChange={e => setTask({ ...task, priority: e.target.value })}
        >
          <option className='text-black'>Low</option>
          <option className='text-black'>Medium</option>
          <option className='text-black'>High</option>
        </select>

        {/* Button to add the task */}
        <button
          onClick={handleAddTask}
          className="w-full py-2 rounded bg-gradient-to-r from-purple-500 to-cyan-900 text-white"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
