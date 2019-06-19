import styled, { css, keyframes } from "styled-components";

const Product = {};

const boot = "https://image.flaticon.com/icons/svg/79/79828.svg";
const kit = "https://image.flaticon.com/icons/svg/79/79693.svg";
const info =
  "https://finbank.ru/wp-content/themes/specular/specular/img/info-icon.png";
const basket = "https://image.flaticon.com/icons/png/512/34/34562.png";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

Product.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30%;
  min-width: 25%;
  position: relative;
  min-height: 350px;
  border: 1px solid black;
  margin: 2px 2px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
    right: 5px;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${buttonBackground});
    background-size: 40px 40px;
    background-position: center;
    background-repeat: no-repeat;
    width: 45px;
    height: 45px;
  `;
});

Product.Details = styled.div`
  display: flex;
  flex-direction: column;
  ${Product.Wrapper}:hover & {
    animation: 1s ${fadeOut} ease-out;
  }
`;

Product.Name = styled.p`
  text-align: center;
`;

Product.Price = styled.p`
  text-align: center;
  padding: 5px;
`;

Product.Country = styled.p`
  text-align: center;
  padding: 5px;
`;

Product.Description = styled.p`
  text-align: center;
  padding: 5px;
`;

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
    animation: 2s ${fadeIn} ease-out;
  }
`;

Product.Button = styled.button`
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 50px;
  border: none;
  font-size: 14px;
  position: relative;
  background-color: rgba(210, 255, 82, 1);
  box-shadow: 1px gray;
  cursor: pointer;
`;

Product.InfoButton = styled(Product.Button)``;

Product.AddToBasketButton = styled(Product.Button)``;

export default Product;
