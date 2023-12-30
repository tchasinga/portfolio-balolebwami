import './porfolio.scss'; // Assuming correct path to portfolio.scss
import options from './objects'; // Assuming correct path to objects.js
import { motion, useScroll, useSpring ,useTransform} from "framer-motion";
import { useRef } from 'react';

import PropTypes from 'prop-types';
import Contact from '../contact/Contact';

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  
    return (
    <section className='mysection'>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.UrlImg} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </section>
    );
};

Single.propTypes = {
    item: PropTypes.object.isRequired,
};



export default function Portfolio() {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    // Assuming scrollYProgress is defined or imported
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>

            {options.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
    
}
