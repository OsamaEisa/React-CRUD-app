import React, {Component, Fragment} from 'react';

class CourseList extends Component {

    state = {
        isEdit: false
    }

    // toggle state
    toggleState = () => {
        let toggle = this.state.isEdit;
        this.setState({
            isEdit: !toggle
        })
    }

    // UpdateCourse
    updateCourse = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleState();
    }

    // show the form to update
    renderUpdate = () => {
        return (
            <form onSubmit={this.updateCourse}>
                <input type='text' defaultValue= {this.props.details.name} ref={(v) => this.input = v } />
                <button type='submit'>Update Course</button>
            </form>
        )
    }

    renderCourse = () => {
            return (
                    <li>
                        <span>{this.props.details.name}</span>
                        <button onClick={() => this.toggleState()}>Edit Course</button>
                        <button onClick={() => this.props.deleteCourse(this.props.index)}>Delete Course</button>
                    </li>
                )
            }

    render() {

        // let isEdit = this.state.isEdit;
        let {isEdit} = this.state;

    return (
      <Fragment>
            { isEdit ? this.renderUpdate() : this.renderCourse() }
      </Fragment>
    )
    }
}

export default CourseList;
