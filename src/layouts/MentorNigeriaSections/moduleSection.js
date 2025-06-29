import React, { useState } from 'react'
// import { NavigateForm } from 'utils/navigateForm'
import './mentornigeria.css'

const ModuleSection = () => {
  const [modulecollapse, setModuleCollapse] = useState(0);
//   const [subModuleCollapse, setSubModuleCollapse] = useState(0);

//   useEffect(()=> {
//     setSubModuleCollapse(0);
//   }, [modulecollapse]);

  return (
    <div>
        <div className='module-section-wrapper'>
            <div className='module-title'>Curriculum Outline for a School Consulting Training & Mentorship Program</div>

            <div className='module-text-box space-y-4'>
                <p className='italic'>— Focused on equipping consultants to help new or struggling private schools grow enrollment, improve revenue, and strengthen operations.</p>
                <p className='font-semibold'>🎓School Consulting & Mentorship Accelerator Program</p>
                <div>
                    <p><span className='font-semibold'>Program Duration:</span> 10–12 weeks</p>
                    <p><span className='font-semibold'>Format:</span> Blended learning (online modules + live sessions + mentorship + project work)</p>
                </div>
                <div>
                    <p className='mb-2 font-semibold'>Ideal Participants:</p>
                    <p>* Aspiring school growth consultants</p>
                    <p>* Education entrepreneurs</p>
                    <p>* School improvement advisors</p>
                    <p>* Business consultants seeking to enter the education space</p>
                </div>
            </div>

            <div className='module-row'>
                <div className='module-info'>
                    <h3 className='highlighter'>🔶 Module 1: Foundations of School Growth Consulting</h3>
                    {modulecollapse !== 1 && 
                        <p className="three-dot">...</p>
                    }

                    {modulecollapse === 1 &&
                        <div className='long-text'>
                            <p className='mb-4'>Understand the consulting landscape and TreNova’s growth framework.</p>
                            <p className='mb-2 font-semibold'>What You’ll Learn & Tools Included:</p>
                            <ul className="pl-5">
                                <li>The business of private education in Nigeria</li>
                                <li>Types of school owners and their typical challenges</li>
                                <li>Mindset and ethics of a school growth consultant</li>
                                <li>Program overview, pathways, and earning opportunities</li>
                                <li>Regulatory Guidance</li>
                                <li>School Audit Checklist</li>
                                <li>School System Comparison Tool</li>
                                <li>Code of Conduct Template</li>
                            </ul>
                            <p className='mt-4 mb-2 font-semibold'>Deliverables:</p>
                            <ul className="pl-5">
                                <li>Consultant Identity Blueprint</li>
                                <li>School Growth Diagnostic Checklist</li>
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
                    <h3 className='highlighter'>🔶 Module 2: School Makeover and Decoration Advisory Service</h3>
                    {modulecollapse !== 2 && 
                        <p className="three-dot">...</p>
                    }

                    {modulecollapse === 2 &&
                        <div className='long-text'>
                            <p className='mb-4'>Master the fundamentals of making schools beautiful, clean and attractive.</p>
                            <p className='mb-2 font-semibold'>What You’ll Learn:</p>
                            <ul className="pl-5">
                                <li>General Materials to Procure</li>
                                <li>School-wide Decorations and Ambience</li>
                                <li>Classrooms Decoration Items</li>
                                <li>Reception and Office Area Makeover</li>
                                <li>Play and Activity Areas</li>
                                <li>Toilets and Hygiene Areas</li>
                                <li>Outdoor Environment</li>
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
                    <h3 className='highlighter'>🔶 Module 3: Starting or Rescuing a School — The Consultant’s Role</h3>
                   {modulecollapse !== 3 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 3 &&
                        <div className='long-text'>
                            <p className='mb-4'>Master the fundamentals of launching a new school.</p>
                            <p className='mb-2 font-semibold'>What You’ll Learn & Tools Included:</p>
                            <ul className="pl-5">
                                <li>Startup school advisory: Market feasibility, business model, and startup planning</li>
                                <li>Helping struggling schools: Identifying failing points</li>
                                <li>Designing school launch or turnaround strategies</li>
                                <li>Curriculum Design</li>
                                <li>Assessment Systems</li>
                                <li>Teacher Recruitment & Training</li>
                                <li>Business Plan Template</li>
                                <li>Curriculum Mapping Tool</li>
                                <li>Staffing & Facilities Checklist</li>
                            </ul>
                            <p className='mt-4 mb-2 font-semibold'>Deliverables:</p>
                            <ul className="pl-5">
                                <li>Startup Advisory Toolkit</li>
                                <li>Turnaround Strategy Template</li>
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
                    <h3 className='highlighter'>🔶 Module 4: Enrollment Growth Strategy & Sustainability</h3>
                   {modulecollapse !== 4 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 4 &&
                        <div className='long-text'>
                            <p className='mb-4'>Accelerate enrollment and scale school impact.</p>
                            <p className='mb-2 font-semibold'>What You’ll Learn & Tools Included:</p>
                            <ul className="pl-5">
                                <li>Diagnosing enrollment gaps</li>
                                <li>Branding and brand positioning</li>
                                <li>Messaging and parent trust-building</li>
                                <li>Community outreach and lead generation systems</li>
                                <li>Admissions funnel design and conversion strategies</li>
                                <li>Risk Management</li>
                                <li>Marketing Calendar</li>
                                <li>Competitor Analysis Tools</li>
                                <li>Enrollment Campaigns</li>
                                <li>Parent Engagement</li>
                            </ul>
                            <p className='mt-4 mb-2 font-semibold'>Deliverables:</p>
                            <ul className="pl-5">
                                <li>Enrollment Growth Campaign Plan</li>
                                <li>Parent Engagement Scripts</li>
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
                    <h3 className='highlighter'>🔶 Module 5: School Revenue and Profitability Optimization</h3>
                   {modulecollapse !== 5 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 5 &&
                        <div className='long-text'>
                            <p className='mb-4'>Accelerate revenue and improve profitability.</p>
                            <p className='mb-2 font-semibold'>What You’ll Learn & Tools Included:</p>
                            <ul className="pl-5">
                                <li>Identifying revenue leaks and pricing problems</li>
                                <li>School fee modeling and income projection</li>
                                <li>Monetizing non-tuition revenue sources (e.g., clubs, services, afterschool programs)</li>
                                <li>Running lean and scaling profitably</li>
                                <li>Fee Structure & Discount Policies</li>
                                <li>Revenue Diversification</li>
                                <li>School Growth Plan Template</li>
                            </ul>
                            <p className='mt-4 mb-2 font-semibold'>Deliverables:</p>
                            <ul className="pl-5">
                                <li>Revenue Optimization Report</li>
                                <li>Fee Restructuring Guide</li>
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
                    <h3 className='highlighter'>🔶 Module 6: Effective School Management, Operational Systems & School Structure</h3>
                   {modulecollapse !== 6 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 6 &&
                        <div className='long-text'>
                            <p className='mb-4'>Establish efficient systems and operations for success.</p>
                            <p className='mb-2 font-semibold'>What You’ll Learn & Tools Included:</p>
                            <ul className="pl-5">
                                <li>Designing effective school organizational structures</li>
                                <li>Policy creation, SOPs, and staff role clarity</li>
                                <li>Staff recruitment, retention, and evaluation frameworks</li>
                                <li>Time-table and calendar alignment with strategic priorities</li>
                                <li>Policy Development</li>
                                <li>School Management Systems</li>
                                <li>School Policy Templates</li>
                                <li>Strategic Planning</li>
                                <li>Performance Evaluation</li>
                                <li>Academic Calendar Generator</li>
                            </ul>
                            <p className='mt-4 mb-2 font-semibold'>Deliverables:</p>
                            <ul className="pl-5">
                                <li>SOP Templates Pack</li>
                                <li>School Staff Management Guide</li>
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
                    <h3 className='highlighter'>🔶 Module 7: Financial Management for School Owners</h3>
                   {modulecollapse !== 7 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 7 &&
                        <div className='long-text'>
                            <p className='mb-4'>Developing Strategies for Money Management.</p>
                            <p className='mb-2 font-semibold'>What You’ll Learn:</p>
                            <ul className="pl-5">
                                <li>Budgeting, forecasting, and cashflow strategies</li>
                                <li>Helping owners understand profit margins and sustainability</li>
                                <li>Tools for financial diagnostics and reporting</li>
                                <li>Financial Planning Toolkit</li>
                            </ul>
                            <p className='mt-4 mb-2 font-semibold'>Deliverables:</p>
                            <ul className="pl-5">
                                <li>School Finance Toolkit</li>
                                <li>Budgeting Spreadsheet Templates</li>
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
                    <h3 className='highlighter'>🔶 Module 8: Digital Integration, E-Learning Strategy and How to Run Your Consulting Business:</h3>
                   {modulecollapse !== 8 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 8 &&
                        <div className='long-text'>
                            <p className='mb-4'>Developing Strategies for Your Client</p>
                            <p className='mb-2 font-semibold'>What You’ll Learn:</p>
                            <ul className="pl-5">
                                <li>Recommending affordable edtech tools</li>
                                <li>Creating hybrid learning models</li>
                                <li>Supporting schools to use digital tools to increase value and differentiation</li>
                                <li>Principles and situation variables</li>
                                <li>Integrating the principles</li>
                                <li>Apply the principles scientifically</li>
                                <li>Getting organised and getting the job done</li>
                                <li>Importance of ethics in consulting</li>
                                <li>Typical problems pertaining to ethics in consulting</li>
                            </ul>
                            <p className='mt-4 mb-2 font-semibold'>Deliverables:</p>
                            <ul className="pl-5">
                                <li>Digital Audit Tool</li>
                                <li>School Tech Integration Guide</li>
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
                    <h3 className='highlighter'>🔶 Module 9: Consulting Sales, Execution, Client Success, Consultant’s Toolkit & Training for Capability Development</h3>
                   {modulecollapse !== 9 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 9 &&
                        <div className='long-text'>
                            <p className='mb-4'>Deliver powerful sales training and consulting solutions with confidence.</p>
                            <p className='mb-2 font-semibold'>What You’ll Learn:</p>
                            <ul className="pl-5">
                                <li>How to find and close school clients</li>
                                <li>Pricing school consulting packages</li>
                                <li>Conducting discovery meetings and diagnostic audits</li>
                                <li>Delivering value and managing projects</li>
                                <li>Client retention and follow-up</li>
                                <li>Leadership Transition</li>
                                <li>School Turnaround Projects</li>
                                <li>Using training as a tool for client acquisition and retention</li>
                                <li>Ready-to-edit proposals and client intake forms</li>
                                <li>Recommended tools (Trello, Google Workspace, etc.)</li>
                            </ul>
                            <p className='mt-4 mb-2 font-semibold'>Deliverables:</p>
                            <ul className="pl-5">
                                <li>Proposal and Pricing Templates</li>
                                <li>Consulting Delivery Checklist</li>
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
                    <h3 className='highlighter'>🔶 Capstone: Real-World School Growth Consulting Project, Practicum & Mentorship</h3>
                   {modulecollapse !== 10 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 10 &&
                        <div className='long-text'>
                            <p className='mb-4'>Apply your skills through a real-world or simulated project.</p>
                            <p className='mb-2 font-semibold'>Essential Extras for Your Success</p>
                            <ul className="pl-5 mb-1">
                                <li>Participants must:</li>
                            </ul>
                            <div className='pl-6'>
                                <p>1. Consult for a real school (startup or existing)</p>
                                <p>2. Submit a comprehensive growth proposal and strategy plan</p>
                                <p>3. Present results and get feedback from mentors</p>
                                <p>4. Submit Capstone Report & Deliver Presentation</p>
                                <p>5. Make Consultant Portfolio Entry</p>
                            </div>
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

            <div className='module-text-box'>
                <h1 className='highlighter'>Bonus Features & Program Support Elements</h1>
                <ul className='list-none module-text-box__list-box'>
                    <li>🎁 <span className='font-semibold'>Access</span> to our Consultant Resource Library</li>
                    <li className='font-semibold'>🎁 Weekly live mentoring Q&A sessions</li>
                    <li>🎁 <span className='font-semibold'>Peer Support Forum</span> and Professional Community</li>
                    <li>🎁 Access to partner tool and digital products</li>
                    <li>🎁 Dedicated community platform (WhatsApp)</li>
                    <li>🎁<span className='font-semibold'>Graduation Bonus:</span> Actionable Strategies to Kickstart Your Income Immediately After Graduation</li>
                    <li>🎁 Certification and listing in School Consultant Directory</li>
                </ul>
            </div>

            <div className='module-text-box'>
                {/* <h1 className='highlighter'>Certification:</h1> */}
                <p className='font-semibold'>Join a Growing Network of Impact-Driven School Growth Consultants</p>
            </div>
            
            <div className='module-text-box'>
               {/* <h1 className='highlighter'>Delivery Format:</h1> */}
                <p><span className='highlighter'><a href='#application-form-section'>👉 Enroll today</a></span> and gain the certification, mentorship, and resources to build a consulting business that uplifts schools—and changes your future.</p> 
            </div>

            <div className='apply-now-get-started'><a href='#application-form-section'> 👉 [Enroll Now]</a></div>
        </div>
    </div>
  )
}

export default ModuleSection