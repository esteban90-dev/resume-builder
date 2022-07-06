import React from 'react';
import Header from './components/Header';
import InformationCard from './components/InformationCard';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <InformationCard />
        </main>
      </>
    );
  }
}