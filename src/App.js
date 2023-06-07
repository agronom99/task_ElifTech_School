import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Shop from "./pages/Shop";
import ShopCart from "./pages/ShopCart"; 

import "./scss/app.scss";

function App() {
  const [pageId, setPageId] = React.useState(0);

  return (
    <div className="content">
      <Header value={pageId} onClickPage={(i) => setPageId(i)} />
      
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopping_cart" element={<ShopCart />} />
      </Routes>
      
    </div>
  );
}

export default App;