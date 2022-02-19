import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import React, { useState } from 'react';

function ShopingList(props) {
  const { shoppingList, deleteProduct } = props;
  const [crossed, setCrossed] = useState([]);

  const handleCrossed = (i) => {
    if (crossed.includes(i)) {
      setCrossed(crossed.filter(e => e !== i))
    } else {
      setCrossed([...crossed, i])
    }
  }


  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        <ul>
          {shoppingList.map((produkty, i) => {
            const text = crossed.includes(i) ? "line-through" : "auto";
            return (
              <li style={{ textDecoration: text }} value={produkty.nazwa} key={i}
                onContextMenu={(e) => { e.preventDefault(); handleCrossed(i) }}
                onClick={() => deleteProduct(i)}>{`${produkty.nazwa}`}
              </li>)
          })}
        </ul>
      </header>
    </div>
  );
}

export default ShopingList;
