import React from 'react';
import pencilIcon from '../images/pencil-icon.svg';

export default class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="education__submission">
        <p>{this.props.formData.name}</p>
        <p>{this.props.formData.study}</p>
        <p>{this.props.formData.start} to {this.props.formData.end}</p>
        <button
          className="button"
          onClick={(event) => this.props.handleEdit(event, this.props.formData.id)}
        >
          <img src={pencilIcon} className="icon" alt="pencil icon"></img>
          Edit
        </button>
      </div>
    );
  }
}