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
                <span style={{marginLeft: '.3em'}}> Social Media Marketer</span>

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
                <span>About Us:</span>
                <br/>
                <span>
                    We are a forward-thinking learning support and training business dedicated to helping 
                    private elementary and secondary schools and learning institutions thrive. As we 
                    continue to grow, we are seeking a talented and results-oriented Social Media Marketer 
                    to enhance our online presence, drive engagement and improve sales in our niche market. 
                </span>
            </div>

            <div>
                <span className='highlighter'>Role Overview:</span>
                <br/>
                <span>
                    We’re looking for a creative Social Media Marketer to develop and execute strategies 
                    that elevate brand awareness, foster engagement, generate quality leads, and drive 
                    sales. If you have a passion for crafting impactful digital campaigns and creating 
                    content that resonates, we’d love to have you on board.
                    <br /><br /> 
                    <span className='highlighter'>Key Responsibilities:</span>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>Design and implement social media strategies that align with company goals.</li>
                        <li>Create and manage engaging content for platforms including Facebook, Instagram, LinkedIn, and Twitter.</li>
                        <li>Plan and manage social media campaigns to drive lead generation and conversions.</li>
                        <li>Analyze campaign performance and optimize strategies for improved ROI.</li>
                        <li>Build and nurture audience relationships by promptly responding to comments and messages.</li>
                        <li>Stay updated on the latest trends, tools, and best practices in social media and digital marketing.</li>
                        <li>Collaborate with the team to align social media efforts with overall marketing campaigns.</li>
                    </ul>
                </span>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Qualifications:</span>

                <div>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>Proven experience in social media marketing, ideally within the education or training sector.</li>
                        <li>Strong understanding of social media platforms, analytics tools, and advertising techniques.</li>
                        <li>Exceptional communication skills with the ability to convert leads into paying customers..</li>
                        <li>Creative flair for designing visually appealing graphics and multimedia content.</li>
                        <li>Hands-on experience with advertising platforms like Facebook Ads Manager.</li>
                        <li>Excellent multitasking and time management skills in a fast-paced environment. </li>
                        <li>Bonus: Knowledge of SEO and content marketing strategies.</li>
                    </ul>
                </div> 
            </div>

            <div className='line-breaker'></div>

            <div className='career-what-you-learn-title'>
                 <span className='paragraph-title'>What we Offer:</span>

                <div>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>Competitive remuneration package.</li>
                        <li>Flexible working hours in a remote-friendly environment.</li>
                        <li>Opportunities to work with a supportive and innovative team.</li>
                        <li>Professional growth in a thriving niche industry.</li>
                    </ul>
                    {/* <div>
                        <span className='paragraph-title'>Important Note:</span>
                        <p>
                            In the event that your monthly sales fall below <span className='highlighter-big'><b>9 unit</b></span> or <span className='highlighter-big'><b>₦890,000</b></span>, the 
                            base salary will be temporarily suspended. In this case, total compensation will be 
                            limited at <span className='highlighter-big'><b>15.5%</b></span> of the monthly 
                            sales revenue.
                        </p>
                    </div> */}
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

            <div className='career-what-you-learn-title'>
                 <span className='paragraph-title'>Compensation Details:</span>
                <div>
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><b>Base Salary: </b><span className='highlighter-big'><b>₦200,000</b></span> per month.</li>
                        <li><b>Marketing Reimbursable: </b><span className='highlighter-big'><b>₦40,000</b></span> per month.</li>
                        <li><b>Performance Bonus: </b>Earn an extra <span className='highlighter-big'><b>₦20,000</b></span> for each sale made beyond <b>10 units</b>.</li>
                    </ul>
                </div>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='highlighter'><b>Probationary Period Policy:</b></span>
                <div>
                    If you sell fewer than 9 units in a month, your base salary will be temporarily 
                    suspended. Instead, your total compensation for that month will be limited 
                    to <span className='highlighter-big'>17.5%</span> of your sales revenue.
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
                    <i>We can’t wait to welcome you to our team!</i>
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
