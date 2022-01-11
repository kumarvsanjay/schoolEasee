import React from 'react'


//images

import  img1 from '../images/1. Landing Page/Futures/admissionMod.svg'
import  img2 from '../images/1. Landing Page/Futures/smartAtte.svg'
import  img3 from '../images/1. Landing Page/Futures/robustComm.svg'
import  img4 from '../images/1. Landing Page/Futures/examMang.svg'
import  img5 from '../images/1. Landing Page/Futures/feeMang.svg'
import  img6 from '../images/1. Landing Page/Futures/transportMang.svg'
import  img7 from '../images/1. Landing Page/Futures/visitorMang.svg'
import  img8 from '../images/1. Landing Page/Futures/learningMang.svg'
import  img9 from '../images/1. Landing Page/Futures/automatedCalen.svg'
import  img10 from '../images/1. Landing Page/Futures/leaveMang.svg'
import  img11 from '../images/1. Landing Page/Futures/timeTableMang.svg'
import  img12 from '../images/1. Landing Page/Futures/liveClass.svg'

const images =[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12];

const titlesH =[["Admission Module"],["smart attendance"],["robust communication"],["examination management"],["fee management"],["transport management"],["visitors management"],["learning management"],["automated calendar"],["leave management"],["time table management"],["live class"]]
const titlesPara =[["manage complete adminstration"],["get automated attendance alerts & reports"],["communicate effectively with parents, students, teachers & staff"],["a module to manage exams & publish results online"],["collect fees online & offline & maintain hastle free financial e-books"],["managge the transportation with live gps tracking"],["secure your campus & provide authenticated access to visitors"],["a robust LMS with assignment, assesments, ebooks modules"],["setup the school calender & publish it online"],["manage students & teachers leave online with just a click."],["manage complete timetable with few clicks"],["schedule & conduct live classes over mobile phone"]]
const Futures = () => {

    

    return (
        <div className="future bg-[#3194F7] p-14  lg:p-16 xl:p-32 ">

        <h2 className=' text-white text-center text-6xl font-medium mb-20' >Exclusive Features</h2>
        <div className='future-container flex flex-wrap gap-20 gap-y-24'>
            
            {titlesH.map((e, index) => (<FuturesHero index = {index}/>))} 
        </div>
        <h2 className=' text-white text-center text-6xl font-medium mt-20 '>& Much More</h2>
        </div>
    )
}

export default Futures





const FuturesHero = ({index}) => {

    return (
        <div className='future-hero-nav rounded-2xl bg-white   flex h-[150px]  '  >
    <div className='img-box flex items-center'>
        { <img src={images[index]}  alt="" /> }
    </div>
    <div className='text-box '>
    <h2 className='text-black font-bold capitalize '>{titlesH[index]}</h2>
    <p className='text-[#334E68]'>{titlesPara[index]} </p>
    </div>
    </div>
);

}


