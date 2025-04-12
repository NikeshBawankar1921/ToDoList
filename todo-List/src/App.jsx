import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importing the TaskProvider to wrap the app with global task state management
import { TaskProvider } from './components/TaskContext';

// Importing all the individual page components
import CreateTask from './components/CreateTask';
import AllTasks from './components/AllTasks';
import PendingTasks from './components/PendingTasks';
import CompletedTasks from './components/CompletedTasks';

// Root App component
function App() {
  return (
    // Wrapping the entire app inside TaskProvider to make task state accessible via context
    <TaskProvider>
      {/* Setting up React Router for page navigation */}
      <Router>
        <Routes>
          {/* Route for CreateTask component (home page) */}
          <Route path="/" element={<CreateTask />} />

          {/* Route for displaying all tasks */}
          <Route path="/alltask" element={<AllTasks />} />

          {/* Route for displaying pending tasks */}
          <Route path="/pending" element={<PendingTasks />} />

          {/* Route for displaying completed tasks */}
          <Route path="/completedTasks" element={<CompletedTasks />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;
