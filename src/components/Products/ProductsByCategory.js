import React, { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../api/apiContext';


const ProductsByCategory = () => {
  const { state, getCategory } = useContext(ApiContext);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // useEffect(() => {
  //   getCategory('all');
  //   console.log( state.products);
  // }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex space-x-4 mb-4">
        <button
          className={`py-2 px-4 rounded ${
            selectedCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleCategoryChange('all')}
        >
          All
        </button>
        {state.categories.map((category) => (
          <button
            key={category}
            className={`py-2 px-4 rounded ${
              selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {state.loading ? (
        <p>Loading...</p>
      ) : state.error ? (
        <p>Error: {state.error}</p>
      ) : (
        state.products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm mx-2 my-4 bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <p className="text-gray-700 text-base">${product.price}</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductsByCategory;
