import PropTypes from "prop-types";
import "./parallax.scss";
import imgGod from "../Pics/NewOne.jpg";
import ImageBG from "../Pics/secondone.jpg";

export default function Parallax({ type }) {
  return (
    <div
      className="parallax"
      style={{
        background: `url(${type === "services" ? imgGod : ImageBG}) center no-repeat`,
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black backdrop-blur-sm bg-opacity-50 flex flex-col justify-center items-center">
        <h1>{type === "service" ? "My Skills" : "What I did.."}</h1>
      </div>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="starts"></div>
    </div>
  );
}

Parallax.propTypes = {
  type: PropTypes.string.isRequired,
};
