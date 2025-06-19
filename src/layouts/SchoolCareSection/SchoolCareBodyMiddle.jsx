import SchoolCarePackages from "./SchoolCarePackages";

const SchoolCareBodyMiddle = () => {

  return (
    <section className="py-2">

      <div className="border-b border-gray-600"/>

      <div className='px-2 py-4'>
        <h1 className='text-7xl md:text-9xl lg:text-13xl font-extrabold underline' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
          Your Partnership <span className="text-orange-500">Benefits</span>
        </h1>

        <ul className="px-4 sm:px-6 list-decimal text-lg md:text-xl lg:text-3xl font-bold text-orange-500 space-y-5">
          <li>
            Seamless Onboarding Program & Continuous Learning Initiative
            <ul className="px-2 text-lg md:text-xl lg:text-3xl font-normal text-black space-y-3" style={{listStyleType: 'disc'}}>
              <li>
                <span className="font-semibold">Intensive Virtual Training</span> to equip you with the skills and strategies needed to get started quickly.
              </li>
              <li>
                <span className="font-semibold">Continuous Sales & Business Growth Training Sessions</span> to keep you ahead in the education support industry with cutting-edge insights.
              </li>
              <li>
                <span className="font-semibold">Executive Training Program in Private School Consulting & Mentorship</span> – Acquire Strategic Insights, Operational Expertise, and Proven Frameworks to Establish and Scale a High-Impact School Consulting Practice.<span className="font-semibold">(Attendance upon Invitation)</span>
              </li>
            </ul>
          </li>

          <li>
            Expert Training & Mentorship Opportunities:
            <ul className="px-2 text-lg md:text-xl lg:text-3xl font-normal text-black space-y-3" style={{listStyleType: 'disc'}}>
              <li>
                Leverage our <span className="font-semibold">School Growth Training Platform</span> to host paid training sessions for school owners and educators. Set your own pricing and retain 100% of the revenue.
              </li>
              <li>
                Enroll your clients in our <span className="font-semibold">Regular School Growth Virtual Mentorship & Coaching Program</span>, led by industry experts. You have full control over pricing and keep all earnings.
              </li>
              <li>
                <span className='font-semibold'>Turn Your Network Into Income!</span> Refer your clients to the LearnNova <span className='font-semibold'>Annual School Growth Summit</span> and pocket <span className='font-semibold'>18.5%</span> on each successful enrollment. A rewarding opportunity to support school growth while increasing your income.
              </li>
              <li>
                Get <span className="font-semibold">copies of our Private School Growth Guidebook</span> at steep discount to offer to school owners, providing them with valuable business growth strategies.
              </li>
            </ul>
          </li>

          <li>
            Get Industry-Leading Educational and Private School Growth Solutions:
            <p className="text-lg md:text-xl lg:text-3xl mb-3 text-black font-normal">Enhance learning with our <span className="font-semibold">versatile, multi-platform educational system</span>, designed for both classroom and home learning. Our system provides <span className="font-semibold">comprehensive learning content</span>, engaging exercises, and structured assessments to support learners success. Available as a <span className="font-semibold">desktop and laptop application</span> for schools and a mobile app for home use — fully compatible with <span className="font-semibold">Android and iOS</span> Smartphones, <span className="font-semibold">Laptop and Desktop</span> computers.</p>

            <ol className="px-2 ml-3 text-lg md:text-xl lg:text-3xl text-black font-semibold space-y-4" style={{listStyleType: 'upper-alpha'}}>
              <li>
                <span className="text-orange-500">Key Features:</span>
                <ul className="list-none text-lg md:text-xl lg:text-3xl font-normal space-y-2">
                  <li><span className="mr-1">✅</span><span className="font-semibold">E-Library of Age- Appropriate Reading Books (KG 1 - SSS 3)</span> – <span className="font-semibold">650–950 books</span>, fostering a strong reading culture.</li>
                  <li><span className="mr-1">✅</span><span className="font-semibold">Creative & Vocational Learning</span> – Engaging courses that enhance creativity and practical skills for all age groups.</li>
                  <li className="font-semibold"><span className="mr-1">✅</span>Mathematics for Senior Secondary School – 2,400 lessons + 8,000+ exam questions.</li>
                  <li className="font-semibold"><span className="mr-1">✅</span>Diction and Phonetics (KG to Grade 6) – 540 lessons + 500+ exercises.</li>
                </ul>
              </li>

              <li>
                Distributorship Packages & Pricing
                <SchoolCarePackages />
              </li>
            </ol>
          </li> 
             
          <li>
            🌟✅Extra Partner Privileges
            <ul className="text-lg md:text-xl lg:text-3xl font-normal text-black" style={{listStyleType: 'none'}}>
              <li>✔ Leverage over 15 years of LearnNova’s leadership in education technology</li>
              <li>✔ Enjoy branding and capability development training support</li>
              <li>✔ Connect with private school associations</li>
              <li>✔ Build long-term impact and income</li>
            </ul>
          </li>

          <li style={{listStyleType: 'none'}}>
             📌 Brand & Ongoing Support:
            <p className="text-lg md:text-xl lg:text-3xl font-normal text-black">Leverage LearnNova’s 15+ years of industry leadership, plus marketing and networking support to connect with private school associations.</p>
          </li>
        </ul>

        <div className='my-4 text-lg md:text-xl lg:text-3xl'>
          <p className="font-semibold text-orange-500">✅Partners Registration:</p>
          <p>🔹 Start your journey as a <span className="font-semibold">LearnNova Network Partner</span> with a minimum of <span className="font-semibold">₦74,999</span> (for 1 subject under the Bronze Package).</p>
        </div>

        <div className='my-4 text-lg md:text-xl lg:text-3xl'>
          <p className="font-semibold text-orange-500">Invest in Your Success</p>
          <p className="font-semibold italic">Start your journey as a LearnNova School Support Partner and unlock all these benefits instantly.</p>
        </div>
      </div>
      <div className="border-b border-gray-600 mt-4"/>
    </section>
  );
};

export default SchoolCareBodyMiddle;
