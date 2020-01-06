import React, { Component } from 'react'

import ExerciseItem from '../../components/ExerciseItem/ExerciseItem'


export default class ExercisesListPage extends Component {
  state = {
    exercises: []
  }
  componentDidMount() {
    let exercises = this.props.exercises
    this.setState({ exercises })
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
    let allExercises = this.props.exercises
    let filter = e.target.value
    if (filter !== "All") {
    let filteredExercises = allExercises.filter(exercise => exercise.type === filter)
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
              <option value="All">All</option>
              <option value="Upper body">Upper Body</option>
              <option value="Lower body">Lower Body</option>
            </select>
          </form>
        </header>
        <table>
          <tbody>
            <tr>
              <th>Exercise</th>
              <th>Type</th>
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