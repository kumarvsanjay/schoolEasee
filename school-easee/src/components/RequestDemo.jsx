import React from 'react'

import img1 from '../images/Request a Free Demo/Asset 37.svg' 

const RequestDemo = () => {
    return (
        <div className=' footer-links-container '>
        <div className='footer-links-wrapper' >
            
            <div className=' footer-links-title '>
            {/* absolute, width:200%,left:75% */}
                <h2 className=' footer-links-title-h2 '> Request a free Demo</h2>
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
           
        </div>
        <div className="enrollDemo text-center my-36 p-14 px-24 bg-[#8383FC] rounded-xl ">
            <div className="enrollTitle">
                <h2 className=' text-4xl m-8 text-white' >Enroll for free Demo</h2>
            </div>
           

            <div className="form grid   grid-rows-1 gap-6 gap-x-10 ">

            <input type="text  " placeholder='Name' /> 
            <input type="text  " placeholder='Mobile No' />
            
         
            <input className='md:col-span-2 col-auto' type="text" placeholder='School Name' />
           
         
            </div>
            <input className='bg-white  cursor-pointer rounded-lg block my-4 mx-auto ' type="submit" value='Apply' />
            
            
        </div>
           
        </div>
    )
}

export default RequestDemo 
