// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/Navbar';
import Footer from './assets/Components/footer'; // Import Footer component
import About from './assets/Pages/Home/About';
import Banner from './assets/Pages/Education/Banner';
import Project from './assets/Pages/Project/Project';
import Experience from './assets/Pages/Experience/Experience';
import Contact from './assets/Pages/Contact/Contact';

const App = () => {
  return (
    <Router>
      {/* Navbar will be rendered on all pages */}
      <Navbar />

      {/* Content area for each route */}
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            {/* Define routes for each page */}
            <Route path="/" element={<About />} />  {/* Default/Home page */}
            <Route path="/education" element={<Banner />} />  {/* Education page */}
            <Route path="/projects" element={<Project />} />  {/* Project page */}
            <Route path="/experience" element={<Experience />} />  {/* Experience page */}
            <Route path="/contact" element={<Contact />} />  {/* Contact page */}
            {/* Add more routes as necessary for other pages */}
          </Routes>
        </main>
        
        {/* Footer will be rendered on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
