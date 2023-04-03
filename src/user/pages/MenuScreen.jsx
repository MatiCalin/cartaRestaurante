import React from 'react';
import Menu from '../../components/Menu';
<<<<<<< HEAD


import "../pages/HomeScreen.css";

=======
import "../pages/HomeScreen.css";

>>>>>>> acbf130584181451d90491500d6efe0e8f4dbe02
export const MenuScreen = ({
  allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal
}) => {
  return (
<<<<<<< HEAD
=======
    
  
>>>>>>> acbf130584181451d90491500d6efe0e8f4dbe02
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

