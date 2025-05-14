import React, {useState, useRef, useEffect} from 'react'
import './mentornigeria.css'

const ApplicationFormSection = ({ name }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [hear, setHear] = useState('');
    const [agentName, setAgentName] = useState('');
    const [consent, setConsent] = useState(false);

    const infoCate = useRef(null);

    useEffect(() => {
        const formattedName = formatName(name);
        setAgentName(formattedName)
    }, [name]);

    const formatName = () => {
        if (name.includes("_")) {
            return name.replace(/_/g, " ").replace(/\b\w/g, match => match.toUpperCase());
          } else {
            return name.replace(/\b\w/g, match => match.toUpperCase());
          }
      }

    const resetInput = () => {
        setFirstName('');
        setLastName('');
        setWhatsapp('');
        setPhone('');
        setEmail('');
        setLocation('');
        setHear('');
        setAgentName(agentName);
    }
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (firstName && lastName && whatsapp && phone && email && location && hear && consent) {

            if (whatsapp.length === 11 && phone.length === 11) {

                const applicantData = {
                    First_Name: firstName,
                    Last_Name: lastName,
                    whatsapp: whatsapp,
                    phone: phone,
                    email: email,
                    location: location,
                    hear: hear,
                    Agent_Name: agentName
                  };
    
                try {
                    infoCate.current.textContent = 'Processing ... Please wait'
                    const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:Y1Oqmtn2/applicant', {
                        method: 'POST',
                        body: JSON.stringify(applicantData),
                        headers: { 'Content-Type': 'application/json' },
                    });
    
                    if (!response.ok) {
                        infoCate.current.textContent = ''
                        throw new Error (`API request failed with status ${response.status}`);
                        
                    }
    
                    else {
                    infoCate.current.textContent = ''
                    alert (`Congratulations 🎉🎉 on Booking a Seat ${firstName}, we would contact you shortly with all the neccessary information needed.`);
                    resetInput();
                    }
    
                } catch (error) {
                    infoCate.current.textContent = ''
                    alert(error || 'Error in Submitting, Try Again')
                }
    
            }

            else {
                alert ('Invalid Whatsapp/Phone Number');
            }
            
        }
        else{
            alert('Please fill in all required Information and agree to terms and condition')
        }
    }
    
  return (
    <div>
        <div id='application-form-section'>
        <div className='application-form-title'>Complete the Application Form Below:</div>
            <div>
                <form id='application-form' onSubmit={handleSubmit}>
                    <div className='form-row-main'>
                        <div className='form-row'>
                            <label htmlFor='firstName' className='input-labels'>First Name:</label>
                            <input 
                                type='text'
                                id='firstName'
                                name='firstName'
                                placeholder='Mark'
                                className='form-control'
                                value={firstName}
                                onChange={(e) => {setFirstName(e.target.value)}}
                            />
                        </div>
                        
                        <div className='form-row'>
                            <label htmlFor='lastName' className='input-labels'>Last Name:</label>
                            <input 
                                type='text'
                                id='lastName'
                                name='lasttName'
                                placeholder='Joe'
                                className='form-control'
                                value={lastName}
                                onChange={(e) => {setLastName(e.target.value)}}
                            />
                        </div>
                    </div>

                    <div className='form-row-main'>
                        <div className='form-row'>
                            <label htmlFor='whatsappNumber' className='input-labels'>Whatsapp Number:</label>
                            <input 
                                type='text'
                                id='whatsappNumber'
                                name='whatsappNumber'
                                placeholder='09137819540'
                                className='form-control'
                                value={whatsapp}
                                onChange={(e) => {setWhatsapp(e.target.value)}}
                            />
                        </div>
                        
                        <div className='form-row'>
                            <label htmlFor='phoneNumber' className='input-labels'>Phone Number:</label>
                            <input 
                                type='text'
                                id='phoneNumber'
                                name='phoneNumber'
                                placeholder='09137819540'
                                className='form-control'
                                value={phone}
                                onChange={(e) => {setPhone(e.target.value)}}
                            />
                        </div>
                    </div>

                    <div className='form-row-main'>
                        <div className='form-row'>
                            <label htmlFor='emailAddress' className='input-labels'>Email Address:</label>
                            <input 
                                type='text'
                                id='emailAddress'
                                name='emailAddress'
                                placeholder='markjoe@gmail.com'
                                className='form-control'
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}
                            />
                        </div>
                        
                        <div className='form-row'>
                            <label htmlFor='location' className='input-labels'>Location:</label>
                            <input 
                                type='text'
                                id='location'
                                name='location'
                                placeholder='Alimosho, Lagos'
                                className='form-control'
                                value={location}
                                onChange={(e) => {setLocation(e.target.value)}}
                            />
                        </div>
                    </div>

                    {/* <div className='form-row-main'>
                        <div className='form-row'>
                        <label htmlFor='hear' className='input-labels-textarea'>Type in your Preferred Payment Option</label>
                            <textarea 
                                className='form-control-textarea'
                                id='hear'
                                name='hear'
                                placeholder='Type either Option 1 or 2'
                                value={hear}
                                onChange={(e) => {setHear(e.target.value)}}
                            ></textarea>
                        </div>
                    </div> */}

                    <div className='form-row-main'>
                        <div className='form-row'>
                            <label htmlFor='hear' className='input-labels'>Pick your Preferred Payment Option</label>
                            <select
                                name="hear"
                                value={hear}
                                onChange={(e) => {setHear(e.target.value)}}
                                className="form-control"
                                required
                            >
                                <option value='' disabled>Select a School Pricing Plan</option>
                                <option value='Option 1'>Option 1</option>
                                <option value='Option 2'>Option 2</option>
                            </select>
                        </div>

                        <div className='form-row'>
                            <label htmlFor='agentName' className='input-labels'>Name of Agent/Officer:</label>
                            <input 
                                type='text'
                                id='phoneNumber'
                                name='agentName'
                                className='form-control'
                                value={agentName}
                                onChange={(e) => {setAgentName(e.target.value)}}
                                disabled
                                required
                            />
                          </div>
                      </div>

                    <div className='form-row-main'>
                        <div className='form-row-consent'>
                            <input 
                                type='checkbox'
                                value={consent}
                                onClick={(e) => {setConsent(e.target.checked)}}
                            />
                            <div className='consent-text'>I consent to receive communications from MentorNigeria Academy about personal growth
                                oppotunities, company and industry news, and other related content.
                            </div>
                        </div>
            
                    </div>
                    <div className='form-info-box' ref={infoCate}>
                       
                    </div>
                    <div>
                        <button type='submit' className='submit-btn'>Apply Now</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default ApplicationFormSection