import { ReviewCard } from '../components/ReviewCard';
import { reviews } from '../constants';

const CustomerReview = () => {
  return (
    <section
      className='max-container
  '>
      <h3 className='text-4xl font-palanquin font-bold text-center'>
        {' '}
        what our <span className='text-coral-red'>Customers</span> say?
      </h3>
      <p className='info-text text-center m-auto mt-4 max-w-screen-lg'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div
        className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col
       gap-14'>
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
