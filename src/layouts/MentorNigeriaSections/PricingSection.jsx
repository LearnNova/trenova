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
                className="border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
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
