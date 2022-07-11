import React from 'react';

export default class ExperienceForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        className="experience__form"
        onSubmit={(event) => this.props.handleSubmit(event, this.props.id)}
      >
        <label htmlFor="name" className="experience__label">Name of Company:</label>
        <input 
          type="text"
          id="name"
          className="experience__field"
          name="name"
          required={true}
          value={this.props.experience.temporary.name}
          onChange={(event) => this.props.handleChange(event, this.props.id)}>
        </input>

        <label htmlFor="role" className="experience__label">Role:</label>
        <input
          type="text"
          id="role"
          className="experience__field"
          name="role"
          required={true}
          value={this.props.experience.temporary.role}
          onChange={(event) => this.props.handleChange(event, this.props.id)}> 
        </input>

        <label htmlFor="start" className="experience__label">Start Date:</label>
        <input
          type="date"
          id="start"
          className="experience__field"
          name="start"
          required={true}
          value={this.props.experience.temporary.start}
          onChange={(event) => this.props.handleChange(event, this.props.id)}>
        </input>

        <label htmlFor="end" className="experience__label">End Date:</label>
        <input
          type="date"
          id="end"
          className="experience__field"
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