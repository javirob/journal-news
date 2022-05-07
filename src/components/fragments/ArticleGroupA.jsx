import ArticleHeading from './ArticleHeading';
import Author from './Author';

const ArticleGroupA = ({ articles }) => {
  return (
    <div className='lg:max-w-[1040px] lg:mx-auto md:px-0 my-4 md:flex md:justify-between'>
      {articles.map((article) => {
        const { id, img, title, author } = article;

        return (
          <article key={id} className='border-t border-gray-300 md:border-none pt-3 md:pt-0 flex md:flex-col  md:space-x-0 md:space-y-4 mb-5 md:mx-4 md:py-3'>
            <div className='p-3 md:p-1 flex justify-center'>
              <div className='bg-black/40 inline-block cursor-pointer '>
                <img src={img} className='w-full h-full max-w-[350px] md:h-[233px] object-cover overflow-hidden hover:mix-blend-overlay ' alt={title} />
              </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <ArticleHeading title={title} />
              <Author author={author} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ArticleGroupA;
