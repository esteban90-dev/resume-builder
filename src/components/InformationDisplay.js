import React from 'react';
import pencilIcon from '../images/pencil-icon.svg';

export default class InformationDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p>{this.props.information.name}</p>
        <p>{this.props.information.email}</p>
        <p>{this.props.information.phone}</p>
        <button
          className="button"
          onClick={this.props.handleEdit}
        >
          <img src={pencilIcon} className="icon" alt="pencil icon"></img>
          Edit
        </button>
      </>
    );
  }
}