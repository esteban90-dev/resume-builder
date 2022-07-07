import React from 'react';
import InformationDisplay from './InformationDisplay';
import InformationForm from './InformationForm';

export default class InformationCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      isSubmitted: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(event) {
    this.setState(
      {...this.state, [event.target.name]: event.target.value}
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    this.setState({name, email, phone, isSubmitted: true});
  }

  handleEdit(event) {
    this.setState(
      {...this.state, isSubmitted: false}
    );
  }

  render() {
    const {isSubmitted, ...formData} = this.state;

    return (
      <section className="information">
        <h2 className="information__title">General Information</h2>
        <hr></hr>
        { isSubmitted ? 
          <InformationDisplay
            information={formData}
            handleEdit={this.handleEdit}
          />
          :
          <InformationForm
            formData={formData}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        }
        
      </section>
    );
  }
}