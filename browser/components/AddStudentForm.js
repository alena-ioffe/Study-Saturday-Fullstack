import React from 'react';

export default class AddStudentForm extends React.Component {
  constructor() {
    super();
    this.statev = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" />

          <label htmlFor="lastName">lastName</label>
          <input type="text" name="lastName" />

          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}
