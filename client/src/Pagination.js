import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from './redux/actions';

const Pagination = () => {
  const currentPage = useSelector((state) => state.page.currentPage);
  const totalPages = useSelector((state) => state.page.totalPages);
  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={pageNumber === currentPage ? 'active' : ''}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
