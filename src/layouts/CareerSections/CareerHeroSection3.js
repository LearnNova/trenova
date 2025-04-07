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
                <span style={{marginLeft: '.3em'}}> Digital Marketer (E-Learning Products)</span>

                {/* <div className='line-breaker'></div>

                <span className='highlighter'>Location:</span>
                <span style={{marginLeft: '.3em'}}> Remote/Flexible</span> */}
            </div>

            <div className='line-breaker'></div>

            <div>
                <span className='highlighter' style={{ textDecoration:'underline' }}>Location:</span>
                <span style={{ fontWeight: 600, marginLeft: '.6rem' }}> Remote/Flexible</span>

                <br /><br />

                <span className='highlighter' style={{ textDecoration:'underline' }}>Job Type:</span>
                <span style={{ fontWeight: 600, marginLeft: '.6rem' }}> Part-Time/Contract/Full Time</span>
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
                <span>Company Overview:</span>
                <br/>
                <span>
                Are you a digital marketing professional passionate about education and technology? Join our dynamic team as a Digital Marketer and help us revolutionize learning through powerful digital campaigns and strategic sales growth! LearnNova Learning Support Centre, a unit of TreNova Group is a leading provider of innovative e-learning solutions, dedicated to transforming education through technology. We specialize in delivering engaging and effective digital learning experiences to private elementary and secondary schools across Nigeria. Our mission is to empower learners and educators by providing accessible, high-quality e-learning products.</span>
            </div>

            <div>
                <span className='highlighter'>About the Role:</span>
                <br/>
                <span>
                    We’re seeking a goal-driven Digital Marketer to promote and sell our digital learning products. In this role, you’ll not only develop and execute marketing campaigns across digital channels, but you’ll also play a key part in driving sales and recruiting sales partners to expand our reach.
                    <br /><br /> 
                    <span className='highlighter'>Key Responsibilities:</span>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>Develop and implement digital marketing strategies to promote our e-learning products.</li>
                        <li>Manage campaigns across social media, email, SEO/SEM, and content platforms.</li>
                        <li>Drive online traffic, lead generation, and conversions through paid and organic efforts.</li>
                        <li>Create compelling content that communicates the value of our e-learning solutions.</li>
                        <li>Recruit, onboard, and support a network of sales partners.</li>
                        <li>Analyze campaign performance and optimize based on data insights.</li>
                        <li>Stay up to date on digital marketing trends, tools, and best practices.</li>
                    </ul>
                </span>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Requirements:</span>

                <div>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>Minimum of 2 years of experience in digital marketing, preferably in the edtech or e-learning space.</li>
                        <li>Proven experience in product marketing and sales generation.</li>
                        <li>Strong skills in social media marketing, email campaigns, SEO/SEM, and content creation.</li>
                        <li>Ability to recruit and manage a group of sales partners.</li>
                        <li>Familiarity with tools like Google Analytics, Facebook Ads Manager, and email marketing platforms.</li>
                        <li>Excellent communication, analytical, and organizational skills.</li>
                        <li>Degree or certification in Marketing, Communications, or a related field is an advantage.</li>
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
                 <span className='paragraph-title'>Compensation Details:</span>
                <div>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>
                            <b>Base Remuneration: </b>
                            <span className='highlighter-big'><b>₦200,000</b></span> per month.
                        </li>

                        <li>
                            <b>Marketing Reimbursement: </b>
                            Up to <span className='highlighter-big'><b>₦60,000</b></span> per month, subject to achieving a minimum of <span className='highlighter-big'><b>₦375,000</b></span> in monthly sales revenue.
                        </li>

                        <li>
                            <b>Additional Benefits: </b>
                            Earn additional <span className='highlighter-big'><b>17.5%</b></span> commission on monthly sales revenue exceeding <span className='highlighter-big'><b>₦1,250,000</b></span> per month.
                        </li>
                    </ul>
                </div>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='highlighter'><b>Probationary Period Terms:</b></span>
                <div>
                    This position includes a <span className='font-semibold'>six-month</span> probationary period. During this period, if your monthly sales revenue is below <span className='highlighter-big font-semibold'>₦1,250,000</span>, your base salary will be temporarily suspended. Instead, you will earn <span className='font-semibold'>15.5% of your total sales revenue</span> for that month.
                </div> 
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='highlighter'><b>How to Apply:</b></span>
                <div>
                    If you’re excited to make a difference and grow with us, submit your application below.
                </div> 
            </div>

            
            <div className='call-to-action' onClick={NavigateForm}>
                Kindly Submit your Details below if Interested.
            </div>

            <div className='career-other-hero-section-container' style={{alignSelf: 'center'}}>
                <div>
                    <i>Join us in shaping the future of education—one learner at a time!</i>
                </div> 
            </div>

        </div>
        
        <div className='whatsapp-btn-container'>
            <a href='https://wa.me/+2347044086794' className='whatsapp-btn' target='blank'><i className="ri-whatsapp-line"></i></a>
            <span>Chat Us</span>
        </div>
    </div>
  )
}

export default CareerHeroSection3
