import React from 'react';

import Kaduna  from "../assets/Kaduna.svg"
import Nassarawa  from "../assets/Nassarawa.svg"
import Plateau  from "../assets/Plateau.svg"
// import Lagos  from "../assets/Lagos.svg"

type Place = {
  name: string;
  icon: React.ReactNode;
};

const places: Place[] = [
    
  { name: 'Kaduna', 
    icon: <img src={Kaduna} alt="Kaduna icon" className="w-48" />
},

  { name: 'Nassarawa', 
    icon: <img src={Nassarawa} alt="Nassarawa icon" className="w-48" />
},
    { name: 'Plateau', 
        icon: <img src={Plateau} alt="Plateau icon" className="w-48" />
    },

];

export const WeAreActive: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="text-center mb-8">
        <span className="px-4 py-1 bg-[#f9f9f9] border border-black text-[#0E0E0E] text-sm font-medium rounded-full">
          Places we are active
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-[#F9F9F9] p-6 rounded-lg shadow-md flex flex-col justify-between gap-5"
            >
              <div className='flex justify-center'>{place.icon}</div>
              <h3 className="text-lg font-semibold text-center">{place.name}</h3>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
