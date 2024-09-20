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
                    We are seeking energetic and results-driven Territory Sales Representatives to join our team, in the following locations: Abeokuta, Ibadan, Badagry, Epe, Ikorodu, Benin-City, Warri, Port-Harcourt, Akure, Ado-Ekiti. 
                    In this role, you will be responsible for enrolling private school owners into our school growth training and mentorship platform, and also recruit private school leaders as distributors 
                    for our innovative learning support application. You will manage sales efforts within your 
                    assigned territory, ensuring that company sales targets are consistently met. The ideal 
                    candidate is passionate about educational technology (EdTech) and has a proven track record 
                    in driving successful sales. If you're excited about revolutionizing education through 
                    technology and thrive in a fast-paced environment, we want to hear from you.
                </span>
            </div>
            <div className='line-breaker'></div>
            <div className='career-what-you-learn-title'>
                 <span className='paragraph-title'>Compensation During Probation:</span>
                <ol id='career-what-you-learn-title-list'>
                    <li><b>Basic Remuneration: </b><span className='highlighter-big'><b>₦140,000.00 </b></span> per month, subject to meeting basic performance targets.</li>
                    <li><b>Transport Allowance: </b><span className='highlighter-big'><b>₦35,000.00 </b></span>  per month.</li>
                    <li><b>Performance Bonus: </b>Earn up to <span className='highlighter-big'><b>₦200,000.00 </b></span> monthly, based on meeting the following sales volume:</li>

                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><span className='highlighter-big'><b>₦50,000.00</b></span> bonus upon achieving <span className='highlighter'>600</span> App Units or its equivalent in monthly sales revenue.</li>
                        <li>Additional <span className='highlighter-big'><b>₦70,000.00</b></span> bonus for reaching <span className='highlighter'>800</span> App Units or its equivalent in monthly sales revenue.</li>
                        <li>Final bonus of <span className='highlighter-big'><b>₦80,000.00</b></span> for hitting <span className='highlighter'>1,170</span> App Units or its equivalent in monthly sales revenue.</li>
                    </ul>

                    <li><b>Sales Commission: </b>Earn a <span className='highlighter'><b>7.5%</b></span> commission on any sales unit exceeding <span className='highlighter'>1,200</span> App or its equivalent in monthly sales revenue.</li>
                </ol>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Probationary Period:</span>

                <div>
                    The probationary period will last <span className='highlighter'>four (4) months</span>, during which you will work remotely. 
                    Your primary responsibility during this time is to sell our Learning Support App to private schools at a 
                    discounted rate of <span className='highlighter-big'><b>₦1,999</b></span> per term per pupil/student and also offer our training and mentorship program at significantly discounted price. You are expected to achieve a minimum 
                    monthly sales target of <span className='highlighter'>400</span> App Users or generate sales revenue of <span className='highlighter-big'><b>₦799,500.00</b></span>.
                </div> 
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Remuneration:</span>

                <div>
                    If you do not meet the minimum monthly performance target of <span className='highlighter'>400</span> App Users in any month of 
                    the probationary period, the <span className='highlighter'>Basic Salary and Transport Allowance</span> will not be paid for that 
                    month. In such cases, your total remuneration will be capped at <span className='highlighter'>15%</span> of the total sales revenue 
                    you achieved for that month.
                </div> 
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Post Probationary Period:</span>

                <div>
                    Upon successful completion of the probationary period, you will be offered a substantive 
                    position within the company.
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
