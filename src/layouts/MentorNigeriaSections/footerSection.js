import React from 'react'
import './mentornigeria.css'

const FooterSection = () => {
  return (
    <section className='text-black px-2 sm:px-4' style={{background: '#FA8806'}}>
      <div className='flex md:flex-col flex-row justify-between py-3'>
        <div className='space-y-3'>
          <h3 className='text-7xl md:text-9xl lg:text-13xl font-bold'>
            LearnNova Learning Support Center,
          </h3>
          <p className='text-lg md:text-xl lg:text-3xl font-semibold'>
            A unit of TreNova Group.
          </p>
          <p className='text-lg md:text-xl lg:text-3xl'>
            7B, Ogunsiji Close, Off Allen Avenue, Ikeja, Lagos.
          </p>
        </div>

        <div className='space-y-3'>
          <h3 className='text-7xl md:text-9xl lg:text-13xl font-bold'>
            Email
          </h3>
          <p className='text-lg md:text-xl lg:text-3xl font-semibold'>
            <a  className='hover:text-white hover:underline' href='mailto:info@learnnova.ng'>info@learnnova.ng</a>
          </p>
        </div>

        <div className='space-y-3'>
          <h3 className='text-7xl md:text-9xl lg:text-13xl font-bold'>
            <a href="tel:07044086794">Contact</a>
          </h3>
          <ul className='list-none mx-0 px-0 font-semibold'>
            <li><a className='hover:text-white hover:underline' href="tel:07044086794">0704 408 6794</a></li>
            <li><a className='hover:text-white hover:underline' href="tel:09137819540">0913 781 9540</a></li>
            <li><a className='hover:text-white hover:underline' href="tel:08023781682">Whatsapp: 0802 378 1682</a></li>
          </ul>
        </div>
      </div>

      <div className='py-3 text-center text-lg md:text-xl lg:text-3xl font-semibold'>
        <a className='hover:text-white hover:underline' href='https://www.learnnova.ng' target='blank' style={{color: '#4151E5'}}>
          www.learnnova.ng
        </a>
      </div>

    </section>
    // <div>
    //   <div className='footer-section-wrapper'>
    //     <div>
    //       <div className='f-section-col'>
    //           <div className='location'><b>LearnNova Learning Support Center,</b></div>
    //           <div className='location'><b>A unit of TreNova Group.</b></div>
    //           <div className='location'>7B, Ogunsiji Close, Off Allen Avenue, Ikeja, Lagos.</div>
    //       </div>
    //       <div className='f-section-col phone'>
    //           <a href="tel:07044086794">Call Now</a>
    //           <a href="tel:07044086794"><b>0704 408 6794</b></a>
    //           <a href="tel:09137819540"><b>0913 781 9540</b></a>
    //       </div>
    //     </div>

    //     <div>
    //       <a href="tel:08023781682"><b>Whatsapp: 0802 378 1682</b></a>
    //       <div style={{color: '#4151E5', marginBottom: '10px', textAlign: 'center', marginTop: '10px', fontSize: '1.35em'}}><a href='https://www.learnnova.ng' target='blank'><b>www.learnnova.ng</b></a></div>
    //     </div>
        
    //   </div>
        
    // </div>
  )
}

export default FooterSection