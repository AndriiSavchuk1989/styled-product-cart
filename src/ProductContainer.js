import React from "react";

const Enhancer = Component => {
  class _Enhancer extends React.Component {
    constructor(props) {
      const { product } = props;
      super(props);
      this.state = { product: { ...product } };
      this.state.handleClick = this.handleClick.bind(this);
      this.state.handleAddToBasket = this.handleAddToBasket.bind(this);
    }

    handleClick = () => {
      console.log(this.state.product.id);
    };

    handleAddToBasket = () => {
      console.log(
        `Thanks, you have add ${this.state.product.name} ${
          this.state.product.type
        } to basket`
      );
    };

    render() {
      console.log(this.state);
      return <Component {...this.state} />;
    }
  }
  _Enhancer.displayName = "Enhancer Component";
  return _Enhancer;
};

export default Enhancer;
