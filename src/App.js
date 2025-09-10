import React, { useEffect } from 'react';
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   import { initScrollReveal, initParallax, initMobileNav } from './utils/scrollEffects';
   import HeroSection from './components/1_HeroSection';
   import ProblemSection from './components/2_ProblemSection';
   import SolutionSection from './components/3_SolutionSection';
   import ValueProposition from './components/4_ValueProposition';
   import CompanyVision from './components/5_CompanyVision';
   import CallToAction from './components/7_CallToAction';
   import Footer from './components/8_Footer';
   import TermsOfService from './legal/TermsOfService';
   import PrivacyPolicy from './legal/PrivacyPolicy';
   import SecurityPolicy from './legal/SecurityPolicy';
   import LegalNotice from './legal/LegalNotice';
   import './App.css';

   function App() {
     useEffect(() => {
       initScrollReveal();
       initParallax();
       initMobileNav();
     }, []);

     return (
       <Router>
         <div className="App">
           <Routes>
             <Route
               path="/"
               element={
                 <>
                   <HeroSection />
                   <ProblemSection />
                   <SolutionSection />
                   <ValueProposition />
                   <CompanyVision />
                   <CallToAction />
                   <Footer />
                 </>
               }
             />
             <Route path="/terminos" element={<TermsOfService />} />
             <Route path="/privacidad" element={<PrivacyPolicy />} />
             <Route path="/seguridad" element={<SecurityPolicy />} />
             <Route path="/aviso-legal" element={<LegalNotice />} />
           </Routes>
         </div>
       </Router>
     );
   }

   export default App;