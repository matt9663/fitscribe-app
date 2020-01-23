import React, { Component } from 'react'
import ExercisesContext from '../../context/ExercisesContext'
import ExercisesApiService from '../../services/exercises-api-service'

export default class ExerciseDatalist extends Component {
  static contextType = ExercisesContext
  componentDidMount() {
    this.context.clearError()
    ExercisesApiService.getExercises()
     .then(this.context.setExercises)
     .catch(this.context.setError)
    
  }
  render() {
    const { exercises = [] } = this.context
    const options = exercises.map((exercise, index) =>  
      <option key={index}>{exercise.liftName}</option>)
    return (
      <datalist id='exercises'>
        {options}
      </datalist>
    )
  }
}