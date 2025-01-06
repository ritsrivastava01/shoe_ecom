import PopularProductCard from '../components/PopularProductCard';
import { products } from '../constants';

export const PopularProduct = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-items-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        <p>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div
          className='mt-16 grid grid-cols-1 md:grid-cols-3
         sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 gap-14'>
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
