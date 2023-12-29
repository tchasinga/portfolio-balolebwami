import "./navbars.scss";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import {motion} from 'framer-motion'
import Sidebars from "../sidebar/Sidebars";


export default function Navbars() {
  return (
    <div className="navbar">
      {/* Side bar */}
      <Sidebars />
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Tchasinga Dev</motion.span>
        <div className="social">
          <a href="https://github.com/tchasinga" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/tchasingajacques/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/jacques_balolebwami/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/jaques.balolebwami" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
}
