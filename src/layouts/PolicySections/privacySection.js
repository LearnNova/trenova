import React from 'react'
import { Link } from "react-router-dom";

import './policy.css'

const PrivacySection = () => {
  return (
    <div className='privacy-main-container'>
      <div><Link to="/">Go Back to Main Menu</Link></div>
      <div className='privacy-header-wrapper'>
        <div className='title'>Privacy Policy</div>
        <div className='date'>Last Updated: May 01, 2024</div>
      </div>
      <div className='privacy-body-wrapper'>
          <div className='text-layout introduction'>
            <div>
              This privacy notice for TreNova Limited (doing business as TreNova) ("<span className='text-bold'>we</span>," "<span className='text-bold'>us</span>," or "<span className='text-bold'>our</span>"), 
              describes how and why we might collect, store, use, and/or share ("<span className='text-bold'>process</span>") your information when 
              you use our services ("<span className='text-bold'>Services</span>"), such as when you:
            </div>
            <div className='introduction-list'>
              <ul className='text-layout'>
                <li>Visit our website at <span><a href='https://www.learnnova.ng/'>https://www.learnnova.ng</a></span>, or any website of ours that links to this privacy notice</li>
                <li>Download and use our mobile application (Learnnova), or any other application of ours that links to this privacy notice</li>
                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
              </ul>
            </div>
            <div>
              <span className='text-bold'>Questions or concerns?</span> Reading this privacy notice will help you understand your privacy rights 
              and choices. If you do not agree with our policies and practices, please do not use our Services. 
              If you still have any questions or concerns, please contact us at <span><a href='mailto:trenovaschools@gmail.com'>trenovaschools@gmail.com</a></span>.
            </div>
          </div>
          
          <div className='text-layout summary'>
              <div className='title'>SUMMARY OF KEY POINTS</div>
              <div className='text-bold'>
                This summary provides key points from our privacy notice, but you can find out more details 
                about any of these topics by clicking the link following each key point or by using our <span><a href="/">table 
                of contents</a></span> below to find the section you are looking for.
              </div>

              <div>
                <span className='text-bold'>What personal information do we process?</span> When you visit, use, or navigate our Services, 
                we may process personal information depending on how you interact with us and the Services, 
                the choices you make, and the products and features you use. Learn more about <span><a href='/'>personal information 
                you disclose to us.</a></span>
              </div>

              <div>
                <span className='text-bold'>Do we process any sensitive personal information?</span> We do not process sensitive personal information.
              </div>

              <div>
                <span className='text-bold'>Do we collect any information from third parties?</span> We do not collect any information from third parties.
              </div>

              <div>
                <span className='text-bold'>How do we process your information?</span> We process your information 
                to provide, improve, and administer our Services, communicate with you, for security and fraud 
                prevention, and to comply with law. We may also process your information for other purposes 
                with your consent. We process your information only when we have a valid legal reason to do so. 
                Learn more about how we <span><a href='/'>process your information</a></span>.
              </div>

              <div>
                <span className='text-bold'>In what situations and with which types of parties do we share personal information?</span> 
                We may share information in specific situations and with specific categories of third parties. 
                Learn more about <span><a href='/'>when and with whom we share your personal information</a></span>.
              </div>

              <div>
                <span className='text-bold'>How do we keep your information safe?</span> We have organizational and 
                technical processes and procedures in place to protect your personal information. 
                However, no electronic transmission over the internet or information storage technology can be 
                guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or 
                other unauthorized third parties will not be able to defeat our security and improperly collect, 
                access, steal, or modify your information. Learn more about <span><a href='/'>how we keep your information safe</a></span>.
              </div>

              <div>
                <span className='text-bold'>What are your rights?</span> Depending on where you are located 
                geographically, the applicable privacy law may mean you have certain rights regarding your 
                personal information. Learn more about <span><a href='/'>your privacy rights</a></span>.
              </div>

              <div>
                <span className='text-bold'>How do you exercise your rights?</span> The easiest way to exercise your 
                rights is by submitting a <span><a href="/">data subject access request</a></span>, or by contacting 
                us. We will consider and act upon any request in accordance with applicable data protection laws.
              </div>

              <div>
                Want to learn more about what we do with any information we collect? 
                <span><a href='/'> Review the privacy notice in full</a></span>.
              </div>
          </div>

          <div className='table'>
            <div className='title'>TABLE OF CONTENTS</div>
            <div className='table-list'>
              <ul className='text-layout'>
                <li><span><a href="#1">WHAT INFORMATION DO WE COLLECT?</a></span></li>
                <li><span><a href="#2">HOW DO WE PROCESS YOUR INFORMATION?</a></span></li>
                {/* <li><span><a href="#3">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></span></li>
                <li><span><a href="#4">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></span></li>
                <li><span><a href="#5">HOW LONG DO WE KEEP YOUR INFORMATION?</a></span></li>
                <li><span><a href="#6">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></span></li>
                <li><span><a href="#7">WHAT ARE YOUR PRIVACY RIGHTS?</a></span></li>
                <li><span><a href="#8">CONTROLS FOR DO-NOT-TRACK FEATURES</a></span></li>
                <li><span><a href="#9">DO WE MAKE UPDATES TO THIS NOTICE?</a></span></li>
                <li><span><a href="#10">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></span></li>
                <li><span><a href="#11">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></span></li> */}
              </ul>
            </div>
          </div>

          <div className='text-layout main-body'>
            <div id='1' className='text-layout'>
              <div className='content-title'>1. WHAT INFORMATION DO WE COLLECT?</div>

              <div className='content-sub-title'>Personal information you disclose to us.</div>

              <div><span className='text-bold'>In Short:</span> We collect personal information that you provide to us</div>

              <div>
                We collect personal information that you voluntarily provide to us when you register on the 
                Services, express an interest in obtaining information about us or our products and Services, 
                when you participate in activities on the Services, or otherwise when you contact us.
              </div>

              <div>
                <span className='text-bold'>Personal Information Provided by You.</span> The personal information 
                that we collect depends on the context of your interactions with us and the Services, 
                the choices you make, and the products and features you use. The personal information 
                we collect may include the following:
              </div>

              <div className='text-list'>
                <ul className='text-layout'>
                  <li>names</li>
                  <li>email addresses</li>
                  <li>usernames</li>
                  <li>passwords</li>
                </ul>
              </div>

              <div>
                <span className='text-bold'>Sensitive Information.</span> We do not process sensitive information.
              </div>

              <div>
              <span className='text-bold'>Application Data.</span> If you use our application(s), we also 
              may collect the following information if you choose to provide us with access or permission:
              </div>

              <div className='text-list'>
                <ul className='text-layout'>
                  <li>Mobile Device Access. We may request access or permission to certain features from your mobile 
                    device, including your mobile device's camera, storage, and other features. 
                    If you wish to change our access or permissions, you may do so in your device's settings.
                  </li>
                  <li>
                    Push Notifications. We may request to send you push notifications regarding your account or certain 
                    features of the application(s). If you wish to opt out from receiving these types of communications, 
                    you may turn them off in your device's settings.
                  </li>
                </ul>
              </div>

              <div>
                This information is primarily needed to maintain the security and operation of our application(s), 
                for troubleshooting, and for our internal analytics and reporting purposes.
              </div>

              <div>
                All personal information that you provide to us must be true, complete, and accurate, and you 
                must notify us of any changes to such personal information.
              </div>

              <div className='content-sub-title'>Information automatically collected.</div>

              <div>
                <span className='text-bold'>In Short:</span> Some information — such as your Internet Protocol (IP) 
                address and/or browser and device characteristics — is collected automatically when you visit our 
                Services.
              </div>

              <div>
                We automatically collect certain information when you visit, use, or navigate the Services. 
                This information does not reveal your specific identity (like your name or contact information) 
                but may include device and usage information, such as your IP address, browser and device 
                characteristics, operating system, language preferences, referring URLs, device name, country, 
                location, information about how and when you use our Services, and other technical information. 
                This information is primarily needed to maintain the security and operation of our Services, and 
                for our internal analytics and reporting purposes.
              </div>

              <div>
                The Information we collect includes:
              </div>

              <div className='text-list'>
                <ul className='text-layout'>
                  <li>
                    Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance 
                    information our servers automatically collect when you access or use our Services and which 
                    we record in log files. Depending on how you interact with us, this log data may include your 
                    IP address, device information, browser type, and settings and information about your activity 
                    in the Services (such as the date/time stamps associated with your usage, pages and files viewed, 
                    searches, and other actions you take such as which features you use), device event information 
                    (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
                  </li>
                  <li>
                    Device Data. We collect device data such as information about your computer, phone, tablet, 
                    or other device you use to access the Services. Depending on the device used, this device 
                    data may include information such as your IP address (or proxy server), device and application 
                    identification numbers, location, browser type, hardware model, Internet service provider and/or 
                    mobile carrier, operating system, and system configuration information.
                  </li>
                  <li>
                    Location Data. We collect location data such as information about your device's location, 
                    which can be either precise or imprecise. How much information we collect depends on the type 
                    and settings of the device you use to access the Services. For example, we may use GPS and other 
                    technologies to collect geolocation data that tells us your current location 
                    (based on your IP address). You can opt out of allowing us to collect this information either 
                    by refusing access to the information or by disabling your Location setting on your device. 
                    However, if you choose to opt out, you may not be able to use certain aspects of the Services.
                  </li>
                </ul>
              </div>

            </div>

            <div id='2' className='text-layout'>
              <div className='content-title'>2. HOW DO WE PROCESS YOUR INFORMATION?</div>

              <div>
                <span className='text-bold'>In Short:</span> We process your information to provide, improve, and 
                administer our Services, communicate with you, for security and fraud prevention, and to comply 
                with law. We may also process your information for other purposes with your consent.
              </div>

              <div>
                <span className='text-bold'>We process your personal information for a variety of reasons, 
                  depending on how you interact with our Services, including:
                </span>
              </div>

              <div className='text-list'>
                <ul className='text-layout'>
                  <li>
                    <span className='text-bold'>To facilitate account creation and authentication and otherwise 
                      manage user accounts.</span> We may process your information so you can create and log in 
                      to your account, as well as keep your account in working order.
                  </li>
                  <li>
                    <span className='text-bold'>To deliver and facilitate delivery of services to the user. </span>
                    We may process your information to provide you with the requested service.
                  </li>
                  <li>
                    <span className='text-bold'>To send administrative information to you.</span> We may process 
                    your information to send you details about our products and services, changes to our terms and 
                    policies, and other similar information.
                  </li>
                  <li>
                    <span className='text-bold'>To request feedback.</span> We may process your information when 
                    necessary to request feedback and to contact you about your use of our Services.
                  </li>
                  <li>
                    <span className='text-bold'>To post testimonials.</span> We post testimonials on our Services 
                    that may contain personal information.
                  </li>
                  <li>
                    <span className='text-bold'>To protect our Services.</span> We may process your information as 
                    part of our efforts to keep our Services safe and secure, including fraud monitoring and 
                    prevention.
                  </li>
                  <li>
                    <span className='text-bold'>To administer prize draws and competitions.</span> We may process 
                    your information to administer prize draws and competitions.
                  </li>
                  <li>
                    <span className='text-bold'>To identify usage trends.</span> We may process information about 
                    how you use our Services to better understand how they are being used so we can improve them.
                  </li>
                  <li>
                    <span className='text-bold'>To comply with our legal obligations.</span> We may process your 
                    information to comply with our legal obligations, respond to legal requests, and exercise, 
                    establish, or defend our legal rights.
                  </li>
                </ul>
              </div>


            </div>

          </div>

      </div>
    </div>
  )
}

export default PrivacySection