const SchoolCareQuiz = () => {

    const quizDetails = [
        {
            name: 'question_1',
            question: 'Are you currently employed?',
            text: <>School Support Partners businesses are designed to be <span className="font-semibold">manager-run</span>, meaning you don’t have to be present every day. However, it’s <span className="font-semibold">not an absentee business</span> - our most successful owners often start while keeping their jobs and transition to full-time ownership over time.</>
        },
        {
            name: 'question_2',
            question: 'Are you willing to follow a proven system?',
            text: <>Success in business often comes from <span className="font-semibold">following a well-structured system</span>. With over <span className="font-semibold">15 years of refinement</span>, the School Support Partners model is designed to eliminate guesswork so you can hit the ground running.</>
        },
        {
            name: 'question_3',
            question: 'Do you want to work for yourself?',
            text: <>Tired of the corporate grind? School Support Partners offers a <span className="font-semibold">clear path to entrepreneurship</span>, giving you the freedom to transition from working "for the man" to <span className="font-semibold">being in charge of your own success</span>!</>
        },
        {
            name: 'question_4',
            question: 'Do you have experience managing people?',
            text: <>Great! School Support Partners is a <span className="font-semibold">people-focused business</span>, and strong leadership skills will help you succeed. If you've managed teams and understand <span className="font-semibold">recruiting, training, and retention</span>, you're already ahead of the game.</>
        },
        {
            name: 'question_5',
            question: 'Have you owned a business before?',
            text: <>While prior business experience is a plus; you don’t need a background in the school industry. However, having an entrepreneurial mindset and business acumen will certainly help you thrive.</>
        },
        {
            name: 'question_6',
            question: 'Do you have the initial investment of ₦124,999 plus working capital?',
            text: <>Fantastic! The minimum initial investment for most markets is <span className="font-semibold">₦124,999</span>, along with <span className="font-semibold">liquid assets</span> for working capital. Learn more on the <span className="font-semibold">Investment Page</span>.</>
        },
    ];

    return (
      <section className="py-3" id="quiz">
        <div className='px-2 pb-4'>
              <h1 className='text-7xl md:text-9xl lg:text-13xl font-extrabold underline text-orange-500' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                  Quick Quiz:
              </h1>

              <p className='mb-4 text-lg md:text-xl lg:text-3xl font-bold'>
                Is School Support Business Ownership Right for You?
              </p>

              <p className='mb-4 text-lg md:text-xl lg:text-3xl'>
                Curious if becoming a School Support Business Owner is the right fit for you?
              </p>

              <p className='mb-4 text-lg md:text-xl lg:text-3xl' style={{color: '#ff0000'}}>
                Answer these <span className="font-bold">6 simple questions</span> to find out!
              </p>

              <ul className="list-decimal mx-7 text-lg md:text-xl lg:text-3xl font-semibold text-orange-500 space-y-4">
                {
                    quizDetails.map((quiz) => {
                        return (
                            <li>
                                {quiz.question}
                                <div className="flex font-semibold">
                                    <label className="flex items-center inline-block">
                                        <input type="radio" name={quiz.name} className="mr-2" />
                                        <span>Yes</span> 
                                    </label>
                                    <span className="font-normal mx-3">|</span>
                                    <label className="flex items-center inline-block">
                                        <input type="radio" name={quiz.name} className="mr-2" />
                                        <span>No</span> 
                                    </label>
                                </div>
                                <div className="text-white font-normal">
                                    {quiz.text}
                                </div>
                            </li>
                        );   
                    })
                }
              </ul>

            <p className='my-6 text-lg md:text-xl lg:text-3xl'>
                If you answered <span className="font-semibold">YES</span> to most of these questions, you may be an excellent fit for a School Support Business Opportunity! <a className='font-semibold text-orange-500 hover:text-white' href='#getintouch2'>Find out more today.</a>
            </p>
        </div>
      </section>
    );
  };
  
  export default SchoolCareQuiz;
  