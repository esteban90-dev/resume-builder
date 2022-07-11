import React from 'react';

export default class InformationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
          type="text"
          id="name"
          name="name"
          value={this.props.information.name}
          onChange={this.props.handleChange}  
          required={true}>
        </input>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={this.props.information.email}
          onChange={this.props.handleChange}
          required={true}> 
        </input>

        <label htmlFor="phone">Phone:</label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={this.props.information.phone}
          onChange={this.props.handleChange}
          required={true}> 
        </input>

        <div className="button-container">
          <button type="button" className="button" onClick={this.props.handleCancel}>Cancel</button>
          <button type="submit" className="button">Submit</button> 
        </div>
      </form>
    );
  }
}