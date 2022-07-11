import React from 'react';
import ExperienceDisplay from './ExperienceDisplay';
import ExperienceForm from './ExperienceForm';
import plusIcon from '../images/plus-icon.svg';

export default class ExperienceCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      experiences: this.defaultExperience(),
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleNew = this.handleNew.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  defaultExperience() {
    return [
      {
        id: '1',
        temporary: {
          name: '',
          role: '',
          start: '',
          end: '',
        },
        submitted: {
          name: '',
          role: '',
          start: '',
          end: '',
        },       
        isInEditMode: false,
      }
    ];
  }

  handleChange(event, id) {
    this.setState(prevState => {
      const updatedExperiences = prevState.experiences.map( experience => {
        if (experience.id === id) {
          const updated = {...experience};
          updated.temporary[event.target.name] = event.target.value;
          return updated;
        }
        else {
          return experience;
        }
      });
      
      return {experiences: updatedExperiences};
    });
  }

  handleSubmit(event, id) {
    event.preventDefault();
    const name = event.target.name.value;
    const role = event.target.role.value;
    const start = event.target.start.value;
    const end = event.target.end.value;

    this.setState(prevState => {
      const updatedExperiences = prevState.experiences.map( experience => {
        if (experience.id === id) {
          const updated = {...experience};
          updated.submitted = {name, role, start, end};
          updated.isInEditMode = false;
          return updated;
        }
        else {
          return experience;
        }
      });

      return {...prevState, experiences: updatedExperiences};
    });
  }

  handleEdit(event, id) {
    this.setState(prevState => {
      const updatedExperiences = prevState.experiences.map( experience => {
        if (experience.id === id) {
          // copy submitted info to temp
          const updated = {...experience};
          updated.temporary = {...experience.submitted};

          // set edit mode true
          updated.isInEditMode = true;
          return updated;
        }
        else {
          return experience;
        }
      });

      return {...prevState, experiences: updatedExperiences};
    });
  }

  handleNew(event) {
    // get last id in use
    const lastId = this.state.experiences[this.state.experiences.length - 1].id;

    // push new experience object into state
    this.setState(prevState => {
      prevState.experiences.push(
        {
          id: lastId + 1,
          temporary: {
            name: '',
            role: '',
            start: '',
            end: '',
          },
          submitted: {
            name: '',
            role: '',
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
      const updatedExperiences = prevState.experiences.map( experience => {
        if (experience.id === id) {
          // set edit mode false
          const updated = {...experience};
          updated.isInEditMode = false;
          return updated;
        }
        else {
          return experience;
        }
      });

      return {...prevState, experiences: updatedExperiences};
    });
  }

  handleRemove(event, id) {
    if (window.confirm('are you sure?')) {
      this.setState(prevState => {
        let updatedExperiences = prevState.experiences.filter( experience => 
          experience.id !== id
        );
  
        // if the last remaining experience was removed, 
        // add a default state object
        if (updatedExperiences.length === 0) {
          updatedExperiences = this.defaultExperience();
        }
  
        return {experiences: updatedExperiences};
      });
    }
  }

  render() {
    const experiences = this.state.experiences.map(experience => {
      const isSubmitted = (experience.submitted.name
        && experience.submitted.role
        && experience.submitted.start
        && experience.submitted.end) ? true : false;

      // if in Edit mode, display form component
      if (experience.isInEditMode) {
        return (
          <ExperienceForm
            experience={experience}
            id={experience.id}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleCancel={this.handleCancel}
            key={experience.id}
          />
        );
      } 
      // otherwise display the experience display component
      // but only if there is actual submitted info
      else if (isSubmitted) {
        return (
          <ExperienceDisplay
            experience={experience}
            id={experience.id}
            handleEdit={this.handleEdit}
            handleRemove={this.handleRemove}
            key={experience.id}
          />
        );
      }
    });


    return (
      <section className="experience">
        <h2 className="experience__title">Experience</h2>
        <hr></hr>
        {experiences}
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