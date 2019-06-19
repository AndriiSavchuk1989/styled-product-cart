import styled, { css } from "styled-components";

const Product = {};

const boot = "https://image.flaticon.com/icons/svg/79/79828.svg";
const kit = "https://image.flaticon.com/icons/svg/79/79693.svg";
const info =
  "https://cdn4.iconfinder.com/data/icons/miu/24/circle-info-more-information-detail-outline-stroke-512.png";
const basket = "https://image.flaticon.com/icons/png/512/34/34562.png";

Product.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30%;
  position: relative;
  min-height: 350px;
  border: 1px solid black;
`;

Product.Image = styled.img`
  flex-basis: 200px;
  max-width: 75%;
`;

Product.Icon = styled.div(({ type }) => {
  let backgroundimage = "";
  if (type === "kit") {
    backgroundimage = `${kit}`;
  } else {
    backgroundimage = `${boot}`;
  }
  return css`
    background-image: url(${backgroundimage});
    width: 25px;
    height: 25px;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
  `;
});

Product.ButtonBackground = styled.div(({ action }) => {
  let buttonBackground = "";
  if (action === "info") {
    buttonBackground = `${info}`;
  } else {
    buttonBackground = `${basket}`;
  }
  return css`
    background-image: url(${buttonBackground});
    background-size: cover;
    background-position: center;
  `;
});

Product.Details = styled.div`
  display: flex;
  flex-direction: column;
`;

Product.Name = styled.p`
  text-align: center;
`;

Product.Price = styled.p`
  text-align: center;
`;

Product.Country = styled.p`
  text-align: center;
`;

Product.Brand = styled.p``;

Product.ButtonsWrapper = styled.div`
  display: flex;
  visibility: hidden;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${Product.Wrapper}:hover & {
    visibility: visible;
  }
`;

Product.Button = styled.button`
  width: 60px;
  height: 60px;
  margin: 5px;
  border-radius: 60px;
  border: none;
  font-size: 14px;
  position: relative;
  cursor: pointer;
`;

Product.InfoButton = styled(Product.Button)`
  & > * {
    background-size: 60px 60px;
    text-decoration: none;
    color: #000;
    font-family: sans-serif;
    font-weight: bolder;
  }
`;

Product.AddToBasketButton = styled(Product.Button)`
  background-size: 60px 60px;
`;

export default Product;
