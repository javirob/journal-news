import t1 from '../assets/t1.jpg';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpg';
import t4 from '../assets/t4.jpg';

import MainArticle from './fragments/MainArticle';
import ArticleGroupA from './fragments/ArticleGroupA';

const data = [
  {
    id: 1,
    img: t1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nisi.',
    author: 'jack sparrow',
  },
  {
    id: 2,
    img: t2,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nisi.',
    author: 'mary long',
  },
  {
    id: 3,
    img: t3,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nisi.',
    author: 'johny cash',
  },
  {
    id: 4,
    img: t4,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nisi.',
    author: 'will smith',
  },
];

const newData = [...data].splice(1);

console.log(newData);

const Travel = () => {
  return (
    <section className='my-6'>
      <div className='container mx-auto border-b border-gray-300'>
        <h2 className='text-3xl uppercase font-bold font-mono text-center py-2 '>travel</h2>

        <MainArticle img={data[0].img} title={data[0].title} author={data[0].author} />

        <ArticleGroupA articles={[...data].splice(1)} />
      </div>
    </section>
  );
};

export default Travel;
