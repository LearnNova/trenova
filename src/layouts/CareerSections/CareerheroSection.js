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
                <span style={{marginLeft: '.3em'}}> Territory Sales Representative</span>
            </div>

            <div className='line-breaker'></div>

            <div>
                <span className='highlighter'>Employment Type:</span>
                <span style={{marginLeft: '.3em'}}> Remote</span>
            </div>

            <div>
                <span>About LearnNova Learning Support Centre:</span>
                <br/>
                <span>
                    At LearnNova, our success is driven by the commitment of our sales and relationship management 
                    teams. We are seeking motivated Territory Sales Representatives to enhance our market presence 
                    across key Nigerian cities by promoting our innovative products and services.
                </span>
            </div>

            <div>
                <span>Role Overview:</span>
                <br/>
                <span>
                    As a Territory Sales Representative, you will focus on enrolling private school owners in our school growth 
                    training, coaching, and mentorship programs, while also recruiting them as distributors for our 
                    Learning Support App. Ideal candidates will possess a passion for EdTech, a solid sales background, 
                    and the ability to thrive in a dynamic environment. You will manage:
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>Sales within your assigned territory,</li>
                        <li>Build lasting relationships,</li>
                        <li>Generate leads,</li>
                        <li>Engage prospects, and</li>
                        <li>Effectively manage multiple tasks to meet sales targets.</li>
                    </ul>
                    The following are the available designated cities:
                    <span className='highlighter'> Lagos MainLand</span>,<span className='highlighter'> Lagos Island</span>, 
                    <span className='highlighter'> Ikorodu</span>,<span className='highlighter'> Badagry</span>,
                    <span className='highlighter'> Epe</span>,<span className='highlighter'> Abeokuta</span>,
                    <span className='highlighter'> Ibadan</span>,<span className='highlighter'> Benin City</span>,
                    <span className='highlighter'> Warri</span>,<span className='highlighter'> Port Harcourt</span>,
                    <span className='highlighter'> Akure</span>, <span className='highlighter'>Ado-Ekiti</span>,
                    <span className='highlighter'> Enugu</span>, <span className='highlighter'> Owerri</span>,
                    <span className='highlighter'> Abuja</span>, <span className='highlighter'> Kaduna</span>,
                    <span className='highlighter'> Osogbo</span>, and <span className='highlighter'> Sango-Ota</span>.
                </span>
            </div>

            <div className='line-breaker'></div>

            <div className='career-other-hero-section-container'>
                <span className='paragraph-title'>Probationary Period:</span>

                <div>
                    During the initial <span className='highlighter'>3 to 6</span> months, your primary responsibilities 
                    will be:
                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li>Sell discounted virtual mentorship, coaching, and online training programs to private school owners, and</li>
                        <li>Recruit them as distributors for the Learning Support App.</li>
                    </ul> 
                    Compensation during this period is commission-based, at a rate of <span className='highlighter'>20.25%</span> on monthly sales revenue.
                </div> 
            </div>

            <div className='line-breaker'></div>

            <div className='career-what-you-learn-title'>
                 <span className='paragraph-title'>Post-Probation Compensation:</span>

                 <div>
                    After successfully enrolling <span className='highlighter'>50 school owners</span> in the 
                    mentorship, coaching, and training program, along with <span classname='highlighter'>3,000 students</span> in 
                    the Learning Support App, you will be offered a permanent position with the following benefits:

                    <ul className='career-what-you-learn-info-list-container-inner-list-container'>
                        <li><b>Base Salary: </b><span className='highlighter-big'><b>₦375,000.00</b></span> monthly.</li>
                        <li><b>Sales Commission: </b><span className='highlighter-big'><b>5.2%</b></span> monthly commission on any sales exceeding <span className='highlighter'>3,000</span> App Users.</li>
                        <li><b>Upon achieving </b><span className='highlighter-big'><b>4,800 App Users</b></span> , you will be <span className='highlighter'>promoted</span> to the position of <span className='highlighter'>Growth Executive</span> and your monthly remuneration will be increased to <span className='highlighter-big'><b>₦500,000.00</b></span>.</li>
                    </ul>
                    
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

                <div>
                    This role presents an exciting opportunity to be part of a growing EdTech company, helping 
                    schools enhance their services and boost their profitability.
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
