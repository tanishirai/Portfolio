import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="banner-contact flex">
                <div className="flex-1 flex justify-center items-center mr-4 m-10">
                    <img src="/Images/Tanishi_bg.png" className="w-80 h-80 rounded-full object-cover border-4 border-headingB" alt="Tanishi" />
                </div>


                <div className="w-1/2 flex-1 text-center mt-4 ">
                    <h1 className="text-5xl text-headingB font-semibold">Contact Me</h1>
                    <p className="text-2xl p-5 text-content">You can reach out to me through below links</p>
                    <div className='social-icon flex justify-center items-center'>
                        <a href='https://github.com/tanishirai' target='_blank'><i class="fa-brands fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/tanishi-rai/' target='_blank'><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="mailto:tanishirai2604@gmail.com" class="email-btn">
                            <i class="fa-brands fa-google"></i>
                        </a>
                    </div>
                    <div className="flex justify-center items-center m-5">
                        
                        <a href='/Images/Tanishi_Rai.pdf' target='_blank'><button className="border-2 border-transparent text-white bg-headingB py-2 px-6 rounded-md hover:bg-white hover:text-black hover:border-black transition-all">
                            See My Resume
                        </button></a>
                    </div>
                </div>
            </div>
            {/* Contact Form Section */}
            <div className="contact-form bg-gray-100 py-12 flex justify-center">
                <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl text-headingB font-semibold text-center mb-6">Send a Message</h2>
                    <form className="space-y-6">
                        <input type="text" placeholder="Your Name" className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="email" placeholder="Your Email" className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <textarea placeholder="Your Message" rows="4" className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-all">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact