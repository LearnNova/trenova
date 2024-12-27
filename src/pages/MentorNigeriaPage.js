import HeroSection from '../layouts/MentorNigeriaSections/heroSection';
import ApplicationFormSection from '../layouts/MentorNigeriaSections/applicationFormSection';
import ProgramSection from 'layouts/MentorNigeriaSections/ProgramSection';
import ModuleSection from '../layouts/MentorNigeriaSections/moduleSection';
import FooterSection from '../layouts/MentorNigeriaSections/footerSection';
// import PageTitle from 'utils/PageTitle';

import '../layouts/MentorNigeriaSections/mentornigeria.css'

function MentorNigeriaPage() {
  return (
    <div className="App">
      {/* <PageTitle title="MentorNigeria"/> */}
      <HeroSection />
      <ApplicationFormSection />
      <ProgramSection />
      <ModuleSection />
      <FooterSection />
    </div>
  );
}

export default MentorNigeriaPage;
