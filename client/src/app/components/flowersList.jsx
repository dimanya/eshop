import React, { useState } from 'react';
import Flower from './flower';
import Pagination from './pagination';
import { paginate } from '../utils/paginate';


const Flowers = ({flowers, ...rest}) => {
    const count = flowers.length
    const pageSize = 4
    const[currentPage, setCurrentPage] = useState(1)
    const handlePageChange = (pageIndex) => {
      setCurrentPage(pageIndex)
    }
    
    const flowerCrop = paginate(flowers, currentPage, pageSize)
    return (
    <>
      <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Название</th>
          <th scope="col">Категория</th>
          <th scope="col">Цена</th>
        </tr>
      </thead>
      <tbody>
        {flowerCrop.map((flower) => (
          <Flower  key={flower._id} {...flower}/>
        ))}
      </tbody>
    </table>
    <Pagination 
      itemsCount={count} 
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  </>
  );
}
 
export default Flowers;