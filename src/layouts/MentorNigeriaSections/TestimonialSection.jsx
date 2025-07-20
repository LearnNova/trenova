import React, { useState } from 'react';
import './mentornigeria.css';

const testimonialsList = [
    {
        testimonial: <>“It is quality assurance and marketing eye opener.”</>,
        author: <>Mr. Somorin Mathew Adekunle, Proprietor, Teresa Basic & High School.</>,
    }
];

const TestimonialSection = () => {
    const [showTestimonial, setShowTestimonial] = useState(null);
  return (
    <section className='font-poppins text-white px-2 md:px-4 mb-10' id='testimonials'>
        <div className='line-breaker mt-7' />
        <div className='mt-2 space-y-4'>
            <h1 className='text-orange-500 font-bold text-center text-5xl md:text-9xl lg:text-11xl'>⭐️⭐️<span className='underline'>TESTIMONIALS</span>⭐️⭐️</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-start text-left text-[16.2px] md:text-[20.2px]'>
                {testimonialsList.map((item, index) => (
                    <div key={index} className={`p-3.5 border border-[#8B8B8B] hover:border-[#FA8806] rounded-md bg-[#25242A] w-full max-w-full transition-all duration-500 overflow-hidden ${showTestimonial === index ? 'max-h-screen' : 'max-h-[100px]'}`}>
                        <p className={`${showTestimonial === index ? '': 'truncate'}`}>💎 <span className='italic'>{item.testimonial}</span> -</p>
                        {showTestimonial === index && (<p className='mt-1 mb-2 text-orange-500 font-semibold'>{item.author}</p>)}
                        <button className='text-orange-500 cursor-pointer hover:underline transition-all duration-200' onClick={()=>setShowTestimonial(prev => prev === index ? null : index)}>{showTestimonial === index ? 'Read Less': 'Read More'}</button>
                </div> 
                ))} 
            </div>
            <div className='flex items-center justify-center text-3xl md:text-5xl lg:text-7xl'>
                <a className='text-orange-500 font-semibold cursor-pointer hover:underline transition-all duration-200' href='https://t.me/trenovagrouptestimonials'>👉 See All Testimonials</a>
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection