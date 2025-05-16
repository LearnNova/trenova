import { list } from "postcss";
import React, { useState } from "react";

const pricingPlans = [
  {
    title: "📘 Plan 1: School Learning Essentials",
    price: null,
    pricInfo: {
      title: 'Select the Subject(s) That Best Fit Your School’s Needs:',
      lists: [
        <><span className="font-semibold">Senior Secondary Mathematics – ₦49,999 per term</span><span className="block ml-2">2,400+ comprehensive video lessons plus 8,000 questions & answers</span></>,
        <><span className="font-semibold">Diction & Phonics for Elementary – ₦49,999 per term</span><span className="block ml-2">540 interactive lessons with 500 practice exercises</span></>,
        <><span className="font-semibold">E-Library (Ages 3–17) – ₦49,999 per term</span><span className="block ml-2">Access to 850+ carefully curated reading books from KG1 to SSS3</span></>,
        <><span className="font-semibold">Creative & Vocational Subjects – ₦49,999 per term</span><span className="block ml-2">Hands-on, practical topics designed for learners aged 3–17</span></>,
      ]
    },
    includes: [
      <>Includes the <span className='font-semibold'>School Learning Support Studio License</span> with engaging, multimedia lessons across core subjects.</>,
    ],
    bestFor: <>Ideal for schools beginning their digital learning journey.</>,
    featuresTitle: 'Extra Features & Exclusive Benefits',
    features: [
      <>Enroll in 2 courses and receive <span className="font-semibold">1 additional course free</span></>,
      <>Enjoy <span className="font-semibold">offline access</span> after initial setup</>,
      <>Designed with a <span className="font-semibold">simple, user-friendly interface</span> for both teachers and learners</>,
      <>Includes <span className="font-semibold">free onboarding and installation support</span></>,
    ],
  },
  {
    title: "📗 Plan 2: Starter Connect",
    price: null,
    pricInfo: {
      title: '✅ Subjects Included:',
      lists: [
        <>Senior Secondary Mathematics - (2,400+ comprehensive video lessons plus 8,000 questions & answers)</>,
        <>Diction & Phonetics for Elementary School pupils - (540 interactive lessons with 500 practice exercises)</>,
        <>E-Library of reading books for Elementary and Secondary School - (850+ carefully curated reading books for ages 3 to 17)</>,
      ]
    },
    includes: [
      <>Includes full access to the LearnNova Home Learning App, available on Android smartphones, laptop and desktop</>,
    ],
    bestFor: <>Extend learning to the home with flexible Home Learning Licenses</>,
    featuresTitle: 'Extra Benefits',
    features: [
      <>Priority tech support</>,
      <>Access to School Growth forms + printable guides</>,
      <><span className="font-semibold">Referral Bonus:</span> Get 20 extra learners licenses for every school you refer to LearnNova</>,
    ],
  },
  {
    title: "📕 Plan 3: Growth Connect",
    price: "₦474,999",
    priceInfo: null,
    includes: [
      <>1 School Learning Studio License with access to</>,
      <>Senior Secondary Mathematics,</>,
      <>Diction & Phonetics for Elementary School</>,
      <>E-Library (ages 3–17) and</>,
      <>Creative & Vocational Subjects (ages 3–17)</>,
      <><span className="font-semibold">500</span> Home Learning App Licenses for pupils and students</>,
    ],
    bestFor: <>Ideal for large or multi-campus schools seeking full digital learning integration</>,
    featuresTitle: 'Exclusive Bonuses',
    features: [
      <>Free access to <span className="font-semibold">TreNova Academy Online Training</span></>,
      <>Invitation to <span className="font-semibold">Virtual Mentorship & School Growth Coaching Sessions</span></>,
      <>Dedicated support manager for your school</>,
      <><span className="font-semibold">Referral Incentive:</span> Introduce another school to LearnNova and earn <span className="font-semibold">20 additional</span> pupils/student Home Learning Licenses at no cost.</>,
      <><span className="font-semibold">VIP Access:</span> Got ideas? Suggest new creative or vocational skills you'd love to see added to LearnNova!</>,
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
          <p className="mb-5">✓ All-inclusive, value-packed solutions</p>

          <div className="max-w-6xl">
            <p className="mb-5 font-bold">Transform Learning with the LearnNova Learning Support System</p>
            <p className="mb-5 italic">Give your school the tools it needs to succeed in today’s digital-first environment.</p>
            <p className="mb-5">The <span className="font-semibold">School Essential Plan</span> features the powerful <span className="font-semibold">LearnNova School Learning Support Studio</span>—a complete platform designed to enhance classroom instruction, boost learner performance, and support school revenue growth.</p>
            <p className="mb-5">Ready to expand learning beyond the school walls? The <span className="font-semibold">Growth Connect Plan</span> include the <span className="font-semibold">LearnNova Home Learning Licenses</span>, allowing pupils/students to continue learning at their convenience—after school, on weekends, or during holidays—using our easy-to-use app available on desktops, laptops, and Android devices.</p>
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
                {plan.title === "📘 Plan 3: Growth Connect" && (
                  <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="text-3xl lg:text-5xl font-bold deep-purple mb-2">
                  {plan.title}
                </h3>
                {plan.price && (
                  <p className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                    {plan.price}
                  </p>
                )}
                <p className="italic text-lg md:text-xl lg:text-3xl mb-3">{plan.bestFor}</p>

                {isExpanded && (
                  <>
                    <h4 className="text-lg md:text-xl lg:text-3xl text-left font-semibold deep-purple mb-2">
                      ✅ What You Get:
                    </h4>
                    <ul className="text-lg md:text-xl lg:text-3xl text-left mb-4 red-text font-semibold space-y-2">
                      {plan.includes.map((item, i) => (
                        <li key={i}>✔️ {item}</li>
                      ))}
                    </ul>
                    {plan.pricInfo && (
                      <>
                        <h4 className="text-lg md:text-xl lg:text-3xl text-left font-semibold deep-purple mb-2">
                          {plan.pricInfo.title}
                        </h4>

                        <ul className="text-lg md:text-xl lg:text-3xl text-left space-y-2 list-decimal mb-5">
                          {plan.pricInfo.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </>
                      
                    )}
                    <h4 className="text-lg md:text-xl lg:text-3xl text-left font-semibold deep-purple mb-2">
                      {plan.featuresTitle}:
                    </h4>
                    <ul className="text-lg md:text-xl lg:text-3xl text-left space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                    <p className="font-semibold italic text-base-8 md:text-lg lg:text-xl mt-5" style={{color: '#5a5959'}}>🚀 Ready to Scale Learning, Increase Revenue, and Achieve Greater Impact?</p>
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
