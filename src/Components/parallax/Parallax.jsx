import PropTypes from 'prop-types';
import './parallax.scss'

export default function Parallax({type}) {
    return (
        <div
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}>
                <h1>{type ==="service" ? "My Skills" : "What I did.."}</h1>
        </div>
    )
}

Parallax.propTypes = {
    type: PropTypes.string.isRequired,
}
