import "./navbars.scss";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Navbars() {
  return (
    <div className="navbar">
      {/* Side bar */}
      <div className="wrapper">
        <span>Tchasinga Dev</span>
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
