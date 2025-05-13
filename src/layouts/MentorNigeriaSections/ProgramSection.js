import React from 'react';
import './mentornigeria.css';

const programSection = () => {
  return (
    <div className='module-section-wrapper'>
        {/* <div className='module-title'>"Earn While You Learn" Youth Empowerment Program:</div> */}

        {/* <div className='module-text-box'>
            <h1 className='highlighter'>Program Overview:</h1>
            <p>The Mentor Nigeria "Earn While You Learn" Empowerment Program is designed to equip Nigerian youths with essential life skills, industry-relevant training, mentorship, coaching, financial literacy and financial support to transition into successful professionals and entrepreneurs. The program focuses on practical, hands-on learning with opportunities to gain full-time employment or access grants for business takeoff.</p>
        </div> */}
        {/* <div className='line-breaker'></div> */}
        <div className='module-text-box'>
            <h1 className='highlighter'>Flexible Enrollment Options</h1>
            <ul className='module-text-box__list-box'>
                <li className='my-3'>
                    <span className='font-semibold'>Option 1: Direct Payment</span>
                    <ul className='module-text-box__list-box-inner-box'>
                        <li>Learn at your own pace by enrolling in individual modules — <span className='font-semibold'>only ₦165,999 per module</span>.</li>
                        {/* <li>Introduction to mentors and trainers.</li>
                        <li>Goal setting and personal development plan.</li> */}
                    </ul>
                </li>
                <li className='my-3'>
                    <span className='font-semibold'>Option 2: Earn While You Learn</span>
                    <ul className='space-y-2 module-text-box__list-box-inner-box'>
                        <li className='font-semibold'>Get started with a one-time registration fee of ₦100,000.</li>
                        <li>Then unlock <span className='font-semibold'>each training module</span> as you <span className='font-semibold'>earn up to ₦47,549</span> through our <span className='font-semibold'>15.85% referral commission</span> on LearnNova products—helping you <span className='font-semibold'>learn, earn, and grow your consulting career all at once</span>.</li>
                        <li className='font-semibold'>Earn your qualifications for Modules 1–5 within 3 months and get Module 6 absolutely free!</li>
                        <li style={{listStyle: 'none'}}>🔗 Learn more: <a className='highlighter' href='https://www.learnnova.ng/schoolgrowthsystem/trenova'>www.learnnova.ng/schoolgrowthsystem/trenova</a></li>
                    </ul>
                </li>
            </ul>
        </div>

        <div className='line-breaker'></div>  

        <div className='module-text-box'>
            <h1 className='highlighter'>Program Snapshot</h1>
            <ul className='list-disc ml-3 module-text-box__list-box'>
                <li><span className='font-semibold'>Duration:</span> 14 Weeks</li>
                <li><span className='font-semibold'>Format:</span> Self-paced detailed notes with video lessons</li>
                <li><span className='font-semibold'>Live Support:</span> Weekly virtual coaching + project reviews</li>
                <li><span className='font-semibold'>Certification:</span> Certified School Business Consultant (upon full completion)</li>
            </ul>
        </div>

        {/* <div className='apply-now-get-started'><a href='#application-form-section'> <span className='highlighter'>Apply Now</span> to Get Started!</a> </div> */}
        <div className='line-breaker'></div>
    </div>
  )
}

export default programSection