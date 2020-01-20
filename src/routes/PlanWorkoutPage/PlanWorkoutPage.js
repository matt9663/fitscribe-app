import React, { Component } from 'react'
import PlanDay from '../../components/PlanDay/PlanDay'
import WorkoutsContext from '../../context/WorkoutsContext'
import './PlanWorkoutPage.css'
import WeeksApiService from '../../services/weeks-api-service'

export default class PlanWorkoutPage extends Component {
  static contextType = WorkoutsContext

  state = {}

  componentDidMount() {
    this.context.clearError()
    WeeksApiService.getUserWeek()
    .then(week => this.setState({ ...week }))
  }

  updateDayStatus = (e) => {
    if (!e.target.checked) {
      this.setState({ [e.target.className]: false})
    } else {
      this.setState({ [e.target.className]: true })
    }
  }

  updateDayWorkout = (e) => {
    if (e.target.value !== '0') {
      this.setState({ [e.target.className]: parseInt(e.target.value) })
    } else {
      this.setState({ [e.target.className]: null })
    }
  }

  submitUpdate = () => {
    const fields = this.state
    WeeksApiService.updateWeek(
      fields.id,
      {...fields}
    )
  }

  renderDays() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const workoutStateStrings = ['sunday_workout', 'monday_workout', 'tuesday_workout', 'wednesday_workout', 'thursday_workout', 'friday_workout', 'saturday_workout']
    const statusStateStrings = ['sunday_status', 'monday_status', 'tuesday_status', 'wednesday_status', 'thursday_status', 'friday_status', 'saturday_status']
    return days.map((day, index) => 
      <PlanDay
        key={index}
        day={day}
        updateDayStatus={this.updateDayStatus}
        updateDayWorkout={this.updateDayWorkout}
        workoutStatus={this.state[workoutStateStrings[index]]}
        statusString={this.state[statusStateStrings[index]]}
      />
    )
  }
  render() {
    return (
      <section className="plan-workout-page">
        {this.renderDays()}
        <button className='update-week-button' onClick={this.submitUpdate}>Update Your Week</button>
      </section>
    )
  }
}