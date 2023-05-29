const initialState = {
    products: [],
    filteredProducts: [],
    loading: true,
    error: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          products: action.payload,
          filteredProducts: action.payload,
          loading: false,
          error: null
        };
      case 'FETCH_PRODUCTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case 'FILTER_PRODUCTS':
        const filteredProducts = state.products.filter(product =>
          product.category.toLowerCase().includes(action.payload.toLowerCase())
        );
        return {
          ...state,
          filteredProducts
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  