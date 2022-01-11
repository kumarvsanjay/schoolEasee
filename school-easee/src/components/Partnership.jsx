import React from 'react'

import img1 from '../images/Partnership With Us/Asset 29.svg' 


const Partnership = () => {
    return (
        <div className=' footer-links-container '>
            
            <div className=' footer-links-title '>
            {/* absolute, width:200%,left:75% */}
                <h2 className=' footer-links-title-h2 '> Partnership With Us</h2>
            </div>
            <div className="footer-link-flex ">

            <div className="grid basis-3/5 gap-6 p-16 pb-6 bg-[#E8F0FC] rounded-xl grid-cols-1 md:grid-cols-2 ">

            <input type="text" placeholder='First Name'  className='text-2xl px-10 py-4'/> 
            <input type="text" placeholder='Last Name' className='text-2xl px-10 py-4' />
            <input type="text" placeholder='Mobile Number' className='text-2xl px-10 py-4' />
            <input type="text" placeholder='Mail ID' className='text-2xl px-10 py-4' />
         <div className="applyForPartnership col-span-1 md:col-span-2 ">

            <input className='bg-[#23C131]  py-6 px-14 cursor-pointer rounded-lg block m-5  mx-auto ' type="submit" value='Apply for Partnership' />
         </div>


            
            
        </div>
                  

<img className='footer-links-title-img w-full  block' src={img1} alt="" />
            </div>
       
        
           
        </div>
    )
}

export default Partnership
