import React from 'react';
import pencilIcon from '../images/pencil-icon.svg';
import removeIcon from '../images/remove-icon.svg';

export default class ExperienceDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="experience__display">
        <p>{this.props.experience.submitted.name}</p>
        <p>{this.props.experience.submitted.role}</p>
        <p>{this.props.experience.submitted.start} to {this.props.experience.submitted.end}</p>
        <div className="button-container">
          <button
            className="button"
            onClick={(event) => this.props.handleEdit(event, this.props.id)}
          >
            <img src={pencilIcon} className="icon" alt="pencil icon"></img>
            Edit
          </button>
          <button
            className="button"
            onClick={(event) => this.props.handleRemove(event, this.props.id)}
          >
            <img src={removeIcon} className="icon" alt="remove icon"></img>
            Remove
          </button>
        </div>
      </div>
    );
  }
}