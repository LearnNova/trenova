import React, { useState } from 'react';
import './mentornigeria.css';

const ProgramSection = () => {
    const [showOption, setShowOption] = useState();
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
            <p><a href='https://t.me/trenovagrouptestimonials' className='highlighter hover:underline transition duration-200'>👉[View Testimonials]</a></p>
        </div>

        <div className='line-breaker mb-5'></div>

        <div className='module-text-box'>
            <h1 className='highlighter'>Flexible Enrollment Options</h1>
            <ul className='module-text-box__list-box'>

                <li className='mt-3'>
                    <h2 className='font-semibold'><span style={{color: '#ff0000'}}>🎯 Option 1:</span> Earn While You Learn</h2>
                    {showOption === 1 && (
                        <>
                            <ul className='mt-3 space-y-5 module-text-box__list-box-inner-box' style={{listStyleType: 'none'}}>
                                <li className='italic font-semibold'>...Build Skills, Make Money, and Launch Your Consulting Career...</li>
                                <li>Start your journey into school consulting with a <span className='font-semibold'>one-time, non-refundable registration fee of ₦100,000.</span> This gives you <span className='font-semibold'>instant access to Modules 1 & 2</span> of our expert-led training and mentorship program.</li>
                                {/* <li>
                                    <p className='font-semibold' style={{fontSize: '1em'}}>💼 Start Earning Immediately:</p>
                                    <p style={{fontSize: '1em'}}>As a registered trainee, you’ll be empowered to promote LearnNova’s proven e-learning solutions to private school owners — and earn a generous <span className='font-semibold'>17.85%</span> commission on every successful referral.</p>
                                </li> */}
                                <li className='font-semibold'>🔥 Start Earning from Day One</li>
                                <li>Once enrolled, you’ll be equipped to promote LearnNova’s high-impact e-learning solutions to private school owners — and <span className='font-semibold'>earn a 17.85% commission</span> on every successful referral.</li>
                                <li className='font-semibold'>🔓 How to Unlock Full Access — Without Paying More</li>
                                <li>✅ Earn up to <span className='font-semibold'>₦200,000 in referral commissions</span> (from just 3–8 successful school signups) and get <span className='font-semibold'>FREE access to Modules 3 through 8</span> — no extra payment required.</li>
                                <li>🎁 <span className='font-semibold'>Bonus:</span> Access <span className='font-semibold'>Module 9 at no cost</span> if you complete the first 8 modules within <span className='font-semibold'>4 months</span> of your enrollment.</li>
                                <li className='font-semibold'>💼 Refer & Earn More While You Learn</li>
                                <li>Bring 3 to 8 schools on board and:</li>
                                <li className='space-y-3'>
                                    <p style={{fontSize: '1em'}}>✔ Unlock full training access (Modules 3–9)</p>
                                    <p style={{fontSize: '1em'}}>✔ Earn up to <span className='font-semibold'>₦200,000 in commissions</span></p>
                                    <p style={{fontSize: '1em'}}>✔ Build your confidence and income as you learn</p>
                                </li>
                            </ul>

                            <div className='mt-4 space-y-4'>
                                <p className='font-semibold' style={{fontSize: '1em'}}>🚀 What Will You Be Promoting?</p>
                                <p style={{fontSize: '1em'}}><a href='https://www.learnnova.ng/schoolgrowthsystem/trenova' className='highlighter hover:underline'>👉 [Explore LearnNova's School Solutions Here]</a></p>
                            </div>

                            <div className='mt-4 space-y-4'>
                                <p style={{fontSize: '1em'}} className='font-semibold'>💡 Learn. Earn. Rise.</p>
                                <p style={{fontSize: '1em'}}>Join LearnNova’s Earn While You Learn program and take your first step into a consulting career that pays — with <span className='font-semibold'>practical skills, hands-on experience</span>, and <span className='font-semibold'>real income potential</span>.</p>
                            </div>

                            <div className='mt-4'>
                                <p style={{fontSize: '1em'}}><a href='#application-form-section'><span className='font-semibold'>👉 Ready to take charge of your future?</span> Enroll now and begin your journey to consulting mastery.</a></p>
                            </div>
                        </>
                    )}
                    <h2 className='text-orange-500 font-semibold hover:underline mt-3' onClick={()=>setShowOption(1)}>
                        👉 Click Here
                    </h2>
                    {showOption === 1 || (<h2 className='font-semibold'>....</h2>)}
                </li>

                <li className='mt-7 mb-3'>
                    <h2 className='font-semibold'>🎯 <span style={{color: '#ff0000'}}>Option 2:</span> Direct Payment Plan</h2>
                    {showOption === 2 && (
                        <>
                            <ul className='mt-3 space-y-5 module-text-box__list-box-inner-box' style={{listStyleType: 'none'}}>
                                <li className='italic font-semibold'>...Invest in Mastery, Advance on Your Terms...</li>
                                <li>Prefer a pay-as-you-go approach? With our <span className='font-semibold'>Direct Payment Plan</span>, you can progress through the program at your own pace by enrolling in individual modules for just <span className='font-semibold'>₦74,999 per module</span>.</li>
                                <li className='font-semibold'>💼 Best Value:  Unlock the Full Program for ₦499,999 (One-Time Payment)</li>
                                <li>Take the smarter route with our all-inclusive bundle — perfect for professionals who are ready to go all in.</li>
                                <li className='font-semibold'>With this one-time investment, you’ll unlock:</li>
                                <li className='space-y-3'>
                                    <p style={{fontSize: '1em'}}>✅ <span className='font-semibold'>Full access to Modules 1–8</span> (Save <span className='font-semibold'>₦174,990</span> compared to paying per module)</p>
                                    <p style={{fontSize: '1em'}}>✅ <span className='font-semibold'>Free access to Module 9</span> (Advanced consulting tools & strategies)</p>
                                    <p style={{fontSize: '1em'}}>✅ <span className='font-semibold'>Priority support</span> plus <span className='font-semibold'>exclusive alumni benefits</span></p>
                                </li>
                                <li className='font-semibold'>💡 Why Choose This Option?</li>
                                <li>This premium package is built for driven individuals who want to:</li>
                                <li className='space-y-3'>
                                    <p style={{fontSize: '1em'}}>✔ Skip delays</p>
                                    <p style={{fontSize: '1em'}}>✔ Maximize their learning</p>
                                    <p style={{fontSize: '1em'}}>✔ Access every strategic insight from the start</p>
                                    <p style={{fontSize: '1em'}}>✔ Launch their consulting career without limits</p>
                                </li>
                            </ul>

                            <div className='mt-4 space-y-4'>
                                <p className='font-semibold' style={{fontSize: '1em'}}>📈 Accelerate Your Growth. Own Your Success.</p>
                                <p style={{fontSize: '1em'}}>Whether you pay per module or go all-in, this path puts you in control of your learning and earning potential — with the tools, guidance, and network to rise fast in the world of school consulting.</p>
                            </div>

                            <div className='mt-4'>
                                <p style={{fontSize: '1em'}}><a href='#application-form-section'><span className='font-semibold'>👉 Ready to take charge of your future?</span> Enroll now and begin your journey to consulting mastery.</a></p>
                            </div>
                        </>
                    )}
                    <h2 className='text-orange-500 font-semibold hover:underline mt-3' onClick={()=>setShowOption(2)}>
                        👉 Click Here
                    </h2>
                    {showOption === 2 || (<h2 className='font-semibold'>....</h2>)}
                </li>
            </ul>
        </div>

        <div className='line-breaker'></div>
    </div>
  )
}

export default ProgramSection