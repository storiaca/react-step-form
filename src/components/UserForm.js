import React, { Component } from "react";

class UserForm extends Component {
  state = {
    step: 1,
    firtsName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle  fields change
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
  }
  render() 
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = {};
    return <div />;
  }
}

export default UserForm;
