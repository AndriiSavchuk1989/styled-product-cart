import React from "react";
import Product from "./Product.styled";

const ProductComponent = props => {
  const { product } = props;
  const { type } = product;
  //console.log(product.type);
  return (
    <Product.Wrapper>
      <Product.Icon type={type} />
      <Product.Image src={product.image} />
      <Product.Details>
        <Product.Name>{product.name}</Product.Name>
        <Product.Country>{product.country}</Product.Country>
        <Product.Description>{product.description}</Product.Description>
        <Product.Price>${product.price}</Product.Price>
      </Product.Details>
      <Product.ButtonsWrapper>
        <Product.InfoButton>
          <Product.ButtonBackground action="info" />
        </Product.InfoButton>
        <Product.AddToBasketButton>
          <Product.ButtonBackground action="basket" />
        </Product.AddToBasketButton>
      </Product.ButtonsWrapper>
    </Product.Wrapper>
  );
};

export default ProductComponent;
