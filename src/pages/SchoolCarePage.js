import SchoolCareNavbar from 'layouts/SchoolCareSection/SchoolCareNavbar';
import SchoolCareHeroSection from 'layouts/SchoolCareSection/SchoolCareHeroSection';
import SchoolCareBodyTop from 'layouts/SchoolCareSection/SchoolCareBodyTop';
import SchoolCareBodyMiddle from 'layouts/SchoolCareSection/SchoolCareBodyMiddle';
import SchoolCareBodyBottom from 'layouts/SchoolCareSection/SchoolCareBodyBottom';
import SchoolCareQuiz from 'layouts/SchoolCareSection/SchoolCareQuiz';
import SchoolCareApplicationForm from 'layouts/SchoolCareSection/SchoolCareApplicationForm';
import FooterSection from 'layouts/MentorNigeriaSections/footerSection';

const SchoolCarePage = () => {
  return (
    <div style={{background: '#1C1C1C', color: '#ffffff', fontFamily: 'Poppins, sans-serif'}}>
        <SchoolCareNavbar />
        <SchoolCareHeroSection />
        <SchoolCareBodyTop />
        {/* <SchoolCareApplicationForm 
          id='getintouch1'
        /> */}
        <SchoolCareQuiz />
        <SchoolCareBodyMiddle />
        {/* <SchoolCareApplicationForm 
          id='getintouch2'
        /> */}
      {/* <SchoolCareBodyBottom /> */}
      <SchoolCareApplicationForm 
          id='getintouch3'
      />
      <div className='mb-10' />
      <FooterSection />
    </div>
  )
}

export default SchoolCarePage