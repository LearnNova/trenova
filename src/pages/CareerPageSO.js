// import CareerHeroSection from 'layouts/CareerSections/CareerheroSection';
import CareerHeroSection2 from 'layouts/CareerSections/CareerHeroSection2';
import CareerFooterSection from 'layouts/CareerSections/CareerfooterSection';
import CareerApplicationFormSection from 'layouts/CareerSections/CareerapplicationFormSection';

import '../layouts/CareerSections/career.css'

function CareerPageSO() {
  return (
    <div className="App">
      <CareerHeroSection2 />
      <CareerApplicationFormSection role='DIRECT APPLICANT - SALES REFERRAL AGENT'/>
      <CareerFooterSection />
    </div>
  );
}

export default CareerPageSO;
