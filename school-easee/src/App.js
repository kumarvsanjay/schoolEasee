import React from "react";
import "../src/components/style/index.css";
import "./App.scss";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// components
import {
  Header,
  Footer,
  HomePage,
  Landing_page,
  WhySchoolEasee,
  SchoolEaseeGetStarted,
  PrivacyPolicy,
  Futures,
  AboutUs,
  Renewal,
  Careers,
  OurPartners,
  RefundPolicy,
  RequestDemo,
  SupportPolicy,
  AgreementConditions,
  AgreementUse,
  ContactUs,
  Partnership,
  Credits,
} from "./components/index-components";

const App = () => {
  return (
    <Router>
    <Header Link={Link} />
      <Routes>
        <Route path="/"  element={<HomePage/>} />
        <Route path="/Futures"  element={<Futures/>} />

{/* footer */}

        <Route path="/Careers"  element={<Careers/>} />
        
        <Route path="/AboutUs"  element={<AboutUs/>} />
        <Route path="/PrivacyPolicy"  element={<PrivacyPolicy/>} />
        <Route path="/Renewal"  element={<Renewal/>} />
        <Route path="/OurPartners"  element={<OurPartners/>} />
        <Route path="/Partnership"  element={<Partnership/>} />
        <Route path="/RefundPolicy"  element={<RefundPolicy/>} />
        <Route path="/RequestDemo"  element={<RequestDemo/>} />
        <Route path="/ContactUs"  element={<ContactUs/>} />
        <Route path="/AgreementUse"  element={<AgreementUse/>} />
        <Route path="/AgreementConditions"  element={<AgreementConditions/>} />
        <Route path="/Credits"  element={<Credits/>} />
        <Route path="/SupportPolicy"  element={<SupportPolicy/>} />
        
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
