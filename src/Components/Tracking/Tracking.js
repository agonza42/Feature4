import React, { Component } from 'react';
import { createTrackingEntry } from '../../Common/Services/TrackingService.js';
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
  /*handleInputChange(event) {
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
  /*}*/
  handleInputChange(event) {
    // Logging into the console to make sure the form is getting the correct values
    console.log('Event Target:', event.target);
    console.log('Name:', event.target.name);
    console.log('Value:', event.target.value);

    const { name, value } = event.target;

    this.setState(prevState => ({
        formData: {
            ...prevState.formData,
            [name]: name === 'todaysDate' || name === 'breakfastCals' ? parseFloat(value) : value || name === 'lunchCals' ? parseFloat(value) : value || name === 'dinnerCals' ? parseFloat(value) : value || name === 'snacksCals' ? parseFloat(value) : value || name === 'exerciseCals' ? parseFloat(value) : value
        }
    }), () => {
        console.log('Updated state:', this.state.formData);
    });
}

  // Function to handle asynchronous data when a submit event occurs
  // CHANGE to take in data from the form submission to then send to a JSON fil
  /*async handleSubmit(event) {
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
  }*/
  async handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting form data:", this.state.formData);

    // Parse the values
    const todaysDateValue = (this.state.formData.todaysDate);
    const breakfastCalsValue = parseFloat(this.state.formData.breakfastCals);
    const lunchCalsValue = parseFloat(this.state.formData.lunchCals);
    const dinnerCalsValue = parseFloat(this.state.formData.dinnerCals);
    const snacksCalsValue = parseFloat(this.state.formData.snacksCals);
    const exerciseCalsValue = parseFloat(this.state.formData.exerciseCals);
    
    // Simple validation
    if (isNaN(todaysDateValue) || isNaN(breakfastCalsValue) || isNaN(lunchCalsValue) || isNaN(dinnerCalsValue) || isNaN(snacksCalsValue) || isNaN(exerciseCalsValue)) {
      alert('Please provide values for all fields.');
      return;
    }

    const trackingEntryData = {
      todaysDate: todaysDateValue,
      breakfastCals: breakfastCalsValue,
      lunchCals: lunchCalsValue,
      dinnerCals: dinnerCalsValue,
      snacksCals: snacksCalsValue,
      exerciseCals: exerciseCalsValue
    };

    try {
      const response = await createTrackingEntry(trackingEntryData);
      console.log('Tracking entry created successfully:', response);
    } catch (error) {
      console.error('Error creating the tracking entry:', error);
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
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Tracking;
  