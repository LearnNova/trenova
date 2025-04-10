import React from 'react';
import './schoolgrowth.css';
import trenova_logo from '../../assets/img/mentornigeria/trenova-logo.png';
import InterestForm from './InterestForm';
import { useParams } from 'react-router-dom';


const SchoolGrowth = () => {
    const { name } = useParams();
  return (
    <section className='school-growth-main-container'>
        <div className='school-growth-section'>
            <div className='main-section'>
                <div className='title-container'>
                    <div><h1 className='bold'>Subscribe to LearnNova <div className='second-text'>Learning Support <br className='break-line'/>System & Enjoy the Following <span className='bold yellow-text'>Benefits!</span></div></h1></div>
                </div>
                <div className='text-body-container'>
                    <div className='text-body'>
                        <ul className='space-y-3'>
                            <li>
                                <p className='font-bold'>Install the LearnNova Desktop Learning Support Studio on Your School Computer</p>
                                <p>Empower your learners with a robust desktop-based solution tailored to boost academic achievement and drive school growth. LearnNova Studio offers:</p>
                                <ul className='mx-3' style={{fontSize: '1em', listStyleType: 'none'}}>
                                    <li>- <span className='font-semibold'>Diction & Phonetics for Elementary Schools</span> – 540 interactive lessons + 500 practice exercises</li>
                                    <li>- <span className='font-semibold'>Mathematics</span> for Senior Secondary Schools – 2,400 detailed lessons + 8,000 Q&As</li>
                                    <li>- <span className='font-semibold'>Creative & Vocational Courses</span> (Ages 3–17) – Designed to inspire creativity and develop practical life skills</li>
                                </ul>
                                <p className='mt-3'>Provide your students with structured, engaging content that promotes success - while increasing your school’s revenue and profitability.</p>
                                <p className='red-text font-semibold small-text'>(Valued at ₦850,000 per term)</p>
                            </li>

                            <li>
                                <p className='font-bold'>E-Library for Elementary & Secondary Schools</p>
                                <p>Give <span className='font-semibold'>35</span> of your pupils/students <span className='font-semibold'>free access</span> to our interactive Home Learning App—available on <span className='font-semibold'>Android, iOS, and Desktop</span>. Designed to extend learning beyond the classroom with fun, engaging, and educational content.</p>
                                <p className='red-text font-semibold small-text'>(Valued at ₦500,000 per term)</p>
                            </li>

                            <li>
                                <p className='font-bold'>Free Enrollment on the LearnNova Home Learning App</p>
                                <p>Give your students access to a rich digital library with over <span className='font-semibold'>850 carefully selected books</span> to foster a strong reading culture and improve literacy across all levels.</p>
                                <p className='red-text font-semibold small-text'>(Valued at ₦175,000 per term)</p>
                            </li>

                            <li>
                                <p className='font-bold'>Exclusive Access to Virtual Mentorship & Coaching</p>
                                <p>Get <span className='font-semibold'>free access</span> to TreNova’s expert-led virtual mentorship and coaching sessions - designed to guide your school’s growth, performance, and long-term success.</p>
                                <p className='red-text font-semibold small-text'>(Valued at ₦150,000 per term)</p>
                            </li>

                            <li>
                                <p className='font-bold'>TreNova Academy Online Training Access</p>
                                <p>Enjoy <span className='font-semibold'>free access</span> to TreNova Academy’s online training platform—featuring expert resources, tools, and courses tailored for educators and school leaders.</p>
                                <p className='red-text font-semibold small-text'>(Valued at ₦100,000 per term)</p>
                            </li>

                            <li>
                                <p className='font-bold'> Referral Rewards</p>
                                <p>Refer a school to LearnNova and receive free enrollment for 20 additional pupils/students on the Home Learning App.</p>
                                <p className='red-text font-semibold small-text'>(Valued at ₦100,000)</p>
                            </li>

                            <li>
                                <p className='font-bold'>Shape the Future of LearnNova</p>
                                <p>Gain the exclusive opportunity to propose new creative and vocational skills for LearnNova to develop, ensuring our solutions are tailored to meet your school’s unique needs.</p>
                                {/* <p className='red-text font-semibold small-text'>(Valued at ₦500,000 per term)</p> */}
                            </li>
        
                        </ul>
                    </div>
                    <div className='price-body'>
                        <span className='title'>Subscription Fee:</span>
                        <span className='amount bold deep-purple'>₦179,999 per term</span>
                    </div>
                    <div className='note-body red-text bold' style={{marginBottom: '1em'}}>
                        <em>Schools that subscribe & pay before the end of <span className='deep-purple'>PROMO</span> to get it for <span className='deep-purple'>₦129,999 per term</span> - save 27.78% !</em>
                    </div>
                    <div className='note-body bold'>
                        Children can learn from home using our Android, iOS, or Desktop App.
                    </div>
                    <div className='interest-body'>
                        <a className='bold' href='#application-form-section'>Are you interested? Fill the form below</a>
                    </div>
                    {/* <div className='interest-body'>
                        <a className='bold' href='#account-details' style={{backgroundColor: '#ff0000'}}>Ready to make payment? Get our Account Details below</a>
                    </div> */}

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

        <InterestForm name={name} />

        <div className='contact-section'>
            
            <div className='contact-body'>
                <h3 className='deep-purple bold'>For more inquiries, call:</h3>
                <p className='bold'><a href='tel:08023781682'>0802 378 1682</a><a href='tel:07044086794'>0704 408 6794</a><a href='tel:09137819540'>0913 781 9540</a></p>
            </div>

            <div className='contact-body' id='account-details'>
                <h3 className='deep-purple bold'>Account Details:</h3>
                <p>Account Name: <span className='bold'>Trenova Ltd</span></p>
                <p>Account Number: <span className='bold'>1015524196</span></p>
                <p>Bank Name: <span className='bold'>Zenith Bank</span></p>
            </div>

        </div>

        
    </section>
    
  )
}

export default SchoolGrowth