import Nav from './components/Nav';
import CustomerReview from './sections/CustomerReview';
import Footer from './sections/Footer';
import { Hero } from './sections/Hero';
import { PopularProduct } from './sections/PopularProduct';
import { Services } from './sections/Services';
import SpecialOffer from './sections/SpecialOffer';
import { Subscribe } from './sections/Subscribe';
import SuperQuality from './sections/SuperQuality';

const App = () => (
  <main className='relative'>
    <Nav />
    <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero />
    </section>
    <section className='padding'>
      <PopularProduct />
    </section>
    <section className='padding'>
      <SuperQuality />
    </section>
    <section className='padding-x py-10'>
      <Services />
    </section>
    <section className='padding'>
      <SpecialOffer />
    </section>
    <section className='padding bg-pale-blue'>
      <CustomerReview />
    </section>
    <section className='padding-x sm:py-23 py-14 w-full'>
      <Subscribe />
    </section>
    <section className='padding-x padding-t pb-8 bg-black'>
      <Footer />
    </section>
  </main>
);

export default App;
