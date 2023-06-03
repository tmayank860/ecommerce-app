import React, { useContext } from 'react';
import { ApiContext } from '../../api/apiContext';
const TrendingProducts = () => {

    const { state } = useContext(ApiContext);

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      image: 'product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30,
      image: 'product3.jpg',
    },
    // Add more product objects as needed
  ];

  return (
    <div className="overflow-x-auto">
        <p className="font-bold text-xl mb-2">Trending Products</p>
      <div className="flex space-x-4 p-4">
        {state.products.map((product) => (
          <div
            key={product.id}
            className="flex-none w-64 bg-white rounded-lg shadow-md overflow-hidden"
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
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
