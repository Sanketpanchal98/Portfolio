import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectGroups = [
  {
    label: 'FullStack',
    projects: [
      {
        title: "Finverse - Finance Dashboard",
        description: "Full-stack finance management platform with analytics, smart expense tracking, and real-time dashboards. Built to scale with secure auth and role-based access.",
        path: "/icons/trip-planner.jpg",
        link: "https://fin-verse-puce.vercel.app/",
      },
      {
        title: "Trip Planner AI",
        description: "AI-powered web app that generates personalized travel itineraries based on user inputs like location, budget, and trip duration.",
        path: "/icons/trip-planner.jpg",
        link: "https://github.com/Sanketpanchal98/Trip-Planner-AI",
      }
    ],
  },
  {
    label: 'Backend',
    projects: [
      {
        title: "YouTube-X Backend Clone",
        description: "RESTful backend built with Node.js and MongoDB, featuring auth, video uploads, likes, comments, and subscriptions.",
        path: "/icons/trip-planner.jpg",
        link: "https://github.com/Sanketpanchal98/Youtube-Backend-Clone",
      },
      {
        title: "Job Board",
        description: "Node.js and MongoDB-based app where employers post jobs and candidates apply, with role-based access and JWT auth.",
        path: "/icons/ai-project.webp",
        link: "http://github.com/Sanketpanchal98/jobboard",
      },
    ],
  },
];

const Projects = ({ id }) => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center gap-8 p-6  bg-background text-white"
      id={id}
    >
      <div className='w-full min-h-screen flex flex-col z-40 items-center gap-8 p-6 md:p-14 bg-background text-white'>
     <h1 className="z-40 text-3xl md:text-5xl font-extrabold tracking-tight mt-10 md:mt-0 w-full md:text-start text-center md:text-left">
        <span className="text-orange-400">Projects</span>
      </h1>

      <div className="w-full max-w-7xl z-40 flex flex-col gap-14">
        {projectGroups.map(({ label, projects }, idx) => (
          <div key={label} data-animate className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-400">{label}</h2>
              <div className="flex-1 border-t border-orange-800 opacity-40"></div>
            </div>
            <div className="flex flex-wrap gap-8 md:gap-12 justify-start">
              {projects.map((proj, i) => (
                <div
                  key={proj.title}
                  className="transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:scale-105 duration-200 bg-zinc-900/80 border border-zinc-700/50 rounded-2xl p-5 shadow-xl min-w-[320px] max-w-xs w-1/2"
                >
                  <ProjectCard {...proj} />
                </div>
              ))}
            </div>
            {idx !== projectGroups.length - 1 &&
              <div className="my-2 border-b-2 border-orange-900/40 opacity-60 rounded-full" />
            }
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Projects;
