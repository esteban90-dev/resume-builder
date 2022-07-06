import React from 'react';
import Education from './Education';

export default class EducationCard extends React.Component {
  render() {
    return (
      <section className="education">
        <h2 className="education__title">Education</h2>
        <hr></hr>
        <Education />
      </section>
    );
  }
}