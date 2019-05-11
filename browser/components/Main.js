import React, { Component } from 'react';
import axios from 'axios';

import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent.js';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
    };

    this.selectStudent = this.selectStudent.bind(this);
    //this.createNewStudent = this.createNewStudent.bind(this);
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

  // async createNewStudent() {
  //   console.log('creating ..');
  //   try {
  //     const { data } = await axios.put('/student');
  //     this.setState({ students: data });
  //   } catch (error) {
  //     console.log('something went wrong');
  //   }
  // }

  selectStudent(student) {
    return this.setState({
      selectedStudent: student,
    });
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <div>
          <button type="submit">Add student</button>
        </div>
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
