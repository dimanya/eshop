import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { fetchProducts, filterProducts } from './redux/actions';
import SearchBar from './SearchBar';
/* import CategorySidebar from './CategorySidebar';
import SortingButton from './SortingButton'; */
import ProductList from './ProductList';
import Pagination from './Pagination';

const HomePage = () => {
  const dispatch = useDispatch();
  const { products, filteredProducts } = useSelector(state => state.products);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearch = (searchTerm) => {
    dispatch(filterProducts(searchTerm));
  };

  return (
    <div>
      <header>
        {/* Меню с кнопкой входа или регистрации */}
      </header>
      <main>
        <SearchBar onSearch={handleSearch} />
        <div className="row">
          <div className="col-md-3">
            {/* <CategorySidebar /> */}
          </div>
          <div className="col-md-9">
            <div className="d-flex justify-content-end">
              {/* <SortingButton /> */}
            </div>
            <ProductList products={filteredProducts.length > 0 ? filteredProducts : products} />
            <Pagination />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
