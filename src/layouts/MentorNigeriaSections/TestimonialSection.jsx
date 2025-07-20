import React, { useState } from 'react';
import './mentornigeria.css';

const TestimonialSection = () => {
    const [showTestimonial, setShowTestimonial] = useState();
  return (
    <section className='font-poppins text-white px-2 mb-10' id='testimonialSection'>
        <div className='line-breaker mt-7' />
        <div className='mt-2 text-[15.2px] md:text-[20.2px] space-y-4'>
            <h1 className='text-orange-500 font-bold text-center underline text-7xl md:text-9xl lg:text-11xl'>⭐️⭐️⭐️TESTIMONIALS⭐️⭐️⭐️</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-start text-left'>
                <div className={`p-3.5 border border-[#8B8B8B] hover:border-[#FA8806] rounded-md bg-[#25242A] w-full max-w-full transition-all duration-200 overflow-hidden ${showTestimonial === 1 ? 'max-h-[700px]' : 'max-h-[100px]'}`}>
                    <p className={`${showTestimonial === 1 ? '': 'truncate'}`}>💎 <span className='italic'>“It is quality assurance and marketing eye opener.”</span> -</p>
                    {showTestimonial === 1 && (<p className='mt-1 mb-2 text-orange-500 font-semibold'>Mr. Somorin Mathew Adekunle, Proprietor, Teresa Basic & High School.</p>)}
                    <button className='text-orange-500 cursor-pointer hover:underline transition-all duration-200' onClick={()=>setShowTestimonial(prev => prev === 1 ? 0 : 1)}>{showTestimonial === 1 ? 'Read Less': 'Read More'}</button>
                </div>  
            </div>
            <a className='text-orange-500 font-semibold cursor-pointer hover:underline transition-all duration-200 mx-auto text-center' href='https://t.me/trenovagrouptestimonials'>👉 See All Testimonials</a>
        </div>
    </section>
  )
}

export default TestimonialSection