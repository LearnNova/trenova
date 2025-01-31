import React from 'react'
// import { NavigateForm } from 'utils/navigateForm'
import './mentornigeria.css'

const HeroSection = () => {
  return (
    <div>
        <div className='hero-sec-wrapper'>
            <div className='hero-sec-text'>EARN WHILE YOU LEARN!</div>
        </div>
        <div className='hero-sec-info'>
        <div className='apply-now-get-started'><a href='#application-form-section'> <span className='highlighter'>Apply Now</span> to Get Started!</a> </div>
            {/* <div className='line-breaker'></div> */}
            {/* <div className='section-3'>
                <span>“…</span>
                <span className='highlighter'>Earn While You Learn @ </span>
                <span>MentorNigeria…”</span>
            </div> */}
            <div className='section-4'>
                <span>
                    Introducing the MentorNigeria Earn-While-You-Learn Program - a <span className='highlighter'>FREE</span> training and 
                    mentorship initiative designed to empower young adults with the skills needed to excel in employment and entrepreneurship.
                    <br /><br />
                    As a participant you’ll enjoy:
                </span>
                <span className='hero-sec-info-list-container'>
                    <ul>
                        <li>Valuable knowledge and mentorship to fast-track your success</li>
                        <li>Opportunities to secure full-time employment with one of our partners during your time at the Academy</li>
                        <li>A chance to win up to <span className='highlighter'><b style={{textDecoration: 'underline'}}>₦500K</b></span> in grants</li>
                    </ul>
                </span>
                
            </div>
            <div className='line-breaker'></div>
            <div className='what-you-learn-title'>
                <b>Who is this program for?</b>
                
            </div>
            <div className='what-you-learn-info'>
                <span>
                    This comprehensive <span className='highlighter'>FREE</span> training and mentorship program is tailored for young adults eager to:
                </span>
                <span className='what-you-learn-info-list-container'>
                    <ul>
                        <li><span className='highlighter'>BUILD</span> a profitable startup business from the ground up</li>
                        <li><span className='highlighter'>SECURE</span> high-paying jobs in Nigeria’s thriving economy</li>
                        <li><span className='highlighter'>OFFER</span> virtual professional services to organizations in Canada, the US, and Europe</li>
                    </ul>
                </span> 
                <span>
                Don’t miss this opportunity to transform your future.
                </span>
            </div>
            
            <div className='apply-now-get-started'><a href='#application-form-section'> <span className='highlighter'>Apply Now</span> to Get Started!</a> </div>

        </div>
        
        <div className='whatsapp-btn-container'>
            <a href='https://wa.me/+2347044086794' className='whatsapp-btn' target='blank'><i className="ri-whatsapp-line"></i></a>
            <span>Chat Us</span>
        </div>

        <div className='news-bar-container'>
            <p className='news'>Office Address: 7b, Ogunsiji Close, Off Allen Avenue, Ikeja, Lagos. | Date and Time: To be Communicated upon Applying.</p>
        </div>
    </div>
  )
}

export default HeroSection
