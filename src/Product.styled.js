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
    opacity: 0.85;
  }
`;

const buttonsDown = keyframes`
  0% {
    margin-top: 50%;
  }
  100% {
    margin-top: 0%;
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
    background-size: 30px 30px;
    background-position: center;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
  `;
});

Product.Details = styled.div`
  display: flex;
  flex-direction: column;
  ${Product.Wrapper}:hover & {
    display: none;
  }
`;

Product.Name = styled.p`
  font-size: 18px;
  text-align: center;
  height: 20px;
  overflow-y: hidden;
`;

Product.Country = styled.p`
  font-size: 16px;
  text-align: center;
  padding: 5px;
`;

Product.Description = styled.p`
  font-size: 14px;
  text-align: center;
  padding: 5px;
`;

Product.Price = styled.p`
  font-size: 12px;
  text-align: center;
  padding: 5px;
`;

Product.Count = styled.p`
  text-align: center;
  font-size: 10px;
`;

Product.ButtonsWrapper = styled.div`
  display: flex;
  visibility: hidden;
  justify-content: space-evenly;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -75%);
  ${Product.Wrapper}:hover & {
    visibility: visible;
    animation: 1s ${fadeIn} ease-out, 1s ${buttonsDown} ease-out;
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
  cursor: pointer;
  box-shadow: 0 0 10px rgba(210, 255, 82, 0.5);
  :hover {
    box-shadow: none;
    background-color: yellow;
  }
`;

Product.InfoButton = styled(Product.Button)``;

Product.AddToBasketButton = styled(Product.Button)``;

export default Product;
