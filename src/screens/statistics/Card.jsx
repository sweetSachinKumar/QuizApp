import React from 'react';
// import './Card.css'; // Import your CSS file for styling

function Card({ data }) {
  return (
    <div className="bg-purple-600/95 rounded-xl shadow-lg shadow-fuchsia-700/40 p-5 text-center sm:w-full max-w-[250px] sm:m-4 m-1 w-[200px] transition-all hover:scale-[1.02]">
      <h2 className='sm:text-2xl text-xl mb-2 text-white'>{data.name}</h2>
      <div className="flex justify-between mb-2 sm:mb-4">
        <div className="flex-1 text-center pb-2 sm:p-2">
          <span className="text-xs text-white">Active: </span>
          <span className="text-sm text-white font-semibold">{data.sub_values.active}</span>
        </div>
        <div className="flex-1 text-center pb-2 sm:p-2">
          <span className="text-xs text-white">Inactive: </span>
          <span className="text-sm text-white font-semibold">{data.sub_values.in_active_quiz}</span>
        </div>
      </div>
      <p className="sm:text-3xl text-2xl font-bold text-white">{data.value}</p>
    </div>
  );
}

export default Card;
