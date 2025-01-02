import React from 'react';

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  console.log(imgURL, bigShoeImage);
  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${
        bigShoeImage === imgURL.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
      }`}
      onClick={() => changeBigShoeImage(imgURL.bigShoe)}>
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40sm:h-40 rounded-lg md:p-4'>
        <img
          src={imgURL?.thumbnail}
          alt='shoe'
          height={103}
          width={127}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
