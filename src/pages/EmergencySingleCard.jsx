import React, { useState } from 'react';
import { emergencies } from '../restApi.json';
import { FaFirstAid } from 'react-icons/fa';
import { BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import EmergencyModal from './EmergencyModal';

const EmergencySingleCard = ({ emergency }) => {
  const [showModal, setShowModal] = useState(false);

  let icon = <FaFirstAid className='text-red-300 text-2xl' />;

  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
      <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
        {emergency.name}
      </h2>
      <h4 className='my-2 text-gray-500'>{emergency.id}</h4>
      <div className='flex justify-start items-center gap-x-2'>
        {icon}
        <h2 className='my-1'>{emergency.name}</h2>
      </div>
      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <p></p>
        <p></p>
        <p></p>
        <BiShow
          className='text-3xl text-blue-800 hover:text-black cursor-pointer'
          onClick={() => setShowModal(true)}
        />
      </div>
      {showModal && (
        <EmergencyModal emergency={emergency} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default EmergencySingleCard;
