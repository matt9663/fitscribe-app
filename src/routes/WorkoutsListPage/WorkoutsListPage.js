import React, { Component } from 'react';
import './WorkoutsListPage.css';
import WorkoutItem from '../../components/WorkoutItem/WorkoutItem'
import { Link } from 'react-router-dom';

export default class WorkoutsListPage extends Component {
  renderWorkouts() {
    const workouts = this.props.workouts
    return workouts.map(workout => 
      <WorkoutItem
        key={workout.id}
        title={workout.title}
        exercises={workout.exercises}
      />
    )
  }
  render() {
     return (
       <section className="view-workouts"> 
        <div className='WorkoutsList'>
          {this.renderWorkouts()}
        </div>
        <Link to="/create/workout">
          <button type="button" className="add-workout-button">+ Add New Workout</button>
        </Link>
       </section>
     )
   }
}