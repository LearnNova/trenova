import CareerHeroSection from 'layouts/CareerSections/CareerheroSection';
import CareerFooterSection from 'layouts/CareerSections/CareerfooterSection';
import CareerApplicationFormSection from 'layouts/CareerSections/CareerapplicationFormSection';

import '../layouts/CareerSections/career.css'

function CareerPage() {
  return (
    <div className="App">
      <CareerHeroSection />
      <CareerApplicationFormSection />
      <CareerFooterSection />
    </div>
  );
}

export default CareerPage;
