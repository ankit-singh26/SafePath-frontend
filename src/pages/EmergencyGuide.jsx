// EmergencyGuide.js
import Header from '../components/Header';
import { emergencies } from '../restApi.json';
import EmergencySingleCard from './EmergencySingleCard';

const EmergencyGuide = () => {
  return (
    <>
    <Header/>
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {emergencies.map((emergency) => (
        <EmergencySingleCard key={emergency.id} emergency={emergency} />
      ))}
    </div>
    </>
  );
};

export default EmergencyGuide;
