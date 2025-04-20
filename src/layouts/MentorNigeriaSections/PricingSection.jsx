import React, { useState } from "react";

const pricingPlans = [
  {
    title: "School Learning Essentials",
    price: "₦74,999",
    includes: ["1 School Learning Support Studio License"],
    bestFor: "Schools starting their digital learning journey",
    features: [
      "High-quality multimedia lessons for Diction and Phonetic for Elementary School, Mathematics for Senior Secondary School, E-Library for all classes, and Creative/Vocational courses for ages 3 to 17",
      "Easy-to-use teacher interface",
      "No internet required once installed",
      "Free onboarding & installation guide",
    ],
  },
  {
    title: "Starter Connect",
    price: "₦126,999",
    includes: [
      "1 School Learning Support Studio License",
      "35 LearnNova Home Learning Mobile App Licenses",
    ],
    bestFor: "Small to mid-size schools wanting to connect school and home",
    features: [
      "All Essentials features",
      "Offline home learning access",
      "Basic usage reports for school admin",
      "Referral Rewards - Free enrollment for 20 additional pupils for every referred school",
    ],
  },
  {
    title: "Growth Connect",
    price: "₦146,999",
    includes: [
      "1 School Learning Support Studio License",
      "50 LearnNova Home Learning Mobile App Licenses",
    ],
    bestFor: "Expanding schools aiming for broader reach",
    features: [
      "All Starter Connect features",
      "Priority tech support",
      "Staff training videos & printable user guides",
      "TreNova Academy Online Training Access",
    ],
  },
  {
    title: "Expansion Connect",
    price: "₦199,999",
    includes: [
      "1 School Learning Support Studio License",
      "100 LearnNova Home Learning Mobile App Licenses",
    ],
    bestFor: "Multi-class setups or multi-campus schools",
    features: [
      "All Growth Connect features",
      "Monthly learning progress snapshots",
      "Custom learner usage reports",
      "Virtual school growth mentorship and coaching sessions",
    ],
  },
  {
    title: "Premium Impact",
    price: "₦274,999",
    includes: [
      "1 School Learning Support Studio License",
      "200 LearnNova Home Learning Mobile App Licenses",
    ],
    bestFor: "Large schools or school groups looking for full-scale deployment",
    features: [
      "All Expansion Connect features",
      "Dedicated support manager",
      "Quarterly impact report & optimization session",
      "Parent & teacher engagement toolkit",
      "Propose new creative/vocational skills for LearnNova to develop",
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
        <h2 className="text-7xl md:text-9xl lg:text-13xl font-bold text-gray-800 mb-4">
          Choose the Plan That Fits Your School’s Needs – Per Term Pricing
        </h2>
        <p className="text-xl lg:text-3xl max-w-6xl mx-auto mb-10">
          All plans include access to the LearnNova School Learning Support Studio, built to enhance teaching and improve learning outcomes. Plans with mobile licenses also extend learning to the home with powerful, pupil-friendly LearnNova Home Learning Apps.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {pricingPlans.map((plan, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggleCard(index)}
                className="cursor-pointer border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                {plan.title === "Growth Connect" && (
                  <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="text-3xl lg:text-5xl font-bold deep-purple mb-2">
                  {plan.title}
                </h3>
                <p className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {plan.price}
                </p>
                <p className="italic text-lg md:text-xl lg:text-3xl mb-3">{plan.bestFor}</p>

                {isExpanded && (
                  <>
                    <ul className="text-lg md:text-xl lg:text-3xl text-left mb-4 red-text font-semibold space-y-2">
                      {plan.includes.map((item, i) => (
                        <li key={i}>✔️ {item}</li>
                      ))}
                    </ul>
                    <h4 className="text-lg md:text-xl lg:text-3xl font-semibold deep-purple mb-2">
                      Features:
                    </h4>
                    <ul className="text-lg md:text-xl lg:text-3xl text-left space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                    <a
                      href='#application-form-section'
                      className="mt-6 text-white text-lg px-5 py-3 rounded-md"
                      style={{ backgroundColor: "#253bff" }}
                    >
                      Get Started
                    </a>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* <div className="mt-16 bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            Let’s Help You Scale Learning and Boost School Profitability
          </h3>
          <p className="text-gray-700 mb-6">
            LearnNova Learning Support System – Where Innovation Meets Education.
          </p>
          <p className="text-gray-800 font-semibold mb-2">Contact Us to Get Started Today!</p>
          <div className="text-gray-700 space-y-1">
            <p><strong>Phone/WhatsApp:</strong></p>
            <ul>
              <li>- 0802 378 2682</li>
              <li>- 0704 408 6794</li>
              <li>- 0913 781 9540</li>
            </ul>
            <p><strong>Email:</strong> info@learnnova.ng</p>
            <p><strong>Website:</strong> <a href="https://www.learnnova.ng" className="text-blue-600 underline">www.learnnova.ng</a></p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PricingSection;