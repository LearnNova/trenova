import CareerHeroSection from 'layouts/CareerSections/CareerheroSection';
import CareerFooterSection from 'layouts/CareerSections/CareerfooterSection';

import '../layouts/CareerSections/career.css'

function CareerPage() {
  return (
    <div className="App">
      <CareerHeroSection />
      <CareerFooterSection />
    </div>
  );
}

export default CareerPage;
