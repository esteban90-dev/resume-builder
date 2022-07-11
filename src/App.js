import React from 'react';
import Header from './components/Header';
import InformationCard from './components/InformationCard';
import EducationCard from './components/EducationCard';
import ExperienceCard from './components/ExperienceCard';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <InformationCard />
          <EducationCard />
          <ExperienceCard />
        </main>
      </>
    );
  }
}