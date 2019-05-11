import React from 'react';

export default class AddStudentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
    this.state.handleChange = this.state.handleChange.bind(this);
    this.state.handleSubmit = this.state.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  //submit event by default refresh page
  handleSubmit(event) {
    event.preventDefault();
    console.log('A name was submitted: ' + this.state.value);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
    });
  }

  render() {
    return (
      <div>
        <form onClick={this.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />

          <label htmlFor="lastName">lastName</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}
