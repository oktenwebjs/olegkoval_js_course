import './App.css';
import React, {useEffect, useCallback} from "react";
import {useSelector, useDispatch} from 'react-redux'

import {Header} from "./components/header";
import {ProductList} from "./components/product-list";
import {useServices} from "./services";
import {setProducts} from "./redux";


function App() {
  const {cart, wishlist, products} = useSelector(({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({
    cart, wishlist, products
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts());
  }, []);

  return (
    <div className="App">
      <Header/>
      <ProductList products={products} />
    </div>
  );
};

export default App;
