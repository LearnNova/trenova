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
                    <h2 className='font-semibold'><span style={{color: '#ff0000'}}>Option 1:</span> Earn While You Learn</h2>
                    <ul className='space-y-2 module-text-box__list-box-inner-box'>
                        <li className='font-semibold'>Get started with a one-time registration fee of ₦100,000.</li>
                        <li>Then unlock <span className='font-semibold'>each training module</span> as you <span className='font-semibold'>earn up to ₦47,549</span> through our <span className='font-semibold'>15.85% referral commission</span> on LearnNova products—helping you <span className='font-semibold'>learn, earn, and grow your consulting career all at once</span>.</li>
                        <li><span className='font-semibold'>Refer. Earn. Unlock!</span> Achieve enough commission in 3 months to access all 5 modules-and get <span className='font-semibold'>Module 6 FREE!</span></li>
                    </ul>

                    <div style={{fontSize: '1em'}} className='font-semibold'>
                        <p>🔗 Here Are the Products That Let You Earn While You Learn:</p>
                        <p className='ml-2'>Product 1: <a href='https://www.learnnova.ng/schoolsupportpartner' className='highlighter text-underline'>Click here</a></p>
                        <p className='ml-2'>Product 2: <a href='https://www.learnnova.ng/schoolgrowthsystem/trenova' className='highlighter text-underline'>Click here</a></p>
                    </div>
                </li>

                <li className='my-3'>
                    <h2 className='font-semibold'><span style={{color: '#ff0000'}}>Option 2:</span> Direct Payment</h2>
                    <ul className='space-y-2 module-text-box__list-box-inner-box'>
                        <li>Learn at your own pace by enrolling in individual modules — <span className='font-semibold'>only ₦164,999 per module</span>.</li>
                        <li><span className='font-semibold'>Ready to go all in?</span> Enroll in Modules 1-5 with a one-time payment and get <span className='font-semibold'>FREE access</span> to <span className='font-semibold'>Module 6</span> - Where Everything Comes Together for Real Results</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div className='line-breaker'></div>  

        <div className='module-text-box'>
            <h1 className='highlighter'>Program Snapshot</h1>
            <ul className='list-disc ml-3 module-text-box__list-box'>
                <li><span className='font-semibold'>Duration:</span> 14 Weeks</li>
                <li><span className='font-semibold'>Format:</span> Self-paced detailed lesson notes with videos</li>
                <li><span className='font-semibold'>Live Training:</span> Virtual mentorship, coaching + project reviews</li>
                <li><span className='font-semibold'>Certification:</span> Certified School Business Consultant (upon full completion)</li>
            </ul>
        </div>

        {/* <div className='apply-now-get-started'><a href='#application-form-section'> <span className='highlighter'>Apply Now</span> to Get Started!</a> </div> */}
        <div className='line-breaker'></div>
    </div>
  )
}

export default programSection