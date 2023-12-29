import PropTypes from 'prop-types';
import '../Sidebars.scss' 
import { motion } from 'framer-motion';


export default function ToggleButton({setOpen}) {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
   <svg width="50" height="33" viewBox='0 0 23 23'> 
        <motion.path d="M4 18L20 18" strokeWidth="3" stroke="white" strokeLinecap="round" />
        <motion.path d="M4 12L20 12" strokeWidth="3" stroke="black" strokeLinecap="round" />
        <motion.path d="M4 6L20 6" strokeWidth="3" stroke="white" strokeLinecap="round" />
      </svg>

    </button>
  )
}

ToggleButton.propTypes = {
  setOpen: PropTypes.func.isRequired, 
};
 