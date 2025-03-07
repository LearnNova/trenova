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
                    Transform Education & Build a Profitable Business
                </h1>
                <p className='text-9xl md:text-13xl lg:text-21xl font-medium bg-black' style={{ fontFamily: 'Satisfy, serif', textShadow: "3px 3px 6px rgba(27, 9, 9, 0.6)", color: 'rgb(251, 255, 0)', backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
                    Become a LearnNova School Support Partner
                </p>

                <a 
                className='text-lg md:text-xl lg:text-3xl font-semibold bg-orange-500 rounded-md text-white hover:bg-gray-800 shadow-md py-2 px-3 mt-3 cursor-pointer' 
                style={{display: 'inline-block'}}
                href='#getintouch1'
                >
                    Enrol Now
                </a>
            </div>
        </div>

        {/* <div className='px-2 py-4'>
            <h1 className='text-7xl md:text-9xl lg:text-13xl font-extrabold' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                Elevate Your <span className='text-orange-500'>Impact</span>
            </h1>
            <p className='mb-4 text-lg md:text-xl lg:text-3xl'>
                Unlock Exclusive Opportunities to Grow and Support Private Schools with the LearnNova School Success Network.
            </p>

            <a className='text-lg md:text-xl lg:text-3xl font-extrabold uppercase text-orange-500 hover:underline hover:text-white' href='#schoolbusinessopportunity' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                learn more
            </a>
        </div> */}

        <div className='px-2 py-4'>
            {/* <h1 className='text-13xl md:text-17xl lg:text-21xl font-extrabold' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                Start Your <span className='text-orange-500'>Journey</span> 
            </h1> */}

            <p className='mb-4 text-3xl md:text-5xl lg:text-7xl italic'>
                Join a powerful network dedicated to enhancing education and empowering schools across Nigeria while unlocking new revenue opportunities for yourself.
            </p>

            <a className='text-lg md:text-xl lg:text-3xl font-extrabold uppercase text-orange-500 hover:underline hover:text-white' href='#schoolbusinessopportunity' style={{fontFamily: 'Big Shoulders Display, sans-serif'}}>
                learn more
            </a>
        </div>
    </section>
    

  );
};

export default SchoolCareHeroSection;
