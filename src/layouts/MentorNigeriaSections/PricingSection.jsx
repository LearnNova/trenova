import { list } from "postcss";
import React, { useState } from "react";

const pricingPlans = [
  {
    title: "📘 Plan 1: School Learning Essentials",
    price: null,
    priceInfoPri: {
      title: 'Select the Subject(s) That Best Fit Your School’s Needs:',
      lists: [
        <>E-Library of Reading Books (For KG 1 to Basic 6, JSS 1 to 3, OR SSS 1 to 3) – <span className="font-semibold">₦89,999</span> per term</>,
        <>Creative Life Skills Lessons & Activities for KG 1 to Basic 6 OR JSS 1 to 3 – <span className="font-semibold">₦89,999</span> per Term</>,
        <>Senior Secondary Mathematics – <span className="font-semibold">₦89,999</span> per term</>,
        <>Diction & Phonics for KG 1 to Basic 5 – <span className="font-semibold">₦89,999</span> per term</>,
        <span className="font-semibold mt-3 red-text">Special Rate for Any Two Subjects: ₦129,999 per term</span>,
      ]
    },
    includes: [
      <span className="font-semibold">✔️ Includes the School Learning Support Studio License with engaging, multimedia lessons across core subjects.</span>,
    ],
    bestFor: <>Ideal for schools beginning their digital learning journey.</>,
    featuresTitle: 'Extra Features & Exclusive Benefits',
    features: [
      <>Enjoy offline access after the initial setup</>,
      <>Enroll in any 2 courses and get a <span className="font-semibold">FREE</span> annual invitation to TreNova Academy's School Growth Virtual Training</>,
      <>Designed with a <span className="font-semibold">simple, user-friendly interface</span> for both teachers and learners</>,
      <>Includes <span className="font-semibold">free onboarding and installation support</span></>,
    ],
  },
  {
    title: "📗 Plan 2: Home Learning Connect",
    price: null,
    priceInfoPri: {
      title: '✅ Subjects Included:',
      lists: [
        <><span className="font-semibold">E-Library of reading books for Elementary and Secondary School - </span><span className="block ml-2">(750+ carefully curated reading books for KG 1 to SSS 3)</span></>,
        <><span className="font-semibold">Creative Life Skills (KG 1 to JSS 3) - </span><span className="block ml-2">Explore over 50 hands-on, creative, and vocational topics designed to build practical skills, foster creativity, and inspire future income-generating abilities.</span></>,
        <><span className="font-semibold">Senior Secondary School Mathematics - </span><span className="block ml-2">(2,400+ comprehensive video lessons plus 8,000 questions & answers)</span></>,
        <><span className="font-semibold">Diction & Phonics for Elementary School pupils - </span><span className="block ml-2">(540 interactive lessons with 500 practice exercises)</span></>,
      ]
    },
    priceInfoSec: {
      title: 'Per-Term Pricing:',
      lists: [
        'One (1) Learner - ₦1,999',
        '35 Learners - ₦69,999',
        '50 Learners – ₦94,999',
        '100 Learners – ₦179,999',
        '200 Learners – ₦339,999',
        '300 Learners – ₦449,999',
        '400 Learners -  ₦519,999',
      ]
    },
    includes: [
      <span className="font-semibold">✔️ Includes full access to the LearnNova Home Learning App, available on Android and iOS Smartphones, Laptop and Desktop Computers</span>,
    ],
    bestFor: <>Extend learning to the home with flexible Home Learning Licenses</>,
    featuresTitle: 'Extra Benefits',
    features: [
      <>Enjoy <span className="font-semibold">offline access</span> after initial setup</>,
      <>Access to School Growth forms + printable guides</>,
      <>Priority tech support - Includes free onboarding and installation support</>,
    ],
  },
  {
    title: "📕 Plan 3: School + Home Learning Support Combo",
    price: '₦169,999 per term',
    priceInfoPri: {
      title: 'Includes:',
      lists: [
        <>
          <p className="font-semibold mb-3"><span style={{color: '#000000'}}>School Learning Support Studio License -</span> Get interactive, multimedia-rich lessons in any 2 of the following subjects:</p>
          <p className="font-normal"><span className="font-medium" style={{color: '#000000'}}>✔️ Extensive E-Library of Reading Books for KG 1 to SSS 3 -</span> (750+ carefully curated reading books for KG 1 to SSS3)</p>
          <p className="font-normal"><span className="font-medium" style={{color: '#000000'}}>✔️ Creative Life Skills Studies -</span> Over 50 engaging vocational and practical skill topics for learners from KG 1 to JSS 3—carefully designed to inspire, empower, and prepare them for real-life success.</p>
          <p className="font-normal"><span className="font-medium" style={{color: '#000000'}}>✔️ Senior Secondary Mathematics -</span> (2,400+ comprehensive video lessons plus 8,000 questions & answers)</p>
          <p className="font-normal"><span className="font-medium" style={{color: '#000000'}}>✔️ Elementary School Diction & Phonics -</span> (540 interactive lessons with 500 practice exercises)</p>
        </>,
        <><span className="font-semibold" style={{color: '#000000'}}>35 Home Learning App Licenses - </span>Give your pupils and students access to the LearnNova Home Learning App on Android or iOS Smartphones, Laptop or Desktop Computers —for continued learning beyond the classroom.</>,
      ]
    },
    includes: [
      <>✔️ Access to <span className="font-semibold">3 School Learning Support Studio Subjects</span>, PLUS</>,
      <>✔️ Access for <span className="font-semibold">35 Learners on the Home Learning App</span></>,
    ],
    bestFor: <>Perfect for schools looking to boost learning outcomes, increase revenue, and grow sustainably.</>,
    featuresTitle: 'Extra Benefits:',
    features: [
      <>Enjoy offline access after the initial setup</>,
      <><span className="font-semibold">FREE</span> annual invitation to TreNova Academy's School Growth Virtual Training!</>,
      <><span className="font-semibold">FREE</span> access to TreNova Academy Online Training Portal</>,
      <>Ready-to-use School Growth forms and printable planning guides</>,
      <><span className="font-semibold">Priority access to technical support - </span>Includes free onboarding and installation support</>,
      <><span className="font-semibold">Referral Reward:</span> Refer another school to LearnNova and receive 20 bonus learner licenses per successful referral.</>,
    ],
  },
  {
    title: "📙 Plan 4: Lifetime Access – One-Time Payment",
    price: null,
    priceInfoPri: {
      title: 'Limited Offer Price:',
      lists: [
        <>1 Subject – <span className="font-semibold">₦749,999</span> (One-time payment)</>,
        <>2 Subjects – <span className="font-semibold">₦1,249,999</span> (One-time payment)</>,
        <>3 Subjects – <span className="font-semibold">₦1,499,999</span> (One-time payment)</>,
      ]
    },
    priceInfoSec: { 
      title: '✅ Choose the Subject(s) That Best Fit Your School’s Needs:',
      lists: [
        <>
          <span style={{color: '#000000'}} className="block mt-3 font-semibold">Comprehensive E-Library of Age-Appropriate Reading Books (KG 1 to SSS 3)</span>
          <span className="block mt-1 font-medium">What's Included:</span>
          <ul className="list-disc ml-4 space-y-1 mb-2">
            <li>750+ age-appropriate, curated reading books</li>
            <li>Covers KG1 to SSS3</li>
          </ul>
        </>,
        <>
          <span style={{color: '#000000'}} className="block mt-3 font-semibold">Creative Life Skills Lessons and Activities</span>
          <span className="block mt-1 font-medium">What's Included:</span>
          <ul className="list-disc ml-4 space-y-1 mb-2">
            <li>Practical, hands-on lessons tailored for KG 1 to JSS 3 learners</li>
            <li>Covers diverse creative and technical areas</li>
            <li>50+ creative and vocational skills in video lessons, reading notes and activity guides</li>
          </ul>
        </>,
        <>
          <span style={{color: '#000000'}} className="block mt-2 font-semibold">Senior Secondary Mathematics</span>
          <span className="block mt-1 font-medium">What's Included:</span>
          <ul className="list-disc ml-4 space-y-1 mb-2">
            <li>2,400+ comprehensive video lessons</li>
            <li>8,000+ practice questions with answers</li>
          </ul>
        </>,
        <>
          <span style={{color: '#000000'}} className="block mt-3 font-semibold">Diction & Phonics Elementary School</span>
          <span className="block mt-1 font-medium">What's Included:</span>
          <ul className="list-disc ml-4 space-y-1 mb-2">
            <li>540 engaging lessons</li>
            <li>500 practice exercises with answers</li>
          </ul>
        </>,
      ]
    },
    includes: [
      <span className="font-semibold">✔️ Get Lifetime License to the School Learning Support Studio, with engaging multimedia lessons in any of the subjects listed below:</span>,
    ],
    bestFor: <>No Renewals. No Recurring Fees. Just Lifetime Value.</>,
    featuresTitle: 'Extra Features & Exclusive Benefits',
    features: [
      <><span className="font-semibold">Free</span> access to TreNova Academy Online Training Portal</>,
      <>Offline access available after setup</>,
      <>Simple, intuitive interface for teachers and students</>,
      <>Free onboarding and installation support included</>,
    ],
  },
];

const PricingSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-7xl md:text-9xl lg:text-13xl font-bold text-gray-800 mb-5">
          🎉 Introducing the LearnNova Learning Support System
        </h2>

        <div className="text-xl lg:text-3xl w-100 text-center">
          <p className="italic mb-5">
            Your Smart, Scalable Solution for Impact-Driven Learning
          </p>

          <p className="font-bold mb-5">
            Affordable. Flexible. Built to Improve Learning Outcomes and Boost School Profitability.
          </p>

          <p>🎯 Choose the Right Plan for Your School</p>
          <p>✓ Easy per-term pricing</p>
          <p>✓ Life-Access Purchase</p>
          <p className="mb-5">✓ All-inclusive, value-packed solutions</p>

          <div className="max-w-6xl">
            <p className="mb-5 font-bold">Transform Learning with the LearnNova Learning Support System</p>
            <p className="mb-5 italic">Give your school the tools it needs to succeed in today’s digital-first environment.</p>
            <p className="mb-5">The <span className="font-semibold">School Essential Plan</span> features the powerful <span className="font-semibold">LearnNova School Learning Support Studio</span>—a complete platform designed to enhance classroom instruction, boost learner performance, and support school revenue and profitability growth.</p>
            <p className="mb-5">Ready to expand learning beyond the school walls? <span className="font-semibold">The Growth Connect Plan</span> include the <span className="font-semibold">LearnNova Home Learning Licenses</span>, allowing pupils/students to continue learning at their convenience—after school hours, on weekends, or during holidays—using our easy-to-use app available on Android and iOS Smartphones, Laptop and Desktop Computers.</p>
          </div>

        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {pricingPlans.map((plan, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                {plan.title === "📘 Plan 3: School + Home Learning Support Combo" && (
                  <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="text-3xl lg:text-5xl font-bold deep-purple mb-2">
                  {plan.title}
                </h3>
                {plan.price && (
                  <p className="text-xl md:text-3xl lg:text-5xl font-bold red-text mb-4">
                    {plan.price}
                  </p>
                )}
                <p className="italic text-lg md:text-xl lg:text-3xl">{plan.bestFor}</p>

                {isExpanded && (
                  <>
                    <h4 className="text-lg md:text-xl lg:text-3xl text-left font-semibold deep-purple mt-8 mb-2">
                      ✅ What You Get:
                    </h4>
                    <ul className="text-lg md:text-xl lg:text-3xl text-left mb-8 red-text space-y-2">
                      {plan.includes.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    {plan.priceInfoPri && (
                      <>
                        <h4 className="text-lg md:text-xl lg:text-3xl text-left font-semibold deep-purple mb-2">
                          {plan.priceInfoPri.title}
                        </h4>

                        <ul className="text-lg md:text-xl lg:text-3xl text-left space-y-2 list-decimal mb-8">
                          {plan.priceInfoPri.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </>
                      
                    )}

                    {plan.priceInfoSec && (
                      <>
                        <h4 className="text-lg md:text-xl lg:text-3xl text-left font-semibold deep-purple mb-2">
                          {plan.priceInfoSec.title}
                        </h4>

                        <ul className="text-lg md:text-xl lg:text-3xl text-left text-gray-900 space-y-2 list-disc mb-8 ml-3">
                          {plan.priceInfoSec.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </>
                      
                    )}

                    <h4 className="text-lg md:text-xl lg:text-3xl text-left font-semibold deep-purple mb-2">
                      {plan.featuresTitle}:
                    </h4>
                    <ul className="text-lg md:text-xl lg:text-3xl text-left space-y-2 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                    <p className="font-semibold italic text-base-8 md:text-lg lg:text-xl" style={{color: '#5a5959'}}>
                      🚀 {plan.title === "📙 Plan 4: Lifetime Access – One-Time Payment" ?
                        'Make a one-time payment to unlock lifetime access—boost learning, grow revenue, and drive lasting impact.':
                        'Ready to Scale Learning, Boost Revenue, and Make a Lasting Impact?'}
                    </p>
                    <a
                      href="#application-form-section"
                      className="mt-6 text-white text-lg px-5 py-3 rounded-md inline-block"
                      style={{ backgroundColor: "#253bff" }}
                    >
                      Get Started
                    </a>
                  </>
                )}

                <button
                  onClick={() => toggleCard(index)}
                  className="mt-4 text-blue-600 underline text-lg"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
