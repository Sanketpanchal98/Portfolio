import React from 'react';
import { Link } from 'react-scroll';
import { BsHeartFill, BsArrowRight } from 'react-icons/bs';

const ContactMe = ({ id }) => {
  return (
    <section id={id} className="w-full bg-gray-950 text-white z-40 ">
      <div className="w-full  mx-auto flex bg-gray-950 flex-col items-center gap-10 z-40">
      <div className="w-full mx-auto flex bg-gray-950 flex-col items-center gap-10 z-40 px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-semibold text-center" data-animate>
          Contact Me
        </h1>

        <p className="text-gray-400 text-center max-w-2xl text-sm md:text-base" data-animate>
          Whether you have an idea for a project, want to work together, or just want to say hi —
          I’ll try my best to get back to you!
        </p>

        {/* Footer Combined Section */}
        <div className="w-full mt-8 border-t border-white/20 pt-10 z-40">
          <div className="flex flex-col md:flex-row justify-between gap-10 text-white text-lg">
            {/* About */}
            <div className="md:w-1/3 flex flex-col gap-4">
              <h1 className="font-semibold text-xl">About</h1>
              <p className="text-base">I would like to interact and collaborate with teams.</p>
              <p className="mt-4 font-semibold text-lg">Social Links</p>
              <div className='flex gap-5 text-2xl mt-2'>
                <a href='https://github.com/Sanketpanchal98' target="_blank" rel="noopener noreferrer">
                  <i className="ri-github-fill hover:text-orange cursor-pointer"></i>
                </a>
                <a href='https://www.instagram.com/sanketpanchal24/' target="_blank" rel="noopener noreferrer">
                  <i className="ri-instagram-line hover:text-orange cursor-pointer"></i>
                </a>
                <a href='https://www.linkedin.com/in/sanket-panchal-785949261/' target="_blank" rel="noopener noreferrer">
                  <i className="ri-linkedin-box-fill hover:text-orange cursor-pointer"></i>
                </a>
              </div>
            </div>

            {/* Links */}
            <div className='md:w-1/3 flex flex-col gap-3'>
              <h1 className='font-semibold text-xl'>Links</h1>
              {[
                { name: "Home", to: "home" },
                { name: "About Me", to: "about" },
                { name: "Education", to: "education" },
                { name: "Projects", to: "project" },
                { name: "Contact", to: "contactme" }
              ].map((link, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <BsArrowRight />
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className='text-base hover:text-orange cursor-pointer'
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* Email Reminder */}
            <div className='md:w-1/3 flex flex-col gap-4 text-base'>
              <h1 className='font-semibold text-xl'>Have Questions?</h1>
              <div className='flex items-center gap-2'>
                <i className='ri-mail-line'></i>
                <a href="mailto:sanketpanchal775@gmail.com" className='hover:text-orange'>
                  sanketpanchal775@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="w-full mt-10 border-t border-white/20 pt-4 text-center text-sm text-gray-400 flex flex-col items-center gap-2">
            <div className="flex gap-1 text-gray-500 text-lg">
              <span>Made with</span>
              <span className="text-gray flex gap-1 items-center">
                <BsHeartFill />
                <BsHeartFill />
              </span>
              <span>by Sanket Panchal</span>
            </div>
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Sanket Panchal. All rights reserved.</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
