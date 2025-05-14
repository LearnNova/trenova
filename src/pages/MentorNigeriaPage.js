import HeroSection from '../layouts/MentorNigeriaSections/heroSection';
import ApplicationFormSection from '../layouts/MentorNigeriaSections/applicationFormSection';
import ProgramSection from 'layouts/MentorNigeriaSections/ProgramSection';
import ModuleSection from '../layouts/MentorNigeriaSections/moduleSection';
import FooterSection from '../layouts/MentorNigeriaSections/footerSection';
// import PageTitle from 'utils/PageTitle';

import '../layouts/MentorNigeriaSections/mentornigeria.css'
import { useParams } from 'react-router-dom';

function MentorNigeriaPage() {
  const { name } = useParams();

  return (
    <div className="App">
      {/* <PageTitle title="MentorNigeria"/> */}
      <HeroSection />
      <ProgramSection />
      <ApplicationFormSection name={name} />
      <ModuleSection />
      <FooterSection firstText={'MentorNigeria'} account={true} link={'https://www.learnnova.ng/MentorNigeria/trenova'} />
    </div>
  );
}

export default MentorNigeriaPage;
