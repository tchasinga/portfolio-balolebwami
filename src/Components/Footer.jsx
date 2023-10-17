import '../App.css'
import React, { useEffect } from 'react'    
import Github from '/src/img/3d-fluency-github-logo.png'
import LinkedIn from '/src/img/3d-fluency-linkedin-logo.png'
import Gmail from '/src/img/3d-fluency-gmail-logo.png'
import WhatSapp from '/src/img/icons8-whatsapp-480.png'
import Contactus from '/src/assets/animation_contactus.json'
import Lottie from 'lottie-react'
// import ScrollReveal from 'scrollreveal'


const Footer = () =>{

    // useEffect(() => {
    //     const options = {
    //       origin: 'bottom',
    //       distance: '30px',
    //       duration: 2000,
    //       reset: true,
    //     };
    
    //     const sr = ScrollReveal(options);
    
    //     sr.reveal('.contact', { delay: 900, origin: 'bottom' });
    //     sr.reveal('.paraThree', { delay: 800, origin: 'bottom' });
    //    // sr.reveal('.button, .paraOne, .paraTwo, .paraThree', { delay: 400, origin: 'bottom' });
    //   }, []);


  return (
     <footer className='myfooter mt-32 px-32'>
         <h1 className='contact  flex justify-center  text-3xl p-14 font-bold'>CONTACT...</h1>
         <div className='flex getColomn justify-between mt-14'>
             <div className='flex flex-col paraThree  w-full getWidth'>
                <h3 className='text-white text-xl font-semibold'>For more information</h3>
                <p className='myborder paraThree font-bold bg-slate-700 w-40 p-2 flex'>My Resume</p>
                <p className='mt-6 font-normal mb-4'>
                I'm a software engineer based in Rwanda, Kigali specializing in building and occasionally Designing exceptional websites, applications, and everything in Between.
                </p>
                <div>
                    <ul>
                        <li>
                            <a className='flex paraThree items-center gap-2 w-9' target="_blank" rel="noopener noreferrer" href="https://github.com/tchasinga">
                                <img src={Github} alt=''/>
                                <p>Github</p>
                            </a>
                        </li>
                        <li>
                            <a className='flex items-center paraThree gap-2 w-9' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tchasingajacques/">
                                <img src={LinkedIn} alt='LinkedIn'/>
                                <p>LinkedIn</p>
                            </a>
                        </li>
                        <li className='w-full'>
                            <a className='flex paraThree  items-center gap-2 ' target="_blank" rel="noopener noreferrer" href="">
                                <img className='w-9' src={Gmail}/>
                                <p className=''>tchasingajacques@gmail.com</p>
                            </a>
                        </li>
                        <li>
                            <a className='flex items-center gap-2 paraThree' target="_blank" rel="noopener noreferrer" href="">
                                <img className='svg' src={WhatSapp} alt="WhatSapp" />
                                <p>+250 787289028</p>
                            </a>
                        </li>
                    </ul>
                </div>
             </div>
             <div className=''>
                <Lottie  animationData={Contactus} className='myLottie paraThree'/>
             </div>
         </div>
     </footer>
  )
}

export default Footer;