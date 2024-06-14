import React from 'react'
import '../mentornigeria.css'

const FooterSection = () => {
  return (
    <div>
        <div className='footer-section-wrapper'>
          
            <div className='f-section-col'>
                  
                  <div className='location'>LearnNova Learning Support Centre, A member of TreNova Group.</div>
                  <div className='location'>7B, Ogunsiji Close, Off Allen Avenue, Ikeja, Lagos.</div>
                  <a href="tel:08179361381"><b>0817 936 1381 (Whatsapp-Only)</b></a>
                  <div style={{color: '#4151E5'}}><a href='https://www.learnnova.ng' target='blank'><b>www.learnnova.ng</b></a></div>
              </div>
              <div className='f-section-col phone'>
                  <a href="tel:08179361381">Call Now</a>
                  <a href="tel:09137819540"><b>0913 781 9540</b></a>
                  <a href="tel:07044086794"><b>0704 408 6794</b></a>
                  <a href="tel:09093930074"><b>0909 3930074</b></a>
  
              </div>
            
        </div>
    </div>
  )
}

export default FooterSection