import React from "react";
import useGsapScrollAnimation from "../Hooks/animationHook";

const Skills = ({ id }) => {
  useGsapScrollAnimation();

  return (
    <section id="skills" className="w-full py-16 z-40">
      <div className="w-full mx-auto flex flex-col bg-gray-950 rounded-xl z-40">
      <div className="w-full lg:pl-24 lg:pb-12 p-6 lg:pr-24 flex flex-col bg-gray-950 rounded-xl z-40">
        <h2 className="text-3xl mt-10 md:text-4xl font-bold text-orange mb-10 z-40">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-orange mb-4">Frontend</h3>
            <ul className="space-y-2 text-base flex text-gray-300 gap-8 items-end list-inside">
                <li className="font-bold flex flex-col items-center gap-2 cursor-pointer"><img src='/Portfolio/icons/006-html-5.png' alt="HTML" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" /> HTML</li>
                <li className="font-bold flex flex-col items-center gap-2 cursor-pointer"><img src="/Portfolio/icons/003-css-3.png" alt="CSS" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" /> CSS</li>
                <li className="font-bold flex flex-col items-center gap-2 cursor-pointer"><img src="/Portfolio/icons/009-js.png" alt="JavaScript" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" /> JS</li>
                <li className="font-bold flex flex-col items-center gap-2 cursor-pointer"><img src="/Portfolio/icons/002-react.png" alt="React" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" /> React</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-orange mb-4">Backend</h3>
            <ul className="space-y-2 text-base flex text-gray-300 gap-8 items-end list-inside">
                <li className="font-bold flex flex-col items-center gap-2 cursor-pointer"> <img src="/Portfolio/icons/004-nodejs.png" alt="Node.js" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" /> Node.js</li>
                <li className="font-bold flex flex-col items-center gap-2 cursor-pointer"><img src="/Portfolio/icons/express-js.png" alt="Express.js" className="h-12 md:h-14 bg-white rounded-full p-1 hover:scale-110 transition-transform duration-300 cursor-pointer" />Express.js</li>
                <li className="font-bold flex flex-col items-center gap-2 cursor-pointer"><img src="/Portfolio/icons/phplogo.png" alt="JavaScript" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" /> PHP</li>
                { /*<li className="font-bold flex flex-col items-center gap-2 cursor-pointer"><img src="/Portfolio/icons/002-react.png" alt="React" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" /> React</li> */}
            </ul>
          </div>

          
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-orange mb-4">Database</h3>
            <ul className="space-y-2 text-base flex text-gray-300 gap-8 items-end list-inside">
              <li className="font-bold flex flex-col items-center gap-2 cursor-pointer"><img src="/Portfolio/icons/mongodb.png" alt="MongoDB" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" /> MongoDB</li>
              <li className="font-bold flex flex-col items-center gap-2 cursor-pointer"><img src="/Portfolio/icons/postgresql.jpg" alt="JavaScript" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" /> PostgreSQL</li>
              <li className="font-bold flex flex-col items-center gap-2 cursor-pointer"><img src="/Portfolio/icons/002-global-server.png" alt="API/Server" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" /> SQL</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-orange mb-4">Core Concepts</h3>
            <ul className="space-y-2 text-base text-gray-300 grid grid-cols-2 gap-3 justify-center items-center list-inside">
              <li className="bg-gray-700 px-4 py-3 rounded-xl text-center w-full hover:shadow-orange-500 shadow-sm hover:scale-105 transition-transform duration-300">REST API Architecture</li>
              <li className="bg-gray-700 px-4 py-3 rounded-xl text-center w-full hover:shadow-orange-500 shadow-sm hover:scale-105 transition-transform duration-300">Auth & Security (JWT, Bcrypt)</li>
              <li className="bg-gray-700 px-4 py-3 rounded-xl text-center w-full hover:shadow-orange-500 shadow-sm hover:scale-105 transition-transform duration-300">Error Handling & Debugging</li>
              <li className="bg-gray-700 px-4 py-3 rounded-xl text-center w-full hover:shadow-orange-500 shadow-sm hover:scale-105 transition-transform duration-300">Scalable System Design Basics</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-orange mb-4">DevOps (Basics)</h3>
            <ul className="space-y-2 text-base text-gray-300 list-disc grid grid-cols-2 gap-3 justify-center items-center list-inside">
              <li className="bg-gray-700 px-4 py-3 rounded-xl text-start w-full hover:shadow-orange-500 shadow-sm hover:scale-105 transition-transform duration-300">CI/CD (GitHub Actions)</li>
              <li className="bg-gray-700 px-4 py-3 rounded-xl text-start w-full hover:shadow-orange-500 shadow-sm hover:scale-105 transition-transform duration-300">Containerization (Docker)</li>
              <li className="bg-gray-700 px-4 py-3 rounded-xl w-full hover:shadow-orange-500 shadow-sm hover:scale-105 transition-transform duration-300">Deployment on Cloud </li>
            </ul>
          </div>

          <div className="p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-orange mb-4">Data Structures & Algorithms</h3>
            <ul className="space-y-2 text-base text-gray-300 list-disc grid grid-cols-2 gap-3 justify-center items-center list-inside">
              <li className="bg-gray-700 px-4 py-3 rounded-xl text-start w-full hover:shadow-orange-500 shadow-sm hover:scale-105 transition-transform duration-300">Linked List / Doubly Linked List</li>
              <li className="bg-gray-700 px-4 py-3 rounded-xl text-start w-full hover:shadow-orange-500 shadow-sm hover:scale-105 transition-transform duration-300">Trees & Graphs</li>
              <li className="bg-gray-700 px-4 py-3 rounded-xl text-start w-full hover:shadow-orange-500 shadow-sm hover:scale-105 transition-transform duration-300">Sliding Window / Two Pointers</li>
              <li className="bg-gray-700 px-4 py-3 rounded-xl text-start w-full hover:shadow-orange-500 shadow-sm hover:scale-105 transition-transform duration-300  ">Binary Search Optimization</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-orange mb-4">Programming Languages</h3>
            <ul className="space-y-2 text-base text-gray-300 list-disc grid grid-cols-2 gap-3 justify-center items-center list-inside">
              <li className="bg-gray-700 px-4 py-3 rounded-xl text-start w-full hover:shadow-orange-500 shadow-sm hover:scale-105 transition-transform duration-300  ">JavaScript</li>
              <li className="bg-gray-700 px-4 py-3 rounded-xl text-start w-full hover:shadow-orange-500 shadow-sm hover:scale-105 transition-transform duration-300  ">C++</li>
              <li className="bg-gray-700 px-4 py-3 rounded-xl text-start w-full hover:shadow-orange-500 shadow-sm hover:scale-105 transition-transform duration-300  ">Python</li>
              <li className="bg-gray-700 px-4 py-3 rounded-xl text-start w-full hover:shadow-orange-500 shadow-sm hover:scale-105 transition-transform duration-300  ">Java</li>
            </ul>
          </div>

        </div>
      </div>
      </div>
    </section>

  );
};

export default Skills;
