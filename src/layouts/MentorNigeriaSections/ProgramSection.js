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
            <p className='font-semibold'>📌Real Stories. Real Impact - What Participants Are Saying</p>
            <p>Hear directly from those who have taken part in our training and mentorship programs:</p>
            <p><a href='#linetestimonial' className='highlighter transition duration-200'>👉[View Testimonials]</a></p>
        </div>

        <div className='line-breaker mb-5'></div>

        <div className='module-text-box'>
            <h1 className='highlighter'>Flexible Enrolment Options</h1>
            <ul className='module-text-box__list-box space-y-7 my-3'>

                <li>
                    <h2 className='font-semibold'><span style={{color: '#ff0000'}}>🎯 Option 1:</span> Earn While You Learn</h2>
                    {showOption === 1 && (
                        <>
                            <ul className='mt-3 space-y-5 module-text-box__list-box-inner-box' style={{listStyleType: 'none'}}>
                                <li className='italic font-semibold'>...Build Skills, Make Money, and Launch Your Consulting Career...</li>
                                <li>Start your journey into school consulting with a <span className='font-semibold'>one-time, non-refundable registration fee of ₦99,999.</span> This gives you <span className='font-semibold'>instant access to Module 1</span> of our expert-led training and mentorship program.</li>
                                {/* <li>
                                    <p className='font-semibold' style={{fontSize: '1em'}}>💼 Start Earning Immediately:</p>
                                    <p style={{fontSize: '1em'}}>As a registered trainee, you’ll be empowered to promote LearnNova’s proven e-learning solutions to private school owners — and earn a generous <span className='font-semibold'>17.85%</span> commission on every successful referral.</p>
                                </li> */}
                                <li className='font-semibold'>🔥 Start Earning from Day One</li>
                                <li>Once enrolled, you’ll be equipped to promote LearnNova’s high-impact e-learning solutions to private school owners — and <span className='font-semibold'>earn a 17.85% commission</span> on every successful referral.</li>
                                <li className='font-semibold'>🔓 How to Unlock Full Access — Without Paying More</li>
                                <li>✅ Earn up to <span className='font-semibold'>₦200,000 in referral commissions</span> (from just 5–8 successful school signups) and get <span className='font-semibold'>FREE access to Modules 2 through 8</span> — no extra payment required.</li>
                                <li>🎁 <span className='font-semibold'>Bonus:</span> Access <span className='font-semibold'>Module 9 at no cost</span> if you complete the first 8 modules within <span className='font-semibold'>4 months</span> of your enrolment.</li>
                                <li className='font-semibold'>💼 Refer & Earn More While You Learn</li>
                                <li>Bring 5 to 8 schools on board and:</li>
                                <li className='space-y-2'>
                                    <p style={{fontSize: '1em'}}>✔ Unlock full training access (Modules 2–9)</p>
                                    <p style={{fontSize: '1em'}}>✔ Earn up to <span className='font-semibold'>₦200,000 in commissions</span></p>
                                    <p style={{fontSize: '1em'}}>✔ Build your confidence and income as you learn</p>
                                </li>
                            </ul>

                            <div className='mt-4 space-y-4'>
                                <p className='font-semibold' style={{fontSize: '1em'}}>🚀 What Will You Be Promoting?</p>
                                <p style={{fontSize: '1em'}}><a href='https://www.learnnova.ng/schoolgrowthsystem/trenova' className='highlighter'>👉 [Explore LearnNova's School Solutions Here]</a></p>
                            </div>

                            <div className='mt-4 space-y-4'>
                                <p style={{fontSize: '1em'}} className='font-semibold'>💡 Learn. Earn. Rise.</p>
                                <p style={{fontSize: '1em'}}>Join LearnNova’s Earn While You Learn program and take your first step into a consulting and mentorship career that pays — with <span className='font-semibold'>practical skills, hands-on experience</span>, and <span className='font-semibold'>real income potential</span>.</p>
                            </div>

                            <div className='mt-4'>
                                <p style={{fontSize: '1em'}}><a href='#application-form-section'><span className='font-semibold'>👉 Ready to take charge of your future?</span> Enrol now and begin your journey to consulting and mentorship mastery.</a></p>
                            </div>
                        </>
                    )}
                    {
                        showOption === 1 || (
                            <h2 style={{fontSize: '1.2em'}} className='font-semibold mt-2 cursor-pointer' onClick={()=>setShowOption(1)}>
                                👉 Click Here
                            </h2>
                        )
                    }
                </li>

                <li>
                    <h2 className='font-semibold'>🎯 <span style={{color: '#ff0000'}}>Option 2:</span> Referral Plan</h2>
                    {showOption === 2 && (
                        <>
                            <ul className='mt-3 space-y-4 module-text-box__list-box-inner-box' style={{listStyleType: 'none'}}>
                                <li className='italic font-semibold'>...Guiding schools to sustainable growth through mentorship and coaching...</li>
                                <li>
                                    <p style={{fontSize: '1em'}} className='font-semibold'>🔹 Registration Fee: ₦99,999</p>
                                    <p style={{fontSize: '1em'}} className='italic'>Gain access to <span className='font-semibold'>Module 1</span> of the <span className='font-semibold'>School Growth Mentorship & Coaching Program</span>, along with a <span className='font-semibold'>one-term license</span> to the <span className='font-semibold'>LearnNova Learning Support Studio</span> for your school.</p>
                                    <p style={{fontSize: '1em'}} className='mt-2 font-semibold'>🔹 Refer two schools <span className='font-normal'>to unlock access to</span> Modules 2–5</p>
                                    <p style={{fontSize: '1em'}} className='font-semibold'>🔹 Refer two more schools <span className='font-normal'>to gain access to</span> Modules 6–9</p>
                                </li>
                                <li className='font-semibold text-[#ff0000]'>🎓 What You’ll Gain</li>
                                <li className='space-y-2'>
                                    <p style={{fontSize: '1em'}} className='font-semibold'>1. Expert-Led Mentorship & Coaching Sessions</p>
                                    <p style={{fontSize: '1em'}}>Learn how to become a certified School Growth Mentor and Coach through a practical, results-driven curriculum:</p>
                                </li>
                                <li className='font-semibold text-[#ff0000] mt-5'>Program Curriculum:</li>
                                <li className='space-y-1.5 ml-2.5'>
                                    <p style={{fontSize: '1em'}}>✅ <span className='font-semibold'>Module 1 & 2:</span> Foundations of School Growth Consulting & Starting or Rescuing a School</p>
                                    <p style={{fontSize: '1em'}}>✅ <span className='font-semibold'>Module 3 & 4:</span> School Makeover & Enrolment Growth Strategies</p>
                                    <p style={{fontSize: '1em'}}>✅ <span className='font-semibold'>Module 5 & 6:</span> Revenue Growth & Profitability Improvement Strategies, and Effective Management & Operations</p>
                                    <p style={{fontSize: '1em'}}>✅ <span className='font-semibold'>Module 7 & 8:</span> Effective School Management & Digital Integration & E-Learning Strategy</p>
                                    <p style={{fontSize: '1em'}}>✅ <span className='font-semibold'>Module 9 & Practicum:</span> Consulting Execution, Business Growth, Capstone Project & Mentorship Practicum </p>
                                </li>
                                <li className='italic'>This program is built to empower you to drive transformation in your own school—and support others in doing the same.</li>
                                <li className='mt-7 space-y-2'>
                                    <p style={{fontSize: '1em'}} className='font-semibold'>2.📘 LearnNova Classroom Learning Support Studio (Installation on your school’s desktop or laptop)</p>
                                    <p style={{fontSize: '1em'}} className='italic'>An all-in-one multimedia solution designed to support teaching and boost student engagement. It offers:</p>
                                </li>
                                <li className='space-y-2'>
                                    <p style={{fontSize: '1em'}}>✅ Improved Academic Performance</p>
                                    <p style={{fontSize: '1em'}}>✅ Increased School Revenue</p>
                                    <p style={{fontSize: '1em'}}>✅ Sustainable School Growth</p>
                                </li>
                                <li className='font-semibold'>Included Resources:</li>
                                <li className='ml-2.5 space-y-1.5'>
                                    <p style={{fontSize: '1em'}}>✔ <span className='font-semibold'>Digital Reading Library (KG 1 – SSS 3):</span> 750+ curated books to enhance literacy and reading culture.</p>
                                    <p style={{fontSize: '1em'}}>✔ <span className='font-semibold'>Creative Life Skills Courses (Ages 3–15):</span> 50+ engaging, vocational skill-building modules.</p>
                                    <p style={{fontSize: '1em'}}>✔ <span className='font-semibold'>Senior Secondary Mathematics Suite:</span> 2,400+ lessons & 8,000 practice questions.</p>
                                    <p style={{fontSize: '1em'}}>✔ <span className='font-semibold'>Diction & Phonics (KG 1 – Basic 6):</span> 540 interactive lessons with 500 practice exercises.</p>
                                </li>
                                <li className='font-semibold'>Bonus Features:</li>
                                <li className='ml-2.5 space-y-1.5'>
                                    <p style={{fontSize: '1em'}}>Full offline access after initial setup</p>
                                    <p style={{fontSize: '1em'}}>User-friendly interface for teachers and learners</p>
                                    <p style={{fontSize: '1em'}}>Free onboarding & installation support</p>
                                </li>
                            </ul>

                            {/* <div className='mt-4 space-y-4'>
                                <p className='font-semibold' style={{fontSize: '1em'}}>📈 Accelerate Your Growth. Own Your Success.</p>
                                <p style={{fontSize: '1em'}}>Whether you pay per module or go all-in, this path puts you in control of your learning and earning potential — with the tools, guidance, and network to rise fast in the world of school consulting, growth mentorship and coaching.</p>
                            </div> */}

                            <div className='mt-4'>
                                <p style={{fontSize: '1em'}}><a href='#application-form-section'><span className='font-semibold'>👉 Ready to take charge of your future?</span> Enrol now and begin your journey to school consulting, growth mentorship and coaching mastery.</a></p>
                            </div>
                        </>
                    )}
                    {
                        showOption === 2 || (
                            <h2 style={{fontSize: '1.2em'}} className='font-semibold mt-2 cursor-pointer' onClick={()=>setShowOption(2)}>
                                👉 Click Here
                            </h2>
                        )
                    }
                </li>

                <li>
                    <h2 className='font-semibold'>🎯 <span style={{color: '#ff0000'}}>Option 3:</span> Direct Payment Plan</h2>
                    {showOption === 3 && (
                        <>
                            <ul className='mt-3 space-y-5 module-text-box__list-box-inner-box' style={{listStyleType: 'none'}}>
                                <li className='italic font-semibold'>...Invest in Mastery, Advance on Your Terms...</li>
                                <li>Prefer a pay-as-you-go approach? With our <span className='font-semibold'>Direct Payment Plan</span>, you can progress through the program at your own pace by enrolling in individual modules for just <span className='font-semibold'>₦74,999 per module</span>.</li>
                                <li className='font-semibold'>💼 Best Value:  Unlock the Full Program for ₦499,999 (One-Time Payment)</li>
                                <li>Take the smarter route with our all-inclusive bundle — perfect for professionals who are ready to go all in.</li>
                                <li className='font-semibold'>With this one-time investment, you’ll unlock:</li>
                                <li className='space-y-3'>
                                    <p style={{fontSize: '1em'}}>✅ <span className='font-semibold'>Full access to Modules 1–8</span> (Save <span className='font-semibold'>₦174,992</span> compared to paying per module)</p>
                                    <p style={{fontSize: '1em'}}>✅ <span className='font-semibold'>Free access to Module 9</span> (Advanced consulting tools & strategies)</p>
                                    <p style={{fontSize: '1em'}}>✅ <span className='font-semibold'>Priority support</span> plus <span className='font-semibold'>exclusive alumni benefits</span></p>
                                </li>
                                <li className='font-semibold'>💡 Why Choose This Option?</li>
                                <li>This premium package is built for driven individuals who want to:</li>
                                <li className='space-y-2'>
                                    <p style={{fontSize: '1em'}}>✔ Skip delays</p>
                                    <p style={{fontSize: '1em'}}>✔ Maximize their learning</p>
                                    <p style={{fontSize: '1em'}}>✔ Access every strategic insight from the start</p>
                                    <p style={{fontSize: '1em'}}>✔ Launch their consulting, growth mentorship and coaching career without limits</p>
                                </li>
                            </ul>

                            <div className='mt-4 space-y-4'>
                                <p className='font-semibold' style={{fontSize: '1em'}}>📈 Accelerate Your Growth. Own Your Success.</p>
                                <p style={{fontSize: '1em'}}>Whether you pay per module or go all-in, this path puts you in control of your learning and earning potential — with the tools, guidance, and network to rise fast in the world of school consulting, growth mentorship and coaching.</p>
                            </div>

                            <div className='mt-4'>
                                <p style={{fontSize: '1em'}}><a href='#application-form-section'><span className='font-semibold'>👉 Ready to take charge of your future?</span> Enrol now and begin your journey to school consulting, growth mentorship and coaching mastery.</a></p>
                            </div>
                        </>
                    )}
                    {
                        showOption === 3 || (
                            <h2 style={{fontSize: '1.2em'}} className='font-semibold mt-2 cursor-pointer' onClick={()=>setShowOption(3)}>
                                👉 Click Here
                            </h2>
                        )
                    }
                </li>
            </ul>
        </div>

        <div className='line-breaker' id='line'></div>
    </div>
  )
}

export default ProgramSection