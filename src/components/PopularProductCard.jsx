import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt='name' className='w-[280px] h-[280px]' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='' height={24} width={24} />
        <p className='font-montserrat text-xl text-slate-gray'>(4.5)</p>
      </div>
      <h3 className='mt-23 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-p2 font-semibold font-montserrat  text-coral-red text-2xl'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
