// reducers/pageReducer.js

const initialState = {
    currentPage: 1,
    totalPages: 5, // Замените на ваше значение общего количества страниц
  };
  
  const pageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PAGE':
        return {
          ...state,
          currentPage: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default pageReducer;
  