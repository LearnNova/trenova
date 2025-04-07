import CareerHeroSection3 from 'layouts/CareerSections/CareerHeroSection3';
import CareerFooterSection from 'layouts/CareerSections/CareerfooterSection';
import CareerApplicationFormSection from 'layouts/CareerSections/CareerapplicationFormSection';

import '../layouts/CareerSections/career.css'

function CareerPageSM() {
  return (
    <div className="App">
      <CareerHeroSection3 />
      <CareerApplicationFormSection role='DIRECT APPLICANT - DIGITAL MARKETER'/>
      <CareerFooterSection />
    </div>
  );
}

export default CareerPageSM;
