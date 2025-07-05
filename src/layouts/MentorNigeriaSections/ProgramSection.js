import React, { useState } from 'react';
import './mentornigeria.css';

const ProgramSection = () => {
    const [showOption2, setShowOption2] = useState(false);
  return (
    <div className='module-section-wrapper'>
        {/* <div className='module-title'>"Earn While You Learn" Youth Empowerment Program:</div> */}

        {/* <div className='module-text-box'>
            <h1 className='highlighter'>Program Overview:</h1>
            <p>The Mentor Nigeria "Earn While You Learn" Empowerment Program is designed to equip Nigerian youths with essential life skills, industry-relevant training, mentorship, coaching, financial literacy and financial support to transition into successful professionals and entrepreneurs. The program focuses on practical, hands-on learning with opportunities to gain full-time employment or access grants for business takeoff.</p>
        </div> */}
        {/* <div className='line-breaker'></div> */}
        <div className='module-text-box -mt-4 mb-2 space-y-3'>
            <p className='font-semibold'>✅Real Stories. Real Impact - What Participants Are Saying</p>
            <p>Hear directly from those who have taken part in our training and mentorship programs:</p>
            <p><a href='https://t.me/trenovagrouptestimonials' className='hover:text-orange-500 hover:underline transition duration-200'>👉[View Testimonials]</a></p>
        </div>

        <div className='line-breaker mb-5'></div>

        <div className='module-text-box'>
            <h1 className='highlighter'>Flexible Enrollment Options</h1>
            <ul className='module-text-box__list-box'>

                <li className='my-3'>
                    <h2 className='font-semibold mb-3'><span style={{color: '#ff0000'}}>🎯 Option 1:</span> Earn While You Learn – <span className='font-normal'>Build Skills While Making Money</span></h2>
                    <ul className='space-y-5 module-text-box__list-box-inner-box' style={{listStyleType: 'none'}}>
                        <li>Kick-start your consulting journey with a one-time, non-refundable registration fee of <span className='font-semibold'>₦100,000</span>. This unlocks immediate access to <span className='font-semibold'>Modules 1 and 2</span> of our premium training program.</li>
                        <li>
                            <p className='font-semibold' style={{fontSize: '1em'}}>💼 Start Earning Immediately:</p>
                            <p style={{fontSize: '1em'}}>As a registered trainee, you’ll be empowered to promote LearnNova’s proven e-learning solutions to private school owners — and earn a generous <span className='font-semibold'>17.85%</span> commission on every successful referral.</p>
                        </li>
                        <li className='font-semibold'>🔓 How to Unlock the Full Training Program (Without Extra Cost):</li>
                        <li className='space-y-3'>
                            <p style={{fontSize: '1em'}}>✅ Earn up to <span className='font-semibold'>₦200,000</span> in referral commissions (approx. <span className='font-semibold'>3–8</span> sales) to unlock <span className='font-semibold'>Modules 3 to 8</span></p>
                            <p style={{fontSize: '1em'}}>🎁 <span className='font-semibold'>Bonus:</span> Unlock Module <span className='font-semibold'>9</span> completely <span className='font-semibold'>free</span> if all previous modules are accessed within <span className='font-semibold'>4 months</span> of your initial registration</p>
                        </li>
                        <li className='font-semibold'>📊 Refer & Earn Big!:</li>
                        <li className='space-y-3'>
                            <p style={{fontSize: '1em'}}>Introduce just 3 to 8 schools to LearnNova E-learning Solutions and get full training access <span className='font-semibold'>absolutely FREE!</span></p>
                            <p style={{fontSize: '1em'}}>🎉 Plus, enjoy up to <span className='font-semibold'>₦200,000</span> in referral commissions as a bonus reward!</p>
                            <p className='font-semibold italic' style={{fontSize: '1em'}}>Build a sustainable referral income stream while learning</p>
                        </li>
                    </ul>

                    <div className='mt-3'>
                        <p className='font-semibold' style={{fontSize: '1em'}}>📌 Ready to See What You'll Be Promoting?</p>
                        <p style={{fontSize: '1em'}}><a href='https://www.learnnova.ng/schoolgrowthsystem/trenova' className='highlighter text-underline'>👉 Explore the LearnNova School Solutions Here</a></p>
                        {/* <p className='mb-2' style={{fontSize: '1em'}}>Product 2 - <a href='https://www.learnnova.ng/schoolsupportpartner/trenova' className='highlighter text-underline'>Click here</a></p> */}
                    </div>

                    <div className='mt-3'>
                        <p style={{fontSize: '1em'}} className='font-semibold'>🚀 Learn. Earn. Rise.</p>
                        <p style={{fontSize: '1em'}}>With LearnNova’s <span className='font-semibold'>Earn While You Learn</span> program, you’re not just training — you’re <span className='font-semibold'>launching your consulting career</span> with real income, real skills, and real impact.</p>
                    </div>

                    <div className='mt-3 mb-2'>
                        <p style={{fontSize: '1em'}}><a href='#application-form-section' className='highlighter text-underline'>👉 Enroll today and start your full-access journey to mastery.</a></p>
                    </div>
                </li>

                <li className='my-3'>
                    <h2 className='font-semibold' style={{color: '#ff0000'}}>🎯 Option 2: <span className='cursor-pointer text-white hover:text-orange-500' onClick={()=>setShowOption2(prev => !prev)}>👉 Click Here</span></h2>
                    {showOption2 || (<h2 className='font-semibold'>....</h2>)}
                    {showOption2 && (
                        <>
                            <h2 className='font-semibold mb-3'>Direct Payment Plan – Pay Your Way to the Top</h2>
                            <ul className='space-y-5 module-text-box__list-box-inner-box' style={{listStyleType: 'none'}}>
                                <li>Prefer a more flexible approach? You can advance at your own pace by enrolling in each training module for just <span className='font-semibold'>₦64,999 per module</span>.</li>
                                <li>
                                    <p className='font-semibold' style={{fontSize: '1em'}}>💼 Best Value: All-Access Career Package</p>
                                    <p style={{fontSize: '1em'}}>Make a smart investment in your future with a one-time payment of <span className='font-semibold'>₦399,999</span> — and unlock:</p>
                                </li>
                                <li className='space-y-3'>
                                    <p style={{fontSize: '1em'}}>✅ Full access to <span className='font-semibold'>Modules 1–8</span> (Save <span className='font-semibold'>₦184,990</span> compared to paying per module)</p>
                                    <p style={{fontSize: '1em'}}>✅ Complimentary access to <span className='font-semibold'>Module 9</span></p>
                                    <p style={{fontSize: '1em'}}>✅ Priority support and alumni access</p>
                                </li>
                            </ul>

                            <div className='mt-3'>
                                <p style={{fontSize: '1em'}}>💡 This premium bundle is ideal for ambitious professionals who want to accelerate their consulting career without waiting or missing out on powerful tools and insights.</p>  
                            </div>

                            <div className='mt-3'>
                                <p className='font-semibold' style={{fontSize: '1em'}}>📈 Fast-Track Your Growth. Own Your Journey.</p>
                                <p style={{fontSize: '1em'}}>Gain complete control over your learning path and emerge with the skills, confidence, and tools to succeed in the business and education consulting world.</p>
                            </div>

                            <div className='mt-3'>
                                <p style={{fontSize: '1em'}}><a href='#application-form-section' className='highlighter text-underline'>👉 Enroll today and start your full-access journey to mastery.</a></p>
                            </div>
                        </>
                    )}
                </li>
            </ul>
        </div>

        <div className='line-breaker'></div>
    </div>
  )
}

export default ProgramSection