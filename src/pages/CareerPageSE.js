import CareerHeroSection4 from 'layouts/CareerSections/CareerHeroSection4';
// import CareerFooterSection from 'layouts/CareerSections/CareerfooterSection';
import FooterSection from 'layouts/MentorNigeriaSections/footerSection';
import CareerApplicationFormSection from 'layouts/CareerSections/CareerapplicationFormSection';

import '../layouts/CareerSections/career.css'

function CareerPageSE() {
  return (
    <div className="App">
      <CareerHeroSection4 />
      <CareerApplicationFormSection role='DIRECT APPLICANT - E-LEARNING SALES EXECUTIVE'/>
      <FooterSection />
    </div>
  );
}

export default CareerPageSE;
