import { useState } from 'react';
import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
import Button from '../components/Button';
import ShoeCard from '../components/ShoeCard';
import { shoes, statistics } from '../constants';

export const Hero = () => {
  const [shoeURL, setShoeURL] = useState(bigShoe1);
  const changeBigShoeImage = (imgURL) => {
    console.log(imgURL);
    setShoeURL(imgURL);
  };
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl text-coral-red font-montserrat'>
          Our Summer collections
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-6 mt-6 mb-14'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label='Shop now' iconURL={arrowRight} />
        <div className='flex w-full justify-start flex-wrap gap-16 mt-20'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 text-slate-gray font-montserrat'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={shoeURL}
          alt='shoe collection'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />
        <div
          className='flex absolute sm:gap-6 gap-4 
        -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe.thumbnail}
              imgURL={shoe}
              changeBigShoeImage={changeBigShoeImage}
              bigShoeImage={shoeURL}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
