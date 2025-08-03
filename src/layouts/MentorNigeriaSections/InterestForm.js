import React, { useEffect, useState } from 'react';
import './interestForm.css';

const pricingPlans = [
    {
        name: 'Plan 1',
        value: 'Plan 1',
    },
    {
        name: 'Plan 2',
        value: 'Plan 2',
    },
    {
        name: 'Plan 3',
        value: 'Plan 3',
    },
    {
        name: 'Plan 4',
        value: 'Plan 4',
    },
    {
        name: 'Plan 5',
        value: 'Plan 5',
    },

]

const InterestForm = ({ name }) => {
    
      const [interestData, setInterestData] = useState({
        fullName: '',
        schoolName: '',
        whatsapp: '',
        agentName: '',
        schoolAddress: '',
        schoolPlan: '',
      });

      useEffect(() => {
        const formattedName = formatName(name);
        setInterestData({ ...interestData, agentName: formattedName });
      }, [name]);
      
      const [loading, setLoading] = useState(false);

      const formatName = () => {
        if (name.includes("_")) {
            return name.replace(/_/g, " ").replace(/\b\w/g, match => match.toUpperCase());
          } else {
            return name.replace(/\b\w/g, match => match.toUpperCase());
          }
      }

      const handleChange = (e) => {
        const { name, value } = e.target;
        setInterestData({...interestData, [name]: value});
      };
  
  
      const resetInput = () => {
          setInterestData({
            fullName: '',
            schoolName: '',
            whatsapp: '',
            agentName: interestData.agentName,
            schoolAddress: '',
            schoolPlan: '',
          });
      }
    
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          setLoading(true);

        try {
            // infoCate.current.textContent = 'Processing ... Please wait'
            const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:CPLGPPpN/interest_form', {
                method: 'POST',
                body: JSON.stringify(interestData),
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                setLoading(false);
                throw new Error (`API request failed with status ${response.status}`);
                
            }

            else {
                setLoading(false);
                alert (`Thank you for making your interest known ${interestData.fullName}, we would contact you shortly with all the neccessary information needed.`);
                resetInput();
            }

        } catch (error) {
            setLoading(false);
            alert(error || 'Error in Submitting, Try Again')
        }
      }
      
    return (
      <div>
          <div id='application-form-container'>
              <div className='interest-application-form-title' id='application-form-section'>Complete the Interest Form Below:</div>
              <div>
                  <form id='interest-form' onSubmit={handleSubmit}>
                      <div className='form-row-main'>
                          <div className='form-row'>
                              <label htmlFor='fullName' className='input-labels'>Full Name:</label>
                              <input 
                                  type='text'
                                  id='firstName'
                                  name='fullName'
                                  placeholder='Mark'
                                  className='form-control'
                                  value={interestData.fullName}
                                  onChange={handleChange}
                                  required
                              />
                          </div>
                          
                          <div className='form-row'>
                              <label htmlFor='schoolName' className='input-labels'>Name of School:</label>
                              <input 
                                  type='text'
                                  id='lastName'
                                  name='schoolName'
                                  placeholder='Joe'
                                  className='form-control'
                                  value={interestData.schoolName}
                                  onChange={handleChange}
                                  required
                              />
                          </div>
                      </div>
  
                      <div className='form-row-main'>
                          <div className='form-row'>
                              <label htmlFor='whatsapp' className='input-labels'>Whatsapp Number:</label>
                              <input 
                                  type='text'
                                  id='whatsappNumber'
                                  name='whatsapp'
                                  placeholder='09137819540'
                                  className='form-control'
                                  value={interestData.whatsapp}
                                  onChange={handleChange}
                                  minLength='11'
                                  maxLength='11'
                                  required
                              />
                          </div>
                          
                          <div className='form-row'>
                              <label htmlFor='agentName' className='input-labels'>Name of Agent/Officer:</label>
                              <input 
                                  type='text'
                                  id='phoneNumber'
                                  name='agentName'
                                  className='form-control'
                                  value={interestData.agentName}
                                  onChange={handleChange}
                                  disabled
                                  required
                              />
                          </div>
                      </div>

                      <div className='form-row-main'>
                        <div style={{minWidth: '100%'}} className='form-row'>
                            <label htmlFor='schoolPlan' className='input-labels'>Preferred School Plan</label>
                            <select
                                name="schoolPlan"
                                value={interestData.schoolPlan}
                                onChange={handleChange}
                                className="form-control"
                                required
                            >
                                <option value='' disabled>Select a School Pricing Plan</option>
                                {pricingPlans.map((plan) => (
                                <option key={plan.value} value={plan.name}>
                                    {plan.name}
                                </option>
                                ))}
                            </select>
                        </div>
                      </div>
  
                      <div className='form-row-main'>
                          <div className='form-row'>
                              <label htmlFor='schoolAddress' className='input-labels-textarea'>School Address</label>
                              <textarea 
                                  className='form-control-textarea'
                                  id='hear'
                                  name='schoolAddress'
                                  value={interestData.schoolAddress}
                                  onChange={handleChange}
                              ></textarea>
                          </div>
                      </div>

                      {/* <div className='form-info-box' ref={infoCate}> */}

                      {loading && (
                        <div className='interest-form-info-box'>Processing ... Please wait</div>
                      )}
                         
                      <div>
                          <button type='submit' className='interest-submit-btn'>Submit</button>
                      </div>
  
                  </form>
              </div>
          </div>
      </div>
    )
  }

export default InterestForm