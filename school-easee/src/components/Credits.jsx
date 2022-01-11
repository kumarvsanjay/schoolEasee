import React from 'react'

import img1 from '../images/Credits/Asset 34.svg' 

const Credits = () => {
    return (
        <div className=' footer-links-container '>
            <div className=' footer-links-title '>
                <h2 className=' footer-links-title-h2 '>Credits</h2>
            </div>
            <div className="creditsPoints footer-link-flex">
            <ul className='text-2xl text-[#5D6268]  list-inside list-disc' >
                <li>All Credits of Images / Vectors / Photos goes to Freepik </li>
                <li>All Credits of icons goes to Flaticon</li>
            </ul>
            
<img className='footer-links-title-img w-full  block' src={img1} alt="" />
            </div>
        </div>
    )
}

export default Credits 
