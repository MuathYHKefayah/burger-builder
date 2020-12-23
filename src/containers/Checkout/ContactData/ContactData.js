import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    deliveryMethod: "Fastest", // default value 
    loading: false,
  };

  nameChangeHandler = (event) => {
    this.setState({name: event.target.value});
  }
  emailChangeHandler = (event) => {
    this.setState({email: event.target.value});
  }
  streetChangeHandler = (event) => {
    this.setState({street: event.target.value});
  }
  postalChangeHandler = (event) => {
    this.setState({postalCode: event.target.value});
  }
  deliveryMethodChangeHandler = (event) => {
    this.setState({deliveryMethod: event.target.value});
  }

  orderHandler = (event) => {
    event.preventDefault(); //* to prevent form reload the page after request form action
    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: this.state.name,
        email: this.state.email,
        address: {
          street: this.state.street,
          postalCode: this.state.postalCode,
        },
      },
      deliveryMethod: this.state.deliveryMethod,
    };

    axios
      .post("/orders.json", order) //* adding .json is important
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
  render() {
    let form = (
      <form style={{
        borderRadius: '5px',
        backgroundColor: '#f2f2f2',
        padding: '20px'
      }}>
        <input type="text" name="name" placeholder="Your Name" onChange={this.nameChangeHandler}/>
        <input type="email" name="email" placeholder="Your Email" onChange={this.emailChangeHandler}/>
        <input type="text" name="street" placeholder="Street" onChange={this.streetChangeHandler}/>
        <input type="text" name="postal" placeholder="Postal Code" onChange={this.postalChangeHandler}/>
        {/* <input type="text" name="deliveryMethod" placeholder="Delivery Method" onChange={this.deliveryMethodChangeHandler}/> */}
        <select 
            name="deliveryMethod" 
            onChange={this.deliveryMethodChangeHandler}>
            <option value="fastest" selected>Fastest</option>
            <option value="normal">Normal</option>
        </select>
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
