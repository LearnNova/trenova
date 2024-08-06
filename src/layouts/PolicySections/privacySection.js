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
                about any of these topics by clicking the link following each key point or by using our <span><a href="#table">table 
                of contents</a></span> below to find the section you are looking for.
              </div>

              <div>
                <span className='text-bold'>What personal information do we process?</span> When you visit, use, or navigate our Services, 
                we may process personal information depending on how you interact with us and the Services, 
                the choices you make, and the products and features you use. Learn more about <span><a href='#personal'>personal information 
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
                Learn more about how we <span><a href='#2'>process your information</a></span>.
              </div>

              <div>
                <span className='text-bold'>In what situations and with which types of parties do we share personal information?</span> 
                We may share information in specific situations and with specific categories of third parties. 
                Learn more about <span><a href='/#3'>when and with whom we share your personal information</a></span>.
              </div>

              <div>
                <span className='text-bold'>How do we keep your information safe?</span> We have organizational and 
                technical processes and procedures in place to protect your personal information. 
                However, no electronic transmission over the internet or information storage technology can be 
                guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or 
                other unauthorized third parties will not be able to defeat our security and improperly collect, 
                access, steal, or modify your information. Learn more about <span><a href='#6'>how we keep your information safe</a></span>.
              </div>

              <div>
                <span className='text-bold'>What are your rights?</span> Depending on where you are located 
                geographically, the applicable privacy law may mean you have certain rights regarding your 
                personal information. Learn more about <span><a href='#7'>your privacy rights</a></span>.
              </div>

              <div>
                <span className='text-bold'>How do you exercise your rights?</span> The easiest way to exercise your 
                rights is by submitting a <span><a href='https://app.termly.io/notify/810e454a-4969-44ce-a06a-e7e6c0a1112e' target='blank'>data subject access request</a></span>, or by contacting 
                us. We will consider and act upon any request in accordance with applicable data protection laws.
              </div>

              <div>
                Want to learn more about what we do with any information we collect? 
                <span><a href='#table'> Review the privacy notice in full</a></span>.
              </div>
          </div>

          <div className='table' id='table'>
            <div className='title'>TABLE OF CONTENTS</div>
            <div className='table-list'>
              <ul className='text-layout'>
                <li><span><a href="#1">WHAT INFORMATION DO WE COLLECT?</a></span></li>
                <li><span><a href="#2">HOW DO WE PROCESS YOUR INFORMATION?</a></span></li>
                <li><span><a href="#3">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></span></li>
                <li><span><a href="#4">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></span></li>
                <li><span><a href="#5">HOW LONG DO WE KEEP YOUR INFORMATION?</a></span></li>
                <li><span><a href="#6">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></span></li>
                <li><span><a href="#7">WHAT ARE YOUR PRIVACY RIGHTS?</a></span></li>
                <li><span><a href="#8">CONTROLS FOR DO-NOT-TRACK FEATURES</a></span></li>
                <li><span><a href="#9">DO WE MAKE UPDATES TO THIS NOTICE?</a></span></li>
                <li><span><a href="#10">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></span></li>
                <li><span><a href="#11">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></span></li>
              </ul>
            </div>
          </div>

          <div className='text-layout main-body'>
            <div id='1' className='text-layout'>
              <div className='content-title'>1. WHAT INFORMATION DO WE COLLECT?</div>

              <div className='content-sub-title'>Personal information you disclose to us.</div>

              <div className='text-italic'><span className='text-bold'>In Short:</span> We collect personal information that you provide to us</div>

              <div>
                We collect personal information that you voluntarily provide to us when you register on the 
                Services, express an interest in obtaining information about us or our products and Services, 
                when you participate in activities on the Services, or otherwise when you contact us.
              </div>

              <div id='personal'>
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

              <div className='text-italic'>
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

              <div className='text-italic'>
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

            <div id='3' className='text-layout'>
              <div className='content-title'>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</div>

              <div className='text-italic'>
                <span className='text-bold'>In Short:</span> We may share information in specific 
                situations described in this section and/or with the following categories of third parties.
              </div>

              <div>
                <span className='text-bold'>Vendors, Consultants, and Other Third-Party Service Providers. </span> 
                We may share your data with third-party vendors, service providers, contractors, or agents 
                ("<span className='text-bold'>third parties</span>") who perform services for us or on our 
                behalf and require access to such information to do that work.
              </div>

              <div>
                The categories of third parties we may share personal information with are as follows:
              </div>

              <div className='text-list'>
                <ul className='text-layout'>
                  <li>Website Hosting Service Providers</li>
                  <li>Cloud Computing Services</li>
                </ul>
              </div>

              <div>
                We also may need to share your personal information in the following situations:
              </div>

              <div className='text-list'>
                <ul className='text-layout'>
                  <li>
                    <span className='text-bold'>Business Transfers.</span> We may share or transfer your 
                    information in connection with, or during negotiations of, any merger, sale of company 
                    assets, financing, or acquisition of all or a portion of our business to another 
                    company.
                  </li>
                </ul>
              </div>

              
            </div>

            <div id='4' className='text-layout'>
              <div className='content-title'>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</div>

              <div className='text-italic'>
                <span className='text-bold'>In Short:</span> We may use cookies and other tracking 
                technologies to collect and store your information.
              </div>

              <div>
                We may use cookies and similar tracking technologies (like web beacons and pixels) to gather 
                information when you interact with our Services. Some online tracking technologies help us 
                maintain the security of our Services and your account, prevent crashes, fix bugs, save your 
                preferences, and assist with basic site functions.
              </div>

              <div>
                We also permit third parties and service providers to use online tracking technologies 
                on our Services for analytics and advertising, including to help manage and display 
                advertisements, to tailor advertisements to your interests, or to send abandoned 
                shopping cart reminders (depending on your communication preferences). The third 
                parties and service providers use their technology to provide advertising about 
                products and services tailored to your interests which may appear either on our 
                Services or on other websites.
              </div>

              <div>
                Specific information about how we use such technologies and how you can refuse 
                certain cookies is set out in our Cookie Notice.
              </div>

              <div className='content-sub-title'>Google Analytics</div>

              <div>
                We may share your information with Google Analytics to track and analyze the 
                use of the Services. To opt out of being tracked by Google Analytics across 
                the Services, visit <a href='https://tools.google.com/dlpage/gaoptout' target='blank'>https://tools.google.com/dlpage/gaoptout</a>. 
                For more information on the privacy practices of Google, please visit the <a href='https://policies.google.com/privacy' target='blank'>Google Privacy & Terms page</a>.
              </div>

            </div>

            <div id='5' className='text-layout'>
              <div className='content-title'>5. HOW LONG DO WE KEEP YOUR INFORMATION?</div>

              <div className='text-italic'>
                <span className='text-bold'>In Short:</span> We keep your information for as long as 
                necessary to fulfill the purposes outlined in this privacy notice unless otherwise 
                required by law.
              </div>

              <div>
                We keep your information for as long as necessary to fulfill the purposes outlined in 
                this privacy notice unless otherwise required by law.
              </div>

              <div>
                We keep your information for as long as necessary to fulfill the purposes outlined in 
                this privacy notice unless otherwise required by law.
              </div>

            </div>

            <div id='6' className='text-layout'>
              <div className='content-title'>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</div>

              <div className='text-italic'>
                <span className='text-bold'>In Short:</span> We aim to protect your personal information 
                through a system of organizational and technical security measures.
              </div>

              <div>
                We keep your information for as long as necessary to fulfill the purposes outlined in 
                this privacy notice unless otherwise required by law.
              </div>

              <div>
                We keep your information for as long as necessary to fulfill the purposes outlined in 
                this privacy notice unless otherwise required by law.
              </div>

              <div>
                We have implemented appropriate and reasonable technical and organizational security 
                measures designed to protect the security of any personal information we process. 
                However, despite our safeguards and efforts to secure your information, no electronic 
                transmission over the Internet or information storage technology can be guaranteed to be 
                100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other 
                unauthorized third parties will not be able to defeat our security and improperly collect, 
                access, steal, or modify your information. Although we will do our best to protect your 
                personal information, transmission of personal information to and from our Services is 
                at your own risk. You should only access the Services within a secure environment.
              </div>

            </div>

            <div id='7' className='text-layout'>
              <div className='content-title'>7. WHAT ARE YOUR PRIVACY RIGHTS?</div>

              <div className='text-italic'>
                <span className='text-bold'>In Short:</span> You may review, change, or terminate your 
                account at any time, depending on your country, province, or state of residence.
              </div>

              <div>
                <span className='text-bold'>Withdrawing your consent:</span> If we are relying on your consent to process your personal 
                information, which may be express and/or implied consent depending on the applicable law, 
                you have the right to withdraw your consent at any time. You can withdraw your consent at 
                any time by contacting us by using the contact details provided in the section 
                <a href='#10'> "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a> below.
              </div>

              <div>
                However, please note that this will not affect the lawfulness of the processing before 
                its withdrawal nor, when applicable law allows, will it affect the processing of your 
                personal information conducted in reliance on lawful processing grounds other than consent.
              </div>

              <div className='content-sub-title'>Account Information</div>

              <div>
                If you would at any time like to review or change the information in your account or 
                terminate your account, you can:
              </div>

              <div className='text-list'>
                <ul className='text-layout'>
                  <li>Contact us using the contact information provided.</li>
                </ul>
              </div>

              <div>
                Upon your request to terminate your account, we will deactivate or delete your account 
                and information from our active databases. However, we may retain some information in our 
                files to prevent fraud, troubleshoot problems, assist with any investigations, enforce 
                our legal terms and/or comply with applicable legal requirements.
              </div>

              <div>
                If you have questions or comments about your privacy rights, you may email us at 
                <a href='mailto: trenovaschools@gmail.com'> trenovaschools@gmail.com</a>.
              </div>

            </div>

            <div id='8' className='text-layout'>
              <div className='content-title'>8. CONTROLS FOR DO-NOT-TRACK FEATURES</div>

              <div>
                Most web browsers and some mobile operating systems and mobile applications include a 
                Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference 
                not to have data about your online browsing activities monitored and collected. At this 
                stage, no uniform technology standard for recognizing and implementing DNT signals has 
                been finalized. As such, we do not currently respond to DNT browser signals or any other 
                mechanism that automatically communicates your choice not to be tracked online. If a 
                standard for online tracking is adopted that we must follow in the future, we will 
                inform you about that practice in a revised version of this privacy notice.
              </div>
            </div>

            <div id='9' className='text-layout'>
              <div className='content-title'>DO WE MAKE UPDATES TO THIS NOTICE?</div>

              <div className='text-italic'>
                <span className='text-bold'>In Short:</span> Yes, we will update this notice as necessary 
                to stay compliant with relevant laws.
              </div>

            </div>

            <div id='10' className='text-layout'>
              <div className='content-title'>10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</div>

              <div>If you have questions or comments about this notice, you may email us at <a href='mailto: trenovaschools@gmail.com'>trenovaschools@gmail.com</a> or contact us by post at:</div>

              <div>TreNova Limited<br/>7B, Ogunsiji Close, Off Allen Avenue<br/>Ikeja, Lagos 100281<br/>Nigeria</div>
            </div>

            <div id='11' className='text-layout'>
              <div className='content-title'>11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</div>

              <div>
                Based on the applicable laws of your country, you may have the right to request access 
                to the personal information we collect from you, details about how we have processed it, 
                correct inaccuracies, or delete your personal information. You may also have the right to 
                withdraw your consent to our processing of your personal information. These rights may be 
                limited in some circumstances by applicable law. To request to review, update, or delete 
                your personal information, please fill out and submit a <a href='https://app.termly.io/notify/810e454a-4969-44ce-a06a-e7e6c0a1112e' target='blank'>data subject access request</a>.
              </div>
            </div>


          </div>

      </div>
    </div>
  )
}

export default PrivacySection