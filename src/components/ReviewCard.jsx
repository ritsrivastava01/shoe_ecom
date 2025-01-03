import React from 'react';
import { star } from '../assets/icons';

export const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt='customer URL'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <img
          src={star}
          alt='star'
          width={24}
          height={24}
          className='m-0 object-contain'></img>
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <h3 className='mt-1 font-palanquin font-bold text-3xl'>{customerName}</h3>
    </div>
  );
};
