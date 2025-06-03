import React from 'react'
import { NavigateForm } from 'utils/navigateForm'
import './career.css'

const CareerHeroSection3 = () => {
  return (
    <div>
        <div className='career-hero-sec-wrapper'>
            <div className='career-hero-sec-text'>THE PERFECT CAREER JOURNEY FOR YOU</div>
        </div>
        <div className='career-hero-sec-info'>
            <div>
                <span className='highlighter'>Job Title:</span>
                <span style={{marginLeft: '.3em'}}> Digital Marketer</span>

                {/* <div className='line-breaker'></div>

                <span className='highlighter'>Location:</span>
                <span style={{marginLeft: '.3em'}}> Remote/Flexible</span> */}
            </div>

            <div className='line-breaker'></div>

            <div>
                <span className='highlighter' style={{ textDecoration:'underline' }}>Location:</span>
                <span style={{ fontWeight: 600, marginLeft: '.6rem' }}> Remote / Flexible</span>

                <br /><br />

                <span className='highlighter' style={{ textDecoration:'underline' }}>Job Type:</span>
                <span style={{ fontWeight: 600, marginLeft: '.6rem' }}> Contract-to-Full-Time</span>
                {/* <br /><br />
                <div><b>Available Cities:</b></div>
                <span className='highlighter'> Oshogbo</span>,<span className='highlighter'> Akure</span>, 
                <span className='highlighter'> Ado-Ekiti</span>,<span className='highlighter'> Benin City</span>,
                <span className='highlighter'> Warri</span>,<span className='highlighter'> Oweri</span>,
                <span className='highlighter'> Epe</span>,<span className='highlighter'> Agbara</span>,
                <span className='highlighter'> Kaduna</span>,<span className='highlighter'> Kano</span>,
                <span className='highlighter'> Jos</span>, and <span className='highlighter'> Ilorin</span>. */}
            </div>

            <div>
                <span>Company Overview</span>
                <br/>
                {/* <span>Are you a digital marketing expert with a passion for education and technology? Join the LearnNova Learning Support Centre, a division of the TreNova Group, where we are revolutionizing private education through cutting-edge digital learning and school growth solutions.</span> */}
                <p>Are you a digital marketing expert with a passion for education and technology? Join the <span className='font-semibold'>LearnNova Learning Support Centre</span>, a division of the <span className='font-semibold'>TreNova Group</span>, where we are revolutionizing private education through cutting-edge digital learning and school growth solutions.</p>
                <br/>
                <p>At LearnNova, we specialize in delivering impactful e-learning products to private elementary and secondary schools, while also developing skilled school growth consultants and business mentors across Nigeria. Our mission is to empower educators, learners, and school leaders with accessible, high-quality digital tools and training.</p>
            </div>

            <div>
                <span className='highlighter'>About the Role</span>
                <br/>
                <div>
                    <p>We are seeking a results-oriented <span className='font-semibold'>Digital Marketer</span> to lead the promotion and digital sales of our key offerings, including:</p>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container mt-2'>
                        <li>E-learning applications</li>
                        <li>School growth consulting and mentorship training</li>
                        <li>Recruitment of sales partners</li>
                    </ul>

                    <p className='mt-2'>In this role, you will be responsible for generating leads, closing sales, and expanding our network of sales partners through strategic digital marketing initiatives.</p>

                    <br />

                    <p className='highlighter'>Core Products Available to Promote and Generate Sales Revenue:</p>
                    <ul style={{listStyleType: 'decimal'}} className='list-decimal career-what-you-learn-info-list-container-inner-list-container'>
                        <li>
                            <span className='font-semibold block'>Professional Training for Aspiring School Consultants and Mentors</span>
                            <a className='hover:text-orange-500' href='https://www.learnnova.ng/schoolgrowthsystem/trenova'>👉 [View Product]</a>
                        </li>
                        <li>
                            <span className='font-semibold block'>School Consultants & Mentors Training</span>
                            <a className='hover:text-orange-500' href='https://www.learnnova.ng/MentorNigeria/trenova'>👉 [View Program]</a>
                        </li>
                        <li>
                            <span className='font-semibold block'>School Support Sales Partner Recruitment</span>
                            <a className='hover:text-orange-500' href='https://www.learnnova.ng/schoolsupportpartner/trenova'>👉 [Learn More]</a>
                        </li> 
                    </ul>

                    <br />

                    <p className='highlighter'>Key Responsibilities:</p>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>Design and execute high-converting digital campaigns to promote and sell LearnNova products</li>
                        <li>Drive lead generation, manage sales funnels, and exceed monthly revenue targets</li>
                        <li>Craft compelling content and visuals to highlight the value of our offerings</li>
                        <li>Recruit and manage a network of independent sales partners</li>
                        <li>Monitor and optimize campaign performance using data and analytics</li>
                        <li>Stay current with industry trends, platforms, and marketing tools</li>
                    </ul>
                </div>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Requirements:</span>

                <div>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>Minimum of 2 years’ experience in digital sales, ideally within the <span className='font-semibold'>edtech</span> or <span className='font-semibold'>e-learning</span> industry</li>
                        <li>Proven ability to generate leads and drive product sales online</li>
                        <li>Experience in recruiting a distributed sales team or partners</li>
                        <li>Proficiency with tools such as <span className='font-semibold'>Google Analytics</span>, <span className='font-semibold'>Facebook Ads Manager</span>, and <span className='font-semibold'>email marketing platforms</span></li>
                        <li>Strong communication, analytical, and organizational skills</li>
                        <li>Degree or certification in <span className='font-semibold'>Marketing</span>, <span className='font-semibold'>Digital Communications</span>, or a related field is an advantage</li>
                    </ul>
                </div> 
            </div>

            {/* <div className='line-breaker'></div> */}

            {/* <div className='career-what-you-learn-title'>
                 <span className='paragraph-title'>What we Offer:</span>

                <div>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>Competitive remuneration package.</li>
                        <li>Flexible working hours in a remote-friendly environment.</li>
                        <li>Opportunities to work with a supportive and innovative team.</li>
                        <li>Professional growth in a thriving niche industry.</li>
                    </ul>
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
                <ol id='career-what-you-learn-title-list'>
                    <li><b>Basic Salary: </b><span className='highlighter-big'><b>₦160,000.00</b></span>/month (based on meeting key performance targets).</li>
                    <li><b>Marketing Allowance: </b><span className='highlighter-big'><b>₦40,000.00</b></span>/month.</li>
                    <li><b>Performance Bonus: </b>Up to <span className='highlighter-big'><b>₦200,000.00</b></span>/month, based on the following sales volume:</li>

                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><span className='highlighter-big'><b>₦50,000.00</b></span> bonus for achieving <span className='highlighter'>700</span> App Units or its equivalent in sales revenue.</li>
                        <li>Additional <span className='highlighter-big'><b>₦70,000.00</b></span> bonus for <span className='highlighter'>950</span> App Units or its equivalent in sales revenue.</li>
                        <li>Final bonus of <span className='highlighter-big'><b>₦80,000.00</b></span> for <span className='highlighter'>1,250</span> App Units or its equivalent in sales revenue.</li>
                    </ul>

                    <li><b>Sales Commission: </b><span className='highlighter'><b>7.5%</b></span> commission on any sales exceeding <span className='highlighter'>1,250</span> App Units or its equivalent in sales revenue.</li>
                </ol>
            </div> */}

            <div className='line-breaker'></div>

            <div className='career-what-you-learn-title'>
                 <span className='paragraph-title'>Compensation Package</span>
                <div>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>
                            <b>Base Salary: </b>
                            <span className='highlighter-big'><b>₦200,000</b></span> per month
                        </li>

                        <li>
                            <b>Marketing Reimbursement: </b>
                            Up to <span className='highlighter-big'><b>₦50,000</b></span>/month (upon achieving ₦375,000 in monthly sales revenue)
                        </li>

                        <li>
                            <b>Performance Bonus: </b>
                            <span className='highlighter-big'><b>17.5%</b></span> commission on all sales revenue exceeding <span className='highlighter-big'><b>₦1,450,000</b></span> monthly.
                        </li>
                    </ul>
                </div>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='highlighter'><b>Probationary Terms (First 3 Months)</b></span>
                <div>
                    <p>During the probation period:</p>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>If monthly sales revenue falls below <span className='font-semibold'>₦1,450,000</span>, the base salary will be temporarily withheld</li>
                        <li>You will instead earn <span className='font-semibold'>12.5% commission</span> on your total monthly sales revenue</li>
                    </ul>
                </div> 
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='highlighter'><b>How to Apply</b></span>
                <div>
                    Are you ready to help shape the future of digital learning in Nigeria? Submit your application below and join a mission-driven team committed to educational transformation.
                </div>
            </div>

            
            <div className='call-to-action' onClick={NavigateForm}>
                Kindly Submit your Details below if Interested.
            </div>

            {/* <div className='career-other-hero-section-container' style={{alignSelf: 'center'}}>
                <div>
                    <i>Join us in shaping the future of education—one learner at a time!</i>
                </div> 
            </div> */}

        </div>
        
        <div className='whatsapp-btn-container'>
            <a href='https://wa.me/+2347044086794' className='whatsapp-btn' target='blank'><i className="ri-whatsapp-line"></i></a>
            <span>Chat Us</span>
        </div>
    </div>
  )
}

export default CareerHeroSection3
