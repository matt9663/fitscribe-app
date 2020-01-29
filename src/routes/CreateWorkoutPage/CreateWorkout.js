import React, { Component } from 'react'
import './CreateWorkoutPage.css'
import WorkoutsContext from '../../context/WorkoutsContext'
import WorkoutApiService from '../../services/workouts-api-service'
import ExerciseDatalist from '../../components/ExerciseDatalist/ExerciseDatalist'

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

  renderDataListOptions() {
    let { exercises } = this.props.location.state
    return exercises.map((exercise, index) =>  <option key={index}>{exercise.liftName}</option>)
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
        <div className='form-wrapper'>
          <header className='section-header'>
            <h1>Create New Workout</h1>
          </header>
          <form className='create-workout-form' onChange={this.handleExerciseChange} onSubmit={this.handleSubmit}>
            <label htmlFor="workout-title">Title: </label>
            <input type="text" name="title" id="workout-title" placeholder='Workout name' required/>
            
            {
              exercises.map((val, index) => {
                let order = index + 1
                let exerciseId = `exercise-${index}`, weightId = `weight-${index}`, repId = `reps-${index}`, setsId = `sets-${index}`
                return (
                  <div key={index} className="exercise-inputs">
                    
                    <div className='inputs-wrapper'>
                      <div className='big-inputs-wrapper'>
                      <span className="order">{order}</span>
                      <label htmlFor="exercise-name">Lift: </label>
                      <input type="text" name={exerciseId} className="liftName" list='exercises' data-id={index} placeholder="Lift name"/>
                        <ExerciseDatalist />
                      </div>                      
                      <div className='little-inputs-wrapper'>
                        <label htmlFor="weight">Weight: </label>
                        <input type="text" name={weightId} className="weight" data-id={index} placeholder="Weight"/>
                        <label htmlFor="reps">Reps: </label>
                        <input type="number" name={repId} className="reps" data-id={index} placeholder="# reps"/>
                        <label htmlFor="sets">Sets: </label>
                        <input type="number" name={setsId} className="sets" data-id={index} placeholder="# sets"/>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            <div className='form-buttons'>
              <button type="button" onClick={this.addExercise}><i id="add-exercise-icon" className ="fas fa-plus-circle"></i>Add Exercise</button>
              <button type="submit"><i id='save-icon' className="far fa-save"></i>Save Workout</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}