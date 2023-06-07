import React from 'react'

function Shops  ({value, onClickCategory}) {
    const categories = [
        "Mc Donny",
        "CKF",
        "etc.",
        "etc.",
        "etc.",
      ];
    return (
        <div className="nav">
        <ul>
        {categories.map((categoryName, i) => ( 
          <li key={i}
            onClick={() => onClickCategory(i)}
            className={value  === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
       
      </ul>
      </div>
      );
    }

export default Shops;