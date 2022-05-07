const MainArticle = ({ img, title, author }) => {
  return (
    <div className='py-5'>
      <div className='flex justify-center items-center'>
        <div className=' bg-black/40 inline-block'>
          <img src={img} alt='/' className='w-full md:max-w-3xl  hover:mix-blend-overlay cursor-pointer ' />
        </div>
      </div>
      <h2 className='max-w-sm sm:max-w-xl lg:max-w-2xl mx-auto font-serif font-bold  text-xl sm:text-2xl md:text-3xl mt-3 mb-2 md:mt-5 md:mb-3 text-center hover:text-gray-600 cursor-pointer'>
        {title}
      </h2>
      <div className='text-center'>
        <span className='uppercase text-sm text-red-700 mb-3  hover:text-red-900 cursor-pointer'>{author}</span>
      </div>
    </div>
  );
};

export default MainArticle;
