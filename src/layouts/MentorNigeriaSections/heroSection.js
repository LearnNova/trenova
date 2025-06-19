import React from 'react'
// import { NavigateForm } from 'utils/navigateForm'
import './mentornigeria.css'

const HeroSection = () => {
  return (
    <div>
        <div className='hero-sec-wrapper'>
            <div className='hero-sec-text-1'>
                <h1 style={{fontSize: '1em'}}>MentorNigeria Academy</h1>
                <p style={{fontSize: '0.65em'}} className='italic'>...Your Launchpad for School Consulting, Mentorship, and Sustainable Impact...</p>
            </div>
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
                <div className='what-you-learn-title font-bold mb-2' style={{fontSize: '1.5em'}}>Become a Trusted School Consultant – Master the Strategy, Systems, and Tools to Build a Thriving Practice</div>
                <p>Gain expert training, hands-on mentorship, and the tools you need to guide schools toward success—positioning yourself as a trusted voice in the education sector.</p>
                <p className='highlighter mt-3'>Is This the Moment You Start Empowering Schools—and Yourself?</p>
                <p className='font-semibold'><a href='#application-form-section'>👉 [Enroll Now]</a></p>
                
                {/* <span className='hero-sec-info-list-container'>
                    <ul>
                        <li>Valuable knowledge and mentorship to fast-track your success</li>
                        <li>Opportunities to secure full-time employment with one of our partners during your time at the Academy</li>
                        <li>You also have a chance to secure a Business Takeoff Grant Award.</li>
                    </ul>
                </span> */}
                
            </div>

            <div className='line-breaker'></div>
            <div className='what-you-learn-title font-bold'>What You'll Be Equipped to Do</div>
            <div className='what-you-learn-info'>
                <span className='what-you-learn-info-list-container'>
                    <ul className='w-full'>
                        <li>Guide aspiring school owners from idea to launch</li>
                        <li>Optimize school operations and improve leadership performance</li>
                        <li>Design and deliver impactful training for school teams</li>
                        <li>Boost enrollment, maximize revenue, improve profitability and drive school growth</li>
                        <li>Build, position, and scale your own education consulting brand</li>
                    </ul>
                </span> 
            </div>


            <div className='line-breaker'></div>
            <div className='what-you-learn-title font-bold'>Who is this program for?</div>
            <div className='what-you-learn-info'>
                <p className='mb-3'>
                    This program is ideal for purpose-driven individuals who want to build a career around educational impact:
                </p>
                <span className='what-you-learn-info-list-container'>
                    <ul>
                        <li>Educators ready to transition into consulting</li>
                        <li>School owners and edu-preneurs seeking new income streams</li>
                        <li>Independent consultants expanding into the education sector</li>
                        <li>Retired professionals looking to make a lasting difference</li>
                        <li>Ambitious young adults seeking a career with impact</li>
                    </ul>
                </span> 
            </div>

            <div className='line-breaker'></div>
            <div className='what-you-learn-title font-bold'>What’s Included in the Program</div>
            <div className='what-you-learn-info'>
                {/* <span>
                    This program is ideal for purpose-driven individuals who want to build a career around educational impact:
                </span> */}
                <span className='what-you-learn-info-list-container'>
                    <ul className='font-semibold'>
                        <li style={{listStyle: 'none'}}>✅ 6 Expert Training Modules</li>
                        <li style={{listStyle: 'none'}}>✅ 20+ Done-for-You Manuals, Templates & Checklists</li>
                        <li style={{listStyle: 'none'}}>✅ Virtual Live Training and Mentorship Sessions</li>
                        <li style={{listStyle: 'none'}}>✅ Access to TreNova Academy Resources</li>
                        <li style={{listStyle: 'none'}}>✅ Ongoing Professional Development + Opportunity to Serve as a TreNova School Support Consultant + Usage of TreNova School Consulting Brand Logo + Verified Listing in the TreNova School Consultant Directory</li>
                    </ul>
                </span> 
            </div>
            
            <div className='apply-now-get-started'><a href='#application-form-section'>👉 <span className='highlighter'>Apply Now</span> to Get Started!</a> </div>
            
            <div className='line-breaker'></div>
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