import '../App.css'
import Github from '/src/img/3d-fluency-github-logo.png'
import LinkedIn from '/src/img/3d-fluency-linkedin-logo.png'
import Gmail from '/src/img/3d-fluency-gmail-logo.png'
import WhatSapp from '/src/img/icons8-whatsapp-480.png'


const Footer = () =>{
  return (
     <footer className='myfooter mt-32 px-32'>
         <h1 className='flex justify-center text-3xl p-14 font-bold border'>CONTACT</h1>
         <div className='flex getColomn mt-14 gap-10'>
             <div className='flex flex-col border w-2/4 getWidth'>
                <h3 className='text-white text-xl font-semibold'>For more information</h3>
                <p className='myborder font-bold bg-slate-700 w-40 p-2 flex'>My Resume</p>
                <p className='mt-6 border font-normal mb-4'>
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
                                <p className='border'>tchasingajacques@gmail.com</p>
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
             <div>Two</div>
         </div>
     </footer>
  )
}

export default Footer;