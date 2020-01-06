import React, { Component } from 'react'
import './WorkoutItem.css'

export default class WorkoutItem extends Component {
  renderExercises() {
    const exercises = this.props.exercises
    return exercises.map(exercise => 
      <tr className="exercise-row" key={exercise.order}>
        <td>{exercise.order}</td>
        <td>{exercise.liftName}</td>
        <td>{exercise.weight}</td>
        <td>{exercise.reps}</td>
        <td>{exercise.sets}</td>
      </tr>
    )
  }
  render() {
    return (
      <details>
        <summary>{this.props.title}</summary>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Exercise</th>
              <th>Weight (lbs)</th>
              <th>Reps</th>
              <th>Sets</th>
            </tr>
            {this.renderExercises()}
          </tbody>
        </table>
      </details>
    )
  }
}