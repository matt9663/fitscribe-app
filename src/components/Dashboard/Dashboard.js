import React, { Component } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import WorkoutsContext from '../../context/WorkoutsContext';
import WorkoutApiService from '../../services/workouts-api-service';



export default class Dashboard extends Component {
  static contextType = WorkoutsContext

  componentDidMount() {
    this.context.clearError()
    WorkoutApiService.getWorkouts()
      .then(this.context.setWorkouts)
      .catch(this.context.setError)
  }
  render() {
    return (
        <section className='Dashboard'>
          <div className="dash_link">
            <Link to="/exercises">
              Exercises
            </Link>
          </div>
          <div className="dash_link">
            <Link to={{
              pathname: "/workouts",
              state: {
                workouts: this.context.workouts
              }
            }}>
              Workouts
            </Link>
          </div>
          <div className="dash_link">
            <Link to="/plan">
              Plan
            </Link>
          </div>
        </section> 
    )
  }
}