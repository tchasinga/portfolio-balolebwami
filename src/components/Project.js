/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  EyeIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { LiaEnvelopeSolid } from "react-icons/lia";

import projectOne from "../assets/images/projects/CloseLast.png";
import projectTwo from "../assets/images/projects/DesignTwo.png";
import projectThree from "../assets/images/projects/DesignThree.png";
import projectFour from "../assets/images/projects/DesignFour.png";
import projectFive from "../assets/images/projects/DesignFive.png";
import projectSix from "../assets/images/projects/ScreenshotStuff.png";
import projectSeven from "../assets/images/projects/ProjectsBGSeven.png";
import projectEight from "../assets/images/projects/newScreenget.png";
import projectNine from "../assets/images/projects/DesignOne.png";
import projectTen from "../assets/images/projects/ScreenshoooTen.png";
import projectEleven from "../assets/images/projects/magazineStuff.png";
import projectTwelve from "../assets/images/projects/CalculatriceMath.png";



function Project() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Public Information",
      image: projectOne,
      details:
        "Share sensitive information only on official, secure websites. ... The Individuals with Disabilities Education Act (IDEA) is a law that makes available a free appropriate public education to eligible children with disabilities throughout the nation and ensures special education and related ...",
      techStack: "Tailwind Css, Next js, MongoDB, Nodejs , Express",
      live: "https://public-information.netlify.app",
      source: "https://github.com/tchasinga/e-comerce-site",
    },

    {
      id: 2,
      title: "Paint Art",
      image: projectTwo,
      details:
        "Painting is a visual art form that involves the application of pigments or other coloring agents to a surface, such as canvas, paper, or wood, to create an image or design. Paintings can be created using various techniques and styles, and they have been a significant form of artistic",
      techStack: "Html, Css, Javascript, APis",
      live: "https://tchasinga.github.io/API-capstone-project/dist/",
      source: "https://github.com/tchasinga/API-capstone-project",
    },

    {
      id: 3,
      title: "Book store",
      image: projectThree,
      details:
        "System Manager is responsible for the management of the system. It is also responsible for the maintenance of the system.",
      techStack: "ReactJS, Redux, Route, Tailwind CSS, API",
      live: "https://book-storing.onrender.com/",
      source: "https://github.com/tchasinga/API-capstone-project",
    },

    {
      id: 4,
      title: "Personal Blogs",
      image: projectFour,
      details:
        "Is personal Data server that help you to get close of your own data or information security, and it can used as to-do list management",
      techStack: "Reactjs , APIs , Css",
      live: "https://personalsblogsdata.netlify.app/",
      source: "https://github.com/tchasinga/personal-blogs",
    },

    {
      id: 5,
      title: "workours-management",
      image: projectFive,
      details:
        "System Manager is responsible for the management of the system. It is also responsible for the maintenance of the system, uisng MERN stack",
      techStack: "React, Tailwind css, MongoDB, Express, Nodejs",
      live: "https://workours-management.onrender.com/",
      source: "https://github.com/tchasinga/system-manager",
    },

    {
      id: 6,
      title: "Stuff-seller",
      image: projectSix,
      details:
        "Stuff is a website that help you to get close of your own data or information security, and it can used as to-do list management",
      techStack: "Mui, TailwindCss, Reactjs, Oop",
      live: "https://stuff-seller.onrender.com/",
      source: "https://github.com/tchasinga/e-comerce-site",
    },

    {
      id: 7,
      title: "LandEstate",
      image: projectSeven,
      details:
        "A Land Estate Typically Refers To A Large Area Of Land That Is Planned And Developed For Residential Or Commercial Purposes. These Estates Are Designed To Accommodate A Community, Providing Space For Housing, Amenities, And Infrastructure. The Purpose Of A Land Estate Is Multifaceted, Encompassing Both Economic And Social Objectives.",
      techStack: "Reactjs, MongoDB, Nodejs, Express, Firebase, tailwind Css",
      live: "https://landind-estate-service.onrender.com/",
      source: "https://github.com/tchasinga/Real-Estate-house-Marketplace",
    },

    {
      id: 8,
      title: "Blogs sharing",
      image: projectEight,
      details:
        "Blogs ideas sharing involves the creation and dissemination of content that inspires, informs, or entertains an audience. Content creators share thoughts, experiences, and insights on diverse topic…",
      techStack:
        "Reactjs, MongoDB, Nodejs, Express, Firebase, tailwind Css, Material Ui",
      live: "https://blogs-sharing-ideas.onrender.com",
      source: "https://github.com/tchasinga/sharing-ideas-blogs",
    },

    {
      id: 9,
      title: "Space Travel hub",
      image: projectNine,
      details:
        "Welcome to the Space Travelers' Hub! This is the ultimate destination for all space enthusiasts, travelers, and adventurers. Whether you're a seasoned astronaut, a curious explorer, or just someone with a passion for the cosmos, you've come to the right place. At the Space Travelers' Hub",
      // "Budget Tracker is a user-friendly mobile app that empowers individuals to take control of their personal finances. By tracking all transactions in one place, users get an always up-to-date overview of spending - enabling better decisions",
      techStack: "Redux, ReactJs, Apis, TailwindCss",
      live: "https://space-traveling.onrender.com",
      source: "https://github.com/tchasinga/space-travelers",
    },
    {
      id: 10,
      title: "Fitness room",
      image: projectTen,
      details:
        "Whether it's a small nook or an entire room, homeowners are starting to make home gyms a priority. Engaging in a home fitness routine doesn't mean you need expensive workout equipment; there are several home gym designs and home gym ideas that simply require some creativity, a little bit of ...",
      // "Budget Tracker is a user-friendly mobile app that empowers individuals to take control of their personal finances. By tracking all transactions in one place, users get an always up-to-date overview of spending - enabling better decisions",
      techStack: "NextJs, TailwindCss , Anime Css , Swipper",
      live: "https://fitness-rooms.netlify.app/",
      source: "https://github.com/tchasinga/gym-rooms",
    },
    {
     id : 11,
     title: "Magazine shopping",
     image: projectEleven,
     details:"Magazine shopping refers to the practice of purchasing goods or services directly from advertisements or featured products found in magazines. Consumers may be influenced by the recommendations, re…",
     techStack: "Nextjs, TailwindCss, Material Ui, Oop, Framer-motions",
     live: "https://magazine-shopping.onrender.com/",
     source: "https://github.com/tchasinga/magazine-shopping",
    },
  ]);

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  const fadeInAnimationVarients = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.01 * index,
      },
    }),
  };

  const techStackToArray = (techStack) => {
    return techStack ? techStack.split(", ") : [];
  };

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const openModal = (index) => {
    setSelectedProjectIndex(index);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
  };

  useEffect(() => {
    if (selectedProjectIndex !== null) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedProjectIndex]);

  const prevProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === 0 ? sortedProjects.length - 1 : prevIndex - 1
    );
  };

  const nextProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === sortedProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectedProject = sortedProjects[selectedProjectIndex];

  return (
    <div id="Project">
      <div className="max-w-custom mx-auto px-5 my-28">
        <section className="text-left lg:text-left text-newDark dark:text-white">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-16 text-center text-newDarkGray dark:text-white"
          >
            <h2 className="font-semibold text-4xl mb-3">Portfolio</h2>
            <p>Most recent work</p>
          </motion.article>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((item, index) => (
              <div className="" key={item.id}>
                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "321px",
                      height: "214px",
                      objectFit: "cover",
                    }}
                  />
                  <button
                    onClick={() => openModal(index)}
                    style={{ background: "none", border: "none" }}
                  >
                    <div className="mask absolute inset-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)] text-newYellow" />
                  </button>
                </div>
                <h5
                  className="mb-4 text-lg font-bold cursor-pointer hover:text-newYellow dark:text-white dark:hover:text-newYellow"
                  onClick={() => openModal(index)}
                >
                  {item.title}
                </h5>
                {techStackToArray(item.techStack).map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 my-1 border-2 badge border-newbBlue badge-outline text-newbBlue font-semibold"
                  >
                    {tech}
                  </span>
                ))}

                <p className="mt-4 text-newDarkGray dark:text-white line-clamp-3">
                  {item.details}
                </p>

                <div className="mt-4 flex justify-start gap-5 text-sm">
                  <a
                    href={item.source}
                    rel="noreferrer"
                    target="_blank"
                    className="text-newDarkGray font-bold flex gap-1 hover:text-newYellow dark:text-white dark:hover:text-newYellow"
                  >
                    <CodeBracketIcon className="w-4" />
                    Source Code
                  </a>
                  <a
                    href={item.live}
                    rel="noreferrer"
                    target="_blank"
                    className="text-newDarkGray font-bold flex gap-1 dark:text-white hover:text-newYellow dark:hover:text-newYellow"
                  >
                    <EyeIcon className="w-4" />
                    Live Preview
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal Popup */}
      {selectedProjectIndex !== null && (
        <div className="fixed inset-0 grid place-items-center z-50 max-h-full bg-black bg-opacity-75 overflow-y-scroll">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="max-w-5xl bg-white dark:bg-neutral rounded-lg m-5"
          >
            <article className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <figure>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-lg shadow-lg w-full h-full"
                />
              </figure>
              <aside className="p-4">
                <div className="flex justify-end items-center">
                  <XMarkIcon
                    className="w-6 cursor-pointer"
                    onClick={closeModal}
                  />
                </div>
                <h2 className="text-2xl font-semibold dark:text-white">
                  {selectedProject.title}
                </h2>
                <p className="mt-4 text-newDarkGray dark:text-white">
                  {selectedProject.details}
                </p>
                <div className="my-5">
                  {techStackToArray(selectedProject.techStack).map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="mr-2 my-1 border-2 badge border-newbBlue badge-outline text-newbBlue font-semibold"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="mt-4 flex justify-start gap-5 text-sm">
                  <a
                    href={selectedProject.source}
                    rel="noreferrer"
                    target="_blank"
                    className="text-newDarkGray font-bold flex gap-1 hover:text-newYellow dark:text-white dark:hover:text-newYellow"
                  >
                    <CodeBracketIcon className="w-4" />
                    Source Code
                  </a>
                  <a
                    href={selectedProject.live}
                    rel="noreferrer"
                    target="_blank"
                    className="text-newDarkGray font-bold flex gap-1 dark:text-white hover:text-newYellow dark:hover:text-newYellow"
                  >
                    <EyeIcon className="w-4" />
                    Live Preview
                  </a>
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    onClick={prevProject}
                    className="text-newDarkGray font-semibold dark:text-white hover:text-newYellow dark:hover:text-newYellow"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextProject}
                    className="text-newDarkGray font-semibold dark:text-white hover:text-newYellow dark:hover:text-newYellow"
                  >
                    Next
                  </button>
                </div>
              </aside>
            </article>
          </motion.div>
        </div>
      )}
      <div className="max-w-custom mx-auto px-5 my-28">
        <div className="flex flex-col p-10 rounded-box place-items-center justify-between bg-green-400 dark:neutral md:flex-row">
          <h3 className="text-3xl text-center mb-5 font-semibold text-white md:mb-0">
            Interested working with me?
          </h3>
          <a
            href="mailto:tchasingajacques@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="p-3 px-6 text-newDark font-bold bg-white rounded-md flex gap-1 hover:bg-transparent hover:text-white hover:border-2 hover:border-white"
          >
            <LiaEnvelopeSolid className="text-2xl" />
            Mail Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
