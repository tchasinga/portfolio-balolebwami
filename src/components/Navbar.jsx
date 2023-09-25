import React from "react"
import '../index.css'
import codeAnimation from '../Animation/animation_lmys4c61.json'
import Lottie from "lottie-react"

const Navbar = () => {
   return (
    <div className="flex justify-between w-full bg-blue-300 px-10 p-0 text-center items-center">
        <Lottie animationData={codeAnimation} className="w-20 h-20" />
        <ul className="flex gap-2">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>
   )
}

export default Navbar