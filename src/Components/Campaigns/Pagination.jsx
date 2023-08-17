import ReactPaginate from 'react-paginate';

const Pagination = ({ setCurrentPage, totalData }) => {
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <ReactPaginate
        className='flex items-center gap-5 mt-8'
        pageClassName='block border-2 border-gray-500 px-3 rounded hover:bg-yellow-500 hover:border-yellow-500 hover:text-white cursor-pointer'
        activeClassName='bg-yellow-500 border-yellow-500 text-white'
        nextLabel=''
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalData}
        previousLabel=""
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;