import React from 'react';
import pencilIcon from '../images/pencil-icon.svg';

export default class Information extends React.Component {
  render() {
    return (
      <>
        <p>Stephen Allard</p>
        <p>stephencallard@gmail.com</p>
        <p>(228) 342-5446</p>
        <button className="button">
          <img src={pencilIcon} className="icon" alt="pencil icon"></img>
          Edit
        </button>
      </>
    );
  }
}