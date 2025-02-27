import availableTerritories from "./availableTerritories";

const SchoolCareBodyTop = () => {

  return (
    <section className="py-2">
        <div className="mx-2 p-2 border rounded-md border-gray-600 flex flex-col items-center text-center" style={{background: '#25242a'}}>
            <h1 className='text-7xl md:text-9xl lg:text-13xl font-extrabold uppercase' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                TERRITORIES, WHAT YOU GET & INVESTMENT
            </h1>
            <p className='mb-4 text-lg md:text-xl lg:text-3xl'>
                School Support Partners has room to grow in many markets. Check out what territories in Nigeria are open for investment.
            </p>

            <a className='text-lg md:text-xl lg:text-3xl font-extrabold capitalize text-orange-500 hover:underline hover:text-white' href='#territories' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                View Open Territories
            </a>
        </div>

        <div className="px-2 py-10 border flex flex-col items-center text-center">
            <h1 className='text-7xl md:text-9xl lg:text-13xl font-extrabold uppercase' style={{fontFamily: 'Big Shoulders Display, sans-serif'}} id="schoolbusinessopportunity">
                IS A SCHOOL SURPORT PARTNERS BUSINESS OPPORTUNITY RIGHT FOR YOU?
            </h1>
            <p className='mb-4 text-lg md:text-xl lg:text-3xl'>
                As a School <a className='font-extrabold text-orange-500 hover:underline hover:text-white' href="#quiz">Support Owner-Operator Business Partner</a>, you’ll have the independence of running your own business while benefiting from the credibility and resources of a nationally recognized brand in the private school sector. Enjoy the freedom of entrepreneurship with the backing you need to thrive.
            </p>

            <a className='text-lg md:text-xl lg:text-3xl font-extrabold capitalize text-orange-500 hover:underline hover:text-white' href='#quiz' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                Find Out More
            </a>
        </div>

        <div className="border-b border-gray-600"/>

        <div className='px-2 py-4'>
            <h1 className='text-7xl md:text-9xl lg:text-13xl font-extrabold text-center' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                The School Support Partners <span className='text-orange-500'>Advantage</span>
            </h1>
            <p className='mb-4 text-lg md:text-xl lg:text-3xl'>
                What sets us apart? We lead the industry in nearly every category, giving our partners a significant competitive edge.
            </p>

            <a className='text-lg md:text-xl lg:text-3xl font-extrabold text-orange-500 hover:underline hover:text-white' href='#schoolsupportadvantage' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                [See the Advantages]
            </a>
        </div>

        <div className="px-2 py-10 border flex flex-col items-center text-center">
            <h1 className='text-7xl md:text-9xl lg:text-13xl font-extrabold' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                What Makes a Great School Support Partners Operator?
            </h1>
            <p className='mb-4 text-lg md:text-xl lg:text-3xl'>
                Our operators come from diverse backgrounds, but they share a common goal—being proactive, dynamic leaders who leverage a proven business system to build their legacy.
            </p>

            <a className='text-lg md:text-xl lg:text-3xl font-extrabold capitalize text-orange-500 hover:underline hover:text-white' href='#greatschoolsupportoperator' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                [Learn More]
            </a>
        </div>

        {/* <div className='px-2 py-4'>
            <h1 className='text-7xl md:text-9xl lg:text-13xl font-extrabold text-center text-orange-500' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                Customer Stories
            </h1>
            <p className='mb-4 text-lg md:text-xl lg:text-3xl'>
                Discover why investors chose School Support Partners, the nation’s leading brand in private school growth.
            </p>

            <a className='text-lg md:text-xl lg:text-3xl font-extrabold text-orange-500 hover:underline hover:text-white' href='#a' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                [Read Their Stories]
            </a>
        </div> */}

        <div className="border-b border-gray-600"/>

        <div className='px-2 py-4'>
            <p className='mb-4 text-3xl md:text-5xl lg:text-7xl'>
                Learn more about the financial, personal benefits, and geographic requirements <span className='font-semibold text-orange-500 hover:text-white'>below</span>.
            </p>

            <table className="table-auto border-collapse border border-gray-400 w-full">
                <tbody className="text-lg md:text-xl lg:text-3xl">
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">Termly Subscription Fee Per School</td>
                        <td className="border border-gray-400 px-4 py-2 font-bold">₦124,999</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="text-black border border-gray-400 px-4 py-2">School <span className="font-bold text-orange-500">Support Partners</span> Net Revenue Per School (60%)</td>
                        <td className="text-black border border-gray-400 px-4 py-2 font-bold">₦75,000</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">One Week Set-up Training & e-Flier for Marketing</td>
                        <td className="border border-gray-400 px-4 py-2 font-bold underline text-orange-500">FREE</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="text-black border border-gray-400 px-4 py-2">Intending School Support Business Owner must live in an open geographic market</td>
                        <td className="text-black border border-gray-400 px-4 py-2 font-bold"><a className="text-orange-500 hover:underline hover:text-black" href="#a">See Available Territories Below</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className='my-10 mx-2 p-2 border rounded-md border-gray-600' style={{background: '#25242a'}} id="territories">
            <h1 className='text-7xl md:text-9xl lg:text-13xl uppercase font-extrabold text-orange-500 underline' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                AVAILABLE TERRITORIES
            </h1>

            <ul className="list-decimal mx-6 text-lg md:text-xl lg:text-3xl uppercase">
                {
                    availableTerritories.map((territory)=> {
                        return (
                            <li key={territory.value}>{territory.name}</li>
                        );
                        
                    })
                }
            </ul>
        </div>

    </section>
  );
};

export default SchoolCareBodyTop;
