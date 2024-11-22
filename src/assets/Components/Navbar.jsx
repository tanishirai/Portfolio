import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  // State to manage the visibility of the drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Function to toggle the drawer visibility
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <div className="navbar flex justify-between p-4">
      <div className="logo">
        <img src="/Images/New_logo.png" alt="logo" className="h-32 w-auto" />
      </div>

      {/* For larger screens, show the menu items horizontally */}
      <div className="navitems hidden lg:flex gap-16 items-center text-xl">
        <Link
          to="/"
          className="hover:text-hovering transition duration-300 ease-in-out transform hover:scale-110"
        >
          Home
        </Link>
        <Link
          to="/education"
          className="hover:text-hovering transition duration-300 ease-in-out transform hover:scale-110"
        >
          Education
        </Link>
        <Link
          to="/projects"
          className="hover:text-hovering transition duration-300 ease-in-out transform hover:scale-110"
        >
          Projects
        </Link>
        <Link
          to="/experience"
          className="hover:text-hovering transition duration-300 ease-in-out transform hover:scale-110"
        >
          Experience
        </Link>
        <Link
          to="/contact"
          className="hover:text-hovering transition duration-300 ease-in-out transform hover:scale-110"
        >
          Contact Me
        </Link>
      </div>

      {/* Hamburger Icon for smaller screens */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleDrawer} className="text-3xl">
          {/* Hamburger icon (three bars) */}
          <i className={`fas ${drawerOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Drawer Menu for mobile screens */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-all ease-in-out duration-300 ${drawerOpen ? 'block' : 'hidden'}`}
        onClick={toggleDrawer}
      >
        <div className="bg-white w-full h-3/4 pt-16"> {/* Drawer height: 50% of screen */}
          <div className="flex justify-end pr-4">
            <button onClick={toggleDrawer} className="text-3xl">
              <i className="fas fa-times"></i> {/* Close icon */}
            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <Link
              to="/"
              onClick={toggleDrawer}
              className="text-xl p-4 hover:text-hovering transition duration-300 ease-in-out transform hover:scale-110"
            >
              Home
            </Link>
            <Link
              to="/education"
              onClick={toggleDrawer}
              className="text-xl p-4 hover:text-hovering transition duration-300 ease-in-out transform hover:scale-110"
            >
              Education
            </Link>
            <Link
              to="/projects"
              onClick={toggleDrawer}
              className="text-xl p-4 hover:text-hovering transition duration-300 ease-in-out transform hover:scale-110"
            >
              Projects
            </Link>
            <Link
              to="/experience"
              onClick={toggleDrawer}
              className="text-xl p-4 hover:text-hovering transition duration-300 ease-in-out transform hover:scale-110 "
            >
              Experience
            </Link>
            <Link
              to="/contact"
              onClick={toggleDrawer}
              className="text-xl p-4 hover:text-hovering transition duration-300 ease-in-out transform hover:scale-110"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
