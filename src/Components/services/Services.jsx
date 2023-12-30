import Languagues from "./Languagues";
import "./service.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export default function Services() {
  return (
    <motion.div className="service">
      <motion.div
        className="textContainer"
        variants={variants}
        initial="initial"
        whileInView='animate'
      >
        <p>
          I focus on coding in those listed technology
          <br />
          and deep practice
        </p>
        <hr />
      </motion.div>
      <motion.div  variants={variants}
        initial="initial"
        whileInView='animate'>
        <Languagues />
      </motion.div>
    </motion.div>
  );
}
