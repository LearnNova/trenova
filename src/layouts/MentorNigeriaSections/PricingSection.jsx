import React, { useState } from "react";

const pricingPlans = [
  {
    title: "📘 Plan 1: School Learning Essentials",
    price: "₦99,999",
    includes: [
      "1 School Learning Support Studio License",
      "20 Home Learning Device Licenses for pupils/students",
    ],
    bestFor: "Ideal for schools just getting started with digital learning.",
    features: [
      "Engaging multimedia lessons: Diction & Phonics for Elementary School, Senior Secondary School Mathematics, Creative/Vocational Subjects, and a rich E-Library of reading books for ages 3–17",
      "Learners/Teacher-friendly interface",
      "Offline Learning - (No internet needed after setup)",
      "Free onboarding & installation guide",
    ],
  },
  {
    title: "📗 Plan 2: Starter Connect",
    price: "₦149,999",
    includes: [
      "1 School Learning Support Studio License",
      "60 Home Learning Device Licenses",
    ],
    bestFor: "Perfect for small to mid-sized schools ready to bridge school and home learning.",
    features: [
      "All features in Essentials",
      "Basic admin usage reports",
      "Referral Bonus: Get 20 extra student licenses when you refer a school to LearnNova!",
    ],
  },
  {
    title: "📘 Plan 3: Growth Connect",
    price: "₦199,999",
    includes: [
      "1 School Learning Support Studio License",
      "100 Home Learning App Licenses for pupils/students",
    ],
    bestFor: "Designed for growing schools seeking broader impact.",
    features: [
      "All Starter Connect benefits",
      "Priority tech support",
      "Access to School Growth forms+ printable guides",
      "Free access to TreNova Academy Online Training",
    ],
  },
  {
    title: "📙 Plan 4: Expansion Connect",
    price: "₦274,999",
    includes: [
      "Best suited for schools with multiple units setups.",
      "200 Home Learning App Licenses for pupils/students",
    ],
    bestFor: "Multi-class setups or multi-campus schools",
    features: [
      "All Growth Connect benefits",
      "Monthly student progress snapshots",
      "Custom usage reports for school admins",
      "Virtual school growth mentorship & coaching access",
    ],
  },
  {
    title: "📕 Plan 5: Premium Impact",
    price: "₦474,999",
    includes: [
      "1 School Learning Support Studio License",
      "500 Home Learning App Licenses for pupils/students",
    ],
    bestFor: "Ideal for large or multi-campus schools aiming for full-scale digital learning integration.",
    features: [
      "All Expansion Connect benefits",
      "Dedicated support manager",
      "Gain the exclusive opportunity to propose new creative and vocational skills for LearnNova to develop",
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
            Your Smart, Scalable Solution for Impact-Driven Learning!
          </p>

          <p className="font-bold mb-5">
            Affordable. Flexible. Purpose-built to boost learning outcomes and school profitability.
          </p>

          <p>🎯 Choose a Plan That Works for Your School</p>
          <p>✓ Per Term Pricing |</p>
          <p className="mb-5">✓ All-Inclusive Packages</p>

          <p className="max-w-6xl mb-5">
            All plans come with access to the powerful LearnNova School Learning Support Studio—your all-in-one hub for enhancing teaching and boosting pupils/students achievement. You’ll also receive <span className="font-semibold">25 to 500</span> LearnNova Home Learning licenses, enabling learners to continue learning beyond the classroom using our easy-to-use app on Desktop, Laptop, and Android devices.
          </p>

        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {pricingPlans.map((plan, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                {plan.title === "📙 Plan 4: Expansion Connect" && (
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
