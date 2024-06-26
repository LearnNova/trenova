import HeroSection from '../layouts/MentorNigeriaSections/heroSection';
import ApplicationFormSection from '../layouts/MentorNigeriaSections/applicationFormSection';
import ModuleSection from '../layouts/MentorNigeriaSections/moduleSection';
import FooterSection from '../layouts/MentorNigeriaSections/footerSection';

import '../layouts/MentorNigeriaSections/mentornigeria.css'

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
