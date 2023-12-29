import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import './Sidebars.scss'
import { useState } from "react";
import {motion} from 'framer-motion'


export default function Sidebars() {

  const [open, setOpen] = useState(false);

  const variants ={
    open: {},
    closed: {
      clipPath: "circle(30px at 50px 50px)"
    },
  }

  return (
    <motion.div className="sidebar" animate={open ? "open" : closed}>
        <motion.div className="bg" variants={variants}>
            <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}
 