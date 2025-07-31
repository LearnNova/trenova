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

        <div className='line-breaker mb-5'></div>

        <div className='module-text-box'>
            <h1 className='highlighter'>Flexible Enrolment Options</h1>
            <ul className='module-text-box__list-box space-y-7 my-3'>
                <li>
                    <h2 className='font-semibold'>🎯 <span style={{color: '#ff0000'}}>Option 1:</span> Direct Payment Plan</h2>
                    {showOption === 1 && (
                        <>
                            <ul className='mt-3 space-y-5 module-text-box__list-box-inner-box' style={{listStyleType: 'none'}}>
                                <li className='italic font-semibold'>Invest in Mastery. Advance at Your Own Pace.</li>
                                <li>Prefer a flexible, pay-as-you-go model? With the Direct Payment Plan, you can enroll in individual modules for just <span className='font-semibold'>₦79,999</span> each and move through the program on your schedule.</li>
                                <li className='font-semibold'>💼 Best Value: Get the Full Program for ₦499,999 (One-Time Payment)</li>
                                <li>Go all in with our full-access bundle — ideal for professionals ready to commit and accelerate.</li>
                                <li className='font-semibold'>With this single investment, you’ll unlock:</li>
                                <li className='space-y-3'>
                                    <p style={{fontSize: '1em'}}>✅ Full access to <span className='font-semibold'>Modules 1–9</span> (Save <span className='font-semibold'>₦219,990</span> vs. paying per module)</p>
                                    <p style={{fontSize: '1em'}}>✅ <span className='font-semibold'>BONUS:</span> Free access to advanced consulting tools, growth strategies, and post-training support</p>
                                    <p style={{fontSize: '1em'}}>✅ <span className='font-semibold'>Priority support</span> and exclusive <span className='font-semibold'>alumni benefits</span></p>
                                </li>
                                <li className='font-semibold'>💡 Who Is This For?</li>
                                <li>This premium package is perfect for action-takers who want to:</li>
                                <li className='space-y-2'>
                                    <p style={{fontSize: '1em'}}>✔ Fast-track their learning journey</p>
                                    <p style={{fontSize: '1em'}}>✔ Maximize every opportunity from day one</p>
                                    <p style={{fontSize: '1em'}}>✔ Access deep strategic insights</p>
                                    <p style={{fontSize: '1em'}}>✔ Launch a high-impact career in <span className='font-semibold'>school consulting, growth mentorship, and coaching</span></p>
                                </li>
                            </ul>

                            <div className='mt-4 space-y-4'>
                                <p className='font-semibold' style={{fontSize: '1em'}}>📈 Accelerate Your Growth. Own Your Success.</p>
                                <p style={{fontSize: '1em'}}>Whether you prefer to pace yourself or go all-in from the start, this plan gives you full control over your learning and earning journey — backed by expert mentorship, proven tools, and a powerful network.</p>
                            </div>

                            <div className='mt-4'>
                                <p style={{fontSize: '1em'}}><a href='#application-form-section'><span className='font-semibold'>👉 Ready to take the leap?</span> Enrol now and begin your journey to mastery in school consulting, growth mentorship, and coaching.</a></p>
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
                                <li className='italic font-semibold'>Ideal for Education Leaders Ready to Scale Their Schools and Expand Their Influence Through Consulting and Mentorship</li>
                                <li>🔹 <span className='font-semibold'>Registration Fee:</span> ₦99,999</li>
                                <li>Begin your transformation journey with the <span className='font-semibold'>installation of the LearnNova School Learning Support Studio</span> on your school’s desktop or laptop, including a <span className='font-semibold'>one-term usage license</span>, plus full access to <span className='font-semibold'>Module 1</span> of the <span className='font-semibold'>MentorNigeria School Consulting Training & Mentorship Program</span>.</li>
                                <li className='font-semibold'>🔄 What’s Next:</li>
                                <li>
                                    <p style={{fontSize: '1em'}}>🔹 <span className='font-semibold'>Refer 2 schools</span> to unlock <span className='font-semibold'>Modules 2–5</span> of the school consulting training and mentorship program.</p>
                                    <p style={{fontSize: '1em'}}>🔹 <span className='font-semibold'> Refer 2 additional schools</span> to unlock <span className='font-semibold'>Modules 6–9</span> and complete your journey.</p>
                                </li>
                                <li className='font-semibold'>🎓 What You’ll Receive</li>
                                <li>
                                    <ol className='list-decimal space-y-3' style={{fontSize: '1em', listStyleType: 'decimal'}}>
                                        <li className='text-inherit'>
                                            <div className='text-inherit'>
                                                <p className='font-semibold'>LearnNova School Learning Support Studio</p>
                                                <p className='italic'>(Installed on your school computer or laptop)</p>
                                                <div className='text-inherit my-3 space-y-2'>
                                                    <p>An all-in-one multimedia solution designed to support teachers, engage students, and increase school profitability.</p>
                                                    <div className='text-inherit'>
                                                        <p className='font-semibold'>Key Benefits:</p>
                                                        <ul className='list-none'>
                                                            <li>✅ Improved academic outcomes</li>
                                                            <li>✅ Boost in enrolment and revenue</li>
                                                            <li>✅ Sustainable school growth strategies</li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-inherit'>
                                                        <p className='font-semibold'>Included Learning Resources:</p>
                                                        <ul className='list-none'>
                                                            <li><span className='font-semibold'>✔ Digital Reading Library (KG1 – SSS3):</span> 750+ carefully curated books to build a strong reading culture</li>
                                                            <li><span className='font-semibold'>✔ Creative Life Skills Courses (Ages 3–15):</span> 50+ engaging, hands-on modules</li>
                                                            <li><span className='font-semibold'>✔ Senior Secondary Math Suite:</span> 2,400+ video lessons and 8,000+ practice questions</li>
                                                            <li><span className='font-semibold'>✔ Diction & Phonics (KG1 – Basic 6):</span> 540 interactive lessons and 500+ exercises</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </li>

                                    </ol>
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
                    <h2 className='font-semibold'><span style={{color: '#ff0000'}}>🎯 Option 3:</span> Earn While You Learn</h2>
                    {showOption === 3 && (
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