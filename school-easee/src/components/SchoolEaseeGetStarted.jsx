import React from 'react'
import './schoolEaseeGetStarted.scss'

const SchoolEaseeGetStarted = () => {
    return (
        <div className='schoolEaseeGetStarted-container'>
        <div className="SchoolEaseeGetStarted-wrapper ">
            <div className="title py-20">
                <h2>Say Hi to SCHOOL EASEE</h2>
                <p>And say goodbye to papers, spreadsheets, wasted time,<br />
                uncertainity, frustation-Run school smoothly</p>
            </div>
            <div className="form-container">
                <input type="text" placeholder='Name' id='name' />
                <input type="text" placeholder='School Name' id='schoolName' />
                <input type="email" placeholder='Mail ID' id='mailId' />
                <input type="text" placeholder='Mobile Number' id='mobileNo' />
                <input type="button" id='getStarted-btn' value='Get Started' />
            </div>
        </div>
            
        </div>
    )
}

export default SchoolEaseeGetStarted
