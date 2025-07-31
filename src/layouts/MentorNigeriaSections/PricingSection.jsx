// import { list } from "postcss";
import React, { useState } from "react";

const pricingPlans = [
  {
    title: "📘 Plan 1: School Learning Essentials",
    price: null,
    priceInfoPri: {
      title: 'Select the Subjects That Best Fit Your School’s Needs:',
      lists: [
        <><span className="font-semibold">E-Library of reading books for Elementary and Secondary School - </span><span className="block ml-2">(750+ carefully curated reading books for KG 1 to SSS 3)</span></>,
        <><span className="font-semibold">Creative Life Skills (KG 1 to JSS 3) - </span><span className="block ml-2">Explore over 50 hands-on, creative, and vocational topics designed to build practical skills, foster creativity, and inspire future income-generating abilities.</span></>,
        <><span className="font-semibold">Senior Secondary School Mathematics - </span><span className="block ml-2">(2,400+ comprehensive video lessons plus 8,000 questions & answers)</span></>,
        <><span className="font-semibold">Diction & Phonics for Elementary School pupils - </span><span className="block ml-2">(540 interactive lessons with 500 practice exercises)</span></>,
      ]
    },
    includes: [
      <>✔️ <span className='font-semibold'>Learning Support Studio:</span> ₦99,999 per term (per school)</>,
      <>✔️ <span className='font-semibold'>Home Learning Connect App:</span> ₦1,450 per child per term</>,
    ],
    bestFor: <>...Ideal for individual schools seeking to enrich academic performance with smart digital learning support...</>,
    featuresTitle: 'Extra Features & Exclusive Benefits',
    features: [
      <>Enjoy offline access after the initial setup</>,
      <>Designed with a simple, user-friendly interface for both teachers and learners</>,
      <>Includes free onboarding and installation support</>,
    ],
  },
  {
    title: "📗 Plan 2: SchoolConnect Reseller Plan",
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
    includes: [
      <>✔️ <span className='font-semibold'>10 Learning Support Studios:</span> ₦599,999 per term</>,
      <>✔️ <span className='font-semibold'>Home Learning Connect App:</span> ₦950 per child per term</>,
    ],
    bestFor: <>...Perfect for School Consultants, Association Leaders, and Schools with Multiple Campuses...</>,
    featuresTitle: 'Extra Benefits',
    features: [
      <>Enjoy <span className="font-semibold">offline access</span> after initial setup</>,
      <>Access to School Growth forms + printable guides</>,
      <>Priority tech support - Includes free onboarding and installation support</>,
    ],
  },
  {
    title: "📙 Plan 3: Lifetime Access – One-Time Payment",
    price: null,
    priceInfoSec: {
      title: 'Limited Time Price Offer!',
      lists: [
        <>SSS Mathematics & E-library – <span className="font-semibold">₦649,999 (One-time payment)</span></>,
        <>Diction & Phonics for Elementary School & E-library – <span className="font-semibold">₦649,999 (One-time payment)</span></>,
        <>Creative Life Skills Lessons and Activities – <span className="font-semibold">₦499,999 (One-time payment)</span></>,
      ]
    },
    priceInfoPri: { 
      title: '✅ Available Subject(s):',
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
          <span style={{color: '#000000'}} className="block mt-3 font-semibold">Diction & Phonics for Elementary School</span>
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
      <>Pay Once. Own it for life. Promo ends soon!</>,
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
                    <ul className="text-lg md:text-xl lg:text-3xl text-left mb-8 space-y-2">
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
