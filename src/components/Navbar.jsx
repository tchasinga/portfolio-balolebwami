import React from "react"
import '../index.css'
import codeAnimation from '../Animation/animation_lmyu0eqw'
import About from "./About"

import Lottie from "lottie-react"
import Portfolio from "./Portfolio"

const Navbar = () => {
   return (
     <div id='Model'>
         <div className="flex justify-between w-full font-100 text-white bg-blue-950 px-32 p-0 text-center items-center font-poppins font-sans">
        <Lottie animationData={codeAnimation} className="w-20 h-20" />
        <ul className="flex gap-x-10" >
            <li className="cursor-pointer">
                 <h3 className="text-blue-500">Home</h3>
            </li>
            <li className="cursor-pointer">
            <h3>About-me</h3>
            </li>
            <li className="cursor-pointer">
            <h3>Portfolio</h3>
            </li>
            <li className="cursor-pointer">
            <h3>Service</h3>
            </li>
            <li className="cursor-pointer">
            <h3>Experience</h3>
            </li>
            <li className="cursor-pointer">
            <h3>Contact</h3>
            </li>
        </ul>
      </div>
      <About />
      <Portfolio />
     </div>
   )
}

export default Navbar