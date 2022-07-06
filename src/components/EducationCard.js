import React from 'react';
import Education from './Education';
import EducationForm from './EducationForm';

export default class EducationCard extends React.Component {
  render() {
    return (
      <section className="education">
        <h2 className="education__title">Education</h2>
        <hr></hr>
        <Education />
        <EducationForm />
      </section>
    );
  }
}