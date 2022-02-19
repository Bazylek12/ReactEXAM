import React, { useEffect, useState } from 'react';
import styles from '../../common/styles/Headers.module.scss';

function ProductsFilters(props) {
    const { products, setProductsToDisplay } = props;
    const [textFilter, setTextFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [foodOnly, setFoodOnly] = useState(false);

    const uniqueCategory = products.map((produkty) => produkty.kategoria)
        .filter((value, index, self) => self.indexOf(value) === index);

    const catgoriesOptions = uniqueCategory.map((element, index) =>
        <option value={element} key={index}>
            {element}{""}
        </option>
    )
    useEffect(() => {
        let filteredProducts = products.filter((product) => product.nazwa.toLowerCase().includes(textFilter.toLowerCase()));
        if (categoryFilter) {
            filteredProducts = filteredProducts.filter((product) => product.kategoria === categoryFilter);
        }
        if (foodOnly) {
            filteredProducts = filteredProducts.filter((product) => product.produktSpozywczy);
        }
        setProductsToDisplay(filteredProducts)
    }, [textFilter, categoryFilter, products, foodOnly, setProductsToDisplay])

    return (
        <div className={styles.Wrapper}>
            <div>
                <label>
                    Filtrowanie po nazwie
                    <input
                        onChange={(e) => setTextFilter(e.target.value)}
                        value={textFilter}
                    ></input>
                </label>
                <label>
                    Filtrowanie po nazwie
                    <select
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        value={categoryFilter}
                    >
                        <option value="">Kategoria</option>
                        {catgoriesOptions}
                    </select>
                </label>
            </div>
            <label>
                Food only:
                <input
                    type="checkbox"
                    onChange={() => setFoodOnly(!foodOnly)}
                    checked={foodOnly}
                ></input>
            </label>
        </div>
    );
};

export default ProductsFilters;