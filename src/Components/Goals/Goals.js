import React, { Component } from 'react';

// Import the child component
import GoalsChild from './GoalsChild';

// Import the CSS file
import '../../Style/Goals.css'; 

class Goals extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        height: '',
        weight: '',
        age: '',
        goal: '',
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
    alert('Goals form button works');
    try {
      // Here we're simulating a successful API call using promises to test if we can asynchronously handle data
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
        <hr />
        <h3>Personalized Fitness Goal-Setting</h3>
        <p>
          Please enter your information and goals for us to provide personalized
          milestones and goals!
        </p>

        <form id="form" method="post" onSubmit={this.handleSubmit}>
          <GoalsChild
            formData={this.state.formData}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Goals;
