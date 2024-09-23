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
                <span className='highlighter'>Nature of Work:</span>
                <span style={{marginLeft: '.3em'}}> Remote</span>
            </div>
            <div>
                <span>Job Overview:</span>
                <br/>
                <span>
                    At LearnNova Learning Support Centre, we believe that our success is driven by high-performing 
                    sales and relationship management teams. We are seeking dynamic Territory Sales Representatives 
                    to sell our Learning Support Application, Training, and Mentorship Programs in key Nigerian 
                    cities.<br /><br />
                    In this role, you will focus on enrolling private school owners into our school growth 
                    training, coaching, and mentorship programs while also recruiting them as distributors 
                    for our Learning Support Application. Ideal candidates are passionate about EdTech, 
                    have a strong sales background, and thrive in a fast-paced, high-energy environment. 
                    You will manage sales within your designated territory, working towards company sales goals 
                    by building long-term relationships, engaging prospects, and multitasking effectively in any 
                    of the following key cities: <span className='highlighter'>Ikorodu</span>,
                    <span className='highlighter'> Badagry</span>,<span className='highlighter'> Epe</span>,
                    <span className='highlighter'> Abeokuta</span>,<span className='highlighter'> Ibadan</span>,
                    <span className='highlighter'> Benin City</span>,<span className='highlighter'> Warri</span>,
                    <span className='highlighter'> Port Harcourt</span>,<span className='highlighter'> Akure</span>, 
                    and <span className='highlighter'>Ado-Ekiti</span>.  
                </span>
            </div>
            <div className='line-breaker'></div>
            <div className='career-what-you-learn-title'>
                 <span className='paragraph-title'>Compensation During Probation:</span>
                <ol id='career-what-you-learn-title-list'>
                    <li><b>Basic Salary: </b><span className='highlighter-big'><b>₦200,000.00</b></span>/month (based on meeting key performance targets).</li>
                    <li><b>Transport Allowance: </b><span className='highlighter-big'><b>₦30,000.00</b></span>/month.</li>
                    <li><b>Performance Bonus: </b>Up to <span className='highlighter-big'><b>₦200,000.00</b></span>/month, based on the following sales volume:</li>

                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><span className='highlighter-big'><b>₦50,000.00</b></span> bonus for achieving <span className='highlighter'>700</span> App Units or its equivalent in sales revenue.</li>
                        <li>Additional <span className='highlighter-big'><b>₦70,000.00</b></span> bonus for <span className='highlighter'>950</span> App Units or its equivalent in sales revenue.</li>
                        <li>Final bonus of <span className='highlighter-big'><b>₦80,000.00</b></span> for <span className='highlighter'>1,250</span> App Units or its equivalent in sales revenue.</li>
                    </ul>

                    <li><b>Sales Commission: </b><span className='highlighter'><b>7.5%</b></span> commission on any sales exceeding <span className='highlighter'>1,250</span> App Units or its equivalent in sales revenue.</li>
                </ol>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Probationary Period:</span>

                <div>
                    The probation period is <span className='highlighter'>four (4) months</span>. During this time, 
                    your primary responsibility will be selling our discounted school growth training, coaching, 
                    and mentorship programs while recruiting school owners as distributors for the Learning 
                    Support App. You are required to achieve a minimum monthly target 
                    of <span className='highlighter'>450</span> App Users or its equivalent in sales revenue.
                </div> 
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Compensation if Minimum Target is Not Met:</span>

                <div>
                    If you do not meet the minimum target of <span className='highlighter'>450</span> App Users 
                    in any given month during probation, the <span className='highlighter'>Base Salary and Transport Allowance</span> will 
                    not be paid. Instead, your compensation will be limited to <span className='highlighter'>15%</span> of the 
                    total sales revenue generated in that month.
                </div> 
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Post Probationary Period:</span>

                <div>
                    Upon successfully completing the probation period, you will be offered a 
                    permanent role with the company.
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
