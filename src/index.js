import React from "react";
import ReactDOM from "react-dom";
import ProductComponent from "./Product.component";

import "./styles.css";

const product = {
  id: "1",
  type: "kit",
  country: "England",
  name: "Manchester United",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  price: 150,
  image: "https://images.sportsdirect.com/images/products/37716208_l.jpg",
  quantity: 1
};

const rootElement = document.getElementById("root");
ReactDOM.render(<ProductComponent product={product} />, rootElement);
