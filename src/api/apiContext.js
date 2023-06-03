import React, { createContext, useReducer, useEffect } from 'react';

// Define the initial state for the reducer
const initialState = {
  categories: [],
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS_CATEGORIES':
      return { ...state, loading: false, categories: action.payload, error: null };
    case 'FETCH_SUCCESS_PRODUCTS':
      return { ...state, loading: false, products: action.payload, error: null };
    case 'FETCH_SUCCESS_SELECTED_PRODUCT':
      return { ...state, loading: false, selectedProduct: action.payload, error: null };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Create the API context
export const ApiContext = createContext();

// Create the API provider component
export const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Define a function for fetching all categories
  const getAllCategories = async () => {
    dispatch({ type: 'FETCH_START' });

    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      console.log("response",  response);
      const categories = await response.json();

      dispatch({ type: 'FETCH_SUCCESS_CATEGORIES', payload: categories });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };

  // Define a function for fetching products by category
  const getCategory = async (category) => {
    dispatch({ type: 'FETCH_START' });

    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const products = await response.json();

      dispatch({ type: 'FETCH_SUCCESS_PRODUCTS', payload: products });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };

  // Define a function for fetching all products
  const getAllProducts = async () => {
    dispatch({ type: 'FETCH_START' });

    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();

      dispatch({ type: 'FETCH_SUCCESS_PRODUCTS', payload: products });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };

  // Define a function for fetching a single product
  const getProduct = async () => {
    dispatch({ type: 'FETCH_START' });

    try {
      const response = await fetch('https://fakestoreapi.com/products/1');
      const product = await response.json();

      dispatch({ type: 'FETCH_SUCCESS_SELECTED_PRODUCT', payload: product });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };

  // Pass the state, dispatch function, and API functions to the value prop
  return (
    <ApiContext.Provider
      value={{
        state,
        dispatch,
        getAllCategories,
        getCategory,
        getAllProducts,
        getProduct,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
