import React, { Component } from 'react';
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

    // WORK IN PROGRESS BELOW! We wanted to see if we could get all of the form data processed into the console for future features
    /*const { name, value } = event.target;

    const updatedFormData = {
      ...this.state.formData,
      [name]: value,
    };

    this.setState({ formData: updatedFormData }, () => {
      console.log('Updated state:', this.state.formData);
    });*/
  }

  // Function to handle asynchronous data when a submit event occurs
  // FOR FUTURE FEATURES: We'll change this function to asynchronously take in data from the form submission to then send to a JSON file
  async handleSubmit(event) {
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
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    );
  }
}

export default Premium;
  
  