import React from 'react'
import { NavigateForm } from 'utils/navigateForm'
import './mentornigeria.css'

const ModuleSection = () => {
  return (
    <div>
        <div className='module-section-wrapper'>
            <div className='module-title'>What you will Learn:</div>
            <div className='module-row'>
                <div className='module-info'>
                    <h3><span className='highlighter'>Module 1:</span> Professional Selling Skills for a Shy and Introverted Person.</h3>
                    <p>- Learning Points: Fifty (50) points</p>
                    <br />
                    <ul>
                        <li>Using Telephone and Event Management for Success in Selling.</li>
                        <li>Sales Prospecting, Rapport and Trust Building Strategies.</li>
                        <li>Sales Negotiation and Closing Technique.</li>
                        <li>Must-Have Professional Skills for a Successful Telesales Career.</li>
                        <li>The Telephone Marketing Script.</li>
                        <li>Handling Customer Complaints and Overcoming Objections.</li>
                    </ul>
                </div>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 2:</span> Professional Customer Success and Customer Service Skills.</h3>
                    <p>- Learning Points: Fifty (50) points</p>
                    <br />
                    <ul>
                        <li>The Basic Principles of Service and What Customers Want.</li>
                        <li>Understanding Service, the Lifetime Value of a Customer and the Service Concept.</li>
                        <li>Offering Optimal Customer Experience and Managing the Service Outcome.</li>
                        <li>Building Service Standards and Making Customers Loyal.</li>
                        <li>What to do When Things go Wrong.</li>
                        <li>The Value Perspective and the Ingredients of Value.</li>
                        <li>Customer Service Process, Competence, Communication, Speed, Responsiveness, Friendliness and Reliability.</li>
                        <li>The Cost of Poor Service and a Personal Action Plan.</li>
                    </ul>
                </div>


            </div>

            <div className='module-row'>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 3:</span> Business Growth Mentorship and Coaching Skills Development.</h3>
                    <p>- Learning Points: Fifty (50) points</p>
                    <br />
                    <ul>
                        <li>Training and Summit Management.</li>
                        <li>Business Growth First Aid and Launchpad.</li>
                        <li>Business Growth Blueprint.</li>
                        <li>Talisman Business Growth Acceleration System.</li>
                        <li>Business Growth Mentorship and Coaching System.</li>
                        <li>Business Growth Consulting System.</li>
                        <li>Survival Skills for the New Trainer and using Activities to Make Training Fun.</li>
                    </ul>
                </div>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 4:</span> Virtual Assistant Skills, Tools and How to Emigrate from Nigeria to Canada through Sponsored Jobs.</h3>
                    <p>- Learning Points: Fifty (50) points</p>
                    <br />
                    <ul>
                        <li>Core Skills for a Successfull Career.</li>
                        <li>Workload Management.</li>
                        <li>How to Search for and Secure a Virtual Assistant Job.</li>
                        <li>Service Processes and Reliability.</li>
                        <li>Obtaining a Canadian Work Permit Visa.</li>
                        <li>Emigrating through Sponsored Jobs.</li>
                    </ul>
                </div>
            </div>
            
            <div className='module-row'>

                <div className='module-info'>
                        <h3><span className='highlighter'>Module 5:</span> Business Start-up and Entrepeneurship Skills Development Training.</h3>
                        <p>- Learning Points: Fifty (50) points</p>
                        <br />
                        <ul>
                            <li>Idea Generation and Market Research.</li>
                            <li>Opportunity Identification and Target Audience Selection.</li>
                            <li>Business Model Design and Product Idea Testing.</li>
                            <li>Business Growth and Value Innovation Strategies.</li>
                            <li>Entrepeneurial Finance and Money Management.</li>
                            <li>When and Where to Raise Capital and How to Structure Funding.</li>
                            <li>How much Money to Raise and Accounting Books You Must Keep.</li>
                            <li>Business Management and Leadership Skills.</li>
                        </ul>
                    </div>
            </div>

            <div id='apply-btn-1'>
            <div><button className='submit-btn' id='apply-btn' onClick={NavigateForm}>Apply Now</button></div>
          </div>
        </div>
    </div>
  )
}

export default ModuleSection