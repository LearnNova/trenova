import React, { useState } from 'react';
import './mentornigeria.css';
import ReferralForm from './ReferralForm';

const faqs = [
  {
    question: "What is the LearnNova Referral Program?",
    answer: (
      <>
        The LearnNova Referral Program allows you to refer other schools, educators, or institutions to LearnNova Learning Support System. 
        When they sign up using your unique referral link, both you and the referred school receive exclusive rewards.
      </>
    ),
  },
  {
    question: "Who can participate in the referral program?",
    answer: "Any existing LearnNova user—whether on a free trial or a paid plan—can participate and refer new schools to the platform.",
  },
  {
    question: "What rewards do I get for referring others?",
    answer: (
      <>
        <p>For every successful referral:</p>
        <ul className="list-disc ml-5 mt-2">
          <li>You receive 1 month free or <strong>10%</strong> off your next invoice.</li>
          <li>Your referral gets a discount on their first payment.</li>
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
          <li>Go to your LearnNova dashboard and locate your unique referral link.</li>
          <li>Share the link with schools, teachers, or administrators.</li>
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
    question: "How will I know if my referral was successful?",
    answer: "You’ll receive an email confirmation when your referral signs up and meets the onboarding requirements. You can also track your referrals inside your LearnNova dashboard.",
  },
  {
    question: "How do I redeem my rewards?",
    answer: "Your rewards are automatically applied to your next LearnNova invoice. If you qualify for a free month, it will be reflected in your billing cycle. If you choose a discount, it will be applied at checkout.",
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
    answer: "Rewards are applied within 7 days after your referral successfully completes onboarding and becomes an active LearnNova user.",
  },
  {
    question: "Can I combine referral rewards with other promotions?",
    answer: "Referral rewards cannot be combined with other discount promotions unless explicitly stated.",
  },
  {
    question: "What if I have more questions?",
    answer: (
      <>
        Our support team is happy to help! Contact us at <a href="mailto:trenovaschools@gmail.com" className="font-bold text-orange-500 hover:underline">trenovaschools@gmail.com</a> or visit our Help Center for more details.
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
            <div className='hero-sec-text' style={{fontSize: '.8em'}}>Earn Rewards by Sharing LearnNova with Other Schools!</div>
        </div>
        <div className='mt-3 px-6'>
          <h1 className='font-bold text-9xl'>Invite fellow school owners to try LearnNova and get:</h1>
          <ul className="list-decimal ml-5 mt-2 text-5xl">
            <li> 
              <span className='font-bold'>For Exsisting Customers:</span> 
              <ul className='ml-1 my-2'>
                <li><span className='bg-green-500 px-2 text-white'>✔</span> Get 10% off your termly subscription fee for each successful referral</li>
                <li><span className='bg-green-500 px-2 text-white'>✔</span> Your referral enjoys a 10% discount on their first payment.</li>
              </ul>
            </li>
            <li className='mt-5'> 
              <span className='font-bold'>For Exsisting Non-Customers:</span> 
              <ul className='ml-1 my-2'>
                <li><span className='bg-green-500 px-2 text-white'>✔</span> Earn a ₦20,000 one-time referral bonus for every new customer you bring in.</li>
              </ul>
            </li>
          </ul>
          {/* <a href='#faq' className='hover:underline text:orange-500'>You have questions? Check out our FAQs below.</a> */}

          <h1 className='text-5xl text-center font-bold mb-1'>↓ ↓ ↓ ↓</h1>
        </div>
        <div className="flex justify-center my-3">
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-blue-500 transition text-2xl">
            Get your Referral Link
          </button>
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
          <h1 className='text-5xl text-center mt-3 italic'>Start Referring and Earning Rewards Today!</h1>
          <h1 className='text-5xl text-center font-bold mb-1'>↓ ↓ ↓ ↓</h1>
        </div>
        <div className="flex justify-center my-3">
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-blue-500 transition text-2xl">
            Start Referring Now
          </button>
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