import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Header component for navigation bar
export default function Header() {
  // State to toggle mobile menu visibility
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="relative w-full">
      {/* Menu toggle button for small screens */}
      <button
        onClick={() => setMenuVisible(!menuVisible)}
        className="p-2 visible sm:hidden absolute top-2 left-2 z-20"
      >
        {/* Hamburger menu icon */}
        <img
          className="w-8 h-8"
          src="https://static.vecteezy.com/system/resources/previews/000/442/641/original/menu-vector-icon.jpg"
          alt="menu toggle"
        />
      </button>

      <br />

      {/* Navigation links */}
      <ul
        className={`fixed sm:sticky sm:to-0% sm:relative top-0 left-0 h-screen sm:h-fit w-fit sm:w-full bg-cyan-900 flex-col sm:flex-row flex-wrap p-2 sm:flex transition-all ${
          menuVisible ? 'flex' : 'hidden sm:flex'
        }`}
      >
        {/* Empty list item for spacing or potential future use */}
        <li className="m-4 px-4 py-2 "></li>

        {/* Navigation link to Create Task page */}
        <Link to="/">
          <li className="m-4 px-4 py-2 border-2 border-yellow-600 rounded-2xl text-white w-40 text-center hover:bg-yellow-600">
            Create Task
          </li>
        </Link>

        {/* Navigation link to All Tasks page */}
        <Link to="/alltask">
          <li className="m-4 px-4 py-2 border-2 border-yellow-600 rounded-2xl text-white w-40 text-center hover:bg-yellow-600">
            All Task
          </li>
        </Link>

        {/* Navigation link to Pending Tasks page */}
        <Link to="/pending">
          <li className="m-4 px-4 py-2 border-2 border-yellow-600 rounded-2xl text-white w-40 text-center hover:bg-yellow-600">
            Pending Tasks
          </li>
        </Link>

        {/* Navigation link to Completed Tasks page */}
        <Link to="/completedTasks">
          <li className="m-4 px-4 py-2 border-2 border-yellow-600 rounded-2xl text-white w-40 text-center hover:bg-yellow-600">
            Completed Tasks
          </li>
        </Link>
      </ul>
    </div>
  );
}
