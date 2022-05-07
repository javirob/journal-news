import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p1 from '../assets/p1.jpg';

const data = [
  {
    id: 1,
    img: p1,
    section: 'opinion',
    tag: 'Public Domain',
    title: 'How to find a job in 2022',
    author: 'john cena',
  },
  {
    id: 2,
    img: p2,
    section: 'opinion',
    tag: 'Alternatives',
    title: 'Women in industry',
    author: 'john cena',
  },
  {
    id: 3,
    img: p3,
    section: 'opinion',
    tag: 'Other views',
    title: 'Partying after covid',
    author: 'Mike Smith',
  },
  {
    id: 4,
    img: p4,
    section: 'opinion',
    tag: 'Vox Populi',
    title: 'Where to go this Summer',
    author: 'maria sanchez',
  },
];

const Opinion = () => {
  return (
    <section className='my-6'>
      <div className='container mx-auto px-2 border-b border-gray-300'>
        <h2 className='text-3xl uppercase font-bold font-mono text-center py-2 mb-6'>Opinion</h2>

        {/* Flex container */}
        <div className='md:flex md:space-x-6 md:justify-center'>
          {/* Flex item 1 */}
          {data.map((item) => {
            const { id, img, section, tag, title, author } = item;
            return (
              <div key={id} className='mb-10 text-center flex flex-col items-center space-y-2'>
                {/* img */}
                <div className='bg-gray-900/20 cursor-pointer  '>
                  <img src={img} className='w-full md:max-w-[220px] hover:mix-blend-overlay ' alt='/' />
                </div>
                {/* caption */}
                <p className='uppercase text-xs'>
                  <span className='font-bold font-mono mr-2'>{section}</span> {tag}
                </p>
                {/* title */}
                <h4 className='max-w-sm font-serif text-md font-semibold  md:text-lg text-gray-800  md:max-w-xs hover:text-gray-500 cursor-pointer'>{title}</h4>
                {/* Author */}
                <p className='italic font-bold font-serif text-red-700 text-sm'>
                  by <span className='capitalize cursor-pointer hover:text-red-900'>{author}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Opinion;
