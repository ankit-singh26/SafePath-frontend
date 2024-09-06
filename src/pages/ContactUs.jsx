import React, { useState } from 'react';
import axios from 'axios';

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
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:5000/api/distress', formData);
        setSubmissionMessage(response.data.message);
        setFormData({ name: '', phone: '', location: '', message: '' });
        setErrors({});
      } catch (error) {
        console.error('Error sending distress signal:', error);
        setSubmissionMessage('Failed to send distress signal. Please try again.');
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gradient-to-r from-blue-50 to-blue-200 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Send Distress Signal</h2>
      {submissionMessage && <p className="text-green-600 text-center mb-4">{submissionMessage}</p>}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <label className="block mb-4">
          <span className="text-gray-800 font-semibold">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full mt-1 p-3 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-600 mt-1">{errors.name}</p>}
        </label>
        <label className="block mb-4">
          <span className="text-gray-800 font-semibold">Phone Number:</span>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="block w-full mt-1 p-3 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            placeholder="Your Phone Number"
          />
          {errors.phone && <p className="text-red-600 mt-1">{errors.phone}</p>}
        </label>
        <label className="block mb-4">
          <span className="text-gray-800 font-semibold">Location:</span>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="block w-full mt-1 p-3 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            placeholder="Your Location"
          />
          {errors.location && <p className="text-red-600 mt-1">{errors.location}</p>}
        </label>
        <label className="block mb-4">
          <span className="text-gray-800 font-semibold">Message:</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="block w-full mt-1 p-3 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            placeholder="Your Message"
            rows="4"
          />
          {errors.message && <p className="text-red-600 mt-1">{errors.message}</p>}
        </label>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Send Signal
        </button>
      </form>
    </div>
  );
};

export default DistressForm;
