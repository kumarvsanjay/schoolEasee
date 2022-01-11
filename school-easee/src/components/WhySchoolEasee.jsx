import React from 'react'
import './WhySchoolEasee.scss'


import img1 from '../images/1. Landing Page/whySclEasee/gainAccess.svg' 
import img2 from '../images/1. Landing Page/whySclEasee/addMsg.svg' 
import img3 from '../images/1. Landing Page/whySclEasee/prioritySupport.svg' 
import img4 from '../images/1. Landing Page/whySclEasee/saveMoney.svg' 
import img5 from '../images/1. Landing Page/whySclEasee/easy_simple_ui.svg' 


const images = [img1,img2,img3,img4,img5];

const WhySchoolEasee = ()=> {
    const titlesH =[["Gain access to all powerful tools with a single purchase"],["Add Message templates and automate your messaging using Schedule"],["Priority Support System"],["Save Money User-Based Pricing"],["Easy & Simple Usage interface"]];
    const titlesPara =[["Use powerful tools and simplify your school management process"],["Never worry about messaging regularity with hectic work, Just automate it."],["Need any help ? We are here to assist you 12*6"],["Don't pay more, Just pay as per no of students with our flexible package"],["We make things simple, Our UI is simple and understandable by everyone."]]
  
    

    
    return (
       
        <section className="mainContainer">
        
        <div className='title'> 
            <h2>why <span>school easee</span></h2>
            <p>Build a modern, convenient and reliable school <br /> 
            management system for your company</p>

            </div>
            <div className='whySchoolEasee' >

             {titlesH.map((e, index) => (<WhySchoolEaseeHero titlesH= {titlesH} titlesPara= {titlesPara} index = {index}/>))} 
            </div>
            </section>
    )
}

export default WhySchoolEasee;


const WhySchoolEaseeHero = ({index,titlesH,titlesPara}) => {
    
        return (
            <div className='hero-nav  ' id={index} >
        <div className='img-box'>
            { <img src={images[index]} alt="" /> }
        </div>
        <div className='text-box'>
        <h2>{titlesH[index]}</h2>
        <p>{titlesPara[index]} </p>
        </div>
        </div>
    );
    
}
    









