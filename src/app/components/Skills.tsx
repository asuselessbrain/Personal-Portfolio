"use client"
import Image from "next/image";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const techIcons = [
  {
    name: "React",
    url: "https://devicon-website.vercel.app/api/react/original.svg",
  },
  {
    name: "HTML5",
    url: "https://devicon-website.vercel.app/api/html5/original.svg",
  },
  {
    name: "CSS3",
    url: "https://devicon-website.vercel.app/api/css3/original.svg",
  },
  {
    name: "Tailwind CSS",
    url: "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
  },
  {
    name: "Next.js",
    url: "https://devicon-website.vercel.app/api/nextjs/original.svg",
  },
  {
    name: "Bootstrap",
    url: "https://devicon-website.vercel.app/api/bootstrap/original.svg",
  },
  {
    name: "Express",
    url: "https://devicon-website.vercel.app/api/express/original.svg",
  },
  {
    name: "Firebase",
    url: "https://devicon-website.vercel.app/api/firebase/plain.svg",
  },
  {
    name: "GitHub",
    url: "https://devicon-website.vercel.app/api/github/original.svg",
  },
  {
    name: "Git",
    url: "https://devicon-website.vercel.app/api/git/original.svg",
  },
  {
    name: "Redux",
    url: "https://devicon-website.vercel.app/api/redux/original.svg",
  },
  {
    name: "JavaScript",
    url: "https://devicon-website.vercel.app/api/javascript/original.svg",
  },
  {
    name: "MongoDB",
    url: "https://devicon-website.vercel.app/api/mongodb/original.svg",
  },
  {
    name: "Mongoose",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
  },
  {
    name: "NPM",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  },
  {
    name: "Node.js",
    url: "https://devicon-website.vercel.app/api/nodejs/original.svg",
  },
  {
    name: "React Router",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
  },
  {
    name: "Type Script",
    url: "https://devicon-website.vercel.app/api/typescript/original.svg",
  },
  {
    name: "Material ui",
    url: "https://devicon-website.vercel.app/api/materialui/original.svg",
  },
  {
    name: "And Design",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg",
  },
  {
    name: "Postman",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    name: "Netlify",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
  },
];

const Skills = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false, 
    });
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <h2 className="text-6xl font-bold text-center dark:text-white my-10">
        My Top Skills
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 p-4">
        {techIcons.map((icon) => (
          <div key={icon.name} className="flex flex-col items-center">
            <Image
              src={icon.url}
              alt={icon.name}
              width={100}
              height={100}
              className="rounded-lg bg-gray-200 p-4 hover:scale-110 shadow-md transition-transform duration-300"
            />
            <p className="text-xl font-semibold text-black dark:text-white mt-2">
              {icon.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
