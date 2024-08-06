import React from 'react'
import { NavigateForm } from 'utils/navigateForm'
import './mentornigeria.css'

const HeroSection = () => {
  return (
    <div>
        <div className='hero-sec-wrapper'>
            <div className='hero-sec-text'>"EARN WHILE YOU LEARN!"</div>
        </div>
        <div className='hero-sec-info'>
            <div><a href='#application-form-section'> <span className='highlighter' style={{fontSize: '2em'}}><button className='submit-btn'>APPLY NOW</button></span> to Reserve Your Seat at the Next Opportunity Discovery Day Seminar...</a> </div>
            <div className='line-breaker'></div>
            <div className='section-3'>
                <span>“…</span>
                <span className='highlighter'>Earn While You Learn </span>
                <span className='blue-color'>@ </span>
                <span>MentorNigeria…”</span>
            </div>
            <div>
                <span>
                    Introducing the MentorNigeria Earn While You Learn Program. Join our <span className='highlighter'>FREE</span> training and 
                    mentorship initiative to boost your entrepreneurship and employment skills. 
                    As a participant you’ll have the opportunity to:
                </span>
                <span className='hero-sec-info-list-container'>
                    <ul>
                        <li>Earn up to <span className='highlighter'><b style={{textDecoration: 'underline'}}>₦2 Million</b></span> while gaining valuable knowledge, and</li>
                        <li>Possibly secure full-time employment with <b>LearnNova Learning Support Centre</b> during your time at the Academy</li>
                    </ul>
                </span>
                
            </div>
            <div className='line-breaker'></div>
            <div className='what-you-learn-title'>
                What is this <span>FREE</span> training and mentorship program all about, and who is it for?
            </div>
            <div className='what-you-learn-info'>
                <span>
                    This <span className='highlighter'>Training and Mentorship program</span> is designed for <span className='highlighter'>Young Adults</span> interested in acquiring skills
                    and knowledge required to:
                </span>
                <span className='what-you-learn-info-list-container'>
                    <ul>
                        <li><span className='highlighter'>SECURE</span> well-paying employment with companies operating within the Nigerian economy</li>
                        <li><span className='highlighter'>OFFER</span> virtual professional services to organizations in Canada, the US, and Europe</li>
                        <li><span className='highlighter'>BUILD</span> a profitable start-up business</li>
                    </ul>
                </span> 
            </div>
            
            <div className='apply-now-link-2' onClick={NavigateForm}>Apply Now to Join...</div>

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
