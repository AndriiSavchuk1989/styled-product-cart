import React from "react";
import ReactDOM from "react-dom";
import ProductComponent from "./Product.component";

import "./styles.css";

const products = [
  {
    id: "27",
    type: "boot",
    country: "Germany",
    name: "adidas Predator 19.1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 150,
    image: "https://images.sportsdirect.com/images/products/19300918_l.jpg",
    quantity: 1
  },
  {
    id: "1",
    type: "kit",
    country: "England",
    name: "Manchester United",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 150,
    image: "https://images.sportsdirect.com/images/products/37716208_l.jpg",
    quantity: 1
  }
];
const Shop = props => {
  return (
    <div style={{ display: "flex" }}>
      {props.products.map(item => (
        <ProductComponent key={item.id} product={item} />
      ))}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Shop products={products} />, rootElement);
