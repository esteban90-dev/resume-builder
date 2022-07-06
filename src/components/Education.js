import React from 'react';
import pencilIcon from '../images/pencil-icon.svg';

export default class Education extends React.Component {
  render() {
    return (
      <>
        <p>Mississippi State University</p>
        <p>Electrical Engineering</p>
        <p>2008 - 2009</p>
        <button
          className="button"
        >
          <img src={pencilIcon} className="icon" alt="pencil icon"></img>
          Edit
        </button>
      </>
    );
  }
}