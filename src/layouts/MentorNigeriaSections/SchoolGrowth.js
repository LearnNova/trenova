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
                    <div><h1 className='bold'>Join LearnNova's Learning Support <br className='break-line'/>& School Growth System to Access These Exclusive <span className='bold yellow-text'>Benefits!</span></h1></div>
                </div>
                <div className='text-body-container'>
                    <div className='text-body'>
                        <ul>
                            <li>Enrol 45 pupils/students on the Home Learning App at no extra cost - <span className='red-text bold small-text'>(Valued at ₦225,000 per term)</span></li>
                            <li>Installation of Diction and Phonetics Studio for Elementary School <span className='red-text bold'>or</span> Mathematics Studio for Senior Secondary School in your School - <span className='red-text bold small-text'>(Valued at ₦250,000 per term)</span></li>
                            <li>Installation of LearnNova Creative Life Studio Desktop App - <span className='red-text bold small-text'>(Valued at ₦249,000 per term)</span></li>
                            <li>Free Access to TreNova Virtual Consulting, Mentorship & Coaching Sessions - <span className='red-text bold small-text'>(Valued at ₦150,000 per term)</span></li>
                            <li>Complimentary Access to TreNova Academy Online Training Platform - <span className='red-text bold small-text'>(Valued at ₦75,000 per term)</span></li>
                            <li>Enjoy a special Rate of <span className='red-text bold'>₦1,650</span> per user per term for additional Home Learning App - <span className='red-text bold'>save 67%</span> from the standard fee of <span className='red-text bold'>₦5,000</span> per term! - <span className='red-text bold small-text'>(Valued at ₦3,350 Saving per user per term)</span></li> 
                            <li>Opportunity to suggest new creative life skill for LearnNova to develop.</li>
                        </ul>
                    </div>
                    <div className='price-body'>
                        <span className='title'>Subscription Fee:</span>
                        <span className='amount bold deep-purple'>₦129,999 per term</span>
                    </div>
                    <div className='note-body red-text bold'>
                        Schools that subscribe & pay before the end of Jan 2025 will get it for <span className='deep-purple'>₦99,999 per term</span> - save 23.08% !
                    </div>
                    <div className='interest-body'>
                        <a className='bold' href='#application-form-section'>Are you interested? Fill the form below</a>
                    </div>
                    <div className='contact-body big-screen-contact'>
                        <h3 className='deep-purple bold'>For more inquiries, call:</h3>
                        <p className='bold'><a href='tel:07030148694'>07030148694;</a><a href='tel:09137819540'>09137819540</a></p>
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

        <InterestForm name={name} />

        <div className='contact-body small-screen-contact' style={{paddingLeft: '.8em'}}>
            <h3 className='deep-purple bold'>For more inquiries, call:</h3>
            <p className='bold'><a href='tel:07030148694'>07030148694;</a><a href='tel:07044086794'>07044086794;</a><a href='tel:09137819540'>09137819540</a></p>
        </div>
    </section>
    
  )
}

export default SchoolGrowth