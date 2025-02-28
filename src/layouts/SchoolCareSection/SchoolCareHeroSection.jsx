import bannerImg from './schoolcareheroimg.webp';

const SchoolCareHeroSection = () => {

  return (
    <section className='md:mt-16'>
        <div className="relative h-[85vh] overflow-hidden" id='hero'>
            <img 
                src={bannerImg}
                alt="Hero Section" 
                className="w-full h-full object-cover"
            />
            <div className="absolute top-[70%] sm:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full p-2">
                <h1 className='text-29xl lg:text-77xl font-extrabold text-orange-500' style={{fontFamily: 'Big Shoulders Display, sans-serif', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)"}}>
                    School Support Partners
                </h1>
                <p className='text-9xl md:text-13xl lg:text-21xl font-medium bg-black' style={{ fontFamily: 'Satisfy, serif', textShadow: "3px 3px 6px rgba(27, 9, 9, 0.6)", color: 'rgb(251, 255, 0)', backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
                    Your Partner in Wealth Creation
                </p>
            </div>
        </div>

        <div className='px-2 py-4'>
            <h1 className='text-7xl md:text-9xl lg:text-13xl font-extrabold' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                Build Your <span className='text-orange-500'>Legacy</span>
            </h1>
            <p className='mb-4 text-lg md:text-xl lg:text-3xl'>
                Unlock Exclusive Private School Support Business Opportunities with School Support Partners.
            </p>

            <a className='text-lg md:text-xl lg:text-3xl font-extrabold uppercase text-orange-500 hover:underline hover:text-white' href='#schoolbusinessopportunity' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                learn more
            </a>
        </div>

        <div className='px-2 py-4 border-t border-gray-600'>
            <h1 className='text-13xl md:text-17xl lg:text-21xl font-extrabold' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                Start Your <span className='text-orange-500'>Journey</span> 
            </h1>

            <p className='mb-4 text-3xl md:text-5xl lg:text-7xl'>
                ...Become a School Support Business Professional Today!
            </p>
        </div>
    </section>
    

  );
};

export default SchoolCareHeroSection;
