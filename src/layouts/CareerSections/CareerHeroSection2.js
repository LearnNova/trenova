import React from 'react'
import { NavigateForm } from 'utils/navigateForm'
import './career.css'

const CareerHeroSection2 = () => {
  return (
    <div>
        <div className='career-hero-sec-wrapper'>
            <div className='career-hero-sec-text'>START A PERFECT CAREER JOURNEY</div>
        </div>
        <div className='career-hero-sec-info'>
            <div>
                <span className='highlighter'>Job Title:</span>
                <span style={{marginLeft: '.3em'}}> Sales Officer</span>
            </div>

            <div className='line-breaker'></div>

            <div>
                <span className='highlighter' style={{ textDecoration:'underline' }}>Nature of Job:</span>
                <span style={{ fontWeight: 600, marginLeft: '.6rem' }}>Remote</span>
                <br /><br />
                <div><b>Available Cities:</b></div>
                <span className='highlighter'> Oshogbo</span>,<span className='highlighter'> Akure</span>, 
                <span className='highlighter'> Ado-Ekiti</span>,<span className='highlighter'> Benin City</span>,
                <span className='highlighter'> Warri</span>,<span className='highlighter'> Oweri</span>,
                <span className='highlighter'> Epe</span>,<span className='highlighter'> Agbara</span>,
                <span className='highlighter'> Kaduna</span>,<span className='highlighter'> Kano</span>,
                <span className='highlighter'> Jos</span>, and <span className='highlighter'> Ilorin</span>.
            </div>

            <div>
                <span>About LearnNova Learning Support Centre:</span>
                <br/>
                <span>
                    LearnNova, a proud member of the TreNova Group, is dedicated to driving educational innovation 
                    through the efforts of our dynamic sales and relationship management teams. We are seeking 
                    driven <b>Sales Officer</b> to expand our footprint in key Nigerian cities, 
                    promoting our cutting-edge products and services.
                </span>
            </div>

            <div>
                <span className='highlighter'>Job Description:</span>
                <br/>
                <span>
                    We are seeking a motivated and results-driven <b>Sales Officer</b> to join our team. In this role, 
                    you will play a key role in driving business growth by identifying new opportunities, 
                    nurturing client relationships, and consistently meeting sales targets.<br/>
                    Success in this role requires exceptional communication skills, a proactive approach to sales, and the 
                    ability to thrive in a fast-paced environment.<br /><br /> 
                    <span className='highlighter'>Key Responsibilities:</span>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>Identify and pursue new business opportunities through prospecting, networking, and cold calling</li>
                        <li>Build and sustain strong relationships with clients by understanding their needs and delivering tailored solutions.</li>
                        <li>Present and promote products or services to potential clients, emphasizing their value to close deals successfully.</li>
                        <li>Collaborate with internal teams to ensure timely and accurate delivery of products or services.</li>
                        <li>Stay informed about market trends, industry changes, and competitors’ activities.</li>
                        <li>Represent the company at school owners' association meetings, conferences, and networking events to generate leads and enhance brand awareness.</li>
                        <li>Provide feedback and insights to management based on market trends and client interactions.</li>
                    </ul>
                </span>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Qualifications and Skills:</span>

                <div>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>Minimum qualification of <span className='highlighter'>ND</span>/<span className='highlighter'>NCE</span> with at least 4 years of proven sales experience <b>OR</b> <span className='highlighter'>HND</span>/<span className='highlighter'>Bachelor’s degree</span> in a related field with at least 2 years of relevant sales experience.</li>
                        <li>Strong communication, presentation, and negotiation skills.</li>
                        <li>Excellent customer service orientation and ability to build lasting relationships.</li>
                        <li>Self-motivated, resourceful, and able to work independently.</li>
                        <li>Familiarity with the education sector is an added advantage.</li>
                    </ul> 
                </div> 
            </div>

            <div className='line-breaker'></div>

            <div className='career-what-you-learn-title'>
                 <span className='paragraph-title'>Probationary Period Compensation:</span>

                 <div>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><b>Base Salary: </b><span className='highlighter-big'><b>₦150,000</b></span> per month.</li>
                        <li><b>Performance Bonus: </b>Earn up to <span className='highlighter-big'><b>₦135,000</b></span> monthly by hitting key sales milestones:
                        <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                            <li><span className='highlighter-big'><b>₦50,000</b></span> for achieving <span className='highlighter-big'><b>12 sales</b></span> in a month.</li>
                            <li><span className='highlighter-big'><b>₦45,000</b></span> for enrolling <span className='highlighter-big'><b>14 customers</b></span> in a month.</li>
                            <li><span className='highlighter-big'><b>₦40,000</b></span> for reaching <span className='highlighter-big'><b>17 customer</b></span> sales in a month.</li>
                        </ul>
                        </li>
                    </ul>
                    <br />
                    <div>
                        <span className='paragraph-title'>Important Note:</span>
                        <p>
                            In the event that your monthly sales fall below <span className='highlighter-big'><b>9 unit</b></span> or <span className='highlighter-big'><b>₦890,000</b></span>, the 
                            base salary will be temporarily suspended. In this case, total compensation will be 
                            limited at <span className='highlighter-big'><b>15.5%</b></span> of the monthly 
                            sales revenue.
                        </p>
                        </div>

                    
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
                <span className='highlighter'><b>Join Our Team:</b></span>
                <div>Be part of a dynamic team, make a meaningful impact, and grow your career with us!</div> 
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

export default CareerHeroSection2
