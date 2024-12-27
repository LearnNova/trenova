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
//   const [modulecollapse7, setModuleCollapse7] = useState(false);
//   const [modulecollapse8, setModuleCollapse8] = useState(false);

  return (
    <div>
        <div className='module-section-wrapper'>
            <div className='module-title'>Syallabus:</div>
            <div className='module-row'>
                <div className='module-info'>
                    <h3><span className='highlighter'>Module 1:</span> Life Skills Development</h3>
                    {/* <p>- Learning Points: Forty-five (45) points</p> */}
                    <p className={`three-dot ${modulecollapse1? "three-dot-gone":""}`}>...</p>

                    <ul className={`long-text ${modulecollapse1? "extended": ""}`}>
                        <li>Effective Communication and Presentation Skills.</li>
                        <li>Emotional Intelligence and Stress Management.</li>
                        <li>Time Management and Goal Setting.</li>
                        <li>Teamwork and Leadership.</li>
                    </ul>
                    
                    <button className='read-more-btn' onClick={() => setModuleCollapse1((prev) =>  !prev)}>{`${modulecollapse1? 'Read Less': 'Read More...'}`}</button>
                </div>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 2:</span> Professional Sales and Telemarketing Skills</h3>
                    {/* <p>- Learning Points: Forty-five (45) points</p> */}
                    <p className={`three-dot ${modulecollapse2? "three-dot-gone":""}`}>...</p>

                    <ul className={`long-text ${modulecollapse2? "extended": ""}`}>
                        <li>Basics of Telemarketing and Sales Psychology.</li>
                        <li>Customer Service and Relationship Management Skills.</li>
                        <li> The CRM Tools.</li>
                        <li>Branding and Product Positioning.</li>
                        <li>Sales Pitches and Negotiation Skills.</li>
                        <li>Handling Customer Objections.</li>
                        <li>Closing the Deal and Gaining Commitment.</li>
                        <li>Grant Award Project Commencement.</li>
                    </ul>

                    <button className='read-more-btn' onClick={() => setModuleCollapse2((prev) =>  !prev)}>{`${modulecollapse2? 'Read Less': 'Read More...'}`}</button>
                </div>


            </div>

            <div className='module-row'>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 3:</span> Digital Marketing</h3>
                    {/* <p>- Learning Points: Forty-five (45) points</p> */}
                    <p className={`three-dot ${modulecollapse3? "three-dot-gone":""}`}>...</p>

                    <ul className={`long-text ${modulecollapse3? "extended": ""}`}>
                        <li>Introduction to Digital Marketing.</li>
                        <li>Social Media Marketing (Facebook, Instagram, LinkedIn).</li>
                        <li>Search Engine Optimization (SEO).</li>
                        <li>Content Marketing and Blogging.</li>
                        <li>Email Marketing Strategies.</li>
                        <li>Analytics and Performance Tracking.</li>
                    </ul>

                    <button className='read-more-btn' onClick={() => setModuleCollapse3((prev) =>  !prev)}>{`${modulecollapse3? 'Read Less': 'Read More...'}`}</button>
                </div>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 4:</span> Web & App Development</h3>
                    {/* <p>- Learning Points: Forty-five (45) points</p> */}
                    <p className={`three-dot ${modulecollapse4? "three-dot-gone":""}`}>...</p>

                    <ul className={`long-text ${modulecollapse4? "extended": ""}`}>
                        <li>HTML, CSS, and JavaScript Basics.</li>
                        <li>Building Responsive Websites & App.</li>
                        <li>Introduction to WordPress and Content Management Systems.</li>
                        <li>Basic E-commerce Development.</li>
                        <li>Hosting, Domains, and Website Deployment.</li>
                        {/* <ul className='sub-module-list'>
                            <span style={{marginLeft: '-1em'}}>Method 1: Applying for Jobs Online</span>
                            <li>Step 1: Documents Required</li>
                            <li>Step 2: Job Websites</li>
                            <li>Step 3: How to Apply for Jobs through Online Job Platforms</li>
                        </ul> */}
                    </ul>

                    <button className='read-more-btn' onClick={() => setModuleCollapse4((prev) =>  !prev)}>{`${modulecollapse4? 'Read Less': 'Read More...'}`}</button>
                </div>
            </div>
            
            <div className='module-row'>

                <div className='module-info'>
                        <h3><span className='highlighter'>Module 5:</span> Entrepreneurship and Business Skills</h3>
                        {/* <p>- Learning Points: Forty-five (45) points</p> */}
                        <p className={`three-dot ${modulecollapse5? "three-dot-gone":""}`}>...</p>

                        <ul className={`long-text ${modulecollapse5? "extended": ""}`}>
                            <li>Ideation, Business Model Design and Business Planning.</li>
                            <li>Financial Literacy and Budgeting.</li>
                            <li>Market Research and Competitor Analysis.</li>
                            <li>Business Registration and Legal Compliance.</li>
                            <li>Fundraising and Pitching to Investors.</li>
                        </ul>

                        <button className='read-more-btn' onClick={() => setModuleCollapse5((prev) =>  !prev)}>{`${modulecollapse5? 'Read Less': 'Read More...'}`}</button>
                </div>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 6:</span> Virtual Assistant Skills and Tools</h3>
                    {/* <p>- Learning Points: Forty-five (45) points</p> */}
                    <p className={`three-dot ${modulecollapse6? "three-dot-gone":""}`}>...</p>

                    <ul className={`long-text ${modulecollapse6? "extended": ""}`}>
                        <li>Core Skills for a Successful Virtual Assistant Career</li>
                        <li>Key Responsibilities and Workload Management</li>
                        <li>How to Search for and Secure a Virtual Assistant Job</li>
                        <li>Service Processes and Reliability</li>
                        <li>Type of Jobs in High Demand</li>
                    </ul>

                    <button className='read-more-btn' onClick={() => setModuleCollapse6((prev) =>  !prev)}>{`${modulecollapse6? 'Read Less': 'Read More...'}`}</button>
                </div>
            </div>

            {/* <div className='module-row'>

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
            </div> */}

            <div id='apply-btn-1'>
                <div><button className='submit-btn' id='apply-btn' onClick={NavigateForm}>Apply Now</button></div>
            </div>
            
            <div className='line-breaker'></div>
            
            <div className='module-text-box'>
                <h1 className='highlighter'>Program Duration:</h1>
                <p><span className='highlighter'>4 - 6 Months</span> (Flexible schedule with 2 sessions per week).</p>
            </div>
            
            <div className='module-text-box'>
                <h1 className='highlighter'>Assessment and Certification:</h1>
                <ul className='module-text-box__list-box'>
                    <li>
                        <b>Participants will be assessed through:</b>
                        <ul className='module-text-box__list-box-inner-box'>
                            <li>Quizzes and assignments.</li>
                            <li>Practical project evaluations.</li>
                            <li>Final presentation of a business or project idea.</li>
                        </ul>
                    </li>
                    <li style={{listStyleType: 'none'}}>Certification will be provided upon successful completion of the program.</li>
                </ul>
            </div>

            <div className='module-text-box'>
                <h1 className='highlighter'>Implementation Framework:</h1>
                <ul className='module-text-box__list-box'>
                    <li>
                        <b>Partnerships</b>
                        <ul className='module-text-box__list-box-inner-box'>
                            <li>Collaborate with industry experts, NGOs, and government agencies.</li>
                        </ul>
                    </li>
                    <li>
                        <b>Delivery Format</b>
                        <ul className='module-text-box__list-box-inner-box'>
                            <li>Hybrid learning: Online and Real-life Virtual sessions.</li>
                        </ul>
                    </li>
                    <li>
                        <b>Monitoring and Evaluation</b>
                        <ul className='module-text-box__list-box-inner-box'>
                            <li>Regular feedback from participants.</li>
                            <li>Quarterly review of program impact.</li>
                        </ul>
                    </li>
                    <li>
                        <b>Sustainability</b>
                        <ul className='module-text-box__list-box-inner-box'>
                            <li>Establish an alumni network to support continuous learning and networking.</li>
                        </ul>
                    </li>
                    <li style={{listStyleType: 'none'}}>This framework ensures the program provides Nigerian youths with the tools, knowledge, and resources needed for lasting success.</li>
                </ul>
            </div>

            <div className='module-text-box'>
                <h1 className='highlighter'>Strategies for Raising Funds to Ensure Program Sustainability: </h1>
                <ul className='module-text-box__list-box'>
                    <li>
                        <b>Leveraging Profits from LearnNova</b> Learning Support and School Growth Services and affiliated businesses to sustain and grow programs.
                    </li>
                    <li>
                        <b>Offer Local Services:</b> Partner with local businesses by providing specialized services to generate income.
                    </li>
                    <li>
                        <b>Expand Through Outsourcing:</b> Utilize Business Process Outsourcing (BPO) services, such as virtual assistance, bookkeeping, web, and app development, to tap into foreign markets and boost revenue.
                    </li>
                    <li>
                        <b>Pursue Grants:</b> Seeking funding opportunities from local and international organizations to support programs.
                    </li>
                </ul>
            </div>

            <div className='module-text-box'>
                <h1 className='highlighter'>Business Grant Award:</h1>
                <p>To qualify for the award draw, a participant must achieve a minimum sales revenue of <span className='highlighter'>₦2 million</span> and have a scalable business model.</p>
                <p style={{marginTop: '0.5em'}}>The grant will be awarded as follows:</p>
                <ul className='module-text-box__list-box'>
                    <li>Gold Award: <span className='highlighter'>₦2 million</span></li>
                    <li>Silver Award: <span className='highlighter'>₦1.5 million</span></li>
                    <li>Bronze Award: <span className='highlighter'>₦1 million</span></li>
                    <li>Consolation Prizes: <span className='highlighter'>₦500k X 7</span></li>
                    <li>Employment Offer: to extremely successful participants.</li>
                </ul>
            </div>

            <div className='module-text-box'>
                <h1 className='highlighter'>How to Enter the Business Grant Award Draw:</h1>
                <p>For every <span className='highlighter'>2 sales</span> you make, you'll earn one ticket for the draw. The more tickets you accumulate, the higher your chances of winning the business grant!</p>
            </div>
        </div>
    </div>
  )
}

export default ModuleSection