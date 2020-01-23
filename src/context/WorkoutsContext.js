import React, { Component } from 'react'

const WorkoutsContext = React.createContext({
  workouts:[],
  error: null,
  setError: () => {},
  clearError: () => {},
  setWorkouts: () => {},
  addWorkout: () => {},
})

export default WorkoutsContext

export class WorkoutsProvider extends Component {
  state = {
    workouts: [],
    error: null,
  };

  setWorkouts = workouts => {
    this.setState({ workouts })
  }

  setError = error => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  addWorkout = workout => {
    this.setWorkouts([
      ...this.state.workouts,
      workout
    ])
  }

  render() {
    const value = {
      workouts: this.state.workouts,
      error: this.state.error,
      setWorkouts: this.setWorkouts,
      setError: this.setError,
      clearError: this.clearError,
      addWorkout: this.addWorkout,
    }
    return (
      <WorkoutsContext.Provider value={value}>
        {this.props.children}
      </WorkoutsContext.Provider>
    )
  }
}