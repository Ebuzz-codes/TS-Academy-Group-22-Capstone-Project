import  { useState, useEffect } from 'react';
import './formSection.css';

const FormSection= () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hook to automatically fade away/clear the message after 2.5 seconds
  useEffect(() => {
    let timer;
    if (statusMessage) {
      timer = setTimeout(() => {
        setStatusMessage('');
      }, 4000);
    }
    // Cleanup function so the timer clears if the component gets unmounted early
    return () => clearTimeout(timer);
  }, [statusMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    // Console logging the exact values getting processed
    console.log('Submitting Form Values:', formData);

    // Using exact requested format: form-encoded data using URLSearchParams
    const formEncodedData = new URLSearchParams();
    formEncodedData.append('fullName', formData.fullName);
    formEncodedData.append('phoneNumber', formData.phoneNumber);
    formEncodedData.append('email', formData.email);
    formEncodedData.append('message', formData.message);

    try {
      // REPLACE 'PHP_API_ENDPOINT_URL' with your actual API string 
      const response = await fetch('https://whitebricks.com/tsacademy.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formEncodedData.toString(),
      });

      const textResponse = await response.text();
      console.log('API Response:', textResponse);

      // Checking response object code '200' 
      if (response.status === 200) {
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormData({ fullName: '', phoneNumber: '', email: '', message: '' });
      } else {
        setStatusMessage(`Error: ${textResponse || 'Something went wrong.'}`);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setStatusMessage('Network error. Please try submitting again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="section5">
      <div className="section5text">
        <h2>Have Questions About Planetary Science?</h2>
        <p>Interested in learning more about space, astronomy, or how planetary data is collected and analyzed?</p>
        <p>Reach out and we'll get back to you.</p>
      </div>

      {/* Conditionally rendering the status with an auto-fading animation class */}
      {statusMessage && (
        <div className="status-message fade-out">
          {statusMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="formgroup">
            <label htmlFor="fullName">Full Name<span>*</span></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full name"
              maxLength="20"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="formgroup">
            <label htmlFor="email">Email<span>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="formgroup">
            <label htmlFor="phoneNumber">Phone Number<span>*</span></label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              maxLength="11"
              placeholder="Please enter a valid phone number."
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="formgroup">
            <label htmlFor="message">Message<span>*</span></label>
            <textarea
              id="message"
              name="message"
              maxLength="100"
              placeholder="Enter your message"
              rows="2"
              cols="10"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <small className="msg-hint">Max 100 characters</small>
          </div>
          
          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit >'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormSection;