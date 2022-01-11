import React from 'react'

import img1 from '../images/Renewal/Asset 36.svg' 

const Renewal = () => {
    return (
        <div className=' footer-links-container '>
            
            <div className=' footer-links-title '>
            {/* absolute, width:200%,left:75% */}
                <h2 className=' footer-links-title-h2 '> Renewal</h2>
            </div>
            <div className="footer-link-flex">

                <p className=' footer-links-title-p'>School Easee is a product of edfox Technologies Private Limited. 
                We are in the Market for past 2.5 years with 47+ Schools.
                 School Easee is a product of edfox Technologies Private Limited. 
                 We are in the Market for past 2.5 years with 47+ Sc
                  School Easee is a product of edfox Technologies Private Limited.
                   We are in the Market for past 2.5 years with 47+ Schools. School Easee is a product of edfox Technologies Private Limited. 
                   We are in the Market for past 2.5 years with 47+ Schools.</p>
                  <img className='footer-links-title-img w-full  block' src={img1} alt="" />

            </div>
       <div className="renewalRequest my-16 flex  gap-10 ">
           <input type="text"  placeholder='Enter School Code' className='drop-shadow-lg p-6 text-[#5D6268] text-xl basis-1/2 rounded-xl ' />
           <input type="submit" value='Request Renewal' className='drop-shadow-md p-6 bg-[#5A9AF9] text-xl text-white basis-1/6 rounded-xl'/>
       </div>
        
        </div>
    )
}

export default Renewal 
