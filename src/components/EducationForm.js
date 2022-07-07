import React from 'react';

export default class EducationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        className="education__form"
        onSubmit={(event) => this.props.handleSubmit(event, this.props.formData.id)}
      >
        <label htmlFor="name" className="education__label">Name of Institution:</label>
        <input 
          type="text"
          id="name"
          className="education__field"
          name="name"
          required={true}
          value={this.props.formData.name}
          onChange={(event) => this.props.handleChange(event, this.props.formData.id)}>
        </input>

        <label htmlFor="study" className="education__label">Area of Study:</label>
        <input
          type="text"
          id="study"
          className="education__field"
          name="study"
          required={true}
          value={this.props.formData.study}
          onChange={(event) => this.props.handleChange(event, this.props.formData.id)}> 
        </input>

        <label htmlFor="start" className="education__label">Start Date:</label>
        <input
          type="date"
          id="start"
          className="education__field"
          name="start"
          required={true}
          value={this.props.formData.start}
          onChange={(event) => this.props.handleChange(event, this.props.formData.id)}>
        </input>

        <label htmlFor="end" className="education__label">End Date:</label>
        <input
          type="date"
          id="end"
          className="education__field"
          name="end"
          required={true}
          value={this.props.formData.end}
          onChange={(event) => this.props.handleChange(event, this.props.formData.id)}>
        </input>

        <div className="button-container">
          <button type="submit" className="button">Submit</button> 
        </div>
      </form>
    );
  }
}