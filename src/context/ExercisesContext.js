import React, { Component } from 'react'

const ExercisesContext = React.createContext({
  exercises: [],
  error: null,
  setExercises: () => {},
  setError: () => {},
  clearError: () => {},
  addExercise: () => {}
})

export default ExercisesContext

export class ExercisesProvider extends Component {
  state = {
    exercises: [],
    error: null
  };

  setExercises = exercises => {
    this.setState({ exercises })
  }
  setError = error => {
    this.setState({ error })
  }
  clearError = () => {
    this.setState({ error: null })
  }
  addExercise = exercise => {
    this.setExercises([
      ...this.state.exercises,
      exercise
    ])
  }
  render() {
    const value = {
      exercises: this.state.exercises,
      error: this.state.error,
      setExercises: this.setExercises,
      setError: this.setError,
      clearError: this.clearError,
      addExercise: this.addExercise
    }
    return (
      <ExercisesContext.Provider value={value}>
        {this.props.children}
      </ExercisesContext.Provider>
    )
  }
}