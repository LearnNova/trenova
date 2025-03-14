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
                        <ul>
                            <li><span className='bold'>Diction & Phonetics Studio or Mathematics Studio Installation</span> – Get the <span className='font-semibold'>Diction and Phonetics Studio</span> for elementary schools or the <span className='font-semibold'>Mathematics Studio</span> for senior secondary schools installed on your school computer desktop. <span className='red-text bold small-text'>(Value: ₦250,000 per term)</span></li>
                            <li><span className='bold'>Free Home Learning App Enrollment</span> – Get <span className='font-semibold'>free access for 35 pupils/students</span> on our multi-platform <span className='font-semibold'>Home Learning App</span>, available on <span className='font-semibold'>Android, iOS, and Desktop</span>. Designed to enhance learning beyond the classroom with engaging and interactive content. <span className='red-text font-semibold small-text'>(Value: ₦175,000 per term)</span></li>
                            <li><span className='bold'>Creative & Vocational Skills Development Studio Installation</span> – Equip your school with the <span className='font-semibold'>Creative & Vocational Skills Development Studio</span>, installed directly on your school computer desktop. <span className='red-text bold small-text'>(Value: ₦249,000 per term)</span></li>
                            <li><span className='bold'>Referral Rewards</span> – Refer <span className='font-semibold'>one school</span> to LearnNova and receive <span className='font-semibold'>free enrollment for 20 additional pupils/students</span> on the Home Learning App. <span className='red-text bold small-text'>(Value: ₦100,000)</span></li> 
                            <li><span className='bold'>Exclusive Access to Virtual Mentorship & Coaching</span> – Gain <span className='font-semibold'>free access</span> to TreNova’s <span className='font-semibold'>virtual school growth mentorship & coaching sessions</span> to support your school’s development. <span className='red-text bold small-text'>(Value: ₦150,000 per term)</span></li>
                            <li><span className='bold'>TreNova Academy Online Training Access</span> – Enjoy <span className='font-semibold'>complimentary access</span> to TreNova Academy’s <span className='font-semibold'>online training platform</span>, packed with valuable resources for educators and school leaders. <span className='red-text bold small-text'>(Value: ₦100,000 per term)</span></li>
                            <li><span className='bold'>Shape the Future of LearnNova</span> – Get the <span className='font-semibold'>opportunity to suggest new creative and vocational skills</span> for LearnNova to develop, helping tailor solutions to your school’s needs.</li>
                        </ul>
                    </div>
                    <div className='price-body'>
                        <span className='title'>Subscription Fee:</span>
                        <span className='amount bold deep-purple'>₦179,999 per term</span>
                    </div>
                    <div className='note-body red-text bold' style={{marginBottom: '1em'}}>
                        <em>Schools that subscribe & pay before the end of <span className='deep-purple'>PROMO</span> to get it for <span className='deep-purple'>₦124,999 per term</span> - save 30.56% !</em>
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