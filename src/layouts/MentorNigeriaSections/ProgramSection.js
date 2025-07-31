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
                                    <p style={{fontSize: '1em'}}>🔹 <span className='font-semibold'>Refer 2 schools</span> to LearnNova Learning Support Program to unlock <span className='font-semibold'>Modules 2–5</span> of the school consulting training and mentorship program.</p>
                                    <p style={{fontSize: '1em'}}>🔹 <span className='font-semibold'> Refer 2 additional schools</span> to unlock <span className='font-semibold'>Modules 6–9</span> and complete your journey.</p>
                                </li>
                                <li className='font-semibold'>🎓 What You’ll Receive</li>
                                <li>
                                    <ol className='list-decimal space-y-5 pl-4' style={{fontSize: '1em', listStyleType: 'decimal'}}>
                                        <li className='text-inherit'>
                                            <div className='text-inherit'>
                                                <p className='font-semibold'>LearnNova School Learning Support Studio <span className='italic'>(Installed on your school computer or laptop)</span></p>
                                                <div className='text-inherit my-3 space-y-4'>
                                                    <p>An all-in-one multimedia solution designed to support teachers, engage students, and increase school profitability.</p>
                                                    <div className='text-inherit'>
                                                        <p className='font-semibold'>Key Benefits:</p>
                                                        <ul className='list-none space-y-1'>
                                                            <li>✅ Improved academic outcomes</li>
                                                            <li>✅ Boost in enrolment and revenue</li>
                                                            <li>✅ Sustainable school growth strategies</li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-inherit'>
                                                        <p className='font-semibold'>Included Learning Resources:</p>
                                                        <ul className='list-none space-y-1'>
                                                            <li><span className='font-semibold'>✔ Digital Reading Library (KG1 – SSS3):</span> 750+ carefully curated books to build a strong reading culture</li>
                                                            <li><span className='font-semibold'>✔ Creative Life Skills Courses (Ages 3–15):</span> 50+ engaging, hands-on modules</li>
                                                            <li><span className='font-semibold'>✔ Senior Secondary Math Suite:</span> 2,400+ video lessons and 8,000+ practice questions</li>
                                                            <li><span className='font-semibold'>✔ Diction & Phonics (KG1 – Basic 6):</span> 540 interactive lessons and 500+ exercises</li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-inherit'>
                                                        <p className='font-semibold'>Bonus Features:</p>
                                                        <ul className='list-disc' style={{listStyleType: 'disc'}}>
                                                            <li>Full offline access post-installation</li>
                                                            <li>Easy-to-use interface for teachers and students</li>
                                                            <li>Free installation and onboarding support</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className='text-inherit'>
                                            <div className='text-inherit'>
                                                <p className='font-semibold'>MentorNigeria Mentorship & Coaching Program</p>
                                                <div className='text-inherit my-3 space-y-4'>
                                                    <p>Become a certified <span className='font-semibold'>School Growth Mentor and Coach</span> through our expert-led, practical curriculum designed for real-world results.</p>
                                                    <div className='text-inherit'>
                                                        <p className='font-semibold'>Training Modules Include:</p>
                                                        <ul className='list-none space-y-1'>
                                                            <li><span className='font-semibold'>✅ Modules 1–2:</span> Foundations of School Growth & Starting/Reviving a School</li>
                                                            <li><span className='font-semibold'>✅ Modules 3–4:</span> School Makeover Techniques & Enrolment Growth Strategies</li>
                                                            <li><span className='font-semibold'>✅ Modules 5–6:</span> Revenue Growth, Profitability Increase, and Operational Excellence</li>
                                                            <li><span className='font-semibold'>✅ Modules 7–8:</span> Effective School Management, Digital Integration & E-Learning Integration</li>
                                                            <li><span className='font-semibold'>✅ Module 9 + Practicum:</span> Consulting Practice Management, Business Scaling & Capstone Project</li>
                                                        </ul>
                                                    </div>
                                                    <p>This comprehensive program is crafted to equip you with the skills and tools to transform your own school—and guide other schools to do the same.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </li>
                            </ul>

                            <div className='mt-4'>
                                <p style={{fontSize: '1em'}} className='font-semibold'>👉 Are you ready to lead school transformation in your community?</p>
                            </div>

                            <div className='mt-4'>
                                <p style={{fontSize: '1em'}}><a href='#application-form-section'><span className='font-semibold'>Enrol today</span> and begin your journey to becoming a certified <span className='font-semibold'>School Consultant, Mentor, and Growth Strategist</span>.</a></p>
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
                                <li className='italic font-semibold'>...Build real skills. Earn real income. Launch your school consulting career with confidence...</li>
                                <li>Kick-start your journey with a <span className='font-semibold'>one-time, non-refundable fee of ₦99,999</span> and gain <span className='font-semibold'>immediate access to Module 1</span> of our expert-led training and mentorship program.</li>
                                <li className='font-semibold'>
                                    <p className='font-semibold' style={{fontSize: '1em'}}>🔥 Start Earning From Day One</p>
                                    <p></p>
                                </li>
                                <li>As soon as you enrol, you’ll be equipped to promote LearnNova’s impactful e-learning solutions to private school owners — and earn a <span className='font-semibold'>17.85% commission</span> on every successful referral.</li>
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