import React from "react";
import Cart from "../components/Cart";
import Shops from "../components/Shops";

function Shop() {
  const [shop, setShop] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);

  React.useEffect(() => {
    fetch(`https://6457ce9b0c15cb1482118f8f.mockapi.io/shop?category=` + categoryId)
      .then((res) => res.json())
      .then((arr) => {
        setShop(arr);
        // setIsLoading(false);
      });
    window.scroll(0, 0);
  }, [categoryId]);

  return (
    <div className="card">
      <nav>
        <h2>Shops :</h2>
        <Shops value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
      </nav>
      <main>
        {shop.map((obj) => (
          <Cart title={obj.title} imageUrl={obj.imageUrl} />
        ))}
      </main>
    </div>
  );
}

export default Shop;
