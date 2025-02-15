// import CareerHeroSection from 'layouts/CareerSections/CareerheroSection';
import CareerHeroSection1 from '../layouts/CareerSections/CareerHeroSection1';
import CareerFooterSection from 'layouts/CareerSections/CareerfooterSection';
import CareerApplicationFormSection from 'layouts/CareerSections/CareerapplicationFormSection';

import '../layouts/CareerSections/career.css'

function CareerPageTSR() {
  return (
    <div className="App">
      <CareerHeroSection1 />
      <CareerApplicationFormSection role='DIRECT APPLICANT - TERRITORY SALES MANAGER'/>
      <CareerFooterSection />
    </div>
  );
}

export default CareerPageTSR;
