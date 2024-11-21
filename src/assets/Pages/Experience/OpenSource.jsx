import React from 'react';

const OpenSource = () => {
  return (
    <section id="open-source" className="my-16 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-semibold text-center mb-12 text-headingB">Open Source Contributions</h2>

      {/* Hacktoberfest */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-5 hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-medium mb-4 text-gray-800">Hacktoberfest 2024</h3>
        <p className="text-lg text-gray-600 mb-4">Participated in Hacktoberfest 2024, contributing to various open-source projects and engaging with the global developer community.</p>
        <div className="flex justify-start gap-6 flex-wrap">
          <img src="/Images/Hacktober/L1.png" alt="Hacktoberfest Badge-1" className="w-20 h-auto transform transition-transform duration-300 hover:scale-110" />
          <img src="/Images/Hacktober/L2.png" alt="Hacktoberfest Badge-2" className="w-20 h-auto transform transition-transform duration-300 hover:scale-110" />
          <img src="/Images/Hacktober/L3.png" alt="Hacktoberfest Badge-3" className="w-20 h-auto transform transition-transform duration-300 hover:scale-110" />
          <img src="/Images/Hacktober/L4.png" alt="Hacktoberfest Badge-4" className="w-20 h-auto transform transition-transform duration-300 hover:scale-110" />

        </div>
      </div>

      {/* GSSoC Extended */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-medium mb-4 text-gray-800">GirlScript Summer of Code Extended 2024</h3>
        <p className="text-lg text-gray-600 mb-4">Contributed to GSSoC Extended 2024, enhancing my open-source skills and collaborating with talented developers.</p>
        <div className="flex justify-start flex-wrap">
          <img src="/Images/gssocB/Explorer.png" alt="Explorer Badge" className="w-20 h-auto transform transition-transform duration-300 hover:scale-110" />
          <img src="/Images/gssocB/Adven.png" alt="Adventurer Badge" className="w-20 h-auto transform transition-transform duration-300 hover:scale-110" />
          <img src="/Images/gssocB/Trail.png" alt="Trailblazer Badge" className="w-20 h-auto transform transition-transform duration-300 hover:scale-110" />
          <img src="/Images/gssocB/Summit.png" alt="Summit Seeker Badge" className="w-20 h-auto transform transition-transform duration-300 hover:scale-110" />
          <img src="/Images/gssocB/Champ.png" alt="Champion Badge" className="w-20 h-auto transform transition-transform duration-300 hover:scale-110" />
          <img src="/Images/gssocB/postman.png" alt="Postman Badge" className="w-20 h-auto transform transition-transform duration-300 hover:scale-110" />

          {/* Add more badges as needed */}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
