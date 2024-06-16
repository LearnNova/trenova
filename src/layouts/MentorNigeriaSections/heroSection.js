import React from 'react'
// import { NavigateForm } from '../utils/navigateForm'
import { NavigateForm } from 'utils/navigateForm'
import '../mentornigeria.css'

const HeroSection = () => {
  return (
    <div>
        <div className='hero-sec-wrapper'>
            <div className='hero-sec-text'>"EARN WHILE YOU LEARN"</div>
        </div>
        <div className='hero-sec-info'>
            <div><a href='#application-form-section'> <span className='highlighter' style={{fontSize: '2em'}}><button className='submit-btn'>APPLY NOW</button></span> to Book a Seat at the NEXT Opportunity Discovery Day Seminar...</a> </div>
            <div className='line-breaker'></div>
            <div>
                <span>...MENTORNIGERIA... </span>
                <span>is offering</span>
            </div>
            <div>
                <span>...Earn while you Learn, </span>
                <span>a <b>FREE</b> Training and Mentorship Program on Entrepreneurship and Career Development... <b>PLUS </b>the opportunity to receive: </span>
                <span className='hero-sec-info-list-container'>
                    <ul>
                        <li>Up to <span className='highlighter'><b>₦2,000,000.00 </b></span> in Earnings while Learning and MentorNigeria Star Award, and</li>
                        <li>You may also secure a full time employment from LearnNova School Support Centre upon Graduation...</li>
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
                        <li><span className='highlighter'>SECURE</span> well-paying employment from companies operating within the Nigerian economy,</li>
                        <li><span className='highlighter'>BUILD</span> profitable start-up business,</li>
                        <li><span className='highlighter'>OFFER</span> virtual professional services to Organizations operating in Canada, US and Europe.</li>
                    </ul>
                </span>
                {/* This <span className='highlighter'>Training and Mentorship program</span> is designed for <span className='highlighter'>Young Adults</span> interested in acquiring skills
                 and knowledge required to: <span className='highlighter'>BUILD</span> profitable start-up businesses or <span className='highlighter'>OFFER</span> professional services
                 virtually or on-site to Organizations operating within any modern economy. */}
            </div>
            <div className='apply-now-link-2' onClick={NavigateForm}>Apply Now to Join...</div>

        </div>
    </div>
  )
}

export default HeroSection