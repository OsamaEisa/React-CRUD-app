import React from 'react';

const CourseForm = (props) => {
    return (
      <div>
        <form onSubmit={props.addCourse}>
            <input type='text' onChange={props.updateCourse} value={props.current} id='name' placeholder='Enter A New Course'/>
            <button type='submit'> Add Course</button>
        </form>

      </div>
    );
}

export default CourseForm;
