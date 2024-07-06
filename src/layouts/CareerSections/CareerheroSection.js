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
                <span>Job Title:</span>
                <span style={{marginLeft: '.3em'}}> Sales Representative</span>
            </div>
            <div className='line-breaker'></div>
            <div>
                <span style={{fontWeight: '600'}}>Nature of Work:</span>
                <span style={{marginLeft: '.3em'}}> Hybrid</span>
            </div>
            <div>
                <span>Job Description:</span>
                <br/>
                <span>
                    We are seeking dynamic and motivated Sales Representatives to join our team. 
                    The individual in this position will be responsible for selling our innovative Learning 
                    Support Applications to prospective school owners within their locality and its environs. 
                    The ideal candidate will have passion for education technology (EdTech) and a proven track 
                    record in sales.
                </span>
            </div>
            <div className='line-breaker'></div>
            <div className='career-what-you-learn-title'>
                <span className='highlighter'>Monthly Renumerations:</span> This is set at a basic 
                remuneration of <span className='highlighter-big'><b>₦150,000.00</b></span> 
                <span className='highlighter'> per month</span>, subject to meeting minimum monthly performance 
                result targets, <span className='highlighter'>PLUS </span> a Monthly Performance Bonus of 
                <span className='highlighter-big'><b> ₦150,000.00</b> </span> payable as follows:
        
            </div>
            <div className='career-what-you-learn-info'>
                <span className='career-what-you-learn-info-list-container'>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><span className='highlighter-big'><b>₦40,000.00</b></span> when you achieve monthly sales of <span className='highlighter'>600</span> Paying App Users,</li>
                        <li>
                            You will also receive an additional <span className='highlighter-big'><b>₦50,000.00</b></span> when you achieve monthly sales of 
                            <span className='highlighter'> 800</span> Paying App Users, and 
                        </li>
                        <li>Finally, you will be paid a Bonus of <span className='highlighter-big'><b>₦60,000.00</b></span> when you achieve monthly sales of 
                        <span className='highlighter'> 1,000</span> Paying App Users.
                        </li>
                    </ul>
                </span> 
            </div>

            <div className='career-other-hero-section-container'>
                In addition to the above, you will also be paid a 
                <span className='highlighter'>Monthly Sales Commission of 5.625%</span> on any additional 
                sales revenue you generated above <span className='highlighter-big'><b>₦1,999,000.00</b></span> in a month.
            </div>

            <div className='line-breaker'></div>
            <div className='career-other-hero-section-container'>
                This offer is probationary for a period of<span className='highlighter'>4 months</span>. During this probationary period, 
                you will represent us within your locality and its environs, and you will also be expected 
                to achieve a <span className='highlighter'>minimum monthly performance result</span> of <span className='highlighter-big'><b>₦769,615.00</b></span> Sales Revenue <span className='highlighter'>OR</span> must have signed up a monthly average of <span className='highlighter'>385</span> App Users. 
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                Kindly note that any month you fail to achieve the above stated 
                <span className='highlighter'>minimum expected performance results</span> during the 
                <span className='highlighter'> probationary period</span>, you will
                <span className='highlighter'> not be paid the Basic Remuneration or any of the Performance Bonus</span> stated above. 
                The maximum total remuneration payable to you in such a month will be
                <span className='highlighter'> 15%</span> of the total sales revenue you achieved in the month.
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
