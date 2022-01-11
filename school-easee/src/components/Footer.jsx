import React from "react";
import {RiFacebookBoxFill,RiInstagramLine,RiYoutubeFill,RiTwitterFill,RiLinkedinBoxFill } from 'react-icons/ri'
import {IoLogoGooglePlaystore,IoLogoAppleAppstore } from 'react-icons/io5'
import { useNavigate } from "react-router-dom";



const Footer = () => {
  let navigate = useNavigate();
  return (
    <footer className="bg-[#1B365E]  " >
      <div className="footer  ">
        <div className="footerContainer flex flex-wrap  justify-between  pt-24 px-10 md:px-24 lg:px-40">
          <div className="footer-row ">
            <h2 className="footer-h2"  >school easee</h2>
            <p className="footer-p cursor-default "><a >get in touch</a></p>
            <div className="footerNavEmail my-5">
              <input type="text" placeholder="Email Address" className="outline-none p-3 px-7  rounded-l-lg" />
              <input type="submit" value="submit" className=" bg-[#2655ac] text-white outline-none p-3 px-9 rounded-r-lg cursor-pointer hover:bg-[#3a79ee]"  />
            </div>
            <h3 className="font-medium text-2xl capitalize text-white mt-12 mb-12" >a product of <br /> edfox technologies private limited</h3>
          </div>

          <div className="footer-row mt-8 md:m-0">
            <h2 className="footer-h2" >company</h2>
            <p className="footer-p  " ><a onClick={() => navigate("./AboutUs")}>about us</a></p>
            <p className="footer-p "><a onClick={() => navigate("./Careers")}>careers</a></p>
            <p className="footer-p "><a onClick={() => navigate("./Partnership")}>partnership with us</a></p>
            <p className="footer-p "><a onClick={() => navigate("./OurPartners")}>our partners</a></p>
            <p className="footer-p "><a onClick={() => navigate("./ContactUs")}>contact us</a></p>
   
          </div>

          <div className="footer-row mt-8 md:m-0">
            <h2 className="footer-h2" >products</h2>
            <p className="footer-p "><a onClick={() => navigate("./RequestDemo")}>request a free demo</a></p>
            <p className="footer-p "><a onClick={() => navigate("./Renewal")}>renewal</a></p>
          </div>

          <div className="footer-row mt-8 md:m-0">
            <h2 className="footer-h2" >legal</h2>
            <p className="footer-p "><a onClick={() => navigate("./AgreementConditions")}>terms & conditions</a></p>
            <p className="footer-p "><a onClick={() => navigate("./PrivacyPolicy")}>privacy policy</a></p>
            <p className="footer-p "><a onClick={() => navigate("./AgreementUse")}>terms of use</a></p>
            <p className="footer-p "><a onClick={() => navigate("./Credits")}>credits</a></p>
          </div>
          <div className="footer-row mt-8 md:m-0">
            <h2 className="footer-h2" >refund & support</h2>
            <p className="footer-p "><a onClick={() => navigate("./RefundPolicy")}>refund policy</a></p>
            <p className="footer-p "><a onClick={() => navigate("./SupportPolicy")}>support policy</a></p>
          </div>
        </div>
        <div className=" dw flex flex-wrap  p-12 md:px-24 lg:px-40">
          <div className="pr-[16%] mt-2 md:m-0 ">
            <h2 className="font-bold text-2xl capitalize text-white mb-6" >download our app</h2>
            <li className="flex">

            <IoLogoGooglePlaystore color="#fff" size={27} className="mr-6 cursor-pointer"   />
            {/* onClick={() => navigate("./playStore")} */}
            <IoLogoAppleAppstore color="#fff" size={27} className="mr-6 cursor-pointer"   />
            {/* onClick={() => navigate("./appStore")} */}
            </li>
            
          </div>

          <div className="mt-8 md:m-0 ">
            <h2 className="font-bold text-2xl capitalize text-white mb-6" >follow us on</h2>
            <i className="flex">

      
            {/* <div className="group  flex items-center justify-center rounded-full overflow-hidden hover:w-80 hover:justify-between w-20 h-20 p-1 ">
            <RiFacebookBoxFill color="#fff"   className=" w-5/6 h-5/6  " />
             <h1  className="hidden group-hover:block mr-5 text-blue-600 text-4xl font-black capitalize " >facebook</h1>
             </div> */}

            <RiFacebookBoxFill color="#fff" size={27} className="mr-6 cursor-pointer" /> 
            {/* onClick={() => navigate("./fb")}  */}
            <RiInstagramLine color="#fff" size={27} className="mr-6 cursor-pointer " />   
             {/* onClick={() => navigate("./insta")}  */}
            <RiTwitterFill color="#fff" size={27} className="mr-6 cursor-pointer" />  
             {/* onClick={() => navigate("./twitter")}  */}
            <RiLinkedinBoxFill color="#fff" size={27} className="mr-6 cursor-pointer" />   
             {/* onClick={() => navigate("./lnkd")}  */}
            <RiYoutubeFill color="#fff" size={27} className="mr-6 cursor-pointer" />   
             {/* onClick={() => navigate("./youtube")}  */}
            </i>
            
          </div>
        </div>
        
      </div>
      <div className="footer-copyRights text-center font-medium text-3xl bg-[#081F42] p-5 text-[#657387]">
        <h3>2019-2021 edfox technologies. all rights reserved</h3>
      </div>
    </footer>
  );
};

export default Footer;
