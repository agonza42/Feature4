import React, { Component } from 'react';
import { createPremiumSignUp } from '../../Common/Services/PremiumService.js';
import PremiumChild from "./PremiumChild";

/* Premium MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
class Premium extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        name: '',
        cardNumber: '',
        expirationDate: '',
        securityCode: '',
      },
    };

    // Binding event handlers to maintain the correct 'this' context
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Function to handle events that change the input
  handleInputChange(event) {
    // Logging into the console to make sure the form is getting the correct values
    console.log('Event Target:', event.target);
    console.log('Name:', event.target.name);
    console.log('Value:', event.target.value);

    const { name, value } = event.target;

    let updatedValue;

    if (name === 'cardNumber' || name === 'securityCode') {
        updatedValue = parseInt(value);
    } else if (name === 'expirationDate') { // Assuming expirationDate is input type 'date' which will return date in string format "YYYY-MM-DD".
        updatedValue = value;
    } else {
        updatedValue = value; // default for other fields (like 'name')
    }

    this.setState(prevState => ({
        formData: {
            ...prevState.formData,
            [name]: updatedValue
        }
    }), () => {
        console.log('Updated state:', this.state.formData);
    });

  }

  // Function to handle asynchronous data when a submit event occurs
  // FOR FUTURE FEATURES: We'll change this function to asynchronously take in data from the form submission to then send to a JSON file
  /*async handleSubmit(event) {
    event.preventDefault();
    // Alert for the submit button
    alert('Sign-up form button works');
    try {
      // Here we're simulating a successful API call using promises to test if we can asynchronously handle data
      let data = await Promise.resolve({
        message:
          'Data fetched successfully (from a successful asynchronous API call simulation)',
      });

      // Update the state with the mocked data
      this.setState({ fetchedData: data });

      // Alert and log to the console if we've fetched the data successfully
      alert(
        'Data fetched successfully (from a successful asynchronous API call simulation)'
      );
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }*/
  async handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting form data:", this.state.formData);
    
    // Parse the values
    const nameValue = this.state.formData.name;
    const cardNumberValue = parseInt(this.state.formData.cardNumber);
    const expirationDateValue = this.state.formData.expirationDate;
    const securityCodeValue = parseInt(this.state.formData.securityCode);

    const expirationDateObj = new Date(expirationDateValue);

    // Validate the values
    if (!nameValue || typeof nameValue !== 'string' || !cardNumberValue || cardNumberValue <= 0 || !securityCodeValue || securityCodeValue <= 0 || !/^(\d{4}-\d{2}-\d{2})$/.test(expirationDateValue)) {
      alert('Please provide valid input values.');
      return;
    }

    // Now create the data object to be sent
    const signupData = {
      name: nameValue,
      cardNumber: cardNumberValue,
      expirationDate: expirationDateObj,
      securityCode: securityCodeValue
    };

    try {
      // Create the signup using your service function
      const response = await createPremiumSignUp(signupData);
      console.log('Premium SignUp created successfully:', response);

    } catch (error) {
      console.error('Error creating the premium signup:', error);
    }
  }

  // Using render for the component's HTML including form and button for user interaction
  render() {
    return (
      <div>
        <br />
        <hr />
        <h3>Subscribe to FitSnap+ Premium</h3>
        <p>
          Please fill in this form to join the monthly subscription for our
          premium service!
        </p>

        <form id="form" method="post" onSubmit={this.handleSubmit}>
          <PremiumChild
            formData={this.state.formData}
            onChange={this.handleInputChange}
          />
          <button type="submit">
            Subscribe
          </button>
        </form>
      </div>
    );
  }
}

export default Premium;
  
  