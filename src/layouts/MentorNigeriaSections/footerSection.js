import React from 'react'
import './mentornigeria.css'

const FooterSection = ({ firstText, account, link }) => {
  return (
    <section className='text-black px-2 sm:px-4 md:px-6' style={{background: '#FA8806'}}>
      <div className='flex flex-col md:flex-row justify-between py-3 gap-4'>
        <div>
          <h3 className='text-xl md:text-3xl lg:text-5xl font-bold leading-tight'>
            {firstText === 'MentorNigeria' ? firstText : 'LearnNova'}
          </h3>
          <p className='text-lg md:text-xl lg:text-3xl font-semibold'>
            A unit of TreNova Group.
          </p>
          <p className='text-lg md:text-xl lg:text-3xl'>
            7B, Ogunsiji Close, Off Allen Avenue, Ikeja, Lagos.
          </p>
            
        </div>

        {account ? (
          <div>
            <h3 className='text-xl md:text-3xl lg:text-5xl font-bold'>
              Account Details:
            </h3>
            {/* <p className='text-lg md:text-xl lg:text-3xl font-semibold'>
              <a  className='hover:text-white underline' href='mailto:info@learnnova.ng'>info@learnnova.ng</a>
            </p> */}
            <ul className='list-none mx-0 px-0 font-semibold text-lg md:text-xl lg:text-3xl'>
              <li><span>Account Name: </span><span className='font-semibold'>Trenova Ltd</span></li>
              <li><span>Account Number: </span><span className='font-semibold'>1015524196</span></li>
              <li><span>Bank Name: </span><span className='font-semibold'>Zenith Bank</span></li>
            </ul>
        </div>
        ) : (
          <div>
            <h3 className='text-xl md:text-3xl lg:text-5xl font-bold'>
              Email:
            </h3>
            <p className='text-lg md:text-xl lg:text-3xl font-semibold'>
              <a  className='hover:text-white underline' href='mailto:info@learnnova.ng'>info@learnnova.ng</a>
            </p>
          </div>
        )}
        

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

      <div className='mt-3 mb-8 text-center text-lg md:text-xl lg:text-3xl font-bold'>
        <a className='text-gray-800 hover:text-white' href={link} target='blank'>
          👉 [{firstText}]
        </a>
      </div>

    </section>
  )
}

export default FooterSection