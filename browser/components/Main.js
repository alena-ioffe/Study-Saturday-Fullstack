import React, { Component } from 'react';
import axios from 'axios';

import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent.js';
import AddStudentForm from './AddStudentForm.js';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
      showAddForm: false,
    };

    this.selectStudent = this.selectStudent.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  selectStudent(student) {
    return this.setState({
      selectedStudent: student,
    });
  }

  toggle(event) {
    this.setState(prevState => {
      return {
        showAddForm: !prevState.showAddForm,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <button type="submit" onClick={this.toggle}>
          {' '}
          Add New Student
        </button>
        {this.state.showAddForm ? <AddStudentForm /> : null}

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList
            students={this.state.students}
            selectStudent={this.selectStudent}
          />
        </table>
        {this.state.selectedStudent.id ? (
          <SingleStudent student={this.state.selectedStudent} />
        ) : null}
      </div>
    );
  }
}
