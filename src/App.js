import "./app.scss";
import { Header, NewHeader, Products, New } from "./containers/index.js";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [productsMessage, setProductsMessage] = useState([]);
  const productsToApp = (message) => {
    setProductsMessage(message);
  };
  const [newProducts,setNewProducts] = useState([]);
  const newToApp = (message) => {
    setNewProducts(message);
  }


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container mx-auto">
              <Header appMessage={productsMessage} />
              <Products productsToApp={productsToApp} />
            </div>
          }
        ></Route>
        <Route
          path="/add-products"
          element={
            <div className="container mx-auto">
              <NewHeader appNewMessage={newProducts}/>
              <New newToApp={newToApp}/>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
