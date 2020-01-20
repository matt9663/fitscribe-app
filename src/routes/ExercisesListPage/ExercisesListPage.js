import React, { Component } from 'react'
import ExercisesApiService from '../../services/exercises-api-service'
import ExerciseItem from '../../components/ExerciseItem/ExerciseItem'


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
        <header className="filter-section">
          <form className="exercises-filter" onChange={this.handleFilterFunctions}>
            <label htmlFor="filter">Filter: </label>
            <select>
              {this.renderFilterOptions()}
            </select>
          </form>
        </header>
        <table>
          <tbody>
            <tr>
              <th>Exercise</th>
              <th>Group</th>
            </tr>
            {this.renderExercises()}
          </tbody>
        </table>
        
        <button type="button" name="add-exercise-button">Add New Exercise</button>
      </section>
    )
  }
}