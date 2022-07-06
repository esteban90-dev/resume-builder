import React from 'react';

export default class InformationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit}
      >
        <label htmlFor="name" className="information__label">Name:</label>
        <input 
          type="text"
          id="name"
          className="information__field"
          name="name"
          value={this.props.formData.name}
          onChange={this.props.handleChange}  
          required="true">
        </input>

        <label htmlFor="email" className="information__label">Email:</label>
        <input
          type="email"
          id="email"
          className="information__field"
          name="email"
          value={this.props.formData.email}
          onChange={this.props.handleChange}
          required="true"> 
        </input>

        <label htmlFor="phone" className="information__label">Phone:</label>
        <input
          type="number"
          id="phone"
          className="information__field"
          name="phone"
          value={this.props.formData.phone}
          onChange={this.props.handleChange}
          required="true"> 
        </input>

        <button
          type="submit"
          className="button"
        >
          Submit
        </button>     
      </form>
    );
  }
}