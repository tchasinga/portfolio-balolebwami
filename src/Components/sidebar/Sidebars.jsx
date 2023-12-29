import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import './Sidebars.scss'


export default function Sidebars() {
  return (
    <div className="sidebar">
        <div className="bg">
            <Links />
        </div>
        <ToggleButton />
    </div>
  )
}
 