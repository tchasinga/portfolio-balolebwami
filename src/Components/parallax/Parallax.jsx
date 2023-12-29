import PropTypes from 'prop-types';
import './parallax.scss'

export default function Parallax({type}) {
    return (
        <div>
                <h1>{type ==="service" ? "My Skills" : "What I did.."}</h1>
        </div>
    )
}

Parallax.propTypes = {
    type: PropTypes.string.isRequired,
}
