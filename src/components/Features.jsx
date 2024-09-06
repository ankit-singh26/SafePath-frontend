import React from 'react';

function Features() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Stay Safe with Our Emergency Response System
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="bg-white rounded shadow-md p-4">
            <i className="fas fa-map-marker-alt text-4xl mb-4"></i>
            <h3 className="text-lg font-bold mb-2">
              User Location Detection
            </h3>
            <p className="text-gray-600">
              Automatically detect your location in emergency situations.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-4">
            <i className="fas fa-hospital text-4xl mb-4"></i>
            <h3 className="text-lg font-bold mb-2">
              Nearby Hospital Finder
            </h3>
            <p className="text-gray-600">
              Find nearby hospitals with contact details and directions.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-4">
            <i className="fas fa-signal text-4xl mb-4"></i>
            <h3 className="text-lg font-bold mb-2">
              Distress Signal
            </h3>
            <p className="text-gray-600">
              Send distress signals to emergency services with your location.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-4">
            <i className="fas fa-book text-4xl mb-4"></i>
            <h3 className="text-lg font-bold mb-2">
              Emergency Guides
            </h3>
            <p className="text-gray-600">
              Get step-by-step guides for different emergency situations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
