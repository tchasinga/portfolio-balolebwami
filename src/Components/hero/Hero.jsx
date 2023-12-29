import './heros.scss'
import OneImg from '../Pics/IMG_8669-fotor-bg-remover-2023122911453.png'
import OneImg2 from '../Pics/scroll.png'
import {motion} from 'framer-motion' 



const textVaraint ={
  initial: {
    x:-500,
    opacity:0
  },

animate: {
    x:0,
    opacity:1,
    transition: {
      duration: 1,
      staggerChildren: 1,
    }
  },
   
  scrollButton: {
    opacity:0,
    y:10,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
}

const SliderVariants ={
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'mirror'
    }
  }
}


export default function Hero() {
  return (
    <div className='hero'>
      <div className="wrapper">
      <motion.div className='textContainer' variants={textVaraint} initial="initial" animate="animate">
        <motion.h2 className='uppercase' variants={textVaraint}>tchasinga jack</motion.h2>
        <motion.h1 className='' variants={textVaraint}>Full-stack Web developer</motion.h1>
        <motion.div className="buttons" variants={textVaraint}>
          <motion.button className="btn" variants={textVaraint}>Hire me</motion.button>
          <motion.button className="btn" variants={textVaraint}>Download CV</motion.button>
        </motion.div>
        <motion.img variants={textVaraint} src={OneImg2} animate="scrollButton" alt="" />
      </motion.div>
      </div>
      <motion.div className="slidingTextContainer" animate="animate" variants={SliderVariants} initial="initial">
        Full Stack Web Developer and Web Designer... 
      </motion.div>
      <div className="imageContainer">
        <img src={OneImg} alt="" />
      </div>
    </div>
  )
} 
 