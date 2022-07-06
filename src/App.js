import React from 'react';
import Header from './components/Header';
import InformationCard from './components/InformationCard';
import EducationCard from './components/EducationCard';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <InformationCard />
          <EducationCard />
        </main>
      </>
    );
  }
}