import React from 'react';
import Abouts from './Abouts';


const Navabars = () =>{
    return(
        <div>
            <div className="myheader bg-blue-950  p-2 font-poppins w-full font-normal font-sans px-32 items-center flex justify-between">
                <img className='w-10 h-10 object-contain  rounded-full' src="/src/img/IMG_8669.jpg" alt="" srcset="" />
                <ul className='flex gap-7 text-white text-sm cursor-pointer'>
                    <li className='text-blue-300'>
                        <p>Home</p>
                    </li>
                    <li>
                        <p>About-me</p>
                    </li>
                    <li>
                        <p>Portfolio</p>
                    </li>
                    <li>
                        <p>Service</p>
                    </li>
                    <li>
                        <p>Experience</p>
                    </li>
                    <li>
                        <p>Contact</p>
                    </li>
                </ul>
            </div>
            <Abouts />
        </div>
    )
}

export default Navabars;