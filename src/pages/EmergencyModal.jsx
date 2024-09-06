import { AiOutlineClose } from 'react-icons/ai';
import { FaFire } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';

const EmergencyModal = ({ emergency, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-full h-full max-w-4xl max-h-[90%] bg-gradient-to-t from-white via-gray-50 to-gray-100 rounded-3xl p-6 flex flex-col relative shadow-lg overflow-auto'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-4xl text-red-600 cursor-pointer transition-transform transform hover:scale-110'
          onClick={onClose}
        />
        <h2 className='w-fit px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md mb-6'>
          {emergency.type}
        </h2>
        <div className='flex items-center gap-x-3 mb-4'>
          <FaFire className='text-red-500 text-3xl' />
          <h2 className='text-2xl font-bold text-gray-800'>{emergency.name}</h2>
        </div>
        <div className='flex items-center gap-x-3 mb-4'>
          <BiUserCircle className='text-blue-500 text-3xl' />
          <h2 className='text-lg text-gray-700'>{emergency.contactPerson}</h2>
        </div>
        <p className='text-gray-600 mb-4'>{emergency.description}</p>
        <div className='flex flex-col'>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Steps:</h3>
          <ul className='list-disc list-inside mb-6 text-gray-700'>
            {emergency.steps.map((step, index) => (
              <li key={index} className="mb-2">{step}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Precautions:</h3>
          <ul className='list-disc list-inside text-gray-700'>
            {emergency.precautions.map((precaution, index) => (
              <li key={index} className="mb-2">{precaution}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmergencyModal;
