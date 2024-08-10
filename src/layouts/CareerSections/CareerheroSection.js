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
                <span style={{marginLeft: '.3em'}}> Field Sales Representative/Sales Agent</span>
            </div>
            <div className='line-breaker'></div>
            <div>
                <span className='highlighter'>Nature of Work:</span>
                <span style={{marginLeft: '.3em'}}> Hybrid</span>
            </div>
            <div>
                <span>Job Description:</span>
                <br/>
                <span>
                    We are looking for enthusiastic and driven Sales Representatives to join our team. 
                    In this role, you will be responsible for selling our innovative and cutting-edge 
                    Learning Support Applications to private schools in your area and surrounding 
                    communities. The ideal candidate should have a passion for educational technology 
                    (EdTech) and a proven history of successful sales.
                </span>
            </div>
            <div className='line-breaker'></div>
            <div className='career-what-you-learn-title'>
                 <span className='paragraph-title'>Compensation During Probation:</span>
                <ol id='career-what-you-learn-title-list'>
                    <li><b>Basic Remuneration: </b><span className='highlighter-big'><b>₦150,000.00 </b></span> per month, contingent on meeting basic performance targets.</li>
                    <li><b>Transport Allowance: </b><span className='highlighter-big'><b>₦30,000.00 </b></span>  per month.</li>
                    <li><b>Performance Bonus: </b><span className='highlighter-big'><b>₦120,000.00 </b></span> per month, payable as follows:</li>

                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><span className='highlighter-big'><b>₦30,000.00</b></span> bonus upon achieving <span className='highlighter'>500</span> App Units in monthly sales.</li>
                        <li>An additional <span className='highlighter-big'><b>₦40,000.00</b></span> bonus for <span className='highlighter'>650</span> App Units in monthly sales.</li>
                        <li>A final bonus of <span className='highlighter-big'><b>₦50,000.00</b></span> for achieving <span className='highlighter'>800</span> App Units in monthly sales.</li>
                    </ul>

                    <li><b>Sales Commission: </b>A monthly commission of <span className='highlighter'><b>7.5%</b></span> on any additional sales revenue exceeding <span className='highlighter-big'><b>₦1,599,000.00</b></span> per month.</li>
                </ol>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Probationary Period:</span>

                <div>
                    The probationary period will last <span className='highlighter'>four (4) months</span>, during which you will work remotely. 
                    You will sell the App to private schools at a discounted rate of <span className='highlighter-big'><b>₦1,999</b></span> per term per 
                    pupil/student. A minimum monthly target of <span className='highlighter'>399</span> App Users or sales revenue of 
                    <span className='highlighter-big'><b> ₦797,600.00</b></span> is expected.
                </div> 
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Note on Remuneration:</span>

                <div>
                    If you do not meet the minimum performance target of <span className='highlighter'>399</span> App Users during any month of the 
                    probationary period, the <span className='highlighter'>Basic Salary and Transport Allowance</span> will not be paid. 
                    In such cases, the maximum total remuneration will be <span className='highlighter'>15%</span> of the total sales 
                    revenue achieved for that month.
                </div> 
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Post Probation:</span>

                <div>
                    Upon successful completion of the probationary period and meeting the monthly 
                    performance targets, you will be offered a substantive position as a <span className='highlighter'>Business Growth Officer</span>.
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
