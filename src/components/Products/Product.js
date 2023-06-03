// import React from 'react'

// export const Product =()=> {
//   return (
//     <div>Product</div>
//   )
// }

import React, { useContext, useEffect } from 'react';
import { ApiContext } from '../../api/apiContext';

export const Product = () => {
  const { state, dispatch, getAllCategories, getAllProducts } = useContext(ApiContext);


  return (
    <div>
      {state.loading ? (
        <p>Loading...</p>
      ) : state.error ? (
        <p>Error: {state.error}</p>
      ) : (
        <>
          <h2>Categories:</h2>
          <ul>
            {state.categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>

          <h2>Products:</h2>
          <ul>
            {state.products.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

// export default Product;
