import React from 'react';

export default class InformationForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="informationName" className="information__label">Name:</label>
        <input type="text" id="informationName" className="information__field"></input>

        <label htmlFor="informationEmail" className="information__label">Email:</label>
        <input type="email" id="informationEmail" className="information__field"></input>

        <label htmlFor="informationPhone" className="information__label">Phone:</label>
        <input type="tel" id="informationPhone" className="information__field"></input>

        <button type="submit" className="button">Submit</button>     
      </form>
    );
  }
}