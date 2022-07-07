import React from 'react';
import EducationDisplay from './EducationDisplay';
import EducationForm from './EducationForm';
import plusIcon from '../images/plus-icon.svg';

export default class EducationCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      educations: [
        {
          id: '1',
          name: '',
          study: '',
          start: '',
          end: '',
          isSubmitted: false,
        }
      ]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleNew = this.handleNew.bind(this);
  }

  handleChange(event, id) {
    this.setState(prevState => {
      const updatedEducations = prevState.educations.map( education => {
        if (education.id === id) {
          return {...education, [event.target.name]: event.target.value}
        }
        else {
          return education;
        }
      });

      return {...prevState, educations: updatedEducations};
    });
  }

  handleSubmit(event, id) {
    event.preventDefault();
    const name = event.target.name.value;
    const study = event.target.study.value;
    const start = event.target.start.value;
    const end = event.target.end.value;

    this.setState(prevState => {
      const updatedEducations = prevState.educations.map( education => {
        if (education.id === id) {
          return {...education, name, study, start, end, isSubmitted: true}
        }
        else {
          return education;
        }
      });

      return {...prevState, educations: updatedEducations};
    });
  }

  handleEdit(event, id) {
    this.setState(prevState => {
      const updatedEducations = prevState.educations.map( education => {
        if (education.id === id) {
          return {...education, isSubmitted: false}
        }
        else {
          return education;
        }
      });

      return {...prevState, educations: updatedEducations};
    });
  }

  handleNew(event) {
    // get last id in use
    const lastId = this.state.educations[this.state.educations.length - 1].id;

    // push new education object into state
    this.setState(prevState => {
      prevState.educations.push(
        {
          id: lastId + 1,
          name: '',
          study: '',
          start: '',
          end: '',
          isSubmitted: false,
        }
      );
      return prevState;
    });
  }

  render() {
    const educations = this.state.educations.map(education => {
      // if form already submitted, build an education display component,
      // otherwise build a form component
      if (education.isSubmitted) {
        return (
          <EducationDisplay
            formData={education}
            handleEdit={this.handleEdit}
            key={education.id}
          />
        );
      } 
      else {
        return (
          <EducationForm
            formData={education}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            key={education.id}
          />
        );
      }
    });


    return (
      <section className="education">
        <h2 className="education__title">Education</h2>
        <hr></hr>
        {educations}
        <button
          className="button"
          onClick={this.handleNew}
        >
          <img src={plusIcon} className="icon" alt="add new icon"></img>
          Add New Education
        </button>
        
      </section>
    );
  }
}