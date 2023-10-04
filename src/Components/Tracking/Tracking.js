import React, { Component } from 'react';
import TrackingChild from "./TrackingChild";

// Import the CSS file
import '../../Style/Tracking.css'; 

/* Tracking MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
class Tracking extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        todaysDate: '',
        breakfastCals: '',
        lunchCals: '',
        dinnerCals: '',
        snacksCals: '',
        exerciseCals: '',
      },
    };
    
    // Binding event handlers to maintain correct 'this' context
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // Function to handle events that change the input
  handleInputChange(event) {
    // Logging into the console to make sure form is getting correct values
    console.log('Event Target:', event.target);
    console.log('Name:', event.target.name);
    console.log('Value:', event.target.value);

    // WORK IN PROGRESS BELOW! We wanted to see if we could get all of the form data processed into the console for future features
    /*const { name, value } = event.target;

    const updatedFormData = {
      ...this.state.formData,
      [name]: value
    };

    this.setState({ formData: updatedFormData }, () => {
      console.log("Updated state:", this.state.formData);
    });*/
  }

  // Function to handle asynchronous data when a submit event occurs
  // CHANGE to take in data from the form submission to then send to a JSON fil
  async handleSubmit(event) {
    event.preventDefault();
    // Alert for submit button
    alert('Tracking form button works');
    try {
      // Test if we can asynchronously handle data
      let data = await Promise.resolve({
        message:
          'Data fetched successfully (from successful asynchronous API call simulation)',
      });

      // Update the state with the mocked data
      this.setState({ fetchedData: data });

      // Alert and log to the console if we've fetched the data successfully
      alert(
        'Data fetched successfully (from successful asynchronous API call simulation)'
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
        <h3>Daily Fitness Tracker</h3>
        <p>
          Please enter the calorie intake from your meals throughout the day, as
          well as the calories that you burned.
        </p>

        <form id="form" method="post" onSubmit={this.handleSubmit}>
          <TrackingChild
            formData={this.state.formData}
            onChange={this.handleInputChange}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
  

export default Tracking;
  