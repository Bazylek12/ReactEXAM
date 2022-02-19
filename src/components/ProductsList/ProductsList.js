import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class ProductsList extends React.Component {
  render() {
    const { productsToDisplay } = this.props;
    const { addProduct } = this.props;

    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <p>Lista produktów</p>
          <ul>
            {productsToDisplay.map((produkty, index) => <li key={index}
              onClick={() => addProduct(produkty)}>{`${produkty.nazwa}`}</li>)}
          </ul>
        </header>
      </div>
    );
  }
}

export default ProductsList;
