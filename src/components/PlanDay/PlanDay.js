import React, {Component} from 'react'
import './PlanDay.css'
import WorkoutsContext from '../../context/WorkoutsContext'
import WorkoutApiService from '../../services/workouts-api-service'


export default class PlanDay extends Component {
  static contextType = WorkoutsContext
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.workoutStatus,
      exercises: [{
        order: "", LiftName: "", weight: "", reps: "", sets: ""
      }],
      completed: this.props.statusString
    }

  }
  componentDidMount() {
    this.context.clearError()
    WorkoutApiService.getWorkouts()
      .then(this.context.setWorkouts)
      .catch(this.context.setError)
  }
  renderSelections() {
    const workouts = [{ title: 'Rest Day', id: 0 }, ...this.context.workouts]
    return workouts.map((workout, index) =>
      <option id={workout.id} value={workout.id} key={index}>{workout.title}</option>  
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
    if (e.target.value !== '0') {
      let selectedWorkout = this.context.workouts.find(workout => workout.id === parseInt(e.target.value))
      let exercises = selectedWorkout.exercises
      this.setState({ exercises })
    }
    this.props.updateDayWorkout(e)
  }

  handleCompletionToggle = (e) => {
    if (e.target.checked) {
      this.setState({ completed: true })
    } else {
      this.setState({ completed: false })
    }
    this.props.updateDayStatus(e)
  }

  render() {
    const day = this.props.day
    const formattedDay = day.toLowerCase()
    //let workoutStateString = this.props.day.toLowerCase() + '_workout'
    //let statusStateString = this.props.day.toLowerCase() + '_status'
    const toggleId = 'toggle-completed' + day
    const dayStatus = this.state.completed ? 'completed' : null   
    return (
      <div className={`plan-day ${dayStatus}`}>
        <header className="plan-day-header">
          <h1>{day}</h1>
          <form className="completed-toggle">
            <input 
              type="checkbox" 
              id={toggleId} 
              className={formattedDay + '_status'}
              name="toggleCompleted" 
              checked={this.state.checked} 
              value="Workout Completed" 
              onChange={this.handleCompletionToggle}/>
            <label htmlFor={toggleId}>Completed</label>
          </form>
        </header>
        <form onChange={this.handleSelection}>
          <select defaultValue={this.props.workoutStatus} className={formattedDay + '_workout'}> 
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