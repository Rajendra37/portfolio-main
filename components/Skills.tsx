import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiRedux,SiPostman, SiJest, SiFigma, SiUbuntu } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-cyan-200" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-300" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-300" /> },
  { name: 'AWS', icon: <FaAws className="text-yellow-400" /> },
  { name: 'Jest', icon: <SiJest className="text-red-400" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-300" /> },
  { name: 'Figma', icon: <SiFigma className="text-pink-400" /> },
  { name: 'Ubuntu', icon: <SiUbuntu className="text-orange-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 w-full">
      <div className="w-full px-4">
        <h2 className="text-3xl font-bold text-cyan-100 text-center mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center w-full">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center group">
              <div className="text-5xl mb-2 transition-transform group-hover:scale-110">{skill.icon}</div>
              <span className="text-cyan-100 text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;