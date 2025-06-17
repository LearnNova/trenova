import bannerImg from './schoolcareheroimg.webp';

const SchoolCareHeroSection = () => {

  return (
    <section>
        <div className='w-full flex justify-center items-center text-white'>
            <div className='flex-1 mx-0 md:mx-10 lg:mx-15 px-2 pt-2 pb-6 text-center' style={{backgroundColor: '#1C1C1C'}}>
                <h1 className='text-11xl md:text-17xl lg:text-21xl font-bold inline-block'>Join LearnNova Partners Network: Transform Education & Build a Profitable Future.</h1>
                <a 
                    className='text-lg md:text-xl lg:text-3xl font-semibold bg-orange-500 border-2  border-orange-500 rounded-md text-white hover:bg-white hover:text-orange-500 shadow-md py-2 px-3 mt-3 cursor-pointer' 
                    style={{display: 'inline-block'}}
                    href='#getintouch3'
                >
                    Enrol Now
                </a>
            </div>
        </div>
        {/* <div className="relative h-[85vh] overflow-hidden" id='hero'>
            <img 
                src={bannerImg}
                alt="Hero Section" 
                className="w-full h-full object-cover"
            />
            <div className="absolute top-[70%] sm:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full p-2">
                <h1 className='text-29xl lg:text-77xl font-extrabold text-orange-600 leading-tight' style={{fontFamily: 'Big Shoulders Display, sans-serif', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)"}}>
                    Join LearnNova Partners Network: Transform Education & Build a Profitable Future.
                </h1>
                <p className='text-9xl md:text-13xl lg:text-21xl font-medium bg-black' style={{ fontFamily: 'Satisfy, serif', textShadow: "3px 3px 6px rgba(27, 9, 9, 0.6)", color: 'rgb(251, 255, 0)', backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
                    Become a LearnNova School Support Partner
                </p>

                <a 
                className='text-lg md:text-xl lg:text-3xl font-semibold bg-orange-500 rounded-md text-white hover:bg-gray-800 shadow-md py-2 px-3 mt-3 cursor-pointer' 
                style={{display: 'inline-block'}}
                href='#getintouch3'
                >
                    Enrol Now
                </a>
            </div>
        </div> */}
        
        <div className='w-full flex justify-center items-center text-black'>
            <div className='flex-1 mx-0 md:mx-10 lg:mx-15 mt-4 mb-1 pt-2 pb-6 text-center'>
                <p className='text-3xl md:text-5xl lg:text-7xl italic'>
                Join a powerful network dedicated to enhancing education and empowering schools across Nigeria while unlocking new revenue opportunities for yourself.
            </p>
            </div>
        </div>
    </section>
    

  );
};

export default SchoolCareHeroSection;
