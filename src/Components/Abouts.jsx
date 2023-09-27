import Lottie from "lottie-react";
import AnimationCode from "../Animation/animation_ln1qjn0wCodeHome.json"
import Portfolio from "./Portfolio";

const Abouts = () => {
    return (
        <div>
            <div className= " font-poppins font-sans  flex-col px-32 mt-32 w-full gap-14">
                <div className="">
                    <h1 className="text-5xl font-bold text-white">
                        <span className="text-2xl text-gray-700">I'm a</span> <br />
                        Full Stack Developer <br />
                        Tchasinga Balolebwami Jack
                    </h1>
                </div>
                <div className="myCodeSpace  flex mt-32 gap-6 items-center">
                    <div className=" w-6/12 ">
                        <Lottie animationData={AnimationCode} />
                    </div>
                    <div className="flex-col w-3/6 h-3/6">
                        <h3 className="mb-4 text-2xl text-white">About me...</h3>
                        <p className="text-gray-700 text-white font-light">
                            I'm a Full Stack Developer with a passion for learning new technologies and<br/>
                            Developing new projects. I'm currently  looking for a job as a Full Stack Developer.
                            Where i Can learn more about the field and improve<br/>My skills.
                            I will be happy to work with you.
                            i've strong skills in HTML, CSS, JavaScript, NextJs, <br/>Ruby on Rails , Java, React, Node.js, Express.js, MongoDB, MySQL, Git, GitHub, and Render.
                            I'll be overjoyed about working with you.
                        </p>
                    </div>
                </div>
            </div>
            <Portfolio />
        </div>
    )
}

export default Abouts;