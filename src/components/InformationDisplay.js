import React from 'react';
import pencilIcon from '../images/pencil-icon.svg';

export default class InformationDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p>{this.props.formData.name}</p>
        <p>{this.props.formData.email}</p>
        <p>{this.props.formData.phone}</p>
        <div className="button-container">
          <button
            className="button"
            onClick={this.props.handleEdit}
          >
            <img src={pencilIcon} className="icon" alt="pencil icon"></img>
            Edit
          </button>
        </div>
      </>
    );
  }
}