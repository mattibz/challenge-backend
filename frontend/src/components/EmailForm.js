import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: ''
  });

  const [status, setStatus] = useState({ message: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setStatus({ message: '', type: '' });
      const response = await axios.post(process.env.REACT_APP_API_URL, emailData);
      setStatus({ message: 'Email sent successfully!', type: 'success' });
      console.log(response.data);
    } catch (error) {
      setStatus({ message: 'Failed to send email.', type: 'error' });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1> Send email </h1>

      {status.message && (
        <div className={`notification ${status.type}`}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>To:</label>
          <input
            type="email"
            name="to"
            value={emailData.to}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={emailData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="text"
            value={emailData.text}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>Send Email</button>
      </form>

      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default EmailForm;
