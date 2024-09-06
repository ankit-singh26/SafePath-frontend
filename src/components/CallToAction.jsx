import React from 'react';
import { useNavigate } from 'react-router-dom';

function CallToAction() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/map');
  };

  return (
    <section className="bg-orange-500 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get Help Now
        </h2>
        <button 
          onClick={handleClick}
          className="bg-white hover:bg-gray-100 text-orange-500 font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
