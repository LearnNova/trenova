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
                    The ideal candidate will have a passion for education technology (EdTech) and a proven track 
                    record in sales.
                </span>
            </div>
            <div className='line-breaker'></div>
            <div className='career-what-you-learn-title'>
                 The Renumeration during the probationary period is set as follows:
                <ol id='career-what-you-learn-title-list'>
                    <li><b>Basic Remuneration: </b><span className='highlighter-big'><b>₦150,000.00 </b></span> per month, subject to meeting basic performance targets.</li>
                    <li><b>Transport Allowance: </b><span className='highlighter-big'><b>₦30,000.00 </b></span>  per month</li>
                    <li><b>Performance Bonus: </b><span className='highlighter-big'><b>₦120,000.00 </b></span> per month, payable as follows:</li>

                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><span className='highlighter-big'><b>₦30,000.00</b></span> when you achieve monthly sales revenue of <span className='highlighter'>₦999,500.00</span>, <span className='highlighter'>PLUS</span></li>
                        <li>
                            An additional <span className='highlighter-big'><b>₦40,000.00</b></span> when you achieve a monthly sales revenue of 
                            <span className='highlighter'> ₦1,299,000.00</span>, and 
                        </li>
                        <li>A final Performance Bonus of <span className='highlighter-big'><b>₦50,000.00</b></span> will be paid to you when you achieve a monthly sales revenue of 
                        <span className='highlighter'> ₦1,599,000.00</span> in a month.
                        </li>
                    </ul>
                </ol>
            </div>
            {/* <div className='career-what-you-learn-info'>
                <span className='career-what-you-learn-info-list-container'>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><span className='highlighter-big'><b>₦30,000.00</b></span> when you achieve monthly sales revenue of <span className='highlighter'>₦1,199,000.00</span>, <span className='highlighter'>PLUS</span></li>
                        <li>
                            An additional <span className='highlighter-big'><b>₦40,000.00</b></span> when you achieve a monthly sales revenue of 
                            <span className='highlighter'> ₦1,599,000.00</span>, and 
                        </li>
                        <li>A final Performance Bonus of <span className='highlighter-big'><b>₦50,000.00</b></span> will be paid to you when you achieve a monthly sales revenue of 
                        <span className='highlighter'> ₦1,999,000.00</span> in a month.
                        </li>
                    </ul>
                </span> 
            </div> */}

            <div className='career-other-hero-section-container'>
                In addition to the above, you will also be paid a
                <span className='highlighter'> Monthly Sales Commission of 5.625%</span> on any additional 
                sales revenue you generate above <span className='highlighter-big'><b>₦1,599,000.00</b></span> in a month.
            </div>

            <div className='line-breaker'></div>
            <div className='career-other-hero-section-container'>
                This offer is probationary for a period of<span className='highlighter'> four (4) months</span> . During this probationary period, 
                you will represent us within your locality and its environs, and you will also be expected 
                to achieve a <span className='highlighter'>minimum monthly performance result</span> of <span className='highlighter-big'><b>385</b></span> App Users <span className='highlighter'>OR</span> a monthly sales revenue of <span className='highlighter'>₦769,999.00</span>. 
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <div>
                    Kindly note that any month you fail to achieve the above-stated
                    <span className='highlighter'> minimum expected performance results</span> during the 
                    <span className='highlighter'> probationary period</span>, you will not be paid the
                    <span className='highlighter'> Basic Remuneration nor the Marketing Transport Fare</span> stated above.
                </div>
                
                <div className='spacing'>
                    The maximum total remuneration payable to you in such a month will be
                    <span className='highlighter'> 15%</span> of the total sales revenue you achieved in the month.
                </div>
                 
                 <div>
                    Also note that upon the completion of the probationary period, if the company has 
                    not been able to justify your confirmation, the company may terminate your appointment 
                    upon the provision of 3 working days notice.
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
