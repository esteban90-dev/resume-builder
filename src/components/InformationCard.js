import React from 'react';
import InformationDisplay from './InformationDisplay';
import InformationForm from './InformationForm';

export default class InformationCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: {
        name: '',
        email: '',
        phone: '',
      },
      temporary: {
        name: '',
        email: '',
        phone: '',
      },
      isInEditMode: true,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    this.setState(prevState => {
      prevState.temporary[event.target.name] = event.target.value;
      return prevState;
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    this.setState(prevState => {
      prevState.submitted = {name, email, phone}
      prevState.isInEditMode = false;
      return prevState;
    });
  }

  handleEdit(event) {
    this.setState(prevState => {
      prevState.temporary = {...prevState.submitted};
      prevState.isInEditMode = true;
      return prevState;
    }
    );
  }

  handleCancel(event) {
    this.setState(prevState => {
      prevState.temporary = {...prevState.submitted};
      prevState.isInEditMode = false;
      return prevState;
    });
  }

  render() {
    return (
      <section className="information">
        <h2 className="information__title">General Information</h2>
        <hr></hr>
        { this.state.isInEditMode ? 
          <InformationForm
            information={this.state.temporary}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleCancel={this.handleCancel}
          />
          :
          <InformationDisplay
            information={this.state.submitted}
            handleEdit={this.handleEdit}
          />
        }
        
      </section>
    );
  }
}