import HeroSection from './MentorNigeriaSections/heroSection';
import ApplicationFormSection from './MentorNigeriaSections/applicationFormSection';
import ModuleSection from './MentorNigeriaSections/moduleSection';
import FooterSection from './MentorNigeriaSections/footerSection';

import './mentornigeria.css'

function MentorNigeriaPage() {
  return (
    <div className="App">
      <HeroSection />
      <ApplicationFormSection />
      <ModuleSection />
      <FooterSection />
    </div>
  );
}

export default MentorNigeriaPage;
