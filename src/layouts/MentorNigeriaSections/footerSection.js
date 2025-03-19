import React from 'react'
import './mentornigeria.css'

const FooterSection = () => {
  return (
    <section className='text-black px-2 sm:px-4 md:px-6' style={{background: '#FA8806'}}>
      <div className='flex flex-col md:flex-row justify-between py-3 gap-4'>
        <div>
          <h3 className='text-xl md:text-3xl lg:text-5xl font-bold leading-tight'>
            LearnNova Learning Support Centre,
          </h3>
          <p className='text-lg md:text-xl lg:text-3xl font-semibold'>
            A unit of TreNova Group.
          </p>
          <p className='text-lg md:text-xl lg:text-3xl'>
            7B, Ogunsiji Close, Off Allen Avenue, Ikeja, Lagos.
          </p>
            
        </div>
        <div>
          <h3 className='text-xl md:text-3xl lg:text-5xl font-bold'>
            Email:
          </h3>
          <p className='text-lg md:text-xl lg:text-3xl font-semibold'>
            <a  className='hover:text-white underline' href='mailto:info@learnnova.ng'>info@learnnova.ng</a>
          </p>
        </div>

        <div>
          <h3 className='text-xl md:text-3xl lg:text-5xl font-bold'>
            <a href="tel:07044086794">Contact:</a>
          </h3>
          <ul className='list-none mx-0 px-0 font-semibold text-lg md:text-xl lg:text-3xl'>
            <li><a className='hover:text-white hover:underline' href="tel:07044086794">0704 408 6794</a></li>
            <li><a className='hover:text-white hover:underline' href="tel:09137819540">0913 781 9540</a></li>
            <li><a className='hover:text-white hover:underline' href="tel:08023781682">Whatsapp: 0802 378 1682</a></li>
          </ul>
        </div>
      </div>

      <div className='pt-3 pb-5 text-center text-lg md:text-xl lg:text-3xl font-bold'>
        <a className='text-gray-800 hover:text-white underline' href='https://www.learnnova.ng' target='blank'>
          www.learnnova.ng
        </a>
      </div>

    </section>
  )
}

export default FooterSection