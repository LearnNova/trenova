import React, { useState } from "react";

const pricingPlans = [
  {
    title: "📘 Plan 1: School Learning Essentials",
    price: null,
    pricInfo: [],
    includes: [
      <>✅ Includes the <span className='font-semibold'>School Learning Support Studio License</span> with engaging, multimedia lessons across core subjects.</>,
    ],
    bestFor: <>Ideal for schools beginning their digital learning journey.</>,
    featuresTitle: 'Additional Features',
    features: [
      <>Simple, teacher and learner-friendly interface</>,
      <>Offline access after initial installation</>,
      <>Complimentary onboarding and installation support</>,
    ],
  },
  {
    title: "📗 Plan 2: Starter Connect",
    price: null,
    priceInfo: [],
    includes: [
      <>Includes full access to the LearnNova Home Learning App, available on Android smartphones, laptop and desktop</>,
    ],
    bestFor: <span className="font-semibold">Extend learning to the home with flexible Home Learning Licenses</span>,
    featuresTitle: 'Extra Benefits',
    features: [
      <>Priority tech support</>,
      <>Access to School Growth forms + printable guides</>,
      <><span className="font-semibold">Referral Bonus:</span> Get 20 extra learners licenses for every school you refer to LearnNova</>,
    ],
  },
  {
    title: "📘 Plan 3: Growth Connect",
    price: "₦474,999",
    priceInfo: null,
    includes: [
      <>▪ 1 School Learning Studio License with access to</>,
      <>▪ Senior Secondary Mathematics,</>,
      <>▪ Diction & Phonetics for Elementary School</>,
      <>▪ E-Library (ages 3–17) and</>,
      <>▪ Creative & Vocational Subjects (ages 3–17)</>,
      <>▪ <span className="font-semibold">500</span> Home Learning App Licenses for pupils and students</>,
    ],
    bestFor: <span className="font-semibold">Ideal for large or multi-campus schools seeking full digital learning integration</span>,
    featuresTitle: 'Exclusive Bonuses',
    features: [
      <>Free access to <span className="font-semibold">TreNova Academy Online Training</span></>,
      <>Invitation to <span className="font-semibold">Virtual Mentorship & School Growth Coaching Sessions</span></>,
      <>Dedicated support manager for your school</>,
      <><span className="font-semibold">Referral Incentive:</span> Introduce another school to LearnNova and earn <span className="font-semibold">20 additional</span> pupils/student Home Learning Licenses at no cost.</>,
      <><span className="font-semibold">VIP Access:</span> Got ideas? Suggest new creative or vocational skills you'd love to see added to LearnNova!</>,
    ],
  },
  // {
  //   title: "📙 Plan 4: Expansion Connect",
  //   price: "₦274,999",
  //   includes: [
  //     "Best suited for schools with multiple units setups.",
  //     "200 Home Learning App Licenses for pupils/students",
  //   ],
  //   bestFor: "Multi-class setups or multi-campus schools",
  //   features: [
  //     "All Growth Connect benefits",
  //     "Monthly student progress snapshots",
  //     "Custom usage reports for school admins",
  //     "Virtual school growth mentorship & coaching access",
  //   ],
  // },
  // {
  //   title: "📕 Plan 5: Premium Impact",
  //   price: "₦474,999",
  //   includes: [
  //     "1 School Learning Support Studio License",
  //     "500 Home Learning App Licenses for pupils/students",
  //   ],
  //   bestFor: "Ideal for large or multi-campus schools aiming for full-scale digital learning integration.",
  //   features: [
  //     "All Expansion Connect benefits",
  //     "Dedicated support manager",
  //     "Gain the exclusive opportunity to propose new creative and vocational skills for LearnNova to develop",
  //   ],
  // },
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
                    <h4 className="text-lg md:text-xl lg:text-3xl text-left font-semibold deep-purple mb-2">
                      {plan.featuresTitle}:
                    </h4>
                    <ul className="text-lg md:text-xl lg:text-3xl text-left space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                    <p className="font-semibold italic text-lg md:text-xl lg:text-3xl">🚀 Ready to Scale Learning, Increase Revenue, and Achieve Greater Impact?</p>
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
