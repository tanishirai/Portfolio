import React from 'react'
import OpenSource from './OpenSource'

const Experience = () => {
  return (
    <div>
      <div className='banner-exp flex flex-col lg:flex-row items-start'>
        <div className='lg:w-1/2'>
          <img src='/Images/exp.png' className='w-full max-w-lg' alt="Experience Banner" />
        </div>
        <div className='lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-4 font-semibold'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl text-headingB'>Experience</h1>
          <h1 className='text-xl sm:text-3xl pt-4 text-headingB'>Internship & Open Source Contributions</h1>
          <p className='text-md sm:text-xl pt-10 text-content'>
            I have gained hands-on experience through virtual internships and actively contributed to open-source projects. As a virtual intern with Forage, I had the opportunity to work on real-world projects, honing my skills in data analytics and machine learning. Additionally, I am an enthusiastic contributor to open-source communities, having participated in Hacktoberfest and contributed to the GSSoC Extended program. These experiences have helped me develop a strong understanding of collaborative development and the importance of community-driven solutions.
          </p>
        </div>
      </div>
      <OpenSource/>
    </div>
  )
}

export default Experience;