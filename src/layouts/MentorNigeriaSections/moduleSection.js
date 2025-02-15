import React, {useState} from 'react'
// import { NavigateForm } from 'utils/navigateForm'
import './mentornigeria.css'

const ModuleSection = () => {
  const [modulecollapse, setModuleCollapse] = useState(null);
  const [modulecollapse2, setModuleCollapse2] = useState(false);
  const [modulecollapse3, setModuleCollapse3] = useState(false);
//   const [modulecollapse4, setModuleCollapse4] = useState(false);
//   const [modulecollapse5, setModuleCollapse5] = useState(false);
//   const [modulecollapse6, setModuleCollapse6] = useState(false);
//   const [modulecollapse7, setModuleCollapse7] = useState(false);
//   const [modulecollapse8, setModuleCollapse8] = useState(false);

  return (
    <div>
        <div className='module-section-wrapper'>
            <div className='module-title'>Syallabus:</div>

            <div className='module-row'>
                <div className='module-info'>
                    <h3><span className='highlighter'>Module 1:</span> Life Skills Development - <span className='highlighter'>(Compulsory)</span></h3>
                    {/* <p className='highlighter'>(Compulsory)</p> */}
                    {modulecollapse === 0 && 
                        <p className="three-dot">...</p>
                    }
                    {/* <p className={`three-dot ${modulecollapse1? "three-dot-gone":""}`}>...</p> */}
                    
                    {modulecollapse === 1 &&
                    <ul className="long-text">
                       <li>Effective Communication and Presentation Skills.</li>
                       <li>Emotional Intelligence and Stress Management.</li>
                       <li>Time Management and Goal Setting.</li>
                       <li>Teamwork and Leadership.</li>
                    </ul> }
                    
                    
                    <button className='read-more-btn' onClick={() => setModuleCollapse(1)}>
                        {modulecollapse === 0 ? 
                         'Read More' : 
                         'Read Less'
                         }
                        {/* {`${modulecollapse === 0 ? 'Read Less': 'Read More...'}`} */}
                    </button>
                </div>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 2:</span> Professional Sales and Telemarketing Skills - <span className='highlighter'>(Compulsory)</span></h3>
                    {/* <p className='highlighter'>(Compulsory)</p> */}
                    <p className={`three-dot ${modulecollapse2? "three-dot-gone":""}`}>...</p>

                    <ul className={`long-text ${modulecollapse2? "extended": ""}`}>
                        <li>Basics of Telemarketing and Sales Psychology.</li>
                        <li>Customer Service and Relationship Management Skills.</li>
                        <li>Developing Telemarketing Scripts & Mastering Prospects Engagement.</li>
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
                        <h3 className='text-center'><span className='highlighter'>Module 3:</span> <b>Choose One Elective Course</b></h3>
                        {/* <p className='highlighter'>(Elective)</p> */}
                        <p className={`three-dot ${modulecollapse3? "three-dot-gone":""}`}>...</p>


                        <ul className={`long-text ${modulecollapse3? "extended": ""}`}>
                            <li style={{listStyleType: 'decimal'}}>
                                <b>Business Start-Up & Entrepreneurship –</b> Learn essential skills to successfully launch and grow a business.
                                <ul className='ml-3'>
                                    <li>Idea Generation and Product Idea Testing.</li>
                                    <li>Market Research, Competitors Analysis, and Opportunity Identification,</li>
                                    <li>Target Audience Selection and Business Model Design.</li>
                                    <li>Financial Literacy, Budgeting, and Essential Accounting Practices.</li>
                                    <li>Fundraising and Pitching to Investors.</li>
                                    <li>Business Management and Leadership Skills.</li>
                                </ul>
                            </li>

                            <li style={{listStyleType: 'decimal'}}>
                                <b>Private School Growth Mentorship & Training –</b> Learn how to provide expert mentorship and training services to help private schools expand and thrive.
                                <ul className='ml-3 mt-2'>
                                    <li>Training & Coaching System.</li>
                                    <li>Strategies for Enhancing School Enrolment, Revenue and Profitability.</li>
                                    <li>School Branding Ideas and Team Development.</li>
                                    <li>School Marketing System.</li>
                                    <li>Private School Growth Mentorship Services.</li>
                                    <li>School Systemization System.</li>
                                </ul>
                            </li>

                            <li style={{listStyleType: 'decimal'}}>
                                <b>Profitable Moringa Farming & Processing –</b> Explore strategies for establishing a successful Moringa-based agribusiness.
                                <ul className='ml-3 mt-2'>
                                    <li>Market Research & Legal Requirements.</li>
                                    <li>Business Model - Decide whether to focus on selling fresh leaves, dried powder, seeds, oil, or value-added products.</li>
                                    <li>Land Preparation, Cultivation and Planting Methods.</li>
                                    <li>Harvesting & Post-Harvest Processing - Leaf Harvesting, Seed Harvesting, Drying, and Powder Processing.</li>
                                    <li>Product Development, Branding & Marketing.</li>
                                    <li>Scaling & Profitability Methodologies.</li>
                                </ul>
                            </li>

                            <li style={{listStyleType: 'decimal'}}>
                                <b>Virtual Assistant Success & High-Paying Job Strategies –</b> Master core skills to build a rewarding virtual assistant career.
                                <ul className='ml-3 mt-2'>
                                    <li>Core Skills for a Successful Virtual Assistant Career.</li>
                                    <li>Key Responsibilities and Workload Management.</li>
                                    <li>How to Search for and Secure a Virtual Assistant Job.</li>
                                    <li>Service Processes and Reliability.</li>
                                    <li>Type of Jobs in High Demand.</li>
                                </ul>
                            </li>

                            <li style={{listStyleType: 'decimal'}}>
                                <b>AI & Creative Economy: Prompt Engineering & Money-Making Ideas –</b> Discover innovative ways to leverage AI for financial success.
                                <ul className='ml-3 mt-2'>
                                    <li>Prompt Engineering Explained.</li>
                                    <li>Advanced Prompt Engineering & Fine Tuning.</li>
                                    <li>Prompt Framework & Custom Instructions.</li>
                                    <li>Teach Me, Write Like Me, Ask for Advice & Laddering.</li>
                                    <li>Be a Freelance Ad Creative.</li>
                                    <li>Offer Freelance Event Planning Services.</li>
                                    <li>Be a Freelance Ad Creative.</li>
                                    <li>ChatGPT – Powered App Development.</li>
                                </ul>
                            </li>

                        </ul>

                        <button className='read-more-btn' onClick={() => setModuleCollapse3((prev) =>  !prev)}>{`${modulecollapse3? 'Read Less': 'Read More...'}`}</button>
                </div>

                {/* <div className='module-info'>
                    <h3><span className='highlighter'>2. </span><b>Private School Growth Mentorship & Training –</b> Learn how to provide expert mentorship and training services to help private schools expand and thrive - <span className='highlighter'>(Elective)</span></h3>
                    <p className='highlighter'>(Elective)</p>
                    <p className={`three-dot ${modulecollapse4? "three-dot-gone":""}`}>...</p>

                    <ul className={`long-text ${modulecollapse4? "extended": ""}`}>
                        <li>Training & Coaching System</li>
                        <li>Strategies for Enhancing School Enrolment, Revenue and Profitability</li>
                        <li>School Branding Ideas and Team Development</li>
                        <li>School Marketing System</li>
                        <li>Private School Growth Mentorship Service</li>
                        <li>School Systemization System</li>
                    </ul>

                    <button className='read-more-btn' onClick={() => setModuleCollapse4((prev) =>  !prev)}>{`${modulecollapse4? 'Read Less': 'Read More...'}`}</button>
                </div> */}

            </div>

            {/* <div className='module-row'>

                <div className='module-info'>
                <h3><span className='highlighter'>2. </span><b>Private School Growth Mentorship & Training –</b> Learn how to provide expert mentorship and training services to help private schools expand and thrive - <span className='highlighter'>(Elective)</span></h3>
                    <p className='highlighter'>(Elective)</p>
                    <p className={`three-dot ${modulecollapse5? "three-dot-gone":""}`}>...</p>

                    <ul className={`long-text ${modulecollapse5? "extended": ""}`}>
                        <li>Core Skills for a Successful Virtual Assistant Career</li>
                        <li>Key Responsibilities and Workload Management</li>
                        <li>How to Search for and Secure a Virtual Assistant Job</li>
                        <li>Service Processes and Reliability</li>
                        <li>Type of Jobs in High Demand</li>
                    </ul>

                    <button className='read-more-btn' onClick={() => setModuleCollapse5((prev) =>  !prev)}>{`${modulecollapse5? 'Read Less': 'Read More...'}`}</button>
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

            {/* <div id='apply-btn-1'>
                <div><button className='submit-btn' id='apply-btn' onClick={NavigateForm}>Apply Now</button></div>
            </div> */}
            <div className='apply-now-get-started'><a href='#application-form-section'> <span className='highlighter'>Apply Now</span> to Get Started!</a> </div>
            
            <div className='line-breaker'></div>
            
            <div className='module-text-box'>
                <h1 className='highlighter'>Program Duration:</h1>
                <p><span className='highlighter'>3 - 4 Months</span> (Flexible schedule with 1 - 2 sessions per week).</p>
            </div>
            
            <div className='module-text-box'>
                <h1 className='highlighter'>Assessment and Qualification Criteria:</h1>
                <ul className='module-text-box__list-box'>
                    <li>
                        <b>Evaluation Methods:</b>
                        <ul className='module-text-box__list-box-inner-box'>
                            <li>Quizzes and assignments.</li>
                            <li>Practical project assessments.</li>
                            <li>Final presentation of a business or project idea.</li>
                        </ul>
                    </li>
                    <li style={{marginBottom: '0.5em'}}>
                        <b>Training Completion:</b> To gain full access to all training sessions, participants must refer <b>three (3) schools</b> to the LearnNova Learning Support Service.
                    </li>
                    <li>
                        <b>Eligibility for Grant Award Draw:</b> To qualify for the Grant Award Draw, participants must refer <b>two (2) schools</b> to the LearnNova Learning Support Service.
                    </li>
                </ul>
            </div>

            <div className='module-text-box'>
                <h1 className='highlighter'>Certification:</h1>
                <p>Participants who successfully complete <b>two core modules and one elective</b> will receive a certification. Additionally, they may become eligible for the <b>Business Grant Award Draw</b> and potential <b>full-time employment opportunities</b> with one of our partner organizations.</p>
            </div>

            <div className='module-text-box'>
                <h1 className='highlighter'>Delivery Format:</h1>
                <p>Hybrid Learning: Online and Real-life Virtual sessions.</p>
            </div>

            <div className='apply-now-get-started'><a href='#application-form-section'> <span className='highlighter'>Apply Now</span> to Get Started!</a> </div>

        </div>
    </div>
  )
}

export default ModuleSection