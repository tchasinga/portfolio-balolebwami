import PropTypes from 'prop-types';
import '../Sidebars.scss' 


export default function ToggleButton({setOpen}) {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      Button
    </button>
  )
}

ToggleButton.propTypes = {
  setOpen: PropTypes.func.isRequired,
};
 