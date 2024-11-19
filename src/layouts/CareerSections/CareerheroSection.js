import React from 'react'
import { NavigateForm } from 'utils/navigateForm'
import './career.css'

const CareerHeroSection = () => {
  return (
    <div>
        <div className='career-hero-sec-wrapper'>
            <div className='career-hero-sec-text'>START A PERFECT CAREER JOURNEY</div>
        </div>
        <div className='career-hero-sec-info'>
            <div>
                <span className='highlighter'>Job Title:</span>
                <span style={{marginLeft: '.3em'}}> Territory Sales Representative</span>
            </div>

            <div className='line-breaker'></div>

            <div>
                <span className='highlighter' style={{ textDecoration:'underline' }}>Nature of Job:</span>
                <span style={{ fontWeight: 600, display: 'block' }}>This is a fully remote position. During the probationary period, you will need to demonstrate your ability to perform succesfully in the role.</span>
            </div>

            <div>
                <span>About LearnNova Learning Support Centre:</span>
                <br/>
                <span>
                    LearnNova, a proud member of the TreNova Group, is dedicated to driving educational innovation 
                    through the efforts of our dynamic sales and relationship management teams. We are seeking 
                    driven <b>Territory Sales Representatives</b> to expand our footprint in key Nigerian cities, 
                    promoting our cutting-edge products and services.
                </span>
            </div>

            <div>
                <span>Role Overview:</span>
                <br/>
                <span>
                    As a <b>Territory Sales Representative</b>, you will be instrumental in enrolling private school 
                    owners into our school growth training, coaching, and mentorship programs. You’ll also recruit 
                    school owners as distributors for our revolutionary <b>Learning Support App</b>. The ideal 
                    candidate is passionate about education technology, boasts a proven sales track record, 
                    and thrives in fast-paced, results-oriented environments. <br /><br /> 
                    <span className='highlighter'>Key Responsibilities:</span>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>Driving sales within your assigned territory.</li>
                        <li>Cultivate and maintain strong relationships with private school owners.</li>
                        <li>Present and engage prospects with LearnNova’s offerings.</li>
                        <li>Generate, nurture, and convert leads to customers.</li>
                        <li>Manage multiple tasks to meet and exceed sales targets consistently.</li>
                    </ul>
                    <br />
                    <div><b>Available Territories:</b></div>
                    <span className='highlighter'> Lagos MainLand</span>,<span className='highlighter'> Lagos Island</span>, 
                    <span className='highlighter'> Ikorodu</span>,<span className='highlighter'> Badagry</span>,
                    <span className='highlighter'> Epe</span>,<span className='highlighter'> Abeokuta</span>,
                    <span className='highlighter'> Ibadan</span>,<span className='highlighter'> Benin City</span>,
                    <span className='highlighter'> Warri</span>,<span className='highlighter'> Port Harcourt</span>,
                    <span className='highlighter'> Akure</span>, <span className='highlighter'>Ado-Ekiti</span>,
                    <span className='highlighter'> Enugu</span>, <span className='highlighter'> Owerri</span>,
                    <span className='highlighter'> Abuja</span>, <span className='highlighter'> Kano</span>,
                    <span className='highlighter'> Kaduna</span>, <span className='highlighter'> Osogbo</span>, 
                    and <span className='highlighter'> Sango-Ota</span>.
                </span>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Probationary Period (2 - 5 months):</span>

                <div>
                    During probation, your focus will be:
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>Marketing and selling the <span className='highlighter'>LearnNova Learning Studio</span> to schools,</li>
                        <li>Recruiting school owners as distributors for the <span className='highlighter'>LearnNova Learning Support App</span>.</li>
                        <li>Enrolling private schools into the <span className='highlighter'>TreNova Online Training</span>, <span className='highlighter'>Mentorship</span>, and <span className='highlighter'>Coaching Program</span>.</li>
                    </ul> 
                    Compensation during probation is <span className='highlighter'>commission-based</span>, with a generous <span className='highlighter'>25% commission</span> on monthly sales revenue.
                </div> 
            </div>

            <div className='line-breaker'></div>

            <div className='career-what-you-learn-title'>
                 <span className='paragraph-title'>Post-Probation Compensation:</span>

                 <div>
                    Upon acheiving a  monthly revenue of <span className='highlighter-big'><b>₦1,300,000</b></span>, you'll 
                    transition to a <span className='highlighter'>permanent role</span> with the following benefits:

                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><b>Base Salary: </b><span className='highlighter-big'><b>₦325,000.00</b></span> per month.</li>
                        <li><b>Sales Commission: </b><span className='highlighter-big'><b>15%</b></span> commission on revenue exceeding <span className='highlighter-big'><b>₦1,300,000</b></span> monthly.</li>
                        <li><b>Growth Opportunities: </b>Earn <span className='highlighter-big'><b>₦2,000,000</b></span> in monthly revenue to advance to <span className='highlighter'>Growth Executive</span>, with an increased salary of <span className='highlighter-big'><b>₦450,000</b></span>.</li>
                    </ul>
                    
                 </div>
                {/* <ol id='career-what-you-learn-title-list'>
                    <li><b>Basic Salary: </b><span className='highlighter-big'><b>₦160,000.00</b></span>/month (based on meeting key performance targets).</li>
                    <li><b>Marketing Allowance: </b><span className='highlighter-big'><b>₦40,000.00</b></span>/month.</li>
                    <li><b>Performance Bonus: </b>Up to <span className='highlighter-big'><b>₦200,000.00</b></span>/month, based on the following sales volume:</li>

                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><span className='highlighter-big'><b>₦50,000.00</b></span> bonus for achieving <span className='highlighter'>700</span> App Units or its equivalent in sales revenue.</li>
                        <li>Additional <span className='highlighter-big'><b>₦70,000.00</b></span> bonus for <span className='highlighter'>950</span> App Units or its equivalent in sales revenue.</li>
                        <li>Final bonus of <span className='highlighter-big'><b>₦80,000.00</b></span> for <span className='highlighter'>1,250</span> App Units or its equivalent in sales revenue.</li>
                    </ul>

                    <li><b>Sales Commission: </b><span className='highlighter'><b>7.5%</b></span> commission on any sales exceeding <span className='highlighter'>1,250</span> App Units or its equivalent in sales revenue.</li>
                </ol> */}
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>

                <div>
                    This role is ideal for ambitious professionals looking to make a meaningful impact in the 
                    <span className='highlighter'> EdTech</span> industry while growing their careers in a performance-oriented environment.
                </div> 
            </div>
            
            <div className='call-to-action' onClick={NavigateForm}>
                Kindly Submit your Details below if Interested.
            </div>

        </div>
        
        <div className='whatsapp-btn-container'>
            <a href='https://wa.me/+2347044086794' className='whatsapp-btn' target='blank'><i className="ri-whatsapp-line"></i></a>
            <span>Chat Us</span>
        </div>
    </div>
  )
}

export default CareerHeroSection
