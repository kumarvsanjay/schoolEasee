import React from 'react'

const OurPartners = () => {
    return (
        <div className=' footer-links-container '>
            <div className=' footer-links-title '>
            <h3 className=' footer-links-title-h3 '>Agreement</h3>
                <h2 className=' footer-links-title-h2 '>Terms And Conditions</h2>
            </div>
            <div className="footer-link-flex w-[100%] ">
            <div className="partner basis-1/4 drop-shadow-xl h-96 rounded-xl bg-[#e2dfdf]">
                <div className="img"></div>
                <div className="description"></div>
            </div>
            <div className="partner basis-1/4 h-96 drop-shadow-xl rounded-xl bg-[#ffd6d6] ">
                <div className="img"></div>
                <div className="description"></div>
            </div>
            <div className="partner basis-1/4 h-96 drop-shadow-xl rounded-xl bg-[#cdb7ff]">
                <div className="img"></div>
                <div className="description"></div>
            </div>
            </div>
        </div>
    )
}

export default OurPartners 
