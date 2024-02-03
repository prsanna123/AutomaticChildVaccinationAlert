
import React, { useState } from 'react';
import axios from 'axios';
// const host = "https://automatic-child-vaccination-alert-35ol.vercel.app/"
const host="http://localhost:5000"
const VerificationForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the email for verification
    sendVerificationEmail(email);
  };

  const sendVerificationEmail = async (email) => {
    try {
      const response = await axios.post(`${host}/api/send-verification-email`, { email });
      console.log('Email sent successfully:', response.data);
      // Handle success or display a message to the user
    } catch (error) {
      console.error('Failed to send email:', error);
      // Handle error or display an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <button type="submit">Send Verification Email</button>
    </form>
  );
};

export default VerificationForm;
