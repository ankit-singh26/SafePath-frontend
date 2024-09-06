import React from 'react';
import MapComponent from '../components/MapComponent';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const Map = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header/>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          User Location on OpenStreetMap
        </h1>
        <div className="w-full max-w-4xl h-[600px] bg-white rounded-lg overflow-hidden shadow-2xl">
          <MapComponent />
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => {
            // Navigate to distress form page
            navigate('/distress');
          }}
        >
          Report Distress
        </button>
      </div>
    </>
  );
}

export default Map;
