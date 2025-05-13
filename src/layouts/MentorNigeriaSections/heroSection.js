import React from 'react'
// import { NavigateForm } from 'utils/navigateForm'
import './mentornigeria.css'

const HeroSection = () => {
  return (
    <div>
        <div className='hero-sec-wrapper'>
        <div className='hero-sec-text-1'>TreNova School Growth Consultant Training & Mentorship Program</div>
        </div>
        <div className='hero-sec-info'>
            <div className='apply-now-get-started'><a href='#application-form-section'> <span className='highlighter'>Apply Now</span> to Get Started!</a></div>
            <div className='line-breaker'></div>
            {/* <div className='section-3'>
                <span>“…</span>
                <span className='highlighter'>TreNova School Growth Consultant Training & Mentorship Program</span>
                <span>MentorNigeria…”</span>
            </div> */}

            {/* <div className='w-100'>
                <h1>TreNova School Growth Consultant Training & Mentorship Program</h1>
                <h1>Build a High-Impact Consulting Business That Transforms Schools and Changes Lives</h1>
                <p>Step confidently into a meaningful profession where you help launch, grow, and elevate private schools—while building a credible, profitable consulting brand you’re proud of.</p>
            </div> */}

            <div className='section-4'>
                <p className='font-bold'>Become a Certified Private School Business Consultant</p>
                <p>Gain expert training, hands-on mentorship, and the tools you need to guide schools toward success—positioning yourself as a trusted voice in the education sector.</p>
                <p className='highlighter'>Is This the Moment You Start Empowering Schools—and Yourself?</p>
                <div className='apply-now-get-started'><a href='#application-form-section'> <span className='highlighter'>👉 [Enroll Now]</span></a></div>
                
                {/* <span className='hero-sec-info-list-container'>
                    <ul>
                        <li>Valuable knowledge and mentorship to fast-track your success</li>
                        <li>Opportunities to secure full-time employment with one of our partners during your time at the Academy</li>
                        <li>You also have a chance to secure a Business Takeoff Grant Award.</li>
                    </ul>
                </span> */}
                
            </div>

            <div className='line-breaker'></div>
            <div className='what-you-learn-title'>
                <b>What You'll Be Equipped to Do</b>
            </div>
            <div className='what-you-learn-info'>
                <span>
                    This program is ideal for purpose-driven individuals who want to build a career around educational impact:
                </span>
                <span className='what-you-learn-info-list-container'>
                    <ul>
                        <li>Educators ready to transition into consulting</li>
                        <li>School owners and edu-preneurs seeking new income streams</li>
                        <li>Independent consultants expanding into the education sector</li>
                        <li>Retired professionals looking to make a lasting difference</li>
                        <li>Ambitious young professionals seeking a career with impact</li>
                    </ul>
                </span> 
                {/* <span>
                   Don’t miss this opportunity to transform your future.
                </span> */}
            </div>


            <div className='line-breaker'></div>
            <div className='what-you-learn-title'>
                <b>Who is this program for?</b>
            </div>
            <div className='what-you-learn-info'>
                <span>
                    This program is ideal for purpose-driven individuals who want to build a career around educational impact:
                </span>
                <span className='what-you-learn-info-list-container'>
                    <ul>
                        <li>Educators ready to transition into consulting</li>
                        <li>School owners and edu-preneurs seeking new income streams</li>
                        <li>Independent consultants expanding into the education sector</li>
                        <li>Retired professionals looking to make a lasting difference</li>
                        <li>Ambitious young professionals seeking a career with impact</li>
                    </ul>
                </span> 
                {/* <span>
                   Don’t miss this opportunity to transform your future.
                </span> */}
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