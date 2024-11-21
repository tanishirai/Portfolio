import React from 'react'
import './About.css'
const About = () => {
    return (
            <div className='intro flex flex-1'>
                <div className='About_me p-4 flex-1'>
                    <h1 className='font-bold text-5xl text-headingB pt-8'>Tanishi Rai</h1>
                    <p className='text-content text-2xl mt-5'>A B-Tech student passionate about web design, data analytics, and coding. I'm honing my skills in C++, Python, and Java to build real-world solutions.
                        I love creating user-friendly websites, analyzing data, and solving problems through innovative projects. I'm also active in open-source contributions and constantly exploring new technologies.</p>
                    <div className='social-icon justify content-start'>
                        <a href='https://github.com/tanishirai' target='_blank'><i class="fa-brands fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/tanishi-rai/' target='_blank'><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="mailto:tanishirai2604@gmail.com" class="email-btn">
                            <i class="fa-brands fa-google"></i>
                        </a>
                    </div>
                </div>
                <div>
                <img src='/Images/Me.jpg' className='pic flex-1 ' />
                </div>
                
            </div>

    )
}

export default About