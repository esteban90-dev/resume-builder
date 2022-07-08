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
          temporary: {
            name: '',
            study: '',
            start: '',
            end: '',
          },
          submitted: {
            name: '',
            study: '',
            start: '',
            end: '',
          },       
          isInEditMode: true,
        }
      ]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleNew = this.handleNew.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event, id) {
    this.setState(prevState => {
      const updatedEducations = prevState.educations.map( education => {
        if (education.id === id) {
          const updated = {...education};
          updated.temporary[event.target.name] = event.target.value;
          return updated;
        }
        else {
          return education;
        }
      });
      return updatedEducations;
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
          const updated = {...education};
          updated.submitted = {name, study, start, end};
          updated.isInEditMode = false;
          return updated;
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
          // copy submitted info to temp
          const updated = {...education};
          updated.temporary = {...education.submitted};

          // set edit mode true
          updated.isInEditMode = true;
          return updated;
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
          temporary: {
            name: '',
            study: '',
            start: '',
            end: '',
          },
          submitted: {
            name: '',
            study: '',
            start: '',
            end: '',
          },       
          isInEditMode: true,
        }
      );
      return prevState;
    });
  }

  handleCancel(event, id) {
    this.setState(prevState => {
      const updatedEducations = prevState.educations.map( education => {
        if (education.id === id) {
          // set edit mode false
          const updated = {...education};
          updated.isInEditMode = false;
          return updated;
        }
        else {
          return education;
        }
      });

      return {...prevState, educations: updatedEducations};
    });
  }

  render() {
    const educations = this.state.educations.map(education => {
      const isSubmitted = (education.submitted.name
        && education.submitted.study
        && education.submitted.start
        && education.submitted.end) ? true : false;

      // if in Edit mode, display form component
      if (education.isInEditMode) {
        return (
          <EducationForm
            education={education}
            id={education.id}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleCancel={this.handleCancel}
            key={education.id}
          />
        );
      } 
      // otherwise display the education display component
      // but only if there is actual submitted info
      else if (isSubmitted) {
        return (
          <EducationDisplay
            education={education}
            id={education.id}
            handleEdit={this.handleEdit}
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
        <div className="button-container">
          <button className="button" onClick={this.handleNew}>
            <img src={plusIcon} className="icon" alt="add new icon"></img>
            Add New
          </button>
        </div>
      </section>
    );
  }
}