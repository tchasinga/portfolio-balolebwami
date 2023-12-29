import PropTypes from 'prop-types';
import '../Sidebars.scss' 
import { motion } from 'framer-motion';


export default function ToggleButton({setOpen}) {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox='0 0 23 23'> 
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
      </svg>
    </button>
  )
}

ToggleButton.propTypes = {
  setOpen: PropTypes.func.isRequired,
};
 