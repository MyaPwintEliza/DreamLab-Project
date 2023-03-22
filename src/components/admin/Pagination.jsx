import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ handlePageChange, pageCount }) => {
  return (
    <ReactPaginate
      className=" border flex justify-center fixed bottom-0 -right-16  w-full py-4 bg-white z-0 gap-4"
      activeClassName="bg-blue-300 rounded-full"
      pageClassName="p-2"
      nextLabel="Next"
      previousLabel="Prev"
      previousClassName="p-2 bg-dreamLabColor1 text-white rounded"
      nextClassName="p-2 bg-dreamLabColor1 text-white rounded"
      onPageChange={(e) => handlePageChange(e.selected + 1)}
      pageCount={pageCount}
    />
  );
};

export default Pagination;
