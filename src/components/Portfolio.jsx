import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import options from '../Data/Objects';
import '../index.css';

const ProjectCard = ({ id, image, title, description }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      const element = document.getElementById(`project-card-${id}`);

      if (element) {
        const elementOffset = element.offsetTop;
        const elementHeight = element.offsetHeight;

        if (yOffset > elementOffset - window.innerHeight / 2) {
          controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
        } else {
          controls.start({ opacity: 0, y: 100 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, id]);

  return (
    <motion.div
      id={`project-card-${id}`}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
    >
      <div className="flex justify-center gap-5 " id='Model'>
        <div className="w-1/3">
          <img src={image} alt={title} className="w-full h-96 mb-28 rounded-2xl" />
        </div>
        <div className="w-1/3 flex-col">
          <h2 className="text-white text-2xl">{title}</h2>
          <p className="text-white text-justify">{description}</p>
          <div>
            <ul className="inline-flex items-center text-white gap-4">
              <li>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </li>
              <li>
                <p>Read-More</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className="font-poppins font-sans " id='Model'>
      <div className="px-32 mt-16">
        <h2 className="text-white flex items-center justify-center text-4xl">Portfolio...</h2>
        <div className="">
          <ul className="font-normal flex gap-52 justify-center  mt-5 text-white">
            <li>Mobile App</li>
            <li>Website</li>
            <li>Desktop</li>
            <li>Other Projects</li>
          </ul>
        </div>
      </div>
      {/* Project quote part */}
      <div className="px-32 mt-20">
        <div className="">
          {options &&
            options.map((getData) => {
              const { id, image, title, description } = getData;
              return (
                <ProjectCard
                  key={id}
                  id={id}
                  image={image}
                  title={title}
                  description={description}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
