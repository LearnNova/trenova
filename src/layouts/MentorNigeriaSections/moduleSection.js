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
                            <p className='mb-2 font-semibold'>Tools Included:</p>
                            <ul className="pl-5">
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
                    <h3 className='highlighter'>🔹 Module 2: Starting a Private School</h3>
                   {modulecollapse !== 2 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 2 &&
                        <div className='long-text'>
                            <p className='mb-4'>Master the fundamentals of launching a new school.</p>
                            <p className='mb-2 font-semibold'>Tools Included:</p>
                            <ul className="pl-5">
                                <li>Business Plan Template</li>
                                <li>Curriculum Mapping Tool</li>
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
                    <h3 className='highlighter'>🔹 Module 3: Effective School Management</h3>
                   {modulecollapse !== 3 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 3 &&
                        <div className='long-text'>
                            <p className='mb-4'>Establish efficient systems and operations for success.</p>
                            <p className='mb-2 font-semibold'>Tools Included:</p>
                            <ul className="pl-5">
                                <li>Financial Planning Toolkit</li>
                                <li>Academic Calendar Generator</li>
                                <li>School Policy Templates</li>
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
                    <h3 className='highlighter'>🔹 Module 4: School Growth & Sustainability</h3>
                   {modulecollapse !== 4 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 4 &&
                        <div className='long-text'>
                            <p className='mb-4'>Accelerate enrollment, revenue and scale school impact.</p>
                            <p className='mb-2 font-semibold'>Tools Included:</p>
                            <ul className="pl-5">
                                <li>Marketing Calendar</li>
                                <li>School Growth Plan Template</li>
                                <li>Competitor Analysis Tools</li>
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
                    <h3 className='highlighter'>🔹 Module 5: Consultant’s Toolkit & Training for Capability Development</h3>
                   {modulecollapse !== 5 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 5 &&
                        <div className='long-text'>
                            <p className='mb-4'>Deliver powerful training and consulting solutions with confidence.</p>
                            <p className='mb-2 font-semibold'>What You’ll Learn:</p>
                            <ul className="pl-5">
                                <li>Using training as a tool for client acquisition and retention</li>
                                <li>Ready-to-edit proposals and client intake forms</li>
                                <li>Recommended tools (Trello, Google Workspace, etc.)</li>
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
                    <h3 className='highlighter'>🔹 Module 6: Practicum & Mentorship</h3>
                   {modulecollapse !== 6 && 
                    <p className="three-dot">...</p>
                    }

                    {modulecollapse === 6 &&
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

                    {modulecollapse === 6 ? 
                        <button className='read-more-btn' onClick={() => setModuleCollapse(0)}>
                            Read Less
                        </button> :
                        <button className='read-more-btn' onClick={() => setModuleCollapse(6)}>
                            Read More
                        </button>
                    }
                </div>

                {/* <div className='module-info'>
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
                </div> */}
            </div>

            <div className='apply-now-get-started'><a href='#application-form-section'> <span className='highlighter'>Apply Now</span> to Get Started!</a> </div>

            <div className='line-breaker'></div>

            <div className='module-text-box'>
                <h1 className='highlighter'>Bonus Features</h1>
                {/* <p><span className='highlighter'>3 - 4 Months</span> (Flexible schedule with 1 - 2 sessions per week).</p> */}
                <ul className='list-none module-text-box__list-box'>
                    <li>🎁 <span className='font-semibold'>Lifetime Access</span> to our Consultant Resource Library</li>
                    <li>🎁 <span className='font-semibold'>Weekly Office Hours</span> and Live Q&A Sessions</li>
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
                <p><span className='highlighter'><a href='#application-form-section'>Enroll today</a></span> and gain the certification, mentorship, and resources to build a consulting business that uplifts schools—and changes your future.</p> 
            </div>

            <div className='apply-now-get-started'><a href='#application-form-section'> 👉 [Enroll Now]</a></div>
        </div>
    </div>
  )
}

export default ModuleSection