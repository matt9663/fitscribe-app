import React, { Component } from 'react'
import PlanDay from '../../components/PlanDay/PlanDay'

export default class PlanWorkoutPage extends Component {
  renderDays() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const workouts = this.props.workouts
    return days.map((day, index) => 
      <PlanDay
        key={index}
        day={day}
        workouts={workouts}
      />
    )
  }
  render() {
    return (
      <section className="plan-workout-page">
        {this.renderDays()}
      </section>
    )
  }
}