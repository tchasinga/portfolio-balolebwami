import PropTypes from "prop-types";
import "./parallax.scss";
// import imgGod from "../Pics/newone.jpg";
import ImageBG from "../Pics/secondone.jpg";
import {motion , useScroll, useTransform} from "framer-motion";
import { useRef } from "react";

export default function Parallax({ type }) {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
  
    const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]); 
    const yText = useTransform(scrollYProgress, [0, 1], ["50%", "500%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: `url(${type === "service" ? ImageBG : ImageBG}) center no-repeat`, y: yText}}>

      <div className="absolute top-0 left-0 w-full h-full bg-black backdrop-blur-3xl bg-opacity-60 flex flex-col justify-center items-center">
        <motion.h1 style={{y : yBg}}>{type === "service" ? "My Skills" : "What I did.."}</motion.h1>
      </div>
    </div>
  );
}

Parallax.propTypes = {
  type: PropTypes.string.isRequired,
};
