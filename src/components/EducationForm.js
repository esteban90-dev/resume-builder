import React from 'react';

export default class EducationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        onSubmit={(event) => this.props.handleSubmit(event, this.props.id)}
      >
        <label htmlFor="name">Name of Institution:</label>
        <input 
          type="text"
          id="name"
          name="name"
          required={true}
          value={this.props.education.temporary.name}
          onChange={(event) => this.props.handleChange(event, this.props.id)}>
        </input>

        <label htmlFor="study">Area of Study:</label>
        <input
          type="text"
          id="study"
          name="study"
          required={true}
          value={this.props.education.temporary.study}
          onChange={(event) => this.props.handleChange(event, this.props.id)}> 
        </input>

        <label htmlFor="start">Start Date:</label>
        <input
          type="date"
          id="start"
          name="start"
          required={true}
          value={this.props.education.temporary.start}
          onChange={(event) => this.props.handleChange(event, this.props.id)}>
        </input>

        <label htmlFor="end">End Date:</label>
        <input
          type="date"
          id="end"
          name="end"
          required={true}
          value={this.props.education.temporary.end}
          onChange={(event) => this.props.handleChange(event, this.props.id)}>
        </input>

        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={(event) => this.props.handleCancel(event, this.props.id)}
          >
            Cancel
          </button>
          <button type="submit" className="button">Submit</button> 
        </div>
      </form>
    );
  }
}