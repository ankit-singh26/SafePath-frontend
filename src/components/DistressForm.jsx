// DistressForm.js
import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

const DistressForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/; // Validates a 10-digit phone number

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionMessage(''); // Clear previous submission message
    if (validateForm()) {
      try {
        const response = await axios.post('https://safepath-backend.onrender.com/api/distress', formData);
        setSubmissionMessage(response.data.message || 'Distress signal sent successfully!');
        setFormData({ name: '', phone: '', location: '', message: '' });
        setErrors({});
      } catch (error) {
        console.error('Error sending distress signal:', error);
        setSubmissionMessage(
          error.response?.data?.message || 'Failed to send distress signal. Please try again.'
        );
      }
    }
  };

  return (
    <>
    <Header/>
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Send Distress Signal</h2>
      {submissionMessage && (
        <p className={`text-center mb-4 p-2 rounded ${submissionMessage.includes('Failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {submissionMessage}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
              errors.location ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
          ></textarea>
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
        >
          Send Signal
        </button>
      </form>
    </div>
    </>
  );
};

export default DistressForm;
