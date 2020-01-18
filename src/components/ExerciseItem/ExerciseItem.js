import React, { Component } from 'react'

export default class ExerciseItem extends Component {
  render() {
    return (
      <tr className="exercise-item">
        <td>{this.props.exercise.liftName}</td>
        <td>{this.props.exercise.muscle_group}</td>
      </tr>
    )
  }
}