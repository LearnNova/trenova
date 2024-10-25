import React, {useState, useRef} from 'react'
import './career.css'

const CareerApplicationFormSection = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [hear, setHear] = useState('DIRECT APPLICANT - TERRITORY SALES REPRESENTATIVE CURRENT');
    const [consent, setConsent] = useState(true);

    const infoCate = useRef(null);


    const resetInput = () => {
        setFirstName('');
        setLastName('');
        setWhatsapp('');
        setPhone('');
        setEmail('');
        setLocation('');
        setDate('');
        setHear('');
    }

    const isValidDate = (inputDate) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const input = new Date(inputDate);
        input.setHours(0, 0, 0, 0);

        // Check if the input date is today or in the future
        return input >= today;
    }
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (firstName && lastName && whatsapp && phone && email && location && date && hear && consent) {

            if (isValidDate(date)) {

                const applicantData = {
                    First_Name: firstName,
                    Last_Name: lastName,
                    whatsapp: whatsapp,
                    phone: phone,
                    email: email,
                    location: location,
                    date: date,
                    hear: hear,
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
                    alert (`${firstName} you have successfully Submitted your details for the  Territorial Sales Specialist Job, we would contact you shortly with further information.`);
                    resetInput();

                    }
    
                } catch (error) {
                    infoCate.current.textContent = ''
                    alert(error || 'Error in Submitting, Try Again')
                }
    
            }

            else {
                alert ('Invalid Date, Please pick the current date or a future date.');
            }
            
        }
        else{
            alert('Please fill in all required Information and agree to terms and condition')
        }
    }
    
  return (
    <div>
        <div id='application-form-section'>
            <div className='application-form-title'>Application Form</div>
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
                                required
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
                                required
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
                                required
                                maxLength={11}
                                minLength={11}
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
                                required
                                maxLength={11}
                                minLength={11}
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
                                required
                                className='form-control'
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}
                            />
                        </div>
                        
                        <div className='form-row'>
                            <label htmlFor='location' className='input-labels'>State your Preffered City (Location):</label>
                            <input 
                                type='text'
                                id='location'
                                name='location'
                                placeholder='i.e Lagos MainLand'
                                required
                                className='form-control'
                                value={location}
                                onChange={(e) => {setLocation(e.target.value)}}
                            />
                        </div>
                    </div>

                    <div className='form-row-main'>
                        <div className='form-row' style={{width: '100%'}}>
                            <label htmlFor='date' className='input-labels'>Preffered Date of Interview:</label>
                            <input 
                                type='date'
                                id='date'
                                name='date'
                                required
                                className='form-control'
                                value={date}
                                onChange={(e) => {setDate(e.target.value)}}
                            />
                        </div>
                    </div>

                    <div className='form-row-main' id='hear-container'>
                        <div className='form-row'>
                            <label htmlFor='hear' className='input-labels-textarea'>Where did you hear of us from?</label>
                            <textarea 
                                className='form-control-textarea'
                                id='hear'
                                name='hear'
                                placeholder='i.e Instagram'
                                value={hear}
                                onChange={(e) => {setHear(e.target.value)}}
                            ></textarea>
                        </div>
            
                    </div>

                    <div className='form-row-main' id='consent-container'>
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
                        <button type='submit' className='submit-btn'>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default CareerApplicationFormSection