import React from 'react';

export default class EducationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit}
      >
        <label htmlFor="name" className="education__label">Name of Institution:</label>
        <input 
          type="text"
          id="name"
          className="education__field"
          name="name"
          required={true}
          value={this.props.formData.name}
          onChange={this.props.handleChange}>
        </input>

        <label htmlFor="study" className="education__label">Area of Study:</label>
        <input
          type="text"
          id="study"
          className="education__field"
          name="study"
          required={true}
          value={this.props.formData.study}
          onChange={this.props.handleChange}> 
        </input>

        <label htmlFor="start" className="education__label">Start Date:</label>
        <input
          type="date"
          id="start"
          className="education__field"
          name="start"
          required={true}
          value={this.props.formData.start}
          onChange={this.props.handleChange}>
        </input>

        <label htmlFor="end" className="education__label">End Date:</label>
        <input
          type="date"
          id="end"
          className="education__field"
          name="end"
          required={true}
          value={this.props.formData.end}
          onChange={this.props.handleChange}>
        </input>

        <button
          type="submit"
          className="button"
        >
          Submit
        </button>     
      </form>
    );
  }
}