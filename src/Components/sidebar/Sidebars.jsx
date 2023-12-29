import PropTypes from 'prop-types';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Links from './links/Links';
import ToggleButton from './toggleButton/ToggleButton';
import './Sidebars.scss';

export default function Sidebars() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: 'circle(1200px at 1000px 200px)',
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
      <motion.div className="bg" variants={variants} initial="closed" animate={open ? 'open' : 'closed'}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}

Sidebars.propTypes = {
  setOpen: PropTypes.func.isRequired,
};
