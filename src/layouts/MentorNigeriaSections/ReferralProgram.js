import React, { useState } from 'react';
import './mentornigeria.css';
import ReferralForm from './ReferralForm';

const faqs = [
  {
    question: "What is the LearnNova Referral Program?",
    answer: (
      <>
        The LearnNova Referral Program allows you to refer other school owners or schools to LearnNova Learning Support System. 
        When they sign up using your unique referral link, you receive exclusive rewards.
      </>
    ),
  },
  {
    question: "Who can participate in the referral program?",
    answer: "Any existing LearnNova Learning Support Customer — can participate and refer new schools to the platform.",
  },
  {
    question: "What rewards do I get for referring others?",
    answer: (
      <>
        <ul className="list-disc ml-5 mt-2">
          <li>For every successful referral: You get 17.5% off your subsequent subscription fee.</li>
          <li>Access to Exclusive Training and Mentorship Program to enhance your school’s performance.</li>
          <li>Enter the draw for a chance to win the ₦400,000 TreNova Annual School Growth Grant</li>
        </ul>
      </>
    ),
  },
  {
    question: "How do I refer someone?",
    answer: (
      <>
        <p>It’s simple!</p>
        <ul className="list-decimal ml-5 mt-2">
          <li>Enroll as a Referral Agent above, get your referral link and save it.</li>
          <li>Share the link with owners of schools, leaders or administrators.</li>
          <li>When they sign up and complete onboarding, your reward is activated!</li>
        </ul>
      </>
    ),
  },
  {
    question: "Is there a limit to how many schools I can refer?",
    answer: "No! You can refer as many schools as you want and earn rewards for each successful sign-up.",
  },
  {
    question: "How do I redeem my rewards?",
    answer: "Your rewards are automatically applied to your next LearnNova invoice and if you choose to receive a referral cash bonus, it will be automatically forwarded to you by learnNova administrator.",
  },
  {
    question: "Can I refer a school that is already using LearnNova?",
    answer: "No, the referral program is only for new schools that have not signed up for LearnNova before.",
  },
  {
    question: "What happens if my referral cancels before completing onboarding?",
    answer: "Only referrals that complete the full onboarding process and remain active qualify for rewards. If a referred school cancels before completing onboarding, the reward will not be applied.",
  },
  {
    question: "How long does it take to receive my reward?",
    answer: "Rewards are applied within 14 days after your referral successfully completes onboarding and becomes an active LearnNova user.",
  },
  {
    question: "Can I combine referral rewards with other promotions?",
    answer: "Referral rewards cannot be combined with other discount promotions unless explicitly stated.",
  },
  {
    question: "What if I have more questions?",
    answer: (
      <>
        Our support team is happy to help! Contact us on <a href="tel:08023781682" className="font-bold text-orange-500 hover:underline">0802 378 1682</a>, or WhatsApp us on <a href="tel:07044086794" className="font-bold text-orange-500 hover:underline">0704 408 6794</a> or <a href="tel:09137819540" className="font-bold text-orange-500 hover:underline">0913 781 9540</a> for more details.
      </>
    ),
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
            <div className='hero-sec-text' style={{fontSize: '.8em'}}>Join the LearnNova Referral Program & Win Big with TreNova!</div>
        </div>
        <div className='mt-3 px-6'>
          <h1 className='font-bold text-7xl poppins' style={{color: '#f6fa06'}}>
            Grow Your School, Save on Fees, and Stand a Chance to Win ₦500,000!
          </h1>

          <ul className="ml-2 mt-4 text-4xl w-full poppins">
            <h1 className='text-3xl underline font-bold mb-2'>How It Works:</h1>
            <li className="text-3xl">
              <span className='bg-green-500 px-2 text-white mr-1'>✔</span>
              Get Started:
              <ul className='list-disc ml-6 my-2 text-2xl'> {/* Reduce size for nested lists */}
                <li>Install the LearnNova Learning Support System on your school computer and on 40 students’ devices.</li>
                <li>Subscribe at just ₦125,000 per term.</li>
              </ul>
            </li>
            <li className='mt-5 text-3xl'> {/* Explicitly set text size */}
              <span className='bg-green-500 px-2 text-white mr-1'>✔</span>
              Refer and Earn:
              <ul className='list-decimal ml-6 my-2 text-2xl'> {/* Reduce size for nested lists */}
                <li>
                  <b>For Every School You Refer:</b>
                  <ul className='list-disc ml-3 my-1 text-2xl'>
                    <li>Get <b>17.5% off</b> your next term’s subscription fee.</li>
                  </ul>
                </li>

                <li>
                  <b>After Referring 6 Schools:</b>
                  <ul className='list-disc ml-3 my-1 text-2xl'>
                    <li>Achieve <b>TreNova Prestige Partner</b> status.</li>
                    <li>Earn <b>two free school growth virtual training & mentorship seats.</b></li>
                    <li>Enjoy continuous rewards—one referral’s termly payment will be ceded to you <b>every term</b> as long as your 6 referrals remain active. Choose to use it for your own subscription or receive it as <b>cash dividends</b>.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='mt-5 text-3xl'>
              <span className='bg-green-500 px-2 text-white mr-1'>✔</span>
              Qualify for the TreNova Annual School Growth Grant:
              <ul className='list-disc ml-6 my-2 text-2xl'>
                <li>Maintain at least <b>7 active referrals</b> through the end of an academic year.</li>
                <li><b>Enter the draw</b> for a chance to win the <b>₦400,000 TreNova Annual School Growth Grant!</b></li>
              </ul>
            </li>
            <li className='mt-5 text-3xl'>
              <b style={{color: '#f6fa06'}}>Why Participate?</b>
              <ul className='list-disc ml-6 my-2 text-2xl'>
                <li><b>Grow Your School</b> with LearnNova’s innovative Learning Support System.</li>
                <li><b>Save on Subscription Fees</b> and <b>Earn Cash Dividends</b>.</li>
                <li><b>Access Exclusive Training and Mentorship</b> to enhance your school’s performance.</li>
                <li><b>Win ₦400,000</b> and boost your school’s growth even further!</li>
              </ul>
            </li>
            <li className='mt-5 text-3xl'>
              <b>Ready to Get Started?</b>
              <ul className='list-disc ml-6 my-2 text-2xl'>
                <li>Install LearnNova on your school computer and on 40 students’ devices.</li>
                <li>Start referring schools and watch your rewards multiply!</li>
              </ul>
            </li>
          </ul>
          <p className="text-3xl mt-6 poppins"> {/* Set size for paragraph */}
            Contact us today and take the first step towards growth and rewards!
          </p>

          <h1 className='text-5xl text-center font-bold mb-1'>↓ ↓ ↓ ↓</h1>
        </div>


        <div className="flex justify-center my-3">
          <a href="#referral-form-id" className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-blue-500 transition text-2xl inline-block">
            Get your referral link
          </a>
      </div>
        <div className='line-breaker'></div>

        <div>
          <ReferralForm />
          {/* <h1 className="text-9xl font-bold text-center">Enroll as a Referrer</h1> */}
        </div>

        <div className='line-breaker'></div>

        <div className='faq px-2 my-3' id='faq'>
          <h1 className="text-9xl font-bold text-center">FAQ</h1>
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
                  {index + 1}. {faq.question}
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-white text-black rounded-b-lg">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className='line-breaker'></div>

        <div>
          <h1 className='text-5xl text-center mt-3 italic poppins'>Start Referring and Earning Rewards Today!</h1>
          <h1 className='text-5xl text-center font-bold mb-1'>↓ ↓ ↓ ↓</h1>
        </div>
        <div className="flex justify-center my-3">
        <a href="#referral-form-id" className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-blue-500 transition text-2xl inline-block">
          Start Referring Now
        </a>
        </div>

        <div className='line-breaker'></div>

        <div className='contact px-2 mt-3 text-black' style={{backgroundColor: '#FA8806'}}>
          <h1 className="text-7xl font-bold text-center">Contact</h1>
          <p className='text-center text-2xl font-light'>Still Have Questions?</p>
        </div>
        
    </>
  )
}

export default ReferralProgram