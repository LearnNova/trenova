import React, { useState } from 'react'
// import { NavigateForm } from 'utils/navigateForm'
import './mentornigeria.css'

const ModuleSection = () => {
  const [showProgramCurriculum, setShowProgramCurriculum] = useState(false);
  const [modulecollapse, setModuleCollapse] = useState(0);

  return (
    <div>
        <div className='module-section-wrapper'>
            <div style={{fontSize: '0.35em'}} className='text-left'>
                <p className='text-inherit font-semibold text-[#FA8806]'>Training Venue:</p>
                <p className='text-inherit'>Attend the training live at TreNova Training Centre, 7B Ogunsiji Close, Off Ogunmodede Street, Behind GTBank, Allen, Ikeja</p>
                <p className='font-semibold text-inherit'>— OR Join Virtually from Anywhere.</p>
            </div>
            <div className='line-breaker'></div>
            {
                showProgramCurriculum && (
                    <>
                        <div className='module-title mt-3'>📘 Program Curriculum</div>

                        <div className='module-row'>
                            <div className='module-info'>
                                <h3 className='highlighter'>🔹 Module 1: Foundations of School Growth Consulting</h3>
                                {modulecollapse !== 1 && 
                                    <p className="three-dot">...</p>
                                }

                                {modulecollapse === 1 &&
                                    <div className='long-text'>
                                        <p className='mb-4 italic'>Build your foundation as a trusted education consultant.</p>
                                        <p className='mb-2 font-semibold'>What You'll Learn:</p>
                                        <ul className="pl-2" style={{listStyleType: 'none'}}>
                                            <li>✔ Understand the private school business landscape in Nigeria</li>
                                            <li>✔ Learn the roles and ethics of a school growth consultant</li>
                                            <li>✔ Master MentorNigeria’s consulting methodology</li>
                                            <li>✔ Identify common challenges school owners face</li>
                                            <li>✔ Get clarity on the consultant's mindset and opportunities</li>
                                        </ul>
                                        <p className='mt-4 mb-2 font-semibold'>Included Tools:</p>
                                        <ul className="pl-5">
                                            <li>Consultant Identity Blueprint</li>
                                            <li>School Growth Diagnostic Checklist</li>
                                            <li>Ethics & Conduct Template</li>
                                            <li>School System Comparison Guide</li>
                                        </ul>
                                    </div>
                                }

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
                                <h3 className='highlighter'>🔹 Module 2: Starting or Rescuing a School</h3>
                                {modulecollapse !== 2 && 
                                    <p className="three-dot">...</p>
                                }

                                {modulecollapse === 2 &&
                                    <div className='long-text'>
                                        <p className='mb-4 italic'>Become the expert who helps schools start strong or bounce back.</p>
                                        <p className='mb-2 font-semibold'>What You'll Learn:</p>
                                        <ul className="pl-2" style={{listStyleType: 'none'}}>
                                            <li>✔ Guide new school startups from feasibility to launch</li>
                                            <li>✔ Diagnose and address root causes of school failure</li>
                                            <li>✔ Create turnaround strategies and staffing plans</li>
                                            <li>✔ Assist with curriculum setup and teacher onboarding</li>
                                        </ul>
                                        <p className='mt-4 mb-2 font-semibold'>Included Tools:</p>
                                        <ul className="pl-5">
                                            <li>Startup Advisory Toolkit</li>
                                            <li>Turnaround Strategy Template</li>
                                            <li>Business Plan Framework</li>
                                            <li>Staffing & Facilities Checklist</li>
                                        </ul>
                                    </div>
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
                                <h3 className='highlighter'>🔹 Module 3: School Makeover & Ambience Advisory</h3>
                            {modulecollapse !== 3 && 
                                <p className="three-dot">...</p>
                                }

                                {modulecollapse === 3 &&
                                    <div className='long-text'>
                                        <p className='mb-4 italic'>Enhance the look, feel, and appeal of school environments.</p>
                                        <p className='mb-2 font-semibold'>What You'll Learn:</p>
                                        <ul className="pl-2" style={{listStyleType: 'none'}}>
                                            <li>✔ School-wide beautification, hygiene, and ambiance</li>
                                            <li>✔ Classroom and reception area setup</li>
                                            <li>✔ Play area and restroom enhancement for parent appeal</li>
                                        </ul>
                                    </div>
                                }

                                {modulecollapse === 3 ? 
                                    <button className='read-more-btn' onClick={() => setModuleCollapse(0)}>
                                        Read Less
                                    </button> :
                                    <button className='read-more-btn' onClick={() => setModuleCollapse(3)}>
                                        Read More
                                    </button>
                                }
                            </div>

                            <div className='module-info'>
                                <h3 className='highlighter'>🔹 Module 4: Enrollment Growth Strategies</h3>
                            {modulecollapse !== 4 && 
                                <p className="three-dot">...</p>
                                }

                                {modulecollapse === 4 &&
                                    <div className='long-text'>
                                        <p className='mb-4 italic'>Attract more students and build community trust.</p>
                                        <p className='mb-2 font-semibold'>What You'll Learn:</p>
                                        <ul className="pl-2" style={{listStyleType: 'none'}}>
                                            <li>✔ Diagnose enrollment bottlenecks</li>
                                            <li>✔ Build brand credibility and parent trust</li>
                                            <li>✔ Create local marketing and outreach campaigns</li>
                                            <li>✔ Design high-converting admissions funnels</li>
                                        </ul>
                                        <p className='mt-4 mb-2 font-semibold'>Included Tools:</p>
                                        <ul className="pl-5">
                                            <li>Academic Calendar Generator</li>
                                            <li>Enrollment Campaign Plan</li>
                                            <li>Parent Engagement Scripts</li>
                                            <li>Appreciation Event Toolkit</li>
                                        </ul>
                                    </div>
                                }

                                {modulecollapse === 4 ? 
                                    <button className='read-more-btn' onClick={() => setModuleCollapse(0)}>
                                        Read Less
                                    </button> :
                                    <button className='read-more-btn' onClick={() => setModuleCollapse(4)}>
                                        Read More
                                    </button>
                                }
                            </div>
                        </div>

                        <div className='module-row'>
                            <div className='module-info'>
                                <h3 className='highlighter'>🔹 Module 5: Revenue Growth & Profitability</h3>
                            {modulecollapse !== 5 && 
                                <p className="three-dot">...</p>
                                }

                                {modulecollapse === 5 &&
                                    <div className='long-text'>
                                        <p className='mb-4 italic'>Improve school income while managing costs smartly.</p>
                                        <p className='mb-2 font-semibold'>What You'll Learn:</p>
                                        <ul className="pl-2" style={{listStyleType: 'none'}}>
                                            <li>✔ Model school fees and pricing for sustainability</li>
                                            <li>✔ Monetize extracurriculars and additional services</li>
                                            <li>✔ Spot and fix revenue leaks</li>
                                            <li>✔ Explore revenue diversification strategies</li>
                                        </ul>
                                        <p className='mt-4 mb-2 font-semibold'>Included Tools:</p>
                                        <ul className="pl-5">
                                            <li>Revenue Optimization Report</li>
                                            <li>Fee Structuring Guide</li>
                                            <li>School Growth Plan Template</li>
                                        </ul>
                                    </div>
                                }

                                {modulecollapse === 5 ? 
                                    <button className='read-more-btn' onClick={() => setModuleCollapse(0)}>
                                        Read Less
                                    </button> :
                                    <button className='read-more-btn' onClick={() => setModuleCollapse(5)}>
                                        Read More
                                    </button>
                                }
                            </div>

                            <div className='module-info'>
                                <h3 className='highlighter'>🔹 Module 6: Effective Management & Operations</h3>
                            {modulecollapse !== 6 && 
                                <p className="three-dot">...</p>
                                }

                                {modulecollapse === 6 &&
                                    <div className='long-text'>
                                        <p className='mb-4 italic'>Install systems that streamline daily school operations.</p>
                                        <p className='mb-2 font-semibold'>What You'll Learn:</p>
                                        <ul className="pl-2" style={{listStyleType: 'none'}}>
                                            <li>✔ Design an effective school organizational structure</li>
                                            <li>✔ Develop SOPs for school functions</li>
                                            <li>✔ Build staff evaluation and retention frameworks</li>
                                            <li>✔ Align school calendars with strategic priorities</li>
                                        </ul>
                                        <p className='mt-4 mb-2 font-semibold'>Included Tools:</p>
                                        <ul className="pl-5">
                                            <li>SOP Templates Pack</li>
                                            <li>School Staff Management Guide</li>
                                            <li>Staff Appraisal Toolkit</li>
                                        </ul>
                                    </div>
                                }

                                {modulecollapse === 6 ? 
                                    <button className='read-more-btn' onClick={() => setModuleCollapse(0)}>
                                        Read Less
                                    </button> :
                                    <button className='read-more-btn' onClick={() => setModuleCollapse(6)}>
                                        Read More
                                    </button>
                                }
                            </div>
            
                        </div>

                        <div className='module-row'>
                            <div className='module-info'>
                                <h3 className='highlighter'>🔹 Module 7: Financial Management for School Owners</h3>
                            {modulecollapse !== 7 && 
                                <p className="three-dot">...</p>
                                }

                                {modulecollapse === 7 &&
                                    <div className='long-text'>
                                        <p className='mb-4 italic'>Empower school leaders to make smarter financial decisions.</p>
                                        <p className='mb-2 font-semibold'>What You’ll Learn:</p>
                                        <ul className="pl-2" style={{listStyleType: 'none'}}>
                                            <li>✔ Build school budgets and manage cash flow</li>
                                            <li>✔ Create financial reports and forecast sustainability</li>
                                            <li>✔ Use financial diagnostics to guide strategy</li>
                                            <li>✔ Mitigate financial risks in school operations</li>
                                        </ul>
                                        <p className='mt-4 mb-2 font-semibold'>Included Tools:</p>
                                        <ul className="pl-5">
                                            <li>Financial Planning Toolkit</li>
                                            <li>Budget & Forecast Spreadsheet Templates</li>
                                        </ul>
                                    </div>
                                }

                                {modulecollapse === 7 ? 
                                    <button className='read-more-btn' onClick={() => setModuleCollapse(0)}>
                                        Read Less
                                    </button> :
                                    <button className='read-more-btn' onClick={() => setModuleCollapse(7)}>
                                        Read More
                                    </button>
                                }
                            </div>

                            <div className='module-info'>
                                <h3 className='highlighter'>🔹 Module 8: Digital Integration & E-Learning Strategy</h3>
                            {modulecollapse !== 8 && 
                                <p className="three-dot">...</p>
                                }

                                {modulecollapse === 8 &&
                                    <div className='long-text'>
                                        <p className='mb-4 italic'>Use technology to improve learning and increase market value.</p>
                                        <p className='mb-2 font-semibold'>What You’ll Learn:</p>
                                        <ul className="pl-2" style={{listStyleType: 'none'}}>
                                            <li>✔ Recommend low-cost EdTech tools for schools</li>
                                            <li>✔ Help schools implement hybrid learning models</li>
                                            <li>✔ Support digital transformation for differentiation</li>
                                        </ul>
                                        <p className='mt-4 mb-2 font-semibold'>Included Tools:</p>
                                        <ul className="pl-5">
                                            <li>Digital Audit Tool</li>
                                            <li>EdTech Integration Guide</li>
                                        </ul>
                                    </div>
                                }

                                {modulecollapse === 8 ? 
                                    <button className='read-more-btn' onClick={() => setModuleCollapse(0)}>
                                        Read Less
                                    </button> :
                                    <button className='read-more-btn' onClick={() => setModuleCollapse(8)}>
                                        Read More
                                    </button>
                                }
                            </div>
                        </div>

                        <div className='module-row'>
                            <div className='module-info'>
                                <h3 className='highlighter'>🔹 Module 9: Consulting Execution & Business Growth</h3>
                            {modulecollapse !== 9 && 
                                <p className="three-dot">...</p>
                                }

                                {modulecollapse === 9 &&
                                    <div className='long-text'>
                                        <p className='mb-4 italic'>Launch and grow a successful school consulting business.</p>
                                        <p className='mb-2 font-semibold'>What You’ll Learn:</p>
                                        <ul className="pl-2" style={{listStyleType: 'none'}}>
                                            <li>✔ Attract and close school consulting clients</li>
                                            <li>✔ Design and price your consulting packages</li>
                                            <li>✔ Deliver value through diagnostics and project execution</li>
                                            <li>✔ Retain clients and manage referrals</li>
                                            <li>✔ Use digital tools (Trello, Google Workspace, etc.)</li>
                                        </ul>
                                        <p className='mt-4 mb-2 font-semibold'>Included Tools:</p>
                                        <ul className="pl-5">
                                            <li>Proposal & Pricing Templates</li>
                                            <li>Client Intake Forms</li>
                                            <li>Consulting Project Delivery Checklist</li>
                                            <li>Project Management Tools</li>
                                        </ul>
                                    </div>
                                }

                                {modulecollapse === 9 ? 
                                    <button className='read-more-btn' onClick={() => setModuleCollapse(0)}>
                                        Read Less
                                    </button> :
                                    <button className='read-more-btn' onClick={() => setModuleCollapse(9)}>
                                        Read More
                                    </button>
                                }
                            </div>

                            <div className='module-info'>
                                <h3 className='highlighter'>🎯 Capstone Project & Mentorship Practicum</h3>
                            {modulecollapse !== 10 && 
                                <p className="three-dot">...</p>
                                }

                                {modulecollapse === 10 &&
                                    <div className='long-text'>
                                        <p className='mb-4 italic'>Apply everything you've learned in a real-world project.</p>
                                        <p className='mb-2 font-semibold'>To graduate, you will:</p>
                                        <ul className="pl-2" style={{listStyleType: 'none'}}>
                                            <li>✅ Consult for a real or simulated school</li>
                                            <li>✅ Submit a full capstone growth strategy</li>
                                            <li>✅ Present your project for expert review</li>
                                            <li>✅ Perform a client acquisition role-play</li>
                                        </ul>
                                        <p className='mt-4 mb-2 font-semibold'>Final Deliverables:</p>
                                        <ul className="pl-5">
                                            <li>Strategic Growth Proposal</li>
                                            <li>Client Presentation Deck</li>
                                            <li>Consultant Portfolio Entry</li>
                                        </ul>
                                    </div>
                                }

                                {modulecollapse === 10 ? 
                                    <button className='read-more-btn' onClick={() => setModuleCollapse(0)}>
                                        Read Less
                                    </button> :
                                    <button className='read-more-btn' onClick={() => setModuleCollapse(10)}>
                                        Read More
                                    </button>
                                }
                            </div>
                        </div>

                        <div className='apply-now-get-started'><a href='#application-form-section'> <span className='highlighter'>👉 Apply Now</span> to Get Started!</a> </div>

                        <div className='line-breaker'></div>
                    </>
                )
            }

            <div 
                className='inline-block mx-auto mt-3 mb-6 underline cursor-pointer font-medium text-[#FA8806]'
                style={{fontSize: '0.35em'}}
                onClick={()=>setShowProgramCurriculum(prev => !prev)}
            >
                👉 {showProgramCurriculum ? 'Click Here to Hide Program Curriculum' : 'Click Here to Show Program Curriculum'}
            </div>

            <div className='line-breaker'></div>

            <div className='module-text-box'>
                <h1 className='highlighter'>🎁 Bonus Features & Post-Training Support</h1>
                <ul className='list-none module-text-box__list-box'>
                    <li>✅ “Services School Consultants and Mentors Get Paid For” Masterclass</li>
                    <li>✅ Consultant and Mentor Resource Library</li>
                    <li>✅ Weekly Live Q\A & Mentoring Sessions</li>
                    <li>✅ Private WhatsApp Support Group</li>
                    <li>✅ Immediate Income Kickstart Blueprint</li>
                    <li>✅ Certificate of Completion</li>
                    <li>✅ Featured Listing in the MentorNigeria School Consultant Directory</li>
                </ul>
            </div>

            <div className='module-text-box'>
                <p className='my-5'>✅ Ready to Start or Scale Your Consulting Career?</p>
                <p className='font-semibold italic mb-5'>Join the MentorNigeria School Consulting and Mentorship Program today and become part of a movement empowering schools across Nigeria and Africa.</p>
                <p className='font-semibold'>🔐 Learn. Get Mentored. Earn.</p>
            </div>

            <div className='apply-now-get-started'><a href='#application-form-section'>📩 [ENROLL NOW]</a></div>
        </div>
    </div>
  )
}

export default ModuleSection