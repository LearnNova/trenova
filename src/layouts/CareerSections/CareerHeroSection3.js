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
                <span style={{marginLeft: '.3em'}}> Sales & Digital Marketing Specialist</span>

                {/* <div className='line-breaker'></div>

                <span className='highlighter'>Location:</span>
                <span style={{marginLeft: '.3em'}}> Remote/Flexible</span> */}
            </div>

            <div className='line-breaker'></div>

            <div>
                <span className='highlighter' style={{ textDecoration:'underline' }}>Location:</span>
                <span style={{ fontWeight: 600, marginLeft: '.6rem' }}> Remote / Flexible</span>

                <br /><br />

                <span className='highlighter' style={{ textDecoration:'underline' }}>Position Type:</span>
                <span style={{ fontWeight: 600, marginLeft: '.6rem' }}> Final Evaluation Phase Prior to Permanent Appointment</span>
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
                <span className='highlighter'>About the Role</span>
                <br/>
                <div>
                    <p>Are you a sales and digital marketing professional with a strong interest in education and technology? Join the <span className='font-semibold'>LearnNova Learning Support Centre</span>, a division of the <span className='font-semibold'>TreNova Group</span>, where we’re transforming private education through innovative digital learning solutions and strategic school growth programs.</p>
                    <p className='mt-2'>We’re looking for a results-driven <span className='font-semibold'>Sales and Digital Marketing Specialist</span> to spearhead the promotion and sales of our core offerings:</p>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container mt-2'>
                        <li>
                            <p>E-learning applications for school</p>
                            <a className='text-orange-500 hover:text-white hover:underline' href='https://www.learnnova.ng/schoolgrowthsystem/trenova'>👉 [View Product]</a>
                        </li>
                        <li>
                            <p>School growth consulting and mentorship program</p>
                            <a className='text-orange-500 hover:text-white hover:underline' href='https://www.learnnova.ng/MentorNigeria/trenova'>👉 [View Program]</a>
                        </li>
                        <li>
                            <p>Sales partner recruitment and engagement</p>
                            <a className='text-orange-500 hover:text-white hover:underline' href='https://www.learnnova.ng/schoolsupportpartner/trenova'>👉 [Learn More]</a>
                        </li>
                    </ul>

                    <p className='mt-2'>In this role, you’ll play a key part in generating qualified leads, driving conversions, and expanding our sales partner network through targeted, data-driven digital marketing strategies.</p>

                    {/* <br />

                    <p className='highlighter'>Key Offerings for Promotion and Revenue Generation</p>
                    <ul style={{listStyleType: 'decimal'}} className='list-decimal career-what-you-learn-info-list-container-inner-list-container'>
                        <li>
                            <span className='font-semibold block'>LearnNova Learning Support Applications</span>
                            <a className='hover:text-orange-500' href='https://www.learnnova.ng/schoolgrowthsystem/trenova'>👉 [View Product]</a>
                        </li>
                        <li>
                            <span className='font-semibold block'>Professional Training for Aspiring School Consultants and Mentors</span>
                            <a className='hover:text-orange-500' href='https://www.learnnova.ng/MentorNigeria/trenova'>👉 [View Program]</a>
                        </li>
                        <li>
                            <span className='font-semibold block'>School Support Sales Partner Recruitment</span>
                            <a className='hover:text-orange-500' href='https://www.learnnova.ng/schoolsupportpartner/trenova'>👉 [Learn More]</a>
                        </li> 
                    </ul> */}

                    <br />

                    <p className='highlighter'>Role Responsibilities:</p>
                    <p className='mb-2'>In this role, your key responsibilities will include:</p>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>Generating leads, closing sales, and expanding our network of sales partners through strategic digital marketing initiatives</li>
                        <li>Designing and executing high-converting digital campaigns to promote and sell LearnNova products</li>
                        <li>Driving lead generation, managing sales funnels, and exceeding monthly revenue targets</li>
                        <li>Crafting compelling content and visuals to communicate the value of our offerings</li>
                        <li>Recruiting and managing a network of independent sales partners</li>
                        <li>Monitoring and optimizing campaign performance using data and analytics</li>
                        <li>Staying current with industry trends, digital platforms, and marketing tools to ensure innovative strategies are applied</li>
                    </ul>
                </div>
            </div>

            <div className='space-y-2'>
                <span>Company Overview</span>
                <p>At <span className='font-semibold'>LearnNova Learning Support Centre</span>, a unit of TreNova Group, we’re committed to reshaping the future of private education in Nigeria. We provide high-impact e-learning solutions for elementary and secondary schools, and we train a new generation of school growth consultants and business mentors. Our mission is to equip educators, learners, and school leaders with affordable, accessible, and high-quality digital tools and professional development opportunities.</p>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Requirements:</span>

                <div>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>Minimum of 2 years’ experience in sales and digital marketing, ideally within the <span className='font-semibold'>edtech</span> or <span className='font-semibold'>e-learning</span> industry</li>
                        <li>Proven ability to generate leads and drive product sales</li>
                        <li>Experience in recruiting a distributed sales team or partners</li>
                        <li>Proficiency with tools such as <span className='font-semibold'>Google Analytics</span>, <span className='font-semibold'>Facebook Ads Manager</span>, and <span className='font-semibold'>email marketing platforms</span></li>
                        <li>Strong communication, analytical, and organizational skills</li>
                        <li>Degree or certification in <span className='font-semibold'>Marketing</span>, <span className='font-semibold'>Digital Communications</span>, or a related field is an advantage</li>
                    </ul>
                </div> 
            </div>

            <div className='line-breaker'></div>

            <div className='career-what-you-learn-title space-y-2'>
                 <p className='paragraph-title'>Compensation and Terms During Evaluation Period (First 3 Months)</p>
                 <p>As part of your onboarding, you will undergo a three-month evaluation period. During this probationary phase, your compensation will be based on performance, with the following terms:</p>
                 <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                    <li><span className='font-semibold'>Monthly Remuneration:</span> You will earn a commission of <span className='highlighter-big font-semibold'>14.85%</span> on your monthly sales revenue.</li>
                    <li><span className='font-semibold'>Marketing Reimbursement:</span> Up to <span className='highlighter-big font-semibold'>₦50,000</span> per month as reimbursement for approved marketing expenses, provided your monthly sales revenue reaches at least <span className='highlighter-big font-semibold'>₦350,000</span></li>
                 </ul>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container space-y-2'>
                 <p className='highlighter font-semibold'>Compensation Package Upon Confirmation</p>
                 <p>Upon successful completion of the evaluation period and confirmation into a substantive position, your compensation package will transition to the following structure:</p>
                 <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                    <li><span className='font-semibold'>Base Salary:</span><span className='highlighter-big font-semibold'> ₦200,000</span> per month (paid monthly, subject to statutory deductions)</li>
                    <li><span className='font-semibold'>Marketing Reimbursement:</span> Up to <span className='highlighter-big font-semibold'>₦50,000</span> per month for approved marketing-related expenses</li>
                    <li><span className='font-semibold'>Performance Bonus:</span> You will receive <span className='highlighter-big font-semibold'>17.5%</span> commission on all sales revenue exceeding <span className='highlighter-big font-semibold'>₦1,350,000</span> per month</li>
                 </ul> 
                 <p>Please note that all compensation and reimbursement terms are subject to the company’s policies and may be reviewed periodically.</p>
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
