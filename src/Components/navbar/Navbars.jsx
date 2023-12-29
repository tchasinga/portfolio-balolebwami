import "./navbars.scss"
import {Link} from "react-router-dom"
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Navbars() {
  return (
    <div className="navbar">
        {/* Side bar */}
        <div className="wrapper">
            <span>Tchasinga Dev</span>
            <div className="social">
                <Link to={`https://github.com/tchasinga`}><FaGithub /></Link>
                <Link to={`https://www.linkedin.com/in/tchasingajacques/`}><FaLinkedin /></Link>
                <Link to={`https://www.instagram.com/jacques_balolebwami/`}><FaInstagram/></Link>
                <Link to={`https://www.facebook.com/jaques.balolebwami`}><FaFacebook/></Link>
            </div>
        </div>
    </div>
  )
}
