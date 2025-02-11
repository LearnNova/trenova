import React from 'react'
import './mentornigeria.css'

const FooterSection = () => {
  return (
    <div>
      <div className='footer-section-wrapper'>
        <div>
          <div className='f-section-col'>
              <div className='location'><b>TreNova Limited.</b></div>
              <div className='location'>7B, Ogunsiji Close, Off Allen Avenue, Ikeja, Lagos.</div>
          </div>
          <div className='f-section-col phone'>
              <a href="tel:07044086794">Call Now</a>
              <a href="tel:07044086794"><b>0704 408 6794</b></a>
              <a href="tel:09137819540"><b>0913 781 9540</b></a>
          </div>
        </div>

        <div>
          <a href="tel:07044086794"><b>Whatsapp: 0704 408 6794</b></a>
          <div style={{color: '#4151E5', marginBottom: '10px', textAlign: 'center', marginTop: '10px', fontSize: '1.35em'}}><a href='https://www.learnnova.ng' target='blank'><b>www.learnnova.ng</b></a></div>
        </div>
        
      </div>
        
    </div>
  )
}

export default FooterSection