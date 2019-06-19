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
  },
  {
    id: "2",
    type: "kit",
    country: "England",
    name: "Arsenal",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 125,
    image: "https://images.sportsdirect.com/images/products/37746808_l.jpg",
    quantity: 1
  },
  {
    id: "3",
    type: "kit",
    country: "England",
    name: "Chelsea",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 130,
    image: "https://images.sportsdirect.com/images/products/37759018_l.jpg",
    quantity: 1
  },
  {
    id: "4",
    type: "kit",
    country: "England",
    name: "Everton",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 110,
    image: "https://images.sportsdirect.com/images/products/37709918_l.jpg",
    quantity: 1
  }
];
const Shop = props => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto",
        flexWrap: "wrap"
      }}
    >
      {props.products.map(item => (
        <ProductComponent key={item.id} product={item} />
      ))}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Shop products={products} />, rootElement);
