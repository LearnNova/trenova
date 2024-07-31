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
                    <h3><span className='highlighter'>Module 1:</span> Professional Selling Skills for Shy & Introverted Individuals</h3>
                    <p>- Learning Points: Sixty (60) points</p>
                    <br />
                    <ul>
                        <li>Sales Planning and Event Management for Success in Selling</li>
                        <li>Developing the Characteristics of Sales Professionals</li>
                        <li>Sales Prospecting, Building Credibility, and Rapport with Prospects</li>
                        <li>Listening and Questioning Skills</li>
                        <li>Identifying Needs and Buying Signals</li>
                        <li>Presentation of Solutions</li>
                        <li>Sales Negotiation and Closing Techniques</li>
                        <li>Handling Customer Complaints and Overcoming Objections</li>
                        <li>Closing the Sale</li>
                    </ul>
                </div>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 2:</span> Professional Telemarketing Skills</h3>
                    <p>- Learning Points: Sixty (60) points</p>
                    <br />
                    <ul>
                        <li>Introduction to Telemarketing</li>
                        <li>Essential Professional Skills for a Successful Tele-sales Career</li>
                        <li>Event Planning and Management for Lead Generation</li>
                        <li>Mastering Telephone Engagement with Prospects</li>
                        <li>Developing Telemarketing Scripts and Presentations</li>
                        <li>Highlighting the Features and Benefits of Products and Services</li>
                        <li>Leads Conversion into Successful Sales with Persuasive Skills</li>
                        <li>Handling Objections and Closing the Sale</li>
                        <li>Follow-up and Relationship Building</li>
                        <li>Personalized Telemarketing Plan (Project)</li>
                    </ul>
                </div>


            </div>

            <div className='module-row'>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 3:</span> Professional Customer Service & Relationship Management Skills</h3>
                    <p>- Learning Points: Sixty (60) points</p>
                    <br />
                    <ul>
                        <li>The Basic Principles of Service and What Customers Want</li>
                        <li>Understanding Service, the Lifetime Value of a Customer, and the Service Concept</li>
                        <li>Offering Optimal Customer Experience and Managing the Service Outcome</li>
                        <li>Building Service Standards and Ensuring Customer Loyalty</li>
                        <li>What to Do When Things Go Wrong</li>
                        <li>The Value Perspective and the Ingredients of Value</li>
                        <li>Relationship Management Skills: Effective Communication, Respect and Tact, Positive Attitude, Empathy, Emotional Intelligence, Adaptability and Networking</li>
                        <li>The Cost of Poor Service and Developing a Personal Action Plan</li>
                    </ul>
                </div>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 4:</span> Business Growth Mentorship and Coaching Skills Development</h3>
                    <p>- Learning Points: Sixty (60) points</p>
                    <br />
                    <ul>
                        <li>Training and Summit Management</li>
                        <li>Survival Skills for the New Trainer and Using Activities to Make Training Engaging</li>
                        <li>Business Growth First Aid and Launchpad</li>
                        <li>Business Growth Blueprint</li>
                        <li>Talisman Business Growth Acceleration System</li>
                        <li>Business Growth Mentorship and Coaching System</li>
                        <li>Business Systemization and Consulting System</li>
                    </ul>
                </div>
            </div>
            
            <div className='module-row'>

                <div className='module-info'>
                        <h3><span className='highlighter'>Module 5:</span> Virtual Assistant Skills, Tools and How to Emigrate from Nigeria to Canada through Sponsored Jobs</h3>
                        <p>- Learning Points: Sixty (60) points</p>
                        <br />
                        <ul>
                            <li>Core Skills for a Successful Virtual Assistant Career</li>
                            <li>Key Responsibilities and Workload Management</li>
                            <li>How to Search for and Secure a Virtual Assistant Job</li>
                            <li>Service Processes and Reliability</li>
                            <li>Obtaining a Canadian Work Permit Visa</li>
                            <li>Emigrating through Sponsored Jobs</li>
                        </ul>
                </div>

                <div className='module-info'>
                        <h3><span className='highlighter'>Module 6:</span> Business Start-up and Entrepreneurship Skills Development</h3>
                        <p>- Learning Points: Sixty (60) points</p>
                        <br />
                        <ul>
                            <li>Idea Generation and Market Research</li>
                            <li>Opportunity Identification and Target Audience Selection</li>
                            <li>Business Model Design and Product Idea Testing</li>
                            <li>Business Growth and Value Innovation Strategies</li>
                            <li>Entrepreneurial Finance and Money Management</li>
                            <li>When and Where to Raise Capital and How to Structure Funding</li>
                            <li>How Much Money to Raise and Essential Accounting Practices</li>
                            <li>Business Management and Leadership Skills</li>
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