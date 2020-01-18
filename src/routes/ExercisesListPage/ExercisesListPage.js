import React, { Component } from 'react'
import ExercisesApiService from '../../services/exercises-api-service'
import ExerciseItem from '../../components/ExerciseItem/ExerciseItem'


export default class ExercisesListPage extends Component {
  state = {
    exercises: [],
    muscle_groups: [],
    error: null
  }

  componentDidMount() {
    ExercisesApiService.getExercises()
      .then(res => this.setState({ exercises: res}))
      .catch(res => this.setState({ error: res.error }))
  }

  setFilterOptions = (e) => {
    let allExercises  = this.state.exercises
    console.log(allExercises)
    const allMuscleGroups = allExercises.map(exercise => exercise.muscle_group)
    const dedupedMuscleGroups = new Set(allMuscleGroups)
    this.setState({muscle_groups: dedupedMuscleGroups})
  }

  renderFilterOptions() {
    let muscleGroups = ['All', ...this.state.muscle_groups]
    return muscleGroups.map((muscle_group, index) => 
      <option value={muscle_group} key={index}>{muscle_group}</option>
    )
  }

  renderExercises() {
    let exercises = this.state.exercises
    return exercises.map((exercise, index) => {
      return (
        <ExerciseItem
          key={index} 
          exercise={exercise}
        />  
      )
    })
  }

  handleFilterFunctions = (e) => {
    let allExercises = this.state.exercises
    let filter = e.target.value
    if (filter !== "All") {
    let filteredExercises = allExercises.filter(exercise => exercise.muscle_group === filter)
    this.setState({ exercises: filteredExercises })
    } else this.setState({ exercises: allExercises })
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