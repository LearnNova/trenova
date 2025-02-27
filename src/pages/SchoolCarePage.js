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
        <SchoolCareApplicationForm 
          header={<>Get in <span className="text-orange-500">Touch</span></>} 
          text='Connecting with us is easy and completely confidential. If opportunities are available, we’ll reach out using your preferred contact method.'
          id='getintouch1'
        />
        <SchoolCareBodyMiddle />
        <SchoolCareQuiz />
        <SchoolCareApplicationForm 
          header={<>Get in <span className="text-orange-500">Touch</span></>} 
          text='We make it easy and completely confidential to start a conversation. If opportunities are available, we’ll reach out via your preferred contact method.'
          id='getintouch2'
      />
      <SchoolCareBodyBottom />
      <SchoolCareApplicationForm 
          header={<>Get in <span className="text-orange-500">Touch</span></>}
          text='Connecting with us is easy and fully confidential. If any opportunities arise, we’ll reach out using your preferred contact method.'
          id='getintouch3'
      />
      <div className='mb-10' />
      <FooterSection />
    </div>
  )
}

export default SchoolCarePage