import React, { useState } from 'react';
import './mentornigeria.css';

const TestimonialSection = () => {
    const [showTestimonial, setShowTestimonial] = useState();
  return (
    <section className='font-poppins text-white px-2 mb-8'>
        <div className='line-breaker mt-7' />
        <div className='mt-2'>
            <h1 className='text-orange-500 font-bold mb-4 text-center underline text-7xl md:text-9xl lg:text-11xl'>Testimonials</h1>
            <div className='text-lg md:text-xl lg:text-3xl grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-start text-left px-10'>
                <div className='p-3.5 border border-[#8B8B8B] hover:border-[#FA8806] rounded-md bg-[#25242A] w-full max-w-[340px]'>
                    <p className={`${showTestimonial === 1 ? '': 'truncate'}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nisi, optio in fuga doloribus aut nihil facilis recusandae distinctio, eligendi ipsa earum consectetur laboriosam, voluptatum ea magni ad fugiat. Odio facere mollitia, nisi non culpa neque. Veniam cupiditate accusamus officia voluptas provident modi commodi? Corrupti voluptate excepturi esse tenetur neque.</p>
                    {showTestimonial === 1 && (<p className='italic my-2 text-orange-500 font-semibold'>Ajadi Segun</p>)}
                    <p className='text-orange-500 font-medium cursor-pointer' onClick={()=>setShowTestimonial(prev => prev === 1 ? 0 : 1)}>{showTestimonial === 1 ? 'Read Less': 'Read More'}</p>
                </div>
                <div className='p-3.5 border border-[#8B8B8B] hover:border-[#FA8806] rounded-md bg-[#25242A] w-full max-w-[340px]'>
                    <p className={`${showTestimonial === 2 ? '': 'truncate'}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nisi, optio in fuga doloribus aut nihil facilis recusandae distinctio, eligendi ipsa earum consectetur laboriosam, voluptatum ea magni ad fugiat. Odio facere mollitia, nisi non culpa neque. Veniam cupiditate accusamus officia voluptas provident modi commodi? Corrupti voluptate excepturi esse tenetur neque.</p>
                    {showTestimonial === 2 && (<p className='italic my-2 text-orange-500 font-semibold'>Ajadi Segun</p>)}
                    <p className='text-orange-500 font-medium cursor-pointer' onClick={()=>setShowTestimonial(prev => prev === 2 ? 0 : 2)}>{showTestimonial === 2 ? 'Read Less': 'Read More'}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection