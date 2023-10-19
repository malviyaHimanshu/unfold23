import React, { useEffect, useState } from "react";
// import Product from "../components/Product";
// import { Row, Col } from "react-bootstrap";
// import axios from "axios";

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    // async function fetchProducts() {
    //   const { data } = await axios.get("/api/v1/products/");
    //   // console.log(data);
    //   setProducts(data);
    // }
    // fetchProducts();
  }, []);

  return (
    <div>
      <h1>Home Screen</h1>
    </div>
  );
};

export default HomeScreen;
