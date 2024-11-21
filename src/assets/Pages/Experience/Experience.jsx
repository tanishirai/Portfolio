import React from 'react'
import OpenSource from './OpenSource'
const Experience = () => {
    return (
        <div>
            <div className='banner-exp flex items-start'>
                <div className='mr-4'>
                    <img src='/Images/exp.png' />
                </div>
                <div className='flex-1 text-center mt-4 font-semibold'>
                    <h1 className='text-5xl  text-headingB'>Experience</h1>
                    <h1 className='text-3xl p-5  text-headingB'>Internship & Open Source Contributions</h1>
                    <p className='text-xl p-5  text-content'>
                        I have gained hands-on experience through virtual internships and actively contributed to open-source projects. As a virtual intern with Forage, I had the opportunity to work on real-world projects, honing my skills in data analytics and machine learning. Additionally, I am an enthusiastic contributor to open-source communities, having participated in Hacktoberfest and contributed to the GSSoC Extended program. These experiences have helped me develop a strong understanding of collaborative development and the importance of community-driven solutions.
                    </p>
                    
                </div>
            </div>
            <OpenSource/>
        </div>
    )
}

export default Experience