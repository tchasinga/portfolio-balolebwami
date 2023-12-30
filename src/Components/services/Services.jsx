import Languagues from './Languagues'
import './service.scss'
import {motion} from "framer-motion"


export default function Services() {
  return (
    <motion.div className='service'>
         <motion.div className="textContainer">
            <p >
                I focus on coding in those listed technology
                <br />and deep practice
            </p>
            <hr />
         </motion.div>
         <Languagues />
    </motion.div>
  )
}