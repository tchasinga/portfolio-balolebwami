import './heros.scss'
import OneImg from '../Pics/IMG_8669-fotor-bg-remover-2023122911453.png'
import OneImg2 from '../Pics/scroll.png'

export default function Hero() {
  return (
    <div className='hero'>
      <div className="wrapper">
      <div className='textContainer'>
        <h2 className='uppercase'>tchasinga jack</h2>
        <h1 className=''>Full-stack Web developer</h1>
        <div className="buttons">
          <button className="btn">Hire me</button>
          <button className="btn">Download CV</button>
        </div>
        <img src={OneImg2} alt="" />
      </div>
      </div>
      <div className="imageContainer">
        <img src={OneImg} alt="" />
      </div>
    </div>
  )
} 
 