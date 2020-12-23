import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import queryString from "stringquery";
import { Route } from "react-router-dom";
import ContactData from "../Checkout/ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
  };

  componentWillMount() {
    const query = queryString(this.props.location.search);
    let price = 0;
    if (!("" in query)) {
      const ingredients = {};
      for (let param in query) {
        if (param === "price") {
          price = (+query[param]).toFixed(2);
        } else {
          ingredients[param] = +query[param];
        }
      }
      this.setState({ ingredients: ingredients, price: price });
    }
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.price} {...props}/>}
        />
      </div>
    );
  }
}

export default Checkout;
