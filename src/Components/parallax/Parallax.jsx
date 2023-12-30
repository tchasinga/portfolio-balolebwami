import PropTypes from "prop-types";
import "./parallax.scss";
import imgGod from "../Pics/newone.jpg";
import ImageBG from "../Pics/secondone.jpg";
import {motion} from "framer-motion";

export default function Parallax({ type }) {
  return (
    <div
      className="parallax"
      style={{
        background: `url(${type === "service" ? imgGod : ImageBG}) center no-repeat`,
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black backdrop-blur-sm bg-opacity-50 flex flex-col justify-center items-center">
        <motion.h1>{type === "service" ? "My Skills" : "What I did.."}</motion.h1>
      </div>
    </div>
  );
}

Parallax.propTypes = {
  type: PropTypes.string.isRequired,
};
