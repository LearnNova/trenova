import React from 'react';
import './mentornigeria.css';

const programSection = () => {
  return (
    <div className='module-section-wrapper'>
        <div className='module-title'>"Earn While You Learn" Youth Empowerment Program:</div>

        <div className='module-text-box'>
            <h1 className='highlighter'>Program Overview:</h1>
            <p>The Mentor Nigeria "Earn While You Learn" Empowerment Program is designed to equip Nigerian youths with essential life skills, industry-relevant training, mentorship, coaching, financial literacy and financial support to transition into successful professionals and entrepreneurs. The program focuses on practical, hands-on learning with opportunities to earn stipends during training and access grants for business takeoff.</p>
        </div>
        <div className='line-breaker'></div>
        <div className='module-text-box'>
            <h1 className='highlighter'>Program Objectives:</h1>
            <ul className='module-text-box__list-box'>
                <li>Equip participants with life skills, financial literacy and technical knowledge in high-demand fields.</li>
                <li>Provide mentorship and coaching to foster professional and entrepreneurial growth.</li>
                <li>Offer financial support through stipends and business takeoff grants.</li>
                <li>Empower youths to create sustainable income streams and businesses.</li>
            </ul>
        </div>
        <div className='line-breaker'></div>
        <div className='module-text-box'>
            <h1 className='highlighter'>Program Outline:</h1>
            <ul className='module-text-box__list-box'>
                <li>
                    <b>Orientation and Onboarding</b>
                    <ul className='module-text-box__list-box-inner-box'>
                        <li>Program overview and expectations.</li>
                        <li>Introduction to mentors and trainers.</li>
                        <li>Goal setting and personal development plan.</li>
                    </ul>
                </li>
                <li>
                    <b>Training Modules</b>
                    <ul className='module-text-box__list-box-inner-box'>
                        <li>Life Skills Development (e.g., communication, teamwork and problem-solving).</li>
                        <li>Technical Skills Training (e.g., digital marketing, web & app development, sales & telemarketing).</li>
                        <li>Entrepreneurship, Business Startup Development and Financial Literacy Skills.</li>
                    </ul>
                </li>
                <li>
                    <b>Mentorship and Coaching</b>
                    <ul className='module-text-box__list-box-inner-box'>
                        <li>One-on-one mentorship sessions.</li>
                        <li>Group coaching for peer learning and support.</li>
                    </ul>
                </li>
                <li>
                    <b>Earn-While-You-Learn Activities</b>
                    <ul className='module-text-box__list-box-inner-box'>
                        <li>Opportunities to apply skills in real-world projects.</li>
                        <li>Stipends for completed tasks/projects.</li>
                    </ul>
                </li>
                <li>
                    <b>Business Takeoff Support</b>
                    <ul className='module-text-box__list-box-inner-box'>
                        <li>Guidance on business registration and legal compliance.</li>
                        <li>Access to business takeoff grants.</li>
                    </ul>
                </li>
                <li>
                    <b>Program Wrap-Up</b>
                    <ul className='module-text-box__list-box-inner-box'>
                        <li>Showcase of participant projects.</li>
                        <li>Awarding of certificates and grants.</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div className='apply-now-get-started'><a href='#application-form-section'> <span className='highlighter'>Apply Now</span> to Enroll!</a> </div>
        <div className='line-breaker'></div>
    </div>
  )
}

export default programSection