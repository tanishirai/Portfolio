import React from 'react';
import './ProjectBlocks.css'
const ProjectBlocks = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'Created a user-friendly and responsive portfolio platform using React.js and Tailwind CSS, showcasing my skills, projects, and achievements. This project not only enhanced my web development expertise but also improved my visibility to recruiters, serving as an online resume with a clean, modern layout.',
      techStack: ['React.js', 'Tailwind CSS', 'Vercel'],
      bgColor: 'table',
      GitHub: 'https://github.com/tanishirai/Portfolio',
    },
    {
      title: 'Amazon Clone',
      description: 'This is a static Amazon clone built using HTML and CSS, designed to replicate the basic layout and structure of the Amazon homepage. It serves as a visual representation.',
      techStack: ['HTML', 'CSS', 'Vercel'],
      bgColor: 'table',
      LiveDemo: 'https://amazon-clone-pink-zeta.vercel.app/',
      GitHub: 'https://github.com/tanishirai/Amazon-Clone',
    },
    {
      title: 'Mini Games',
      description: 'This project features two mini-games built using JavaScript: Tic-Tac-Toe and Rock Paper Scissors. Both games are interactive, showcasing basic game logic without any advanced styling or functionality.',
      techStack: ['HTML', 'CSS', 'Javascript'],
      bgColor: 'table',
      GitHub: 'https://github.com/tanishirai/Mini-Games', // GitHub link added
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`rounded-lg p-6 text-black bg-${project.bgColor} shadow-lg`}
        >
          {/* Project Title */}
          <h2 className="text-2xl font-bold">{project.title}</h2>
          
          {/* Project Description */}
          <p className="mt-4 text-lg">{project.description}</p>
          
          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap gap-4">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white text-gray-800 rounded-lg text-sm shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
  
          {/* Conditional Links */}
          <div className="mt-6 flex gap-4">
            {project.LiveDemo && ( // Show Live Demo link if it exists
              <a
                href={project.LiveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-headingB hover:scale-110 transition-all duration-300 "
              >
                Live Demo
              </a>
            )}
            {project.GitHub && ( // Show GitHub Code link if it exists
              <a
                href={project.GitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-headingB hover:scale-110 transition-all duration-300"
              >
                GitHub Code
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );  
};

export default ProjectBlocks;
