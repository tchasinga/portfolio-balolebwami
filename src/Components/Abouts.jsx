import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import AnimationCode from '../Animation/animation_ln1qjn0wCodeHome.json';
import Portfolio from './Portfolio';
import '../index.css'

const Abouts = () => {
  const textOptions = [
    "I'm a",
    "I'm passionate about coding",
    "I'm passionate in React",
    "I'm passionate about MongoDB",
    "I'm passionate about NextJs"
  ];

  const [displayTextIndex, setDisplayTextIndex] = useState(0);
  const [isTextVisible, setTextVisible] = useState(true);

  useEffect(() => {
    // Function to change the display text in a continuous loop with a fade-in effect
    const changeTextInLoop = () => {
      const timer = setInterval(() => {
        setTextVisible(false); // Start fade-out animation
        setTimeout(() => {
          setDisplayTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
          setTextVisible(true); // Start fade-in animation with the new text
        }, 500); // Delay for the fade-out animation (0.5 seconds)
      }, 3000); // Change text every 3 seconds

      return () => clearInterval(timer); // Cleanup when component unmounts
    };

    // Call the function to start the text loop
    const textLoopInterval = changeTextInLoop();

    return () => clearInterval(textLoopInterval); // Cleanup when component unmounts
  }, []); // Empty dependency array means this effect runs once on component mount

  const currentText = textOptions[displayTextIndex];

  return (
    <div>
      <div className="font-poppins font-sans flex-col px-32 mt-32 w-full gap-14">
        <div className="">
        <h1
            className={`text-5xl font-bold text-white fade-in-animation ${isTextVisible ? 'show' : ''}`}
          >
            <span className="text-2xl text-gray-700">{currentText}</span> <br />
            Full Stack Developer <br />
            Tchasinga Balolebwami Jack
          </h1>
        </div>
        <div className="myCodeSpace flex mt-32 gap-6 items-center">
          <div className="w-6/12 hover:-rotate-6 cursor-pointer">
            <Lottie animationData={AnimationCode} />
          </div>
          <div className="flex-col w-3/6 h-3/6">
            <h3 className="mb-4 text-2xl text-white">About me...</h3>
            <p className="text-gray-500 text-sm font-sans">
              I'm a Full Stack Developer with a passion for learning new technologies and<br />
              Developing new projects. I'm currently looking for a job as a Full Stack Developer.
              Where I can learn more about the field and improve<br />My skills.
              I will be happy to work with you.
              I've strong skills in HTML, CSS, JavaScript, NextJs, <br />Ruby on Rails , Java, React, Node.js, Express.js, MongoDB, MySQL, Git, GitHub, and Render.
              I'll be overjoyed about working with you.
            </p>
          </div>
        </div>
      </div>
      <Portfolio />
    </div>
  );
};

export default Abouts;
