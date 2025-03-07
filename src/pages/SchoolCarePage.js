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
      <div className='text-center font-extrabold pt-2 text-black' style={{background: '#FA8806'}}>
        <h1 className='text-3xl md:text-5xl lg:text-7xl'>
          📩 Need Help?
        </h1>
      </div>
      <FooterSection />
    </div>
  )
}

export default SchoolCarePage