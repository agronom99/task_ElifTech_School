import {Link} from "react-router-dom"

function Header ({value, onClickPage}) {
  const page = [
   <Link to="/" className="link-header"> Shop</Link>,
    "|",
    <Link to="/shopping_cart" className="link-header">Shopping Cart</Link>
    
  ];
  return (
    
    <div className="page">
      <ul>
        {page.map((pageName, i) => (
          <li key={i}
            onClick={() => onClickPage(i)}
            className={value === i ? "active" : ""}
          >
            {pageName}
          </li>
        ))}
       
      </ul>
    </div>
  
  );
};

export default Header;
