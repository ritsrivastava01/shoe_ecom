import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import Button from '../components/Button';

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 '>
        <img
          alt='offer'
          src={offer}
          width={773}
          height={687}
          className='object-contain w-full'></img>
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          <span className='text-coral-red inline-block mt-3'>special</span>{' '}
          offers
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='View Details' iconURL={arrowRight} />
          <Button
            label='Learn More'
            className='bg-white border-s-slate-gray text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
