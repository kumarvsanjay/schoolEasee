import React from 'react';
import "./landing_page.scss";
import landingImg from '../images/1. Landing Page/Asset 1.svg'


const Landing_page = () => {
    return (
        <>
        <div className='landing_page'>
        <section className="hero">

        <h2 className='my-24 md:my-0 '>the ultimate school analytics & <br /> management solution</h2>
        <p>automate & manage your growing business even better using human resource, <br/> customer relations, accounts management right inside your apps</p>
            <button id='get-started'>get started</button>
            <button id='try-demo'>try demo</button>
        </section>
        
        </div>
        <div className="landing_page-img md:block hidden">
           <img src={landingImg} alt="" />
        </div>
        </>
    )
}

export default Landing_page
