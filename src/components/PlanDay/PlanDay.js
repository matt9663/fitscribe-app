import React, {Component} from 'react'
import './PlanDay.css'


export default class PlanDay extends Component {
  state = {
    exercises: [{
      order: "", LiftName: "", weight: "", reps: "", sets: ""
    }],
    completed: ""
  }
  renderSelections() {
    const workouts = [...this.props.workouts, { title: 'Rest Day'}]
    return workouts.map((workout, index) =>
      <option value={workout.title} key={index}>{workout.title}</option>  
    )
  }
  renderExercises() {
    const exercises = this.state.exercises
    if (exercises) {
      return (
        exercises.map(exercise => 
          <tr className="exercise-row" key={exercise.order}>
            <td>{exercise.order}</td>
            <td>{exercise.liftName}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.sets}</td>
          </tr>
        )
      )
    }
  }
  handleSelection = (e) => {
    this.setState({ exercises: [{
      order: "", LiftName: "", weight: "", reps: "", sets: ""
    }] })
    if (e.target.value !== 'Rest Day') {
      let selectedWorkout = this.props.workouts.find(workout => workout.title === e.target.value)
      let exercises = selectedWorkout.exercises
      this.setState({ exercises })
    }
  }
  handleCompletionToggle = (e) => {
    if (e.target.checked) {
      this.setState({ completed: true })
    } else {
      this.setState({ completed: false })
    }
  }

  render() {
    const day = this.props.day
    const toggleId = 'toggle-completed' + day
    const dayStatus = this.state.completed ? 'completed' : null   
    return (
      <div className={`plan-day ${dayStatus}`}>
        <header className="plan-day-header">
          <h1>{day}</h1>
          <form className="completed-toggle">
            <input type="checkbox" id={toggleId} name="toggleCompleted" checked={this.state.checked} value="Workout Completed" onChange={this.handleCompletionToggle}/>
            <label htmlFor={toggleId}>Completed</label>
          </form>
        </header>
        <form onChange={this.handleSelection}>
          <select defaultValue="Rest Day"> 
            {this.renderSelections()}
          </select>
        </form>
        <div className="exercises">
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
        </div>
      </div>
    )
  }
}