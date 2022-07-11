import React from 'react';

export default class ExperienceForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        onSubmit={(event) => this.props.handleSubmit(event, this.props.id)}
      >
        <label htmlFor="name">Name of Company:</label>
        <input 
          type="text"
          id="name"
          name="name"
          required={true}
          value={this.props.experience.temporary.name}
          onChange={(event) => this.props.handleChange(event, this.props.id)}>
        </input>

        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          required={true}
          value={this.props.experience.temporary.role}
          onChange={(event) => this.props.handleChange(event, this.props.id)}> 
        </input>

        <label htmlFor="start">Start Date:</label>
        <input
          type="date"
          id="start"
          name="start"
          required={true}
          value={this.props.experience.temporary.start}
          onChange={(event) => this.props.handleChange(event, this.props.id)}>
        </input>

        <label htmlFor="end">End Date:</label>
        <input
          type="date"
          id="end"
          name="end"
          required={true}
          value={this.props.experience.temporary.end}
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