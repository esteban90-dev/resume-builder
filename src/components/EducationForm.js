import React from 'react';

export default class EducationForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name" className="education__label">Name of Institution:</label>
        <input 
          type="text"
          id="name"
          className="education__field"
          name="name"
          required="true">
        </input>

        <label htmlFor="study" className="education__label">Area of Study:</label>
        <input
          type="text"
          id="study"
          className="education__field"
          name="study"
          required="true"> 
        </input>

        <label htmlFor="start" className="education__label">Start Date:</label>
        <input
          type="month"
          id="start"
          className="education__field"
          name="start"
          required="true"> 
        </input>

        <label htmlFor="end" className="education__label">End Date:</label>
        <input
          type="month"
          id="end"
          className="education__field"
          name="end"
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