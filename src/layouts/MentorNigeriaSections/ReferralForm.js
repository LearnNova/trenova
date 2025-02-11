import React, { useState } from "react";
import "./mentornigeria.css";

// Reusable Input Component
const Input = ({ label, type, id, name, placeholder, value, onChange, required, error }) => (
  <div className="form-row">
    <label htmlFor={id} className="input-labels">{label}:</label>
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className="form-control"
      value={value}
      required={required}
      onChange={onChange}
      aria-describedby={id + "-error"}
    />
    {/* {error && <div id={id + "-error"} className="error-message">{error}</div>} */}
  </div>
);

const ReferralForm = () => {
  const [referralFormData, setReferralFormData] = useState({
    firstName: "",
    lastName: "",
    whatsapp: "",
    phone: "",
    email: "",
    school: "",
    address: "",
    referralLink: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [infoBox, setInfoBox] = useState('');
  const [showReferralBox, setShowReferralBox] = useState(false);
  const [referralBoxMsg, setReferralBoxMsg] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReferralFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const { whatsapp, phone, email, firstName, lastName } = referralFormData;

    // Phone number validation
    if (!/^\d{11}$/.test(whatsapp)) {
      newErrors.whatsapp = "Whatsapp number must be exactly 11 digits.";
    }
    if (!/^\d{11}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 11 digits.";
    }

    // Email validation
    if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Name validation
    if (!firstName) {
      newErrors.firstName = "First name is required.";
    }
    if (!lastName) {
      newErrors.lastName = "Last name is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createReferralLink = (firstName, lastName) => {
    setReferralFormData((prevData)=> ({...prevData, referralLink: `https://www.learnnova.ng/schoolgrowthsystem/${firstName}_${lastName}`}))
    return `https://www.learnnova.ng/schoolgrowthsystem/${firstName}_${lastName}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    let { firstName, lastName, whatsapp, phone, email, school, address, referralLink } = referralFormData;
    if (!school) school = "Not Applicable";
    
    setIsSubmitting(true);
    referralLink = createReferralLink(firstName, lastName);

    const applicantData = { firstName, lastName, whatsapp, phone, email, school, address, referralLink };

    try {
      setInfoBox("Processing ... Please wait");

      const response = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:b5QTW44Q/sales_referral_agent", {
        method: "POST",
        body: JSON.stringify(applicantData),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      alert(`Congratulations 🎉 ${firstName}, you have successfully enrolled as a Sales Referral Agent for LearnNova!`);
      setReferralBoxMsg({
        firstName,
        lastName,
        referralLink,
      });
      setReferralFormData({
        firstName: "",
        lastName: "",
        whatsapp: "",
        phone: "",
        email: "",
        school: "",
        address: "",
        referralLink: "",
      });
      setInfoBox("");
      setShowReferralBox(true);

      console.log(referralFormData.firstName);
      console.log(referralFormData.lastName);
      console.log(referralFormData.referralLink);

    } catch (error) {
      setInfoBox("");
      alert(error.message || "Error in Submitting, Try Again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="relative text-center text-[4em] bg-white text-black font-[var(--font-family-sec)] py-[0.3em] z-[1000]" id="referral-form-id">
        <h1 className="text-9xl text-center font-bold mb-3">Enroll as a Referrer Below:</h1>
        <div>
          <form id="application-form" onSubmit={handleSubmit}>
            <div className="form-row-main">
              <Input label="First Name" type="text" id="firstName" name="firstName" placeholder="Mark" value={referralFormData.firstName} onChange={handleChange} required error={errors.firstName} />
              <Input label="Last Name" type="text" id="lastName" name="lastName" placeholder="Joe" value={referralFormData.lastName} onChange={handleChange} required error={errors.lastName} />
            </div>

            <div className="form-row-main">
              <Input label="Whatsapp Number" type="text" id="whatsapp" name="whatsapp" placeholder="09137819540" value={referralFormData.whatsapp} onChange={handleChange} required error={errors.whatsapp} />
              <Input label="Phone Number" type="text" id="phone" name="phone" placeholder="09137819540" value={referralFormData.phone} onChange={handleChange} required error={errors.phone} />
            </div>

            <div className="form-row-main">
              <Input label="Email Address" type="email" id="email" name="email" placeholder="markjoe@gmail.com" value={referralFormData.email} onChange={handleChange} error={errors.email} />
              <Input label="School Name (If Applicable)" type="text" id="school" name="school" placeholder="ABC Nursery & Primary School" value={referralFormData.school} onChange={handleChange} />
            </div>

            <div className="form-row-main">
              <div className="form-row">
                <label htmlFor="address" className="input-labels-textarea">Residential Address:</label>
                <textarea
                  className="form-control-textarea"
                  id="address"
                  name="address"
                  placeholder="466B, Babatunde Jubril, Omole Phase 1, Lagos"
                  value={referralFormData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            {infoBox && <div className="form-info-box">{infoBox}</div>}

            {showReferralBox && (
                <div className="mt-4 bg-white text-black text-left p-3 mx-2 rounded-sm" style={{ maxWidth: '100%' }}>
                    <h1 className="font-bold text-orange-500 text-center mb-3" style={{ fontSize: '20px' }}>
                    Below are your Information as a Sales Referral Agent
                    </h1>
                    <p style={{ fontSize: '20px' }}>
                    <b>Name:</b> {referralBoxMsg.lastName} {referralBoxMsg.firstName}
                    </p>
                    <p style={{ fontSize: '20px', wordWrap: 'break-word', wordBreak: 'break-word' }}>
                    <b>Your Referral Link:</b>{" "}
                    <a
                        href={referralBoxMsg.referralLink}
                        className="text-orange-500 underline font-bold"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {referralBoxMsg.referralLink}
                    </a>
                    </p>
                    <p style={{ fontSize: '20px', color: '#ff0000' }} className="font-bold text-center mt-3">
                    Please do well to copy the link and save it.
                    </p>
                </div>
            )}


            <div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Enroll Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReferralForm;
