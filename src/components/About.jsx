import React from 'react'
import Lottie from 'lottie-react'
import '../index.css'
import CodeAnimationPc from '../Animation/animation_lmyvz1lf.json'

function About() {
    return (
        <div>
            <div className="px-32 flex-col mt-20 font-poppins font-sans" id='Model'>
                <div className="mb-20">
                    <h1 className="text-6xl text-white">
                        <span className="text-gray-700 text-xl font-bold ">I'm a </span> <br />
                        Full Stack Developer <br />
                        Tchasinga balolebwami <span className='text-red-950 font-bold'>Jack</span>
                    </h1>
                    <h2 className="border rounded-s-xl mt-2 border-black bg-blue-700 text-white p-2 w-44">
                        Download resume
                    </h2>
                </div>
                <div className="w-full flex gap-3">
                    <div className="w-96">
                        <Lottie animationData={CodeAnimationPc} className='' />
                    </div>
                    <div className="flex-col w-96">
                        <h1 className="text-2xl text-white font-bold mb-3">About me</h1>
                        <p className="text-gray-500 text-sm">
                            I am a Full Stack Developer with 5 years of experience in the field of <br />web development. I have worked on various projects and have a good knowledge of HTML, CSS, JavaScript, React, Node, Express, MongoDB,NextJs ,Java ,PostgreSql,Ruby on Rail, and Firebase.  <br /> I am a quick learner and a team player. <br />  I am looking for a job where I can learn and grow as a developer.
                        </p>
                        <div className="flex gap-4 mt-3 cursor-pointer">
                            <h1 className='border px-11 p-3 rounded-xl border-red-50 text-white text-sm bg-blue-700'>HIRE ME</h1>
                            <h1 className='border px-12 p-3 rounded-xl'>DOWNLOAD CV</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default About