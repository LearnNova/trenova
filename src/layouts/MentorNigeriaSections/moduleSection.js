import React, {useState} from 'react'
import { NavigateForm } from 'utils/navigateForm'
import './mentornigeria.css'

const ModuleSection = () => {
  const [modulecollapse1, setModuleCollapse1] = useState(false);
  const [modulecollapse2, setModuleCollapse2] = useState(false);
  const [modulecollapse3, setModuleCollapse3] = useState(false);
  const [modulecollapse4, setModuleCollapse4] = useState(false);
  const [modulecollapse5, setModuleCollapse5] = useState(false);
  const [modulecollapse6, setModuleCollapse6] = useState(false);
  const [modulecollapse7, setModuleCollapse7] = useState(false);
  const [modulecollapse8, setModuleCollapse8] = useState(false);

  return (
    <div>
        <div className='module-section-wrapper'>
            <div className='module-title'>What you will Learn:</div>
            <div className='module-row'>
                <div className='module-info'>
                    <h3><span className='highlighter'>Module 1:</span> Professional Selling Skills for Shy & Introverted Individuals</h3>
                    <p>- Learning Points: Forty-five (45) points</p>
                    <p className={`three-dot ${modulecollapse1? "three-dot-gone":""}`}>...</p>

                    <ul className={`long-text ${modulecollapse1? "extended": ""}`}>
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
                    
                    <button className='read-more-btn' onClick={() => setModuleCollapse1((prev) =>  !prev)}>{`${modulecollapse1? 'Read Less': 'Read More...'}`}</button>
                </div>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 2:</span> Professional Telemarketing Skills</h3>
                    <p>- Learning Points: Forty-five (45) points</p>
                    <p className={`three-dot ${modulecollapse2? "three-dot-gone":""}`}>...</p>

                    <ul className={`long-text ${modulecollapse2? "extended": ""}`}>
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

                    <button className='read-more-btn' onClick={() => setModuleCollapse2((prev) =>  !prev)}>{`${modulecollapse2? 'Read Less': 'Read More...'}`}</button>
                </div>


            </div>

            <div className='module-row'>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 3:</span> Professional Customer Service & Relationship Management Skills</h3>
                    <p>- Learning Points: Forty-five (45) points</p>
                    <p className={`three-dot ${modulecollapse3? "three-dot-gone":""}`}>...</p>

                    <ul className={`long-text ${modulecollapse3? "extended": ""}`}>
                        <li>The Basic Principles of Service and What Customers Want</li>
                        <li>Understanding Service, the Lifetime Value of a Customer, and the Service Concept</li>
                        <li>Offering Optimal Customer Experience and Managing the Service Outcome</li>
                        <li>Building Service Standards and Ensuring Customer Loyalty</li>
                        <li>What to Do When Things Go Wrong</li>
                        <li>The Value Perspective and the Ingredients of Value</li>
                        <li>Relationship Management Skills: Effective Communication, Respect and Tact, Positive Attitude, Empathy, Emotional Intelligence, Adaptability and Networking</li>
                        <li>The Cost of Poor Service and Developing a Personal Action Plan</li>
                    </ul>

                    <button className='read-more-btn' onClick={() => setModuleCollapse3((prev) =>  !prev)}>{`${modulecollapse3? 'Read Less': 'Read More...'}`}</button>
                </div>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 4:</span> Virtual Assistant Skills, Tools and How to Emigrate from Nigeria to Canada through Sponsored Jobs</h3>
                    <p>- Learning Points: Forty-five (45) points</p>
                    <p className={`three-dot ${modulecollapse4? "three-dot-gone":""}`}>...</p>

                    <ul className={`long-text ${modulecollapse4? "extended": ""}`}>
                        <li>Core Skills for a Successful Virtual Assistant Career</li>
                        <li>Key Responsibilities and Workload Management</li>
                        <li>How to Search for and Secure a Virtual Assistant Job</li>
                        <li>Service Processes and Reliability</li>
                        <li>Emigrating through Sponsored Jobs</li>
                        <li>Type of Jobs in High Demand</li>
                        <li>Requirements for a Work Permit</li>
                        <li>Understanding the Work Permit Process</li>
                        <li>Getting Canada Work Permit Without an Agent:</li>

                        <ul className='sub-module-list'>
                            <span style={{marginLeft: '-1em'}}>Method 1: Applying for Jobs Online</span>
                            <li>Step 1: Documents Required</li>
                            <li>Step 2: Job Websites</li>
                            <li>Step 3: How to Apply for the Jobs through Online Job Platforms</li>
                        </ul>

                        <ul className='sub-module-list'>
                            <span style={{marginLeft: '-1em'}}>Method 2: Visiting Canada on a Visitor Visa</span>
                            <li>Step 1: How to Apply for a Visitor Visa</li>
                            <li>Step 2: When you Arrived in Canada</li>
                            <li>Step 3: Steps to Applying for Jobs in Person</li>
                            <li>Step 4: What to do when Job Offer is Secured</li>
                        </ul>

                    </ul>

                    <button className='read-more-btn' onClick={() => setModuleCollapse4((prev) =>  !prev)}>{`${modulecollapse4? 'Read Less': 'Read More...'}`}</button>
                </div>
            </div>
            
            <div className='module-row'>

                <div className='module-info'>
                        <h3><span className='highlighter'>Module 5:</span> Prompt Engineering with ChatGPT & Branding </h3>
                        <p>- Learning Points: Forty-five (45) points</p>
                        <p className={`three-dot ${modulecollapse5? "three-dot-gone":""}`}>...</p>

                        <ul className={`long-text ${modulecollapse5? "extended": ""}`}>
                            <li>Prompt Engineering Explained </li>
                            <li>Prompt Framework & Custom Instructions</li>
                            <li>Prompt Priming, Iteration & 0-1-Few Shot</li>
                            <li>Output Templates, Step-by-Step & Act As</li>
                            <li>Perspectives, 4th Grade & Follow-up Questions</li>
                            <li>Tabular Format, Comparisons, Critique Me & Critique Yourself</li>
                            <li>Teach Me, Write Like Me, Ask for Advice & Laddering</li>
                            <li>Advanced Prompt Engineering & Fine Tuning</li>
                            <li>Branding vs Marketing</li>
                            <li>Why You Need a Brand Strategy & The Structure of Branding</li>
                            <li>The Importance of Purpose, Purpose Examples & Your Purpose</li>
                            <li>The Importance of Vision, Vision Examples & Your Vision</li>
                            <li>The Importance of Mission, Mission Examples & Your Mission</li>
                            <li>The Importance of Values, Values Examples & Your Values</li>
                            <li>Who Are Your Competitors?</li>
                            <li>What Makes You Different & Differentiator Examples</li>
                            <li>The Importance of Positioning & Your Positioning Statement</li>
                            <li>What Is Brand Personality</li>
                            <li>Define Your Brand Personality & Find Your Brand Voice</li>
                            <li>The Power of Brand Storytelling & How to Tell Your Brand Story</li>
                            <li>Name Your Brand & Create Your Tagline</li>
                            <li>Your Brand Colors, Your Brand Fonts, Brand Logo Types & Your Brand Logo </li>
                        </ul>

                        <button className='read-more-btn' onClick={() => setModuleCollapse5((prev) =>  !prev)}>{`${modulecollapse5? 'Read Less': 'Read More...'}`}</button>
                </div>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 6:</span> Business Growth Mentorship and Coaching Skills Development</h3>
                    <p>- Learning Points: Forty-five (45) points</p>
                    <p className={`three-dot ${modulecollapse6? "three-dot-gone":""}`}>...</p>

                    <ul className={`long-text ${modulecollapse6? "extended": ""}`}>
                        <li>Training and Summit Management</li>
                        <li>Survival Skills for the New Trainer and Using Activities to Make Training Engaging</li>
                        <li>Business Growth First Aid and Launchpad</li>
                        <li>Business Growth Blueprint</li>
                        <li>Talisman Business Growth Acceleration System</li>
                        <li>Business Growth Mentorship and Coaching System</li>
                        <li>Business Systemization and Consulting System</li>
                    </ul>

                    <button className='read-more-btn' onClick={() => setModuleCollapse6((prev) =>  !prev)}>{`${modulecollapse6? 'Read Less': 'Read More...'}`}</button>
                </div>
            </div>

            <div className='module-row'>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 7:</span> Freelancing as a Strategy for Income Generation </h3>
                    <p>- Learning Points: Forty-five (45) points</p>
                    <p className={`three-dot ${modulecollapse7? "three-dot-gone":""}`}>...</p>

                    <ul className={`long-text ${modulecollapse7? "extended": ""}`}>
                        <li>Freelance on UpWork Introduction</li>
                        <li>How to Get Approved</li>
                        <li>Create a Specialized Profile</li>
                        <li>Importance of Profile Photo</li>
                        <li>Profile Title Keywords</li>
                        <li>Choose a Profile Rate</li>
                        <li>Write Your Profile Overview & Use an Intro Video</li>
                        <li>Set Availability & Set Languages</li>
                        <li>Add Education & Work History</li>
                        <li>Create Your Portfolio, Select Skills & Expertise</li>
                        <li>Pre-packaged Projects & Testimonials</li>
                        <li>Certifications & Employment History</li>
                        <li>How to Find Qualified Jobs</li>
                        <li>Submit a Proposal & Write a Cover Letter</li>
                        <li>Proposal From Client's Perspective & Badge Criteria</li>
                    </ul>

                    <button className='read-more-btn' onClick={() => setModuleCollapse7((prev) =>  !prev)}>{`${modulecollapse7? 'Read Less': 'Read More...'}`}</button>
                </div>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 8:</span> Business Start-up and Entrepreneurship Skills Development</h3>
                    <p>- Learning Points: Forty-five (45) points</p>
                    <p className={`three-dot ${modulecollapse8? "three-dot-gone":""}`}>...</p>

                    <ul className={`long-text ${modulecollapse8? "extended": ""}`}>
                        <li>Idea Generation and Market Research</li>
                        <li>Opportunity Identification and Target Audience Selection</li>
                        <li>Business Model Design and Product Idea Testing</li>
                        <li>Business Growth and Value Innovation Strategies</li>
                        <li>Entrepreneurial Finance and Money Management</li>
                        <li>When and Where to Raise Capital and How to Structure Funding</li>
                        <li>How Much Money to Raise and Essential Accounting Practices</li>
                        <li>Business Management and Leadership Skills</li>
                    </ul>

                    <button className='read-more-btn' onClick={() => setModuleCollapse8((prev) =>  !prev)}>{`${modulecollapse8? 'Read Less': 'Read More...'}`}</button>
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