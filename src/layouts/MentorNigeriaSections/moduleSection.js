import React, {useEffect, useState} from 'react'
// import { NavigateForm } from 'utils/navigateForm'
import './mentornigeria.css'

const ModuleSection = () => {
  const [modulecollapse, setModuleCollapse] = useState(0);
  const [subModuleCollapse, setSubModuleCollapse] = useState(0);

  useEffect(()=> {
    setSubModuleCollapse(0);
  }, [modulecollapse]);

  return (
    <div>
        <div className='module-section-wrapper'>
        <div className='module-title'>Syallabus:</div>
            <div className='module-row'>
                <div className='module-info'>
                    <h3><span className='highlighter'>Module 1:</span> Life Skills Development - <span className='highlighter'>(Compulsory)</span></h3>
                    {modulecollapse !== 1 && 
                        <p className="three-dot">...</p>
                    }

                    {modulecollapse === 1 &&
                    <ul className="long-text pl-5">
                       <li>Effective Communication and Presentation Skills.</li>
                       <li>Emotional Intelligence and Stress Management.</li>
                       <li>Time Management and Goal Setting.</li>
                       <li>Teamwork and Leadership.</li>
                    </ul> }

                    {modulecollapse === 1 ? 
                        <button className='read-more-btn' onClick={() => setModuleCollapse(0)}>
                            Read Less
                        </button> :
                        <button className='read-more-btn' onClick={() => setModuleCollapse(1)}>
                            Read More
                        </button>
                    }
                </div>

                <div className='module-info'>
                    <h3><span className='highlighter'>Module 2:</span> Professional Sales and Telemarketing Skills - <span className='highlighter'>(Compulsory)</span></h3>
                   {modulecollapse !== 2 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 2 &&
                        <ul className="long-text pl-5">
                            <li>Basics of Telemarketing and Sales Psychology.</li>
                            <li>Customer Service and Relationship Management Skills.</li>
                            <li>Developing Telemarketing Scripts & Mastering Prospects Engagement.</li>
                            <li>Branding and Product Positioning.</li>
                            <li>Sales Pitches and Negotiation Skills.</li>
                            <li>Handling Customer Objections.</li>
                            <li>Closing the Deal and Gaining Commitment.</li>
                            <li>Grant Award Project Commencement.</li>
                        </ul> 
                    }

                    {modulecollapse === 2 ? 
                        <button className='read-more-btn' onClick={() => setModuleCollapse(0)}>
                            Read Less
                        </button> :
                        <button className='read-more-btn' onClick={() => setModuleCollapse(2)}>
                            Read More
                        </button>
                    }
                </div>


            </div>

            <div className='module-row'>
                <div className='module-info'>
                <h3 className='text-center'><span className='highlighter'>Module 3:</span> <b>Choose One Elective Course</b></h3>

                        {modulecollapse !== 3 && 
                        <p className="three-dot">...</p>
                        }

                        {modulecollapse === 3 &&
                            <ul className="long-text pl-5">
                                <li style={{listStyleType: 'decimal'}}>
                                    <span className='highlighter'>Business Start-Up & Entrepreneurship</span> - Learn essential skills to successfully launch and grow a business - <span className='highlighter'>(Elective)</span>.
                                    <ul className='ml-3 mt-1'>
                                        <li>Idea Generation and Product Idea Testing.</li>
                                        <li>Market Research, Competitors Analysis, and Opportunity Identification,</li>
                                        <li>Target Audience Selection and Business Model Design.</li>
                                        <li>Financial Literacy, Budgeting, and Essential Accounting Practices.</li>
                                        <li>Fundraising and Pitching to Investors.</li>
                                        <li>Business Management and Leadership Skills.</li>
                                    </ul>
                                </li>

                                <li style={{listStyleType: 'decimal'}} className='mt-3'>
                                    <span className='highlighter'>Private School Growth Mentorship & Training</span> – Learn how to provide expert mentorship and training services to help private schools expand and thrive - <span className='highlighter'>(Elective)</span>.
                                    <ul className='ml-3 mt-1'>
                                        <li>Training & Coaching System.</li>
                                        <li>Strategies for Enhancing School Enrolment, Revenue and Profitability.</li>
                                        <li>School Branding Ideas and Team Development.</li>
                                        <li>School Marketing System.</li>
                                        <li>Private School Growth Mentorship Services.</li>
                                        <li>School Systemization System.</li>
                                    </ul>
                                </li>

                                <li style={{listStyleType: 'decimal'}} className='mt-3'>
                                    <span className='highlighter'>Profitable Moringa Farming & Processing</span> - Explore strategies for establishing a successful Moringa-based agribusiness - <span className='highlighter'>(Elective)</span>.
                                    <ul className='ml-3 mt-1'>
                                        <li>Market Research & Legal Requirements.</li>
                                        <li>Business Model - Decide whether to focus on selling fresh leaves, dried powder, seeds, oil, or value-added products.</li>
                                        <li>Land Preparation, Cultivation and Planting Methods.</li>
                                        <li>Harvesting & Post-Harvest Processing - Leaf Harvesting, Seed Harvesting, Drying, and Powder Processing.</li>
                                        <li>Product Development, Branding & Marketing.</li>
                                        <li>Scaling & Profitability Methodologies.</li>
                                    </ul>
                                </li>

                                {subModuleCollapse !== 3 && 
                                    <p className="three-dot mt-3 text-center">...</p>
                                }

                                {subModuleCollapse === 3 && 
                                <>
                                    <li style={{listStyleType: 'decimal'}} className='mt-3'>
                                        <span className='highlighter'>Virtual Assistant Success & High-Paying Job Strategies</span> - Master core skills to build a rewarding virtual assistant career - <span className='highlighter'>(Elective)</span>.
                                        <ul className='ml-3 mt-1'>
                                            <li>Core Skills for a Successful Virtual Assistant Career.</li>
                                            <li>Key Responsibilities and Workload Management.</li>
                                            <li>How to Search for and Secure a Virtual Assistant Job.</li>
                                            <li>Service Processes and Reliability.</li>
                                            <li>Type of Jobs in High Demand.</li>
                                        </ul>
                                    </li>

                                    <li style={{listStyleType: 'decimal'}} className='mt-3'>
                                        <span className='highlighter'>AI & Creative Economy: Prompt Engineering & Money-Making Ideas –</span> Discover innovative ways to leverage AI for financial success - <span className='highlighter'>(Elective)</span>.
                                        <ul className='ml-3 mt-1'>
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
                                </>}


                                {subModuleCollapse !== 3 &&
                                    <button className='read-more-btn mb-3' onClick={() => setSubModuleCollapse(3)}>
                                        Continue
                                    </button>
                                }

                            </ul>
                        }

                        {modulecollapse === 3 ? 
                            <button 
                            className='read-more-btn mx-auto' 
                            onClick={() => setModuleCollapse(0)}
                            >
                                Read Less
                            </button> :
                            <button 
                            className='read-more-btn mx-auto' 
                            onClick={() => setModuleCollapse(3)}
                            >
                                Read More
                            </button>
                        }
                </div>

                </div>

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
                        <b>Training Completion:</b> To gain full access to the two mandatory and one elective training sessions, participants must refer <b>three (3) schools</b> to the LearnNova Learning Support Service.
                    </li>
                    <li>
                        <b>Grant Award Draw Eligibility:</b> To qualify, participants must refer a total of <b>six (6) schools</b> to the LearnNova Learning Support Service — <b>three (3) additional schools</b> beyond the initial requirement for training program.
                    </li>
                </ul>
            </div>

            <div className='module-text-box'>
                <h1 className='highlighter'>Certification:</h1>
                <p>Participants who successfully complete <b>two core modules and one elective</b> will receive a certification. Additionally, they may become eligible for the <b>Business Grant Award Draw</b> and potential <b>full-time employment opportunities</b> with one of our partner organizations.</p>
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