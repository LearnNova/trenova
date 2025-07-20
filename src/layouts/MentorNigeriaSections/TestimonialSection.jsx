import React, { useState } from 'react';
import './mentornigeria.css';

const TestimonialSection = () => {
    const [showTestimonial, setShowTestimonial] = useState();
  return (
    <section className='font-poppins text-white px-2 mb-8'>
        <div className='line-breaker mt-7' />
        <div className='mt-2'>
            <h1 className='text-orange-500 font-bold mb-4 text-center underline text-7xl md:text-9xl lg:text-11xl'>Testimonials</h1>
            <div className='text-[14.88px] md:text-[19.2px] grid grid-cols-1 md:grid-cols-2 gap-5 items-start text-left'>
                <div className={`p-3.5 border border-[#8B8B8B] hover:border-[#FA8806] rounded-md bg-[#25242A] w-full max-w-full transition-all duration-200 overflow-hidden ${showTestimonial === 1 ? 'max-h-[500px]' : 'max-h-[60px]'}`}>
                    <p className={`italic ${showTestimonial === 1 ? '': 'truncate'}`}>"The training has been highly encouraging and educative, superb and it is an eye opener" -</p>
                    {showTestimonial === 1 && (<p className='mt-1 mb-2 text-orange-500 font-semibold'>Mrs. Awofadeju Dorcas, El-Bethel Private School, Lagos.</p>)}
                    <button className='text-orange-500 cursor-pointer hover:underline transition-all duration-200' onClick={()=>setShowTestimonial(prev => prev === 1 ? 0 : 1)}>{showTestimonial === 1 ? 'Read Less': 'Read More'}</button>
                </div>  
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection