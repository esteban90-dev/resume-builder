import React from 'react';
import Information from './Information';
import InformationForm from './InformationForm';

export default class InformationCard extends React.Component {
  render() {
    return (
      <section className="information">
        <h2 className="information__title">General Information</h2>
        <hr></hr>
        <Information />
        <InformationForm />
      </section>
    );
  }
}