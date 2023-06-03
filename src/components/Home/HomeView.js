import React, { useContext, useEffect } from 'react'
import TrendingProducts from '../Products/TrendingProducts';
import ProductsByCategory from '../Products/ProductsByCategory';
import { ApiContext } from '../../api/apiContext';

export const HomeView = () => {
  const { state, getAllCategories,getAllProducts } = useContext(ApiContext);
  useEffect(() => {
    getAllCategories();
    getAllProducts();
    // getProduct();
  }, []);
  return (
    // <div>Home</div>
   <div>
     <div>
     <ProductsByCategory category="women's clothing" />
     </div>
    <div>
    <TrendingProducts/>
    </div>
   </div>
  )
}

