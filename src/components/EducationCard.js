import React from 'react';
import Education from './Education';
import EducationForm from './EducationForm';

export default class EducationCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      study: '',
      start: '',
      end: '',
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
    const study = event.target.study.value;
    const start = event.target.start.value;
    const end = event.target.end.value;

    this.setState(
      {name, study, start, end, isSubmitted: true}
    );
  }

  handleEdit(event) {
    this.setState(
      {...this.state, isSubmitted: false}
    );
  }

  render() {
    const {isSubmitted, ...formData} = this.state;

    return (
      <section className="education">
        <h2 className="education__title">Education</h2>
        <hr></hr>
        { isSubmitted ? 
          <Education
            formData={formData}
            handleEdit={this.handleEdit}
          />
          :
          <EducationForm
            formData={formData}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        }
        
      </section>
    );
  }
}