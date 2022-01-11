import React from 'react'

import img1 from '../images/About Us/Asset 32.svg' 


const AboutUs = () => {
    return (
        <div className=' footer-links-container '>
            <div className=' footer-links-title '>
                <h2 className=' footer-links-title-h2 '>Refund Policy</h2>
            </div>
            <div className="footer-link-flex">
            <p className=' footer-links-title-p'>
                School Easee is a product of edfox Technologies Private Limited. We are in the Market for past 2.5 years with 47+ Schools. School Easee is a product of edfox Technologies Private Limited. We are in the Market for past 2.5 years with 47+ Schools. School Easee is a product of edfox Technologies Private Limited. We are in the Market for past 2.5 years with 47+ Schools. School Easee is a product of edfox Technologies Private Limited. We are in the Market for past 2.5 years with 47+ Schools.
                </p>

<img className='footer-links-title-img w-full  block' src={img1} alt="" />
            </div>
            <div className=" py-24 text-center my-36 p-14 px-24 bg-[#8383FC] rounded-xl ">
            <div className="enrollTitle">
                <h2 className=' text-4xl m-8 text-white' >WouldYou Like To Have a <span className='text-[#7CF285]' >free Demo</span>  ? </h2>
                <h3 className='text-3xl text-white' >Our product experts will help you understand how My Classboard <br />
                can help your business through a one-on-one demo session</h3>
            </div>
           

            
            <input className='bg-white text-[#385DF4] text-xl cursor-pointer rounded-lg block mt-10 mx-auto px-8 py-6 ' type="submit" value='Request a demo' />
            
            
        </div>
           


        </div>
    )
}

export default AboutUs 
