import React, { useState } from 'react';
import styles from '../../common/styles/Headers.module.scss';

function AddProducts(props) {
    const { products, addToProductList } = props;
    const [productName, setProductName] = useState("")
    const [categoryName, setCategoryName] = useState("")
    const [isFood, setIsFood] = useState(false);

    const dodajDoListy = (e) => {
        e.preventDefault();

        const newProduct = {
            nazwa: productName,
            kategoria: categoryName,
            produkctSpozywczy: isFood,
        };

        const productNames = products.map(el => el.nazwa)
        const duplicated = () => {
            if (productNames.find(product => product === newProduct.nazwa)) {
                return true
            } else {
                return false
            }
        }

        if (duplicated() === true) {
            alert('asd')
        } else {
            addToProductList(newProduct);
            products.push(newProduct)
            setProductName("");
            setCategoryName("");
            setIsFood(false);
        }
    }

    return (
        <div className={styles.Wrapper}>
            <form onSubmit={dodajDoListy}>
                <label>
                    Nazwa produktu
                    <input onChange={(e) => setProductName(e.target.value)} value={productName}></input>
                </label>
                <label>
                    Kategoria
                    <input onChange={(e) => setCategoryName(e.target.value)} value={categoryName}></input>
                </label>
                <label>
                    Produkt spozywczy?
                    <input type="checkbox" checked={isFood} onChange={() => setIsFood(!isFood)} />
                </label>
                <button disabled={!(productName && categoryName)} type="submit">Dodaj produkt!</button>
            </form>
        </div>

    );
};

export default AddProducts;