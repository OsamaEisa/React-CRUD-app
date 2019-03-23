import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

class App extends Component {

  state = {
    courses: [ 
      {name: 'Html'},
      {name: 'Css'},
      {name: 'PHP'},
      {name: 'jQuery'}
    ],
    current: '',
    erradd: ''
  }

  // Update Course
  updateCourse = (e) => {
    // console.log(e.target.value)
    this.setState({
      current: e.target.value
    })
  }

  // Add Course
  addCourse = (e) => {
    e.preventDefault();
    // console.log('Course Added')
    if (e.target.name.value !== '') {
      let current = this.state.current;
      let newCourses = this.state.courses;
      newCourses.push({name: current})
      this.setState({
        courses: newCourses,
        current:'',
        erradd:''
      })
    } else {
      this.setState({
        erradd: 'Please Enter Course Name'
      })
    }
  }

  // Delete Course 
  deleteCourse = (index) => {
    let allCourses = this.state.courses;
    allCourses.splice(index,1)
    this.setState({
      courses: allCourses
    })
    //console.log(index)
  }

  // Edit Course
  editCourse = (index, value) => {
    let allCourses = this.state.courses;
    let course = allCourses[index];
    course['name'] = value;
    this.setState({
      courses: allCourses
    })
  }

  render() {

    const {courses} = this.state;
    const len = courses.length;
    const coursesList = len ? ( courses.map( (course, index) => {
      return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    }) ) : (<h3 className='errmsg'>No Courses to Show</h3>)

    return (
      <div className="App">
      <h1>CRUD App</h1>
        <h3 className='errmsg'>{this.state.erradd}</h3>
        <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current} />
        <ul>
          {coursesList}
        </ul>

      </div>
    );
  }
}

export default App;
