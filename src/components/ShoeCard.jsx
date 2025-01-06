import React from 'react';
import PropTypes from 'prop-types';

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  return (
    <button
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${
        bigShoeImage === imgURL.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
      }`}
      onClick={() => changeBigShoeImage(imgURL.bigShoe)}>
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-lg md:p-4'>
        <img
          src={imgURL?.thumbnail}
          alt='shoe'
          height={103}
          width={127}
          className='object-contain'
        />
      </div>
    </button>
  );
};
ShoeCard.propTypes = {
  imgURL: PropTypes.shape({
    bigShoe: PropTypes.string,
    thumbnail: PropTypes.string
  }).isRequired,
  changeBigShoeImage: PropTypes.func.isRequired,
  bigShoeImage: PropTypes.string.isRequired
};

export default ShoeCard;
