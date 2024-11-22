import React from 'react'
import './Banner.css'
import CertificateCard from './CertificateCard';

const Banner = () => {
    return (
        <div>
            <div className='banner flex items-start'>
                <div className='mr-4 ml-5'>
                    <img src='./Images/edu.png' />
                </div>
                <div className='flex-1 text-center mt-4 font-semibold'>
                    <h1 className='text-5xl  text-headingB'>Education</h1>
                    <p className='text-2xl p-5  text-headingB'>Basic Qualification and Certifcations
                    </p>
                    <div className='codes p-2'>
                        <a href='https://leetcode.com/u/Tanishi_Rai/' target='_blank'><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 fill-[#FFA116]"><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg></a>

                        <a href='https://www.hackerrank.com/profile/tanishirai2604' target='_blank'><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 fill-[#00B22D]"><title>HackerRank</title><path d="M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95c-.061 0-.111-.05-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 01-.11-.11V8.112c0-.06.05-.11.11-.11h1.806c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm2.999 0h5.778c.061 0 .111.05.111.11v7.767a.11.11 0 01-.11.112h-5.78a.11.11 0 01-.11-.11V8.111c0-.06.05-.11.11-.11z" /></svg></a>

                        <a href='https://www.geeksforgeeks.org/user/tanishir9re7/' target='_blank'><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 fill-[#2F8D46]"><title>GeeksforGeeks</title><path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
            <h1 className='text-5xl text-headingB text-center font-semibold mt-5'>Academic Background</h1>
            <div className='college flex flex-col justify-center items-center md:flex-row lg:flex-row xl:flex-row mb-10 md:mb-20 lg:mb-20 xl:mb-20'>
                <div className='flex  md:w-1/2 lg:w-1/3 xl:w-1/5'>
                    <img src='/Images/clg_logo.png' className='h-40 w-50 md:h-60 md:w-80 lg:h-48 lg:w-56 m-7' />
                </div>
                <div className="w-[90%] md:w-1/2 lg:w-2/3 xl:w-3/4 max-w-full rounded overflow-hidden shadow-lg m-8 justify-center md:justify-start">                    {/* Top row with colored background */}
                    <div className="bg-table text-stone-950 p-2 rounded-t p-3 w-full">
                        <div className="flex items-center justify-between w-full">
                            <h2 className="text-2xl font-bold pb-5 ">Vellore Institute of Technology, Bhopal</h2>
                            <h2 className="text-lg ">2023-2027</h2>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <h2 className="text-lg font-bold">B.Tech. in Computer Science Engineering</h2>
                            <h2 className="text-lg">CGPA- 8.89</h2>
                        </div>
                    </div>
                    {/* Bottom row with content */}
                    <div className="p-3">
                        <ul className="list-disc pl-5">
                            <li>Pursuing BTech with a focus on web development, data analytics, and programming (C++, Python, Java).</li>
                            <li>Gaining a strong foundation in technology and problem-solving through academic coursework.</li>
                            <li>Actively participating in hands-on projects and open-source contributions.</li>
                            <li>Passionate about creating user-friendly solutions and deriving insights from data.</li>
                            <li>Aiming to grow as a skilled technologist and innovator in the tech industry.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='school flex flex-col justify-center items-center md:flex-row lg:flex-row xl:flex-row mt-10 md:mt-20 lg:mt-20 xl:mt-20'>
                <div className='flex w-[90%] md:w-1/2 lg:w-1/3 xl:w-1/5'>
                    <img src='/Images/scl_logo.jpeg' className='w-72 h-auto md:w-80 md:h-80 lg:w-60 lg:h-60 xl:w-120 xl:h-120 m-7' />
                </div>
                <div className="w-[90%] md:w-1/2 lg:w-2/3 xl:w-3/4 max-w-full rounded overflow-hidden shadow-lg m-9">
                    {/* Top row with colored background */}
                    <div className="bg-table text-stone-950 p-2 rounded-t p-3 w-full">
                        <div className="flex items-center justify-between w-full">
                            <h2 className="text-2xl font-bold pb-5 ">Lucknow Public College, Lucknow</h2>
                            <h2 className="text-lg ">2008-2022</h2>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <h2 className="text-lg font-bold">ISC / ICSE</h2>
                            <h2 className="text-lg">Percentage- 93.25%</h2>
                        </div>
                    </div>
                    {/* Bottom row with content */}
                    <div className="p-3">
                        <ul className="list-disc pl-5">
                            <li>Completed primary and secondary education with a strong focus on science and mathematics.</li>
                            <li>Developed a passion for technology and problem-solving through coursework and extracurricular activities.</li>
                            <li>Actively participated in school events and team activities.</li>
                            <li>Built a solid foundation in logical thinking, teamwork, and communication skills.</li>
                            <li>Engaged in early explorations of coding and web development, sparking my interest in technology.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='Certificates'>
                <h1 className='text-5xl text-headingB text-center font-semibold m-5'>Certifications</h1>
                <CertificateCard />
            </div>
        </div>

    )
}

export default Banner