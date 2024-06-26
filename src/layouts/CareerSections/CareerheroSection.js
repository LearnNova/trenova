import React from 'react'
// import { NavigateForm } from 'utils/navigateForm'
import './career.css'

const CareerHeroSection = () => {
  return (
    <div>
        <div className='career-hero-sec-wrapper'>
            <div className='career-hero-sec-text'>START THE PERFECT CAREER FOR YOU</div>
        </div>
        <div className='career-hero-sec-info'>
            <div>
                <span>Job Title:</span>
                <span style={{marginLeft: '.3em'}}> Sales Representative</span>
            </div>
            <div className='line-breaker'></div>
            <div>
                <span>Nature of Work:</span>
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
            <div className='career-what-you-learn-title' style={{marginLeft: '.5em'}}>
                <span className='highlighter'>Monthly Renumerations:</span> This is set at
            </div>
            <div className='career-what-you-learn-info'>
                <span>
                Basic Remuneration of <span className='highlighter'>N150,000 per month</span>, subject to meeting minimum monthly performance 
                result targets. <span className='highlighter'>PLUS</span>
                </span>
                <span className='career-what-you-learn-info-list-container'>
                    <ul>
                        <li>A Monthly Performance Bonus of <span className='highlighter'>N150,000</span> payable as follows:</li>
                        <li><span className='highlighter'>N40,000</span> when you achieve monthly sales of <span className='highlighter'>600</span> Paying App Users,</li>
                        <li>
                            You will also receive an additional <span className='highlighter'>N50,000</span> when you achieve monthly sales of 
                            <span className='highlighter'> 800</span> Paying App Users, and 
                        </li>
                        <li>Finally, you will be paid a Bonus of <span className='highlighter'>N60,000</span> when you achieve monthly sales of 
                        <span className='highlighter'> 1,000</span> Paying App Users.
                        </li>
                    </ul>
                </span> 
            </div>

            <div className='career-other-hero-section-container'>
                In addition to the above, you will also be paid <span className='highlighter'>10% Sales Commission</span> on any additional 
                monthly sales revenue above <span className='highlighter'>N1,999,000</span>.
            </div>
            <div className='line-breaker'></div>
            <div className='career-other-hero-section-container'>
                Kindly note that this offer is probationary for <span className='highlighter'>4 months</span>. During this probationary period, 
                you will represent us within your locality and its environs, and you will also be expected 
                to achieve a <span className='highlighter'>minimum monthly performance result</span> of <span className='highlighter'>N749,625</span> - (<span className='highlighter'>375</span> units of App sales). 
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container highlighter'>
                Any month you fail to achieve these minimum expected performance results during this 
                probationary period, you will not be paid the Basic Remuneration stated above. 
                The maximum total remuneration payable to you in such a month will be 15% of the total 
                sales revenue you achieved.
 
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
