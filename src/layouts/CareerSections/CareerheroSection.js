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
                <span>Job Description:</span>
                <br/>
                <span>
                    We are looking for dynamic and goal-oriented Territory Sales Representatives to join our 
                    team in the following locations: <span className='highlighter'>Abeokuta</span>, 
                    <span className='highlighter'> Ibadan</span>, <span className='highlighter'> Badagry</span>, 
                    <span className='highlighter'> Epe</span>, <span className='highlighter'> Ikorodu</span>, 
                    <span className='highlighter'> Benin City</span>, <span className='highlighter'> Warri</span>, 
                    <span className='highlighter'> Port Harcourt</span>, <span className='highlighter'> Akure</span>, 
                    and <span className='highlighter'>Ado-Ekiti</span>. In this role, you will focus on enrolling 
                    private school owners into our school growth training and mentorship programs, as well as 
                    recruiting private school leaders to act as distributors for our cutting-edge learning 
                    support application. You will be responsible for managing sales efforts within your 
                    designated territory to ensure consistent achievement of company sales goals. The 
                    ideal candidate is passionate about EdTech and has a strong background in sales. If you're 
                    driven by the idea of transforming education with technology and thrive in a high-energy 
                    environment, we encourage you to apply.
                </span>
            </div>
            <div className='line-breaker'></div>
            <div className='career-what-you-learn-title'>
                 <span className='paragraph-title'>Compensation During Probation:</span>
                <ol id='career-what-you-learn-title-list'>
                    <li><b>Basic Remuneration: </b><span className='highlighter-big'><b>₦140,000.00</b></span> monthly (based on meeting key performance targets).</li>
                    <li><b>Transport Allowance: </b><span className='highlighter-big'><b>₦35,000.00</b></span>  monthly.</li>
                    <li><b>Performance Bonus: </b>Up to <span className='highlighter-big'><b>₦200,000.00</b></span> monthly, based on the following sales volume:</li>

                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><span className='highlighter-big'><b>₦50,000.00</b></span> bonus for achieving <span className='highlighter'>600</span> App Units or its equivalent in sales revenue.</li>
                        <li>Additional <span className='highlighter-big'><b>₦70,000.00</b></span> bonus for <span className='highlighter'>800</span> App Units or its equivalent in sales revenue.</li>
                        <li>Final bonus of <span className='highlighter-big'><b>₦80,000.00</b></span> for <span className='highlighter'>1,200</span> App Units or its equivalent in sales revenue.</li>
                    </ul>

                    <li><b>Sales Commission: </b><span className='highlighter'><b>7.5%</b></span> commission on any sales exceeding <span className='highlighter'>1,200</span> App Units or its equivalent in sales revenue.</li>
                </ol>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Probationary Period:</span>

                <div>
                    The period lasts for <span className='highlighter'>four (4) months</span> and is fully remote. 
                    During this time, your primary responsibility is to sell our Learning Support App to private 
                    schools at a discounted price of <span className='highlighter-big'><b>₦1,999</b></span> per term 
                    per pupil/student, along with promoting our discounted training and mentorship programs. You 
                    are required to achieve a minimum monthly target of <span className='highlighter'>400 </span> 
                    App Users or generate <span className='highlighter-big'><b>₦799,500.00</b></span> in sales 
                    revenue.
                </div> 
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Compensation if Minimum Target is Not Met:</span>

                <div>
                    If the minimum target of <span className='highlighter'>400</span> App Users is not achieved 
                    in any given month during probation, the <span className='highlighter'>Basic Salary and Transport Allowance </span> 
                    will not be paid. In such cases, your compensation will be limited 
                    to <span className='highlighter'>15%</span> of the total sales revenue generated that month.
                </div> 
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Post Probationary Period:</span>

                <div>
                    After successfully completing the probationary period, you will be offered a permanent position 
                    within the company.
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
