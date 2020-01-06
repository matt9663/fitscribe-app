import React, { Component } from 'react'
import './CreateWorkoutPage.css'

export default class CreateWorkoutPage extends Component {
  state = {
      id: "",
      title: "",
      exercises: [{liftName: "", weight: "", reps: "", sets: "", order: ""}]
    }
  
  addExercise = (e) => {
    this.setState((prevState) => ({
        exercises: [...prevState.exercises, {liftName: "", weight: "", reps: "", sets: "", order: ""}]
      })
    )
  }
  handleSubmit = (e) => { 
    e.preventDefault() 
  }

  handleExerciseChange = (e) => {
    if (['liftName', 'weight', 'reps', 'sets' ].includes(e.target.className)) {
      let exercises = [...this.state.exercises]
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
          <input type="text" name="workout-title" id="workout-title" />
          <button type="button" onClick={this.addExercise}>Add Exercise</button>
          {
            exercises.map((val, index) => {

              let exerciseId = `exercise-${index}`, weightId = `weight-${index}`, repId = `reps-${index}`, setsId = `sets-${index}`
              let order = index + 1
              return (
                <div key={index} className="exercise-inputs">
                  <span data-id={index} className="order">{order}</span>
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