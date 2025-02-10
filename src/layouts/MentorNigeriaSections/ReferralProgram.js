import React, { useState } from 'react';
import './mentornigeria.css';

const faqs = [
    {
      question: "What is your return policy?",
      answer: (
        <>
          You can return any item within <strong>30 days</strong> for a full refund.
        </>
      ),
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide.",
    },
    {
      question: "How can I track my order?",
      answer: "You'll receive a tracking link once your order ships.",
    },
  ];


const ReferralProgram = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
        <div className='hero-sec-wrapper'>
            <div className='hero-sec-text'>LearnNova Referral Program
                <span style={{display: 'block', fontSize: '0.35em', fontWeight: 'normal'}} className='poppins'>Invite fellow educators to try LearnNova and get free months or discounts on your plan.</span>
            </div>
        </div>
        {/* <div className='hero-sec-info'>
            <div className='apply-now-get-started'><a href='#hello'><span className='highlighter'>Start</span> Referring Now</a></div>
        </div> */}
        <div className="flex justify-center my-6">
  <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-blue-500 transition text-2xl">
    Start Referring Now
  </button>
</div>
        <div className='line-breaker'></div>

        <div className='faq px-2'>
          <h1 className="text-9xl font-bold text-center mt-3 mb-3">FAQ</h1>
          <p className='text-center text-2xl font-light'>Frequently asked question, get Knowledge before hand</p>
          <div className="w-full max-w-[1000px] mx-auto mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-300 rounded-md shadow-md overflow-hidden">
                <button
                  className={`w-full text-left flex justify-between items-center p-4 font-medium text-lg text-black hover:text-white ${
                    openIndex === index ? 'bg-orange-200' : 'bg-white'
                  } hover:bg-orange-500 transition`}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-white text-black rounded-b-lg">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        
    </>
  )
}

export default ReferralProgram