import p1 from '../assets/p5.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';

import ArticleGroupA from './fragments/ArticleGroupA';

const data = [
  {
    id: 1,
    img: p1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nisi.',
    author: 'jack sparrow',
  },
  {
    id: 2,
    img: p2,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nisi.',
    author: 'mary long',
  },
  {
    id: 3,
    img: p3,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nisi.',
    author: 'johny cash',
  },
  {
    id: 4,
    img: p4,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nisi.',
    author: 'will smith',
  },
];

const Hero = () => {
  return (
    <section className='mb-6 '>
      <div className='container mx-auto border-b border-gray-300'>
        <div className='py-5'>
          <h2 className='max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto font-serif font-bold  text-xl sm:text-2xl md:text-3xl mb-2 md:mt-5 md:mb-3 text-center hover:text-gray-600 cursor-pointer'>
            {data[0].title}
          </h2>
          <div className='text-center mb-4'>
            <span className='uppercase text-sm text-red-700 mb-3  hover:text-red-900 cursor-pointer'>{data[0].author}</span>
          </div>
          <div className='flex justify-center items-center'>
            <div className=' bg-black/40 inline-block'>
              <img src={data[0].img} alt='/' className='w-full md:max-w-3xl  hover:mix-blend-overlay cursor-pointer ' />
            </div>
          </div>
        </div>

        <ArticleGroupA articles={[...data].splice(1)} />
      </div>
    </section>
  );
};

export default Hero;
