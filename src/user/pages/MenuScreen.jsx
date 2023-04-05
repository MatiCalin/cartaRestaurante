import React from 'react';
import Menu from '../../components/Menu';


import "../pages/HomeScreen.css";

import "../pages/HomeScreen.css";

export const MenuScreen = ({
  allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal
}) => {
  return (
    
  
    <>
    <div className='Principal-container'>
      <Menu
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    </div>
    </>
  );
}