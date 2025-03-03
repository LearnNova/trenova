import { useState } from "react";
import availableTerritories from "./availableTerritories";
import { useNavigate } from "react-router-dom";

const Input = ({ label, type, required, name, placeholder, value, minLength, onChange }) => (
  <div>
    <label className="block text-gold font-semibold">{label}</label>
    <input
      type={type || "text"}
      name={name}
      value={value}
      placeholder={placeholder || `Enter your ${label} here`}
      className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
      required={required}
      onChange={onChange}
      minLength={minLength}
      maxLength={minLength}
    />
  </div>
);

const SchoolCareApplicationForm = ({ id }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    preferredTerritory: "",
    hear: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:lSK8_se3/school_support_partner_contact_info", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      alert(`Thank you 🎉 ${formData.firstName}, click ok to be redirected to the final page`);

      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        preferredTerritory: "",
        hear: "",
        consent: false,
      });

      navigate('congratulations');

    } catch (error) {
      alert(error.message || "Error in Submitting, Try Again");
    }finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-2 border rounded-md pt-2 pb-3 text-black" style={{ background: "#F0FBF9" }} id={id}>
      <div className="px-2 pt-4">
        <h1 className="text-13xl md:text-17xl lg:text-21xl font-extrabold" style={{ fontFamily: "Big Shoulders Display, sans-serif" }}>
          Get Started <span className="text-orange-500">Today!</span>
        </h1>
        <p className="mb-4 text-lg md:text-xl lg:text-3xl">
          Register your interest, and if opportunities are available in your preferred territory, we’ll contact you through your chosen method.
        </p>

        <p 
          className='text-lg md:text-xl lg:text-3xl font-bold text-orange-500 hover:underline hover:text-black cursor-pointer'
          onClick={()=>setShowForm((prev)=> !prev)}
          >
          Enrol Now
        </p>
      </div>

      {
        showForm && (
          <form className="w-full mx-auto px-3 pt-3 rounded-lg shadow-md" onSubmit={handleSubmit}>
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-3">
              Complete the Form Below:
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <Input label="First Name" type="text" name="firstName" required value={formData.firstName} onChange={handleChange} />

              {/* Last Name */}
              <Input label="Last Name" type="text" name="lastName" required value={formData.lastName} onChange={handleChange} />

              {/* Phone Number */}
              <Input label="Phone Number" type="tel" name="phoneNumber" placeholder="09137819540" minLength={11} required value={formData.phoneNumber} onChange={handleChange} />

              {/* Email Address */}
              <Input label="Email Address" type="email" name="email" required value={formData.email} onChange={handleChange} />

              {/* Preferred Territory */}
              <div>
                <label className="block text-gold font-semibold">Preferred Territory</label>
                <select
                  name="preferredTerritory"
                  value={formData.preferredTerritory}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value='' disabled>Select a Territory</option>
                  {availableTerritories.map((territory) => (
                    <option key={territory.value} value={territory.name}>
                      {territory.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* How did you hear about us? */}
              <Input label="How Did You Hear About Us?" type="text" name="hear" placeholder='How did you hear about us?' required value={formData.hear} onChange={handleChange} />
            </div>

            {/* Consent Checkbox */}
            <div className="mt-4">
              <label className="flex items-center">
                <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mr-2" required />
                <span className="text-gray-800 text-lg">
                  I consent to receive communications from School Support Network regarding business opportunities, industry updates, and related content. I understand I can unsubscribe at any time.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-around">
              {
                isSubmitting ? (
                  <button type="submit" className="bg-orange-500 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition" disabled>
                    Please wait, Redirecting...
                  </button>
                ) : (
                  <button type="submit" className="bg-orange-500 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition">
                    Submit
                  </button>
                )
              }
              
            </div>
        
          </form>
        )
      }
      
    </section>
  );
};

export default SchoolCareApplicationForm;
