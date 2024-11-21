import React from 'react'
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div className='navbar flex justify-evenly p-4'>
        <div className='logo  '>
          <img src='/Images/New_logo.png' alt='logo' className='h-32 w-auto'/>
        </div>
        <div className='navitems flex gap-16 items-center text-xl'>
            <Link to="/" className=' hover:text-hovering transition duration-300 ease-in-out transform hover:scale-110'>
              Home
            </Link>
            <Link to="/education" className=' hover:text-hovering transition duration-300 ease-in-out transform hover:scale-110'>
              Education
            </Link>
            <Link to="/projects" className=' hover:text-hovering transition duration-300 ease-in-out transform hover:scale-110'>
              Projects
            </Link>
            <Link to="/experience" className=' hover:text-hovering transition duration-300 ease-in-out transform hover:scale-110'>
              Experience
            </Link>
            <Link to="/contact" className=' hover:text-hovering transition duration-300 ease-in-out transform hover:scale-110'>
              Contact Me
            </Link>
        </div>
    </div>
  )
}

export default Navbar
