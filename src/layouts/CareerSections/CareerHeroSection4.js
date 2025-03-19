import React from 'react'
import { NavigateForm } from 'utils/navigateForm'
import './career.css'

const CareerHeroSection4 = () => {
  return (
    <div>
        <div className='career-hero-sec-wrapper'>
            <div className='career-hero-sec-text'>THE PERFECT CAREER JOURNEY FOR YOU</div>
        </div>
        <div className='career-hero-sec-info'>
            <div>
                <span className='highlighter'>Job Title:</span>
                <span style={{marginLeft: '.3em'}}> E-Learning Sales Executive</span>

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
                <span style={{ fontWeight: 600, marginLeft: '.6rem' }}> Full-Time/Part-Time/Contract</span>
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
                    LearnNova Learning Support Centre, a unit of TreNova Group is a leading provider of innovative e-learning solutions, dedicated to transforming education through technology. We specialize in delivering engaging and effective digital learning experiences to private elementary and secondary schools across Nigeria. Our mission is to empower learners and educators by providing accessible, high-quality e-learning products. 
                </span>
            </div>

            <div>
                <span className='highlighter'>Position Overview:</span>
                <br/>
                <span>
                    We are seeking a dynamic and results-oriented E-Learning Sales Executive to join our team. The ideal candidate will have a passion for education technology and a proven track record in sales. This role involves identifying new business opportunities, building relationships with clients, and driving the adoption of our e-learning solutions in the market.
                    <br /><br /> 
                    <span className='highlighter'>Key Responsibilities:</span>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><span className='font-semibold'>Prospect and Develop Leads:</span> Identify and target potential clients, including primary, and secondary educational institutions that can benefit from our e-learning solutions.</li>
                        <li><span className='font-semibold'>Sales Presentations:</span> Conduct compelling product demonstrations and presentations to showcase the value and benefits of our e-learning offerings.</li>
                        <li><span className='font-semibold'>Relationship Management:</span> Build and maintain strong, long-lasting relationships with clients, understanding their needs and providing tailored solutions.</li>
                        <li><span className='font-semibold'>Achieve Sales Targets:</span> Meet and exceed monthly and termly sales goals, contributing to the overall growth of the company.</li>
                        <li><span className='font-semibold'>Market Research:</span> Stay informed about industry trends, competitor activities, and emerging opportunities to effectively position our products in the market.</li>
                        <li><span className='font-semibold'>Collaborate with Teams:</span> Work closely with the  product development, and customer support teams to ensure a seamless client experience and provide feedback for continuous improvement.</li>
                    </ul>
                </span>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Qualifications & Skills:</span>

                <div>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><span className='font-semibold'>Education:</span> Bachelor's degree or its equivalent in Business, Marketing, Education, or a related field.</li>
                        <li><span className='font-semibold'>Experience:</span> Minimum of 3 years of sales experience, preferably in the e-learning, education, or technology sectors.</li>
                        <li><span className='font-semibold'>Communication Skills:</span> Excellent verbal and written communication skills, with the ability to present complex information clearly and persuasively.</li>
                        <li><span className='font-semibold'>Sales Acumen:</span> Strong understanding of sales processes, negotiation techniques, and closing strategies.</li>
                        <li><span className='font-semibold'>Tech-Savvy:</span> Familiarity with digital and social media marketing, e-learning platforms, and other educational technologies is a plus.</li>
                        <li><span className='font-semibold'>Self-Motivated:</span> Ability to work independently, manage time effectively, and prioritize tasks in a fast-paced environment.</li>
                        <li><span className='font-semibold'>Travel:</span> Willingness to travel as needed to meet with clients and attend industry events.</li>
                    </ul>
                </div> 
            </div>

            <div className='line-breaker'></div>

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

            {/* <div className='line-breaker'></div> */}

            <div className='career-what-you-learn-title'>
                 <span className='paragraph-title'>Compensation Details:</span>
                <div>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><span className='font-semibold'>Base Remuneration: </span><span className='highlighter-big'><b>₦200,000</b></span> per month.</li>
                        <li><span className='font-semibold'>Marketing Reimbursement: </span>₦60,000 per month, disbursed in weekly installments of <span className='font-semibold'>₦15,000</span>. Payment is subject to a minimum of <span className='font-semibold'>two (2) sales units</span> per week.</li>
                        <li><span className='font-semibold'>Performance Bonus: </span>Earn an additional <span className='font-semibold'>17.5%</span> on each sale made beyond <span className='font-semibold'>10 units</span>.</li>
                    </ul>
                </div>
            </div>

            <div className='line-breaker'></div>

            <div className='career-what-you-learn-title'>
                 <span className='paragraph-title'>Other Benefits:</span>
                <div>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><span className='font-semibold'>Professional Development: </span>Regular training opportunities for skill enhancement and continuous career advancement within a dynamic and growing company.</li>
                    </ul>
                </div>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='highlighter font-semibold'>Probationary Period Policy:</span>
                <div>
                    This role includes a <span className='font-semibold'>6-month</span> probationary period. During this time, if you sell fewer than <span className='font-semibold'>10 units</span> in a month, your base salary will be temporarily suspended, and your earnings for that month will be limited to <span className='font-semibold'>17.5%</span> of your sales revenue.
                </div> 
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='highlighter'><b>How to Apply:</b></span>
                <div>
                    Interested candidates should fill out and submit their details using the application form below.
                </div> 
            </div>

            
            <div className='call-to-action' onClick={NavigateForm}>
                Kindly Submit your Details below if Interested.
            </div>

            <div className='career-other-hero-section-container'>
                <div className='text-center w-full'>
                    <p className='mb-3'>TreNova Group is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.</p>
                    <p className='font-semibold'>Join us in revolutionizing education through technology!</p>
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

export default CareerHeroSection4
