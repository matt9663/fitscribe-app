import React, { Component } from 'react'
import './CreateWorkoutPage.css'
import WorkoutsContext from '../../context/WorkoutsContext'
import WorkoutApiService from '../../services/workouts-api-service'

export default class CreateWorkoutPage extends Component {
  static contextType = WorkoutsContext

  state = {
      title: "",
      exercises: [{liftName: "", weight: "", reps: "", sets: "", order: ""}]
    }
  
  addExercise = (e) => {
    this.setState((prevState) => ({
        exercises: [...prevState.exercises, {liftName: "", weight: "", reps: "", sets: "", order: ""}]
      })
    )
  }

  handleWorkoutSubmitSuccess = () => {
    const { history } = this.props
    history.push('/workouts')
  }

  handleSubmit = (e) => { 
    e.preventDefault()
    const title = this.state.title
    let exercises = this.state.exercises
    let exercisesWithOrder = exercises.map((exercise, index) => ({...exercise, order: index + 1}))
    WorkoutApiService.postWorkout(title, exercisesWithOrder)
      .then(this.context.addWorkout)
      .then(this.handleWorkoutSubmitSuccess)
      .catch(this.context.setError)
  }

  handleExerciseChange = (e) => {
    if (['liftName', 'weight', 'reps', 'sets' ].includes(e.target.className)) {
      let exercises = this.state.exercises
      exercises[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ exercises })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  render() {
    let { exercises } = this.state
    return (
      <div className="create-workout-page">
        <form onChange={this.handleExerciseChange} onSubmit={this.handleSubmit}>
          <label htmlFor="workout-title">Title: </label>
          <input type="text" name="title" id="workout-title" required/>
          <button type="button" onClick={this.addExercise}>Add Exercise</button>
          {
            exercises.map((val, index) => {
              let order = index + 1
              let exerciseId = `exercise-${index}`, weightId = `weight-${index}`, repId = `reps-${index}`, setsId = `sets-${index}`
              return (
                <div key={index} className="exercise-inputs">
                  <span className="order">{order}</span>
                  <label htmlFor="exercise-name">Lift: </label>
                  <input type="text" name={exerciseId} className="liftName" data-id={index} placeholder="Lift name"/>
                  <label htmlFor="weight">Weight: </label>
                  <input type="text" name={weightId} className="weight" data-id={index} placeholder="Weight"/>
                  <label htmlFor="reps">Reps: </label>
                  <input type="number" name={repId} className="reps" data-id={index} placeholder="# reps"/>
                  <label htmlFor="sets">Sets: </label>
                  <input type="number" name={setsId} className="sets" data-id={index} placeholder="# sets"/>
                </div>
              )
            })
          }
          <input type="submit" value="Save Workout" />
        </form>
      </div>
    )
  }
}