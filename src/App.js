import React, { useState } from 'react';
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import styles from './App.module.scss';
import produkty from './common/consts/produkty';

function App() {
  const [productsToDisplay, setProductsToDisplay] = useState(produkty)
  const [shoppingList, setShoppingList] = useState([])

  const addToShoppingList = (product) => {
    const newShoppinglist = [...shoppingList];
    newShoppinglist.push(product);
    setShoppingList(newShoppinglist);
  }

  const deleteFromShoppingList = (product) => {
    const newShoppinglist = [...shoppingList];
    newShoppinglist.splice(product, 1);
    setShoppingList(newShoppinglist);
  }

  const addToProductList = (product) => {
    const newProductList = [...productsToDisplay];
    newProductList.push(product);
    setProductsToDisplay(newProductList)
  }

  return (
    <div className={styles.appWrapper}>
      <AddProducts products={produkty} addToProductList={addToProductList} />
      <ProductsFilters products={produkty} setProductsToDisplay={setProductsToDisplay} />
      <div className={styles.columnsWrapper}>
        <ProductsList productsToDisplay={productsToDisplay} addProduct={addToShoppingList} />
        <ShopingList shoppingList={shoppingList} deleteProduct={deleteFromShoppingList} />
      </div>
    </ div>
  );
}

export default App;
