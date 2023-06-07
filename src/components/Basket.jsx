import React from 'react'
import CartBasket from './CartBasket';

const Basket = () => {
   const [shop, setShop] = React.useState([]);

   React.useEffect(() => {
    fetch(`https://6457ce9b0c15cb1482118f8f.mockapi.io/shop?category=`)
      .then((res) => res.json())
      .then((arr) => {
        setShop(arr);
      });
    window.scroll(0, 0);
  }, []);
  return (
    <div className='basket'>
       {shop.map((obj) => (
          <CartBasket title={obj.title} imageUrl={obj.imageUrl} price={obj.price} />
        ))}

    </div>
  )
}

export default Basket;
