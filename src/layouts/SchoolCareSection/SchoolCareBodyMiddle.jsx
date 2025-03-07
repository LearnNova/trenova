const SchoolCareBodyMiddle = () => {

  return (
    <section className="py-2">

      <div className="border-b border-gray-600"/>

      <div className='px-2 py-4'>
        <h1 className='text-7xl md:text-9xl lg:text-13xl font-extrabold underline' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
          Your Partnership <span className="text-orange-500">Benefits</span>
        </h1>

        {/* <p className='mb-4 text-lg md:text-xl lg:text-3xl'>
          As a <span className='font-semibold text-orange-500'>LearnNova School Support Business Owner</span>, you gain access to industry-leading tools, training, and resources designed to help you build a thriving and profitable business. Here’s what’s included:
        </p> */}

        <ul className="list-decimal mx-7 text-lg md:text-xl lg:text-3xl font-bold text-orange-500 space-y-4">
          <li>
            Expand Learning Opportunities:
            <ul className="mx-6 text-lg md:text-xl lg:text-3xl font-normal text-white" style={{listStyleType: 'circle'}}>
              <li>
                <span className="font-semibold">Enroll 35 learners per school in our Home Learning App</span> (Android, iOS, Desktop) – free for every enrolled school.
              </li>
              <li>
                Give schools access to an <span className="font-semibold">interactive, structured learning platform</span> for students to study after school, during weekends, and holidays.
              </li>
            </ul>
            {/* <p className="text-lg md:text-xl lg:text-3xl mt-3 text-white font-normal"><span className="mr-1">✅</span><span className="font-semibold">Full Resale Rights</span> – Buy from LearnNova at <span className='font-semibold'>76.7%</span> of the standard price per unit and resell to unlimited schools at your chosen price.</p> */}
          </li>

          <li>
            Gain Expert Training & Mentorship:
            {/* <p className="text-lg md:text-xl lg:text-3xl mb-3 text-white font-normal">A <span className="font-semibold">multi-platform learning app</span> (Android, iOS, and desktop) for students to learn at home during weekends, holidays, and after school:</p> */}
            <ul className="mx-6 text-lg md:text-xl lg:text-3xl font-normal text-white" style={{listStyleType: 'circle'}}>
              <li>
                <span className="fot-semibold">Access our School Growth Training Platform</span> to conduct <span className="fot-semibold">paid training sessions</span> for school owners and educators.
              </li>
              <li>
                Enroll your clients in our <span className="font-semibold">Annual Virtual Mentorship & Coaching Sessions</span> led by seasoned professionals.
              </li>
              <li>
                Receive <span className="font-semibold">free copies of our Private School Growth Guidebook</span> to distribute to school owners.
              </li>
            </ul>
          </li>

          <li>
            Get Industry-Leading Educational and Private School Growth Products:
            <ol className="mx-6 text-lg md:text-xl lg:text-3xl font-normal text-white font-semibold" style={{listStyleType: 'upper-alpha'}}>
              <li>
                School Learning Support System:
                <ul className="list-none mx-6 text-lg md:text-xl lg:text-3xl font-normal text-white">
                  <p>A <span className="font-semibold">comprehensive desktop-based platform</span> with:</p>
                  <li><span className="mr-1">✅</span><span className="font-semibold">Mathematics</span> – 2,400 lessons + 8,000+ exam questions for Senior Secondary students.</li>
                  <li><span className="mr-1">✅</span><span className="font-semibold">Diction & Phonetics</span> – 540 lessons + 500+ exercises for Elementary pupils.</li>
                  <li><span className="mr-1">✅</span><span className="font-semibold">E-Library</span> – 650–950 books for ages 3–17, promoting a habit of reading 12–20 books per term.</li>
                  <li><span className="mr-1">✅</span><span className="font-semibold">Creative & Vocational Courses</span> – Engaging courses to enhance creativity and practical skills.</li>
                </ul>
              </li>

              <li>
                Home Learning  Application:
                <ul className="mx-6 text-lg md:text-xl lg:text-3xl font-normal text-white" style={{listStyleType: 'circle'}}>
                  <li>A <span className="font-semibold">multi-platform learning app</span> for students at home, covering <span className="font-semibold">Mathematics, Phonetics, Creative Courses, and an extensive E-Library</span>.</li>
                  <li><span className="font-semibold">Resale Rights:</span> Empower schools by reselling unlimited learner licenses at your preferred pricing.</li>
                </ul>
              </li>
            </ol>
          </li>

          <li>
            Continuous Training & Business Support:
            <ul className="mx-6 text-lg md:text-xl lg:text-3xl font-normal text-white" style={{listStyleType: 'circle'}}>
              <li>
                <span className="font-semibold">5-day Virtual Training</span> (6 hours per day) to help you hit the ground running.
              </li>
            </ul>
          </li>

          <li>
            Ongoing Business Growth Sessions:
            <ul className="mx-6 text-lg md:text-xl lg:text-3xl font-normal text-white" style={{listStyleType: 'circle'}}>
              <li>
                Designed to keep you ahead in the education sector.
              </li>
            </ul>
          </li>

          <li>
            Brand & PR Support
            <ul className="mx-6 text-lg md:text-xl lg:text-3xl font-normal text-white" style={{listStyleType: 'circle'}}>
              <li>
                Leverage LearnNova’s <span className="font-semibold">15+ years of industry leadership</span>, plus marketing and networking support to connect with private school associations.
              </li>
            </ul>
          </li>
        </ul>

        <div className='my-4 text-lg md:text-xl lg:text-3xl'>
          <p className="font-semibold">Invest in Your Success</p>
          <p>Start your journey as a <span className="font-semibold">LearnNova School Support Partner</span> for just <span className="font-semibold">₦75,000</span> and unlock all these benefits instantly.</p>
        </div>
      </div>

      {/* <div className='px-2 py-4'>
        <h1 className='text-7xl md:text-9xl lg:text-13xl font-extrabold underline' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
          Start-Up <span className="text-orange-500">Investment</span> & <span className="text-orange-500">Maintenance:</span>
        </h1>

        <table className="mt-2 table-auto border-collapse border border-gray-400 w-full">
          <tbody className="text-lg md:text-xl lg:text-3xl">
              <tr className="bg-gray-100 text-black">
                <td className="border border-gray-400 px-4 py-2">Registration Fee:</td>
                <td className="border border-gray-400 px-4 py-2 font-semibold">₦75,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">License Renewal Requirement:</td>
                <td className="border border-gray-400 px-4 py-2">A minimum of <span className="font-semibold">10 active</span> customers per year</td>
              </tr>
              <tr className="bg-gray-100 text-black">
                <td className="border border-gray-400 px-4 py-2">Working Capital:</td>
                <td className="border border-gray-400 px-4 py-2">Sufficient liquid assets to cover <span className="font-semibold text-orange-500">4 months</span> of operational costs.</td>
              </tr>
          </tbody>
        </table>

        <a className='text-lg md:text-xl lg:text-3xl font-semibold text-orange-500 hover:underline hover:text-white mt-2' href="#getintouch2">
          Enrol Now
        </a>
      </div> */}

      <div className="border-b border-gray-600 mt-4"/>
    </section>
  );
};

export default SchoolCareBodyMiddle;
