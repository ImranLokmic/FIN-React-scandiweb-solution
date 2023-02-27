import { useState, useEffect } from "react";
import { Product } from "../../components/index.js";
import "./products.scss";
import axios from "axios";

const Products = (props) => {
  const [users, setUsers] = useState([]);

  const productToProducts = (message) => {
    props.productsToApp(message);
  };

  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    axios
      .get("http://localhost/reactproject/displayproducts.php")
      .then(function (response) {
        setUsers(response.data);
 
      });
  }
  return (
    <div className="flex">
      {users.map((user, key) => (
        <Product
          key={key}
          product_name={user.product_name}
          product_sku={user.product_sku}
          product_price={user.product_price}
          product_unique={user.product_unique}
          productMessage={productToProducts}
        />
      ))}
    </div>
  );
};

export default Products;
