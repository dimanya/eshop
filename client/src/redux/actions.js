import axios from 'axios';

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:8080/api/');
      console.log(response.data.flowersList)
      dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data.flowersList });
    } catch (error) {
      dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error.message });
    }
  };
};

export const filterProducts = (searchTerm) => {
  return { type: 'FILTER_PRODUCTS', payload: searchTerm };
};

export const setPage = (pageNumber) => {
  return {
    type: 'SET_PAGE',
    payload: pageNumber,
  };
};