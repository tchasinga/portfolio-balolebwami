import '../App.css'
import Github from '/src/img/3d-fluency-github-logo.png'
import LinkedIn from '/src/img/3d-fluency-linkedin-logo.png'
import Gmail from '/src/img/3d-fluency-gmail-logo.png'
import WhatSapp from '/src/img/icons8-whatsapp-480.png'
import Contactus from '/src/assets/animation_contactus.json'
import Lottie from 'lottie-react'


const Footer = () =>{
  return (
     <footer className='myfooter mt-32 px-32'>
         <h1 className='flex justify-center  text-3xl p-14 font-bold'>CONTACT...</h1>
         <div className='flex getColomn justify-between mt-14'>
             <div className='flex flex-col  w-full getWidth'>
                <h3 className='text-white text-xl font-semibold'>For more information</h3>
                <p className='myborder font-bold bg-slate-700 w-40 p-2 flex'>My Resume</p>
                <p className='mt-6 font-normal mb-4'>
                I'm a software engineer based in Rwanda, Kigali specializing in building and occasionally Designing exceptional websites, applications, and everything in Between.
                </p>
                <div>
                    <ul>
                        <li>
                            <a className='flex items-center gap-2 w-9' target="_blank" rel="noopener noreferrer" href="https://github.com/tchasinga">
                                <img src={Github} alt=''/>
                                <p>Github</p>
                            </a>
                        </li>
                        <li>
                            <a className='flex items-center gap-2 w-9' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tchasingajacques/">
                                <img src={LinkedIn} alt='LinkedIn'/>
                                <p>LinkedIn</p>
                            </a>
                        </li>
                        <li className='w-full'>
                            <a className='flex  items-center gap-2 ' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                                <img className='w-9' src={Gmail}/>
                                <p className=''>tchasingajacques@gmail.com</p>
                            </a>
                        </li>
                        <li>
                            <a className='flex items-center gap-2 ' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                                <img className='svg' src={WhatSapp} alt="WhatSapp" />
                                <p>+250787289028</p>
                            </a>
                        </li>
                    </ul>
                </div>
             </div>
             <div className=''>
                <Lottie  animationData={Contactus} className='myLottie'/>
             </div>
         </div>
     </footer>
  )
}

export default Footer;