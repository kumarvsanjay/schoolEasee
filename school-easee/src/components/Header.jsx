import React,{useState} from 'react';

// BEM -> Block Element Modifier

import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';


const Header = ({Link}) => {
  let navigate = useNavigate();
        const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <header className="main-header bg-[#6363F7] py-4 lg:px-24 min-h-[12vh] px-10 md:px-24 ">

        <nav className='flex items-center flex-wrap  w-full text-white gap-[10%] '>

         <h2 className='logo font-bold  text-4xl basis-2/4 cursor-pointer'  onClick={() => navigate("./")} >School Easee</h2> 
         <ul className='navbar-links items-center justify-between font-medium text-2xl hidden md:flex basis-2/5 cursor-pointer' >

         <li><a onClick={() => navigate("./Futures")} >Futures</a></li>
         <li><a onClick={() => navigate("./RequestDemo")}>Book a demo</a></li>
         <li><a className='default-btn' onClick={() => navigate("./ContactUs")}>Login</a></li>
         </ul>
         </nav>
         
         {/* menu bar */}

         <div className="navbar-menu ml-4 block md:hidden relative">
        {toggleMenu ? <RiCloseLine className='cursor-pointer' color="#fff" size={27} onClick={() => setToggleMenu(false)} />  : <RiMenu3Line color="#fff" className='cursor-pointer' size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && ( <div className="navbar-menu_container text-center p-8 absolute top-20 right-0 rounded-lg shadow-lg scale-up-center text-white text-4xl md:hidden block ">
                         <div className="navbar-menu_container-links">
                            <h2 className='my-8 cursor-pointer'><a onClick={() => navigate("./Futures")}>Futures</a></h2>
                            <h2 className='my-8 cursor-pointer'><a onClick={() => navigate("./RequestDemo")}>Book a demo</a></h2>
                            <button className='default-btn' type="button" onClick={() => navigate("./ContactUs")} >Login</button>
                            
                        </div>
                        </div>
        )}
      </div>

      
      </header>
      
    )
}

export default Header
