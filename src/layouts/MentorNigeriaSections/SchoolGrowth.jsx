import React, { useState } from 'react';
// import './schoolgrowth.css';
// import trenova_logo from '../../assets/img/mentornigeria/trenova-logo.png';
import InterestForm from './InterestForm';
import { useParams } from 'react-router-dom';
// import PricingSection from './PricingSection';


const SchoolGrowth = () => {
  const { name } = useParams();
  const [ showForm, setShowForm ] = useState(false);
  return (
    <section className='bg-gray-50 text-gray-900 poppins-family text-lg relative'>
        {/* Hero */}
        <section class="w-full px-2 sm:px-4 py-6" style={{backgroundColor: '#4151E5'}}>
            <h1 class="text-base-8 sm:text-xl font-bold leading-tight italic" style={{color: '#f6fa06'}}>🚀 Transform Your School with the LearnNova Learning Support System</h1>
            <p class="mt-2 text-3xl sm:text-5xl md:text-13xl text-white font-bold">
                Subscribe today and access powerful tools, premium learning content, and expert mentorship - designed to improve academic results, increase revenue, and drive long-term growth for your school.
            </p>
        </section>
        
        {/* Features  */}
        <section className='max-w-6xl mx-auto px-1 sm:px-4 py-8 space-y-10'>
            <div className='bg-white shadow-md rounded-xl px-2 sm:px-6 py-6'>
                    <h2 class="text-3xl font-semibold">✅ What’s Included</h2>

                    <div class="mt-6 space-y-10">

                        {/* Feature 1  */}
                        <div>
                            <h3 class="text-xl font-semibold">1. Classroom Learning Support Studio (School Computer Installation)</h3>
                            <p class="mt-2 text-black font-medium">A complete digital studio that empowers your school to:</p>
                            <ul class="list-disc pl-6 mt-2 space-y-1 text-black">
                                <li>Boost student performance</li>
                                <li>Strengthen revenue and profitability</li>
                                <li>Extend learning seamlessly into the home</li>
                                <li>Build long-term competitiveness</li>
                            </ul>
                            <div class="mt-4 bg-gray-50 px-2 sm:px-4 py-4 rounded-lg">
                                <p class="font-semibold">Inside the Studio:</p>
                                <ul class="list-none list-inside pl-1 mt-2 space-y-1 text-black">
                                    <li><span className='font-semibold'>📚 Comprehensive E-Library of Reading Books (KG 1 – SSS 3)</span> – 750+ books to grow reading culture and literacy.</li>
                                    <li><span className='font-semibold'>🎨 Creative & Vocational Life Skills</span> – 50+ hands-on courses to build creativity, entrepreneurship, and income streams.</li>
                                    <li><span className='font-semibold'>➗ Senior Secondary Mathematics</span> – 2,400 lessons + 8,000 practice questions.</li>
                                    <li><span className='font-semibold'>🗣 Diction & Phonics (KG 1 – Basic 6)</span> – 540 interactive lessons + 500 practice activities.</li>
                                </ul>
                                <p class="mt-3 text-base-8 font-semibold italic" style={{color: "#ff0000"}}>(Studio Value: ₦3,000,000 per term)</p>
                            </div>
                        </div>

                        {/* Feature 2  */}
                        <div>
                            <h3 class="text-xl font-semibold">2. Home Learning Access (For All Pupils & Students)</h3>
                            <p class="mt-2 text-black">Every learner continues their education at home through the <span className='font-semibold'>LearnNova Home Learning App</span> (Android, iOS, Laptop & Desktop).</p>
                            <div class="mt-4 bg-gray-50 px-2 sm:px-4 py-4 rounded-lg">
                                <p class="font-semibold">Includes:</p>
                                <ul class="list-disc pl-6 mt-2 space-y-1 text-black">
                                    <li>Creative & Vocational Skills Collection</li>
                                    <li>Full E-Library of Books (Ages 3 – 17)</li>
                                    <li>Senior Secondary Mathematics</li>
                                    <li>Diction & Phonics for Elementary School</li>
                                </ul>
                                <p class="mt-3 text-base-8 font-semibold italic" style={{color: "#ff0000"}}>(Value: ₦3,500 – ₦15,000 per learner per term)</p>
                            </div>
                        </div>

                        {/* Feature 3  */}
                        <div>
                            <h3 class="text-xl font-semibold">3. School Growth Mentorship & Coaching</h3>
                            <p class="mt-2 text-black">Virtual mentorship sessions from <span className='font-semibold'>TreNova Academy experts</span>, helping school leaders:</p>
                            <ul class="list-disc pl-6 mt-2 space-y-1 text-black">
                                <li>Master school growth strategies</li>
                                <li>Improve leadership capacity</li>
                                <li>Drive sustainable success</li>
                            </ul>
                            <p class="mt-3 text-base-8 font-semibold italic" style={{color: "#ff0000"}}>(Value: ₦250,000 per term)</p>
                        </div>

                        {/* Feature 4  */}
                        <div>
                            <h3 class="text-xl font-semibold">4. Referral Reward Program</h3>
                            <p class="mt-2 text-black">Earn every term when you introduce other schools to LearnNova:</p>
                            <ul class="list-disc pl-6 mt-2 space-y-1 text-black">
                                <li>15% – 40% referral income</li>
                            </ul>
                        </div>


                        {/* Feature 5  */}
                        <div>
                            <h3 class="text-xl font-semibold">5. Shape the Future of LearnNova</h3>
                            <p class="mt-2 text-black">As a partner, your school gets a voice—recommend new subjects for LearnNova to create, tailored to your learners’ needs.</p>
                            <p class="mt-2 text-black italic">✨ With LearnNova, you’re not just subscribing—you’re <span className='font-semibold'>investing in the future of your school, your learners, and your community.</span></p>

                            <div class="mt-6 bg-gray-50 px-2 sm:px-4 py-4 rounded-lg">
                                <h2 class="font-bold text-gray-900">📊 LearnNova Pricing Plans</h2>
                                <div class="w-full overflow-x-auto mt-2">
                                    <table class="w-full min-w-[600px] table-auto border-collapse text-black border border-gray-200 text-left">
                                        <thead class="align-bottom">
                                            <tr>
                                                <th class="px-2 py-1.5 border border-b-gray-400 border-gray-200">Plan</th>
                                                <th class="px-2 py-1.5 border border-b-gray-400 border-gray-200">What You Get</th>
                                                <th class="px-2 py-1.5 border border-b-gray-400 border-gray-200">Fee</th>
                                                <th class="px-2 py-1.5 border border-b-gray-400 border-gray-200">Additional Benefits</th>
                                            </tr>
                                        </thead>
                                        <tbody class="align-top">
                                            <tr>
                                                <td class="font-semibold p-2 border border-gray-200">Basic</td>
                                                <td class="p-2 border border-gray-200">Access to <span className='font-semibold'>1 subject</span> per term</td>
                                                <td class="p-2 border border-gray-200">₦79,999 / term</td>
                                                <td class="p-2 border border-gray-200">
                                                    <ul className='list-disc pl-6 space-y-1'>
                                                        <li>Access for 50 pupils/students on the Home Learning App</li>
                                                        <li>Receive a one-time 15% commission on each successful referral</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 border border-gray-200">
                                                    <p className='font-semibold'>Premium ⭐</p>
                                                    <p className='italic'>Most Popular</p>
                                                </td>
                                                <td class="p-2 border border-gray-200">Access to <span className='font-semibold'>2 subjects</span> per term</td>
                                                <td class="p-2 border border-gray-200">₦149,999 / term</td>
                                                <td class="p-2 border border-gray-200">
                                                    <ul className='list-disc pl-6 space-y-1'>
                                                        <li>Access for 100 pupils/students on the Home Learning App</li>
                                                        <li>Access to Virtual School Growth Mentorship & Coaching Class</li>
                                                        <li>Receive a one-time 20% commission on each successful referral</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 border border-gray-200">
                                                    <p className='font-semibold'>Lifetime 🏆</p>
                                                    <p className='italic'>Best Value</p>
                                                </td>
                                                <td class="p-2 border border-gray-200">Lifetime Unlimited Access to All Subjects on the Platform</td>
                                                <td class="p-2 border border-gray-200">A one-time investment of ₦1,000,000 is required. From the 5th term onward, a recurring fee of ₦25,000 per term applies for server operations, system upkeep, and continued support services</td>
                                                <td class="p-2 border border-gray-200">
                                                    <ul className='list-disc pl-6 space-y-1'>
                                                        <li>Access for 200 pupils/students on the Home Learning App</li>
                                                        <li>Access to Virtual School Growth Mentorship & Coaching Class</li>
                                                        <li>40% referral income every term</li>
                                                        <li>Suggest a new subject for LearnNova to develop</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                    </div>
            </div>
        </section>

        {/* Extras */}
        <section class="max-w-6xl mx-auto px-1 sm:px-4 py-6">
            <div class="bg-white border border-gray-800 rounded-xl px-2 sm:px-6 py-6 shadow-md">
                <h3 class="text-xl font-semibold">✅ Extra Benefits</h3>
                <ul class="mt-4 list-disc pl-6 text-black space-y-1">
                    <li><span className='font-semibold'>Offline Access</span> – works without data after initial setup</li>
                    <li><span className='font-semibold'>Growth Tools</span> – school growth forms & printable guides included</li>
                    <li><span className='font-semibold'>User-Friendly</span> – simple, intuitive platform for teachers and students</li>
                    <li><span className='font-semibold'>Complete Support</span> – onboarding and installation assistance provided</li>
                </ul>
            </div>
        </section>

        {/* CTA */}
        <section class="w-full px-2 sm:px-4 mt-6 py-6 text-center bg-gray-800">
            <h3 class="text-xl font-bold text-white">🚀 Ready to Scale Learning, Boost Revenue & Make a Lasting Impact?</h3>
            <p class="mt-2 italic font-medium underline" style={{color: '#f6fa06'}}>👉 Are you interested, Pick a Plan and Click the Button below to See and Fill the Form Below</p>
            <div class="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <button 
                    class="px-6 py-3 bg-gray-900 text-white border border-white rounded-xl shadow hover:bg-white hover:text-gray-900"
                    onClick={()=>setShowForm(prev => !prev)}
                >
                    {showForm ? 'Hide Form Below' : 'Show Form Below'}
                </button>
            </div>
        </section>

        {showForm && (
            <InterestForm name={name} />
        )}

        {/* <section class="w-full px-2 sm:px-4 py-6 text-white bg-gray-800 flex items-center justify-between">
            <div>
                <h1>Contact Info:</h1>
                <ul className=''>

                </ul>
            </div>
            <div></div>
        </section> */}
    </section>
  )
}

export default SchoolGrowth