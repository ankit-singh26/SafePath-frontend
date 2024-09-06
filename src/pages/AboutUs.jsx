import React from 'react';
import Header from '../components/Header';

function AboutUs() {
  return (
    <>
      <Header/>
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg p-2">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row justify-center mb-6 gap-6">
          <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to provide a comprehensive emergency response system that saves lives and reduces the impact of emergencies.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Team</h2>
            <ul>
              <li className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">John Doe</h3>
                <p className="text-lg text-gray-600">
                  CEO and Founder
                </p>
              </li>
              <li className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Jane Smith</h3>
                <p className="text-lg text-gray-600">
                  CTO and Co-Founder
                </p>
              </li>
              <li className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Bob Johnson</h3>
                <p className="text-lg text-gray-600">
                  Marketing Manager
                </p>
              </li>
            </ul>
          </div>
        </div>
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Our Partners</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">American Red Cross</h3>
            <p className="text-lg text-gray-600">
              Partnering to provide emergency response training and resources.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">National Emergency Management Association</h3>
            <p className="text-lg text-gray-600">
              Collaborating to develop and implement emergency response protocols.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
