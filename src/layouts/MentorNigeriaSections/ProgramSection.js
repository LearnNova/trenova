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
                    <h2 className='font-semibold'><span style={{color: '#ff0000'}}>Option 1:</span> Direct Payment</h2>
                    <ul className='space-y-2 module-text-box__list-box-inner-box'>
                        <li>Learn at your own pace by enrolling in individual modules — only <span className='font-semibold'>₦139,999</span> per module.</li>
                        <li><span className='font-semibold'>Ready to go all in?</span> Make a one-time payment to unlock <span className='font-semibold'>Modules 1–4</span> — and get exclusive <span className='font-semibold'>FREE</span> access to <span className='font-semibold'>Modules 5 to 8</span>, where it all comes together for lasting impact!</li>
                    </ul>
                </li>

                <li className='my-3'>
                    <h2 className='font-semibold'><span style={{color: '#ff0000'}}>Option 2:</span> Earn While You Learn</h2>
                    <ul className='space-y-2 module-text-box__list-box-inner-box'>
                        <li className='font-semibold'>Begin with a one-time, non-refundable registration fee of <span className='font-semibold'>₦100,000</span>.</li>
                        <li>Introduce LearnNova products to private elementary and secondary school owners—and earn <span className='font-semibold'>15.85%</span> commission on each successful sale.</li>
                        <li>Once your referral sales commission reaches <span className='font-semibold'>₦63,399</span>, you'll automatically gain access to one (1) training module.</li>
                        <li>Unlock access to <span className='font-semibold'>Modules 1 to 4 within 3 months</span>, and you’ll receive <span className='font-semibold'>Modules 5 to 8 absolutely FREE!</span></li>
                    </ul>

                    <div className='font-semibold mt-3'>
                        <p style={{fontSize: '1em'}}>🔗  Here Are the LearnNova Products That Let You Earn While You Learn:</p>
                        <p className='mb-2' style={{fontSize: '1em'}}>Product 1 - <a href='https://www.learnnova.ng/schoolgrowthsystem/trenova' className='highlighter text-underline'>Click here</a></p>
                        <p className='mb-2' style={{fontSize: '1em'}}>Product 2 - <a href='https://www.learnnova.ng/schoolsupportpartner/trenova' className='highlighter text-underline'>Click here</a></p>
                    </div>

                    <div className='mt-4'>
                        <p style={{fontSize: '1em'}} className='font-semibold'>Earn. Learn. Grow.</p>
                        <p className='mb-2' style={{fontSize: '1em'}}>Power your training and launch your consulting career with the Earn While You Learn model from LearnNova.</p>
                    </div>
                </li>
            </ul>
        </div>

        <div className='line-breaker'></div>  

        <div className='module-text-box'>
            <h1 className='highlighter'>Program Snapshot</h1>
            <ul className='list-disc ml-3 module-text-box__list-box'>
                <li><span className='font-semibold'>Duration:</span> 15 Weeks</li>
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