import React from "react";
import { motion } from "framer-motion";
import { LiaDownloadSolid } from "react-icons/lia";
import pitch from "../assets/images/Jackremover.png";

function About() {
  return (
    <div id="About" className="bg-gray-50 py-28 dark:bg-neutral">
      <div className="max-w-custom mx-auto px-5">
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-16 text-center text-newDarkGray dark:text-white"
        >
          <h2 className="font-semibold text-4xl mb-3">More about me</h2>
          <p>My presentation</p>
        </motion.article>
        <div className="card flex flex-col justify-center items-center space-y-10 md:gap-12 md:space-y-0 md:grid-cols-2">
          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img src={pitch} alt="about-pics" className="" />
          </motion.figure>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="card-body p-0 dark:text-white max-w-3xl mx-auto"
          >
            <span>
            I'm a Full-Stack Developer. Hi there! I can assist you in creating a website, feature, or product. Examine a selection of my work and background!
            Do not hesitate to get in touch with me if you like what you see and need help with coding for a project.
              <br />
              <br />
              Sent an  Email <br />
              <span className="font-light">tchasingajacques@gmail.com</span>
              <div>
                <a
                  href="https://docs.google.com/document/d/1wMk6Yz0WE2Rn4Tm3CghGuz8TLuPLODDK0Ru8sDXXzwA/edit?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                  className="p-3 px-6 w-36 my-7 text-white font-bold bg-green-400 rounded-md flex gap-1 justify-center hover:bg-transparent hover:text-newDarkGray hover:border-2 hover:border-newYellow dark:hover:text-white"
                >
                  <LiaDownloadSolid className="text-2xl" />
                  Resume
                </a>
              </div>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
