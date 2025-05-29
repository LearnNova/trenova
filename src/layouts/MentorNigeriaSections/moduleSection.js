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
        <div className='module-title'>Curriculum Overview</div>
            <div className='module-row'>
                <div className='module-info'>
                    <h3 className='highlighter'>🔹 Module 1: Foundations of Private School Consulting</h3>
                    {modulecollapse !== 1 && 
                        <p className="three-dot">...</p>
                    }

                    {modulecollapse === 1 &&
                        <div className='long-text'>
                            <p className='mb-4'>Understand the consulting landscape and TreNova’s growth framework.</p>
                            <p className='mb-2 font-semibold'>What You’ll Learn & Tools Included:</p>
                            <ul className="pl-5">
                                <li>Feasibility Studies</li>
                                <li>Business Planning</li>
                                <li>Regulatory Guidance</li>
                                <li>School Audit Checklist</li>
                                <li>School System Comparison Tool</li>
                                <li>Code of Conduct Template</li>
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
                    <h3 className='highlighter'>🔹 Module 2: School  Makeover and Decoration Advisory Service</h3>
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
                    <h3 className='highlighter'>🔹 Module 3: Starting a Private School</h3>
                   {modulecollapse !== 3 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 3 &&
                        <div className='long-text'>
                            <p className='mb-4'>Master the fundamentals of launching a new school.</p>
                            <p className='mb-2 font-semibold'>What You’ll Learn & Tools Included:</p>
                            <ul className="pl-5">
                                <li>Curriculum Design</li>
                                <li>Assessment Systems</li>
                                <li>Teacher Recruitment & Training</li>
                                <li>Business Plan Template</li>
                                <li>Curriculum Mapping Tool</li>
                                <li>Staffing & Facilities Checklist</li>
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
                    <h3 className='highlighter'>🔹 Module 4: Effective School Management</h3>
                   {modulecollapse !== 4 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 4 &&
                        <div className='long-text'>
                            <p className='mb-4'>Establish efficient systems and operations for success.</p>
                            <p className='mb-2 font-semibold'>What You’ll Learn & Tools Included:</p>
                            <ul className="pl-5">
                                <li>Brand Positioning</li>
                                <li>Enrollment Campaigns</li>
                                <li>Parent Engagement</li>
                                <li>Policy Development</li>
                                <li>School Management Systems</li>
                                <li>Financial Planning Toolkit</li>
                                <li>Academic Calendar Generator</li>
                                <li>School Policy Templates</li>
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
                    <h3 className='highlighter'>🔹 Module 5: School Growth & Sustainability</h3>
                   {modulecollapse !== 5 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 5 &&
                        <div className='long-text'>
                            <p className='mb-4'>Accelerate enrollment, revenue and scale school impact.</p>
                            <p className='mb-2 font-semibold'>What You’ll Learn & Tools Included:</p>
                            <ul className="pl-5">
                                <li>Risk Management</li>
                                <li>Fee Structure & Discount Policies</li>
                                <li>Revenue Diversification</li>
                                <li>Strategic Planning</li>
                                <li>Performance Evaluation</li>
                                <li>Marketing Calendar</li>
                                <li>School Growth Plan Template</li>
                                <li>Competitor Analysis Tools</li>
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
                    <h3 className='highlighter'>🔹 Module 6: How to Run Your Consulting Business:</h3>
                   {modulecollapse !== 6 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 6 &&
                        <div className='long-text'>
                            <p className='mb-4'>Developing Strategies for Your Client</p>
                            <p className='mb-2 font-semibold'>What You’ll Learn:</p>
                            <ul className="pl-5">
                                <li>Principles and situation variables</li>
                                <li>Integrating the principles</li>
                                <li>Apply the principles scientifically</li>
                                <li>Getting organised and getting the job done</li>
                                <li>Importance of ethics in consulting</li>
                                <li>Typical problems pertaining to ethics in consulting</li>
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
                    <h3 className='highlighter'>🔹 Module 7: Consultant’s Toolkit & Training for Capability Development</h3>
                   {modulecollapse !== 7 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 7 &&
                        <div className='long-text'>
                            <p className='mb-4'>Deliver powerful training and consulting solutions with confidence.</p>
                            <p className='mb-2 font-semibold'>What You’ll Learn:</p>
                            <ul className="pl-5">
                                <li>Leadership Transition</li>
                                <li>School Turnaround Projects</li>
                                <li>Using training as a tool for client acquisition and retention</li>
                                <li>Ready-to-edit proposals and client intake forms</li>
                                <li>Recommended tools (Trello, Google Workspace, etc.)</li>
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
                    <h3 className='highlighter'>🔹 Module 8: Practicum & Mentorship</h3>
                   {modulecollapse !== 8 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 8 &&
                        <div className='long-text'>
                            <p className='mb-4'>Apply your skills through a real-world or simulated project.</p>
                            <p className='mb-2 font-semibold'>Resources Included:</p>
                            <ul className="pl-5">
                                <li>Practicum Workbook</li>
                                <li>Evaluation Rubrics</li>
                                <li>Final Report Templates</li>
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

            <div className='apply-now-get-started'><a href='#application-form-section'> <span className='highlighter'>👉 Apply Now</span> to Get Started!</a> </div>

            <div className='line-breaker'></div>

            <div className='module-text-box'>
                <h1 className='highlighter'>Bonus Features</h1>
                {/* <p><span className='highlighter'>3 - 4 Months</span> (Flexible schedule with 1 - 2 sessions per week).</p> */}
                <ul className='list-none module-text-box__list-box'>
                    <li>🎁 <span className='font-semibold'>Access</span> to our Consultant Resource Library</li>
                    <li className='font-semibold'>🎁 Live Questions & Answers Sessions</li>
                    <li>🎁 <span className='font-semibold'>Peer Support Forum</span> and Professional Community</li>
                    <li>🎁 <span className='font-semibold'>Certification Badge</span> for LinkedIn and your resume</li>
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