import React from 'react';
import './schoolgrowth.css';
import trenova_logo from '../../assets/img/mentornigeria/trenova-logo.png';
import InterestForm from './InterestForm';
import { useParams } from 'react-router-dom';
import PricingSection from './PricingSection';


const SchoolGrowth = () => {
    const { name } = useParams();
  return (
    <section className='school-growth-main-container'>
        <div className='school-growth-section'>
            <div className='main-section'>
                <div className='title-container'>
                    <div><h1 className='bold'>Subscribe to the LearnNova <div className='second-text'>Learning Support <br className='break-line'/>System and Unlock These Exclusive <span className='bold yellow-text'>Benefits:</span></div></h1></div>
                </div>
                <div className='text-body-container'>
                    <div className='text-body'>
                        <ul className='space-y-4'>
                            <li>
                                <p className='font-bold'>Install LearnNova’s Desktop Learning Support Studio</p>

                                <p>Equip your school computers with a powerful desktop solution designed to:</p>
                                <ul className='mx-3 space-y-2 list-none' style={{ fontSize: '1em' }}>
                                    <li><span className='mr-1'>✔</span> Boost academic performance</li>
                                    <li><span className='mr-1'>✔</span> Improve revenue</li>
                                    <li><span className='mr-1'>✔</span> Drive long-term school growth</li>
                                </ul>

                                <p className='font-semibold my-4'>What’s included:</p>
                                <ul className='mx-3 space-y-2' style={{fontSize: '1em', listStyleType: 'disc'}}>
                                    <li>
                                        <p className='font-semibold'>Diction & Phonetics for Elementary Schools</p>
                                        <p>540 interactive lessons + 500 practice exercises</p>
                                    </li>
                                    <li>
                                        <p className='font-semibold'>Senior Secondary Mathematics</p>
                                        <p>2,400 comprehensive lessons + 8,000 Q&A practice questions</p>
                                    </li>
                                    <li>
                                        <p className='font-semibold'>Digital E-Library (Primary & Secondary)</p>
                                        <p>Access 850+ curated books to build a strong reading culture and improve literacy across all levels</p>
                                    </li>
                                    <li>
                                        <p className='font-semibold'>Creative & Vocational Courses (Ages 3–17)</p>
                                        <p>Hands-on, skills-based content to nurture creativity and life skills—while boosting your school’s revenue</p>
                                    </li>
                                </ul>
                                {/* <p className='mt-3'>Provide your pupils/students with structured, engaging content that promotes success - while increasing your school’s revenue and profitability.</p> */}
                                <p className='red-text font-semibold small-text'>(Valued at ₦2,500,000 per term)</p>
                            </li>

                            <li>
                                <p className='font-bold'>Home Learning Access for 25–500 Pupils/Students</p>
                                <p>Enroll your learners on the LearnNova Home Learning App—available on <span className='font-semibold'>Android, laptops, and desktops</span>.</p>
                                <p>Perfect for extending learning beyond the classroom with engaging, curriculum-based content.</p>
                                <p className='red-text font-semibold small-text'>(Valued at ₦5,000 – ₦15,000 per learner per term)</p>
                            </li>

                            <li>
                                <p className='font-bold'>Free Virtual Mentorship & Coaching</p>
                                <p>Gain access to expert-led sessions from TreNova, designed to support school leadership, growth, and performance.</p>
                                <p className='red-text font-semibold small-text'>(Valued at ₦150,000 per term)</p>
                            </li>

                            <li>
                                <p className='font-bold'>Access to TreNova Academy Online Training</p>
                                <p>Enjoy complimentary entry to a rich library of educator-focused courses, tools, and professional resources.</p>
                                <p className='red-text font-semibold small-text'>(Valued at ₦100,000 per term)</p>
                            </li>

                            <li>
                                <p className='font-bold'>Referral Reward Program</p>
                                <p>Refer another school to LearnNova and get free enrollment for 20 additional pupils/students on the Home Learning App.</p>
                                <p className='red-text font-semibold small-text'>(Valued at ₦100,000)</p>
                            </li>

                            <li>
                                <p className='font-bold'>Influence the Future of LearnNova</p>
                                <p>Join our partner network and propose new creative or vocational skills you'd love to see added—tailored to your school's needs.</p>
                                {/* <p className='red-text font-semibold small-text'>(Valued at ₦100,000)</p> */}
                            </li>

                            {/* <li>
                                <p className='font-bold'>Shape the Future of LearnNova</p>
                                <p>Gain the exclusive opportunity to propose new creative and vocational skills for LearnNova to develop, ensuring our solutions are tailored to meet your school’s unique needs.</p>
                                <p className='red-text font-semibold small-text'>(Valued at ₦500,000 per term)</p>
                            </li> */}
        
                        </ul>
                    </div>
                    {/* <div className='price-body'>
                        <span className='title'>Subscription Fee:</span>
                        <span className='amount bold deep-purple'>₦179,999 per term</span>
                    </div>
                    <div className='note-body red-text bold' style={{marginBottom: '1em'}}>
                        <em>Schools that subscribe & pay before the end of <span className='deep-purple'>PROMO</span> to get it for <span className='deep-purple'>₦129,999 per term</span> - save 27.78% !</em>
                    </div>
                    <div className='note-body font-bold italic text-center'>
                        Unlock and Connect Knowledge to Success with Engaging Lessons, Anytime, Anywhere on LearnNova—Available on Android, iOS, and Desktop!
                    </div> */}
                    <div className='interest-body'>
                        <a className='bold' href='#application-form-section'>Are you interested? Fill the form below</a>
                    </div>

                    <div className='interest-form-body'>

                    </div>
                </div>
            </div>
            <div className='secondary-section'>
                <div className='logo-body'>
                    <img src={trenova_logo} />
                </div>
                <div className='yellow-text bold quote-body'>
                    Boost your learner's success and your school revenue with LearnNova!
                </div>
                <div className='join-body bold'>
                    JOIN NOW
                </div>
                <div className='address-body'>
                    <p className='yellow-text bold'>Address:</p>
                    <p className='bold'>7B, Ogunsiji Close, Allen Avenue, Ikeja, Lagos, Nigeria.</p>
                </div>
            </div>
        </div>

        <div className='divider' />

        <PricingSection />

        <div className='divider' />

        <InterestForm name={name} />

        <div className='contact-section'>
            <h1 className='mx-auto deep-purple font-bold mb-3'>📞 Contact Us to Get Started Today</h1>

            <div className='contact-body'>
                <h3 className='font-semibold'>Phone/WhatsApp:</h3>
                <p className='font-normal'><a href='tel:08023781682'>0802 378 1682</a><a href='tel:07044086794'>0704 408 6794</a><a href='tel:09137819540'>0913 781 9540</a></p>
            </div>

            <div className='contact-body'>
                <h3 className='font-semibold'>📧 Email:</h3>
                <p className='mb-3'><a href='mailto:info@learnnova.ng'>info@learnnova.ng</a></p>
                <h3 className='font-semibold'>🌐 Website:</h3>
                <p><a href='https://www.learnnova.ng/schoolgrowthsystem/trenova'>www.learnnova.ng/schoolgrowthsystem/trenova</a></p>
            </div>

            <div className='contact-body' id='account-details'>
                <h3 className='font-semibold'>Account Details:</h3>
                <p>Account Name: <span className='font-semibold'>Trenova Ltd</span></p>
                <p>Account Number: <span className='font-semibold'>1015524196</span></p>
                <p>Bank Name: <span className='font-semibold'>Zenith Bank</span></p>
            </div>

        </div>

        
    </section>
    
  )
}

export default SchoolGrowth