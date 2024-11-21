// /src/components/Education/CertificateCard.jsx
import React from 'react';

// Course Card Component
const CourseCard = ({ imgSrc, certificateLink, courseTitle, courseSubtitle }) => (
  <div className="max-w-full sm:max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
    <div className="relative">
      <div className="w-full h-40 flex justify-center items-center">
        <img src={imgSrc} alt={courseTitle} />
      </div>

      <a
        href={certificateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 text-black px-4 py-2 rounded-md shadow-lg opacity-80 transition-opacity hover:opacity-100 hover:bg-content hover:text-white"
      >Certificate
      </a>
    </div>
    <div className="p-6">
      <div className="text-xl font-semibold text-gray-800">{courseTitle}</div>
      <div className="text-md text-gray-500 mt-2">{courseSubtitle}</div>
    </div>
  </div>
);

// Main CertificateCard Component
const CertificateCard = () => {
  const courses = [
    { imgSrc: "https://cdn.brandfetch.io/idyzA6PHYx/w/160/h/58/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B", certificateLink: "https://vityarthi.com/certificate/5fd37e62a1", courseTitle: "Python Programming", courseSubtitle: "Fundamentals of Python" },
    { imgSrc: "/Images/certifications/Data.svg", certificateLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_DwxhWJqTCP9d8reCq_1724397110933_completion_certificate.pdf", courseTitle: "Data Analytics", courseSubtitle: "Data Cleaning to Visualization" },
    { imgSrc: "https://cdn.brandfetch.io/idiu-3CHRT/w/150/h/150/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B", certificateLink: "/Images/certifications/gssocExtd.png", courseTitle: "GirlScript Summer of Code Extd", courseSubtitle: "Open Source Contribution" },
  ];

  return (
    <div className="flex justify-center items-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {/* Mapping through courses and passing props to CourseCard */}
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CertificateCard;
