import React, { Component } from 'react'
import ExercisesApiService from '../../services/exercises-api-service'
import ExerciseItem from '../../components/ExerciseItem/ExerciseItem'
import { Link } from 'react-router-dom'
import './ExercisesListPage.css'


export default class ExercisesListPage extends Component {
  state = {
    allExercises: [],
    filteredExercises: [],
    error: null
  }

  componentDidMount() {
    ExercisesApiService.getExercises()
      .then(res => this.setState({ allExercises: res, filteredExercises: res }))
      .catch(res => this.setState({ error: res.error }))
  }

  renderFilterOptions() {
    let { allExercises } = this.state
    let allMuscleGroups = allExercises.map(exercise => exercise.muscle_group)
    let dedupedMuscleGroups = new Set(allMuscleGroups)
    let muscleGroups = ['All', ...dedupedMuscleGroups.values()]
    return muscleGroups.map((muscle_group, index) => 
      <option value={muscle_group} key={index}>{muscle_group}</option>
    )
  }

  renderExercises() {
    let { filteredExercises } = this.state
    return filteredExercises.map((exercise, index) => {
      return (
        <ExerciseItem
          key={index} 
          exercise={exercise}
        />  
      )
    })
  }

  handleFilterFunctions = (e) => {
    let { allExercises } = this.state
    let filter = e.target.value
    if (filter !== "All") {
    let filteredResults = allExercises.filter(exercise => exercise.muscle_group === filter)
    this.setState({ filteredExercises: filteredResults })
    } else this.setState({ filteredExercises: allExercises })
  }

  render() {
    return (
      <section className="exercise-list">
        <header className="functions-section">
          <Link to={{
            pathname: '/create/exercise',
            state: {
              exercises: this.state.allExercises
            }
          }}>
            <button type="button" className="add-exercise-button">
              <i id="add-exercise-icon" className ="fas fa-plus-circle"></i> 
              Add New Exercise
            </button>
          </Link>
          <form className="exercises-filter" onChange={this.handleFilterFunctions}>
            <label htmlFor="filter" value="filter"><i id="filter" className="fas fa-filter"></i></label>
            <select id='filter'>
              {this.renderFilterOptions()}
            </select>
          </form>
        </header>
        <div className='exercise-list-wrapper'>
        <table>
          <tbody>
            <tr>
              <th className="exercises-tr-left">Exercise</th>
              <th className="exercises-tr-right">Group</th>
            </tr>
            {this.renderExercises()}
          </tbody>
        </table>
        </div>
        
      </section>
    )
  }
}