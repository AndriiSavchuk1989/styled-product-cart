import React from "react";
import ReactDOM from "react-dom";
import ProductComponent from "./Product.component";
import _Enhancer from "./ProductContainer";
import { products } from "./data";

import "./styles.css";

const Product = _Enhancer(ProductComponent);
console.log(Product);

const Shop = props => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-end"
      }}
    >
      {props.products.map(item => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Shop products={products} />, rootElement);
