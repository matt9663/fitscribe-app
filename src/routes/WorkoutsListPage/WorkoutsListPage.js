import React, { Component } from 'react';
import './WorkoutsListPage.css';
import WorkoutItem from '../../components/WorkoutItem/WorkoutItem'
import { Link } from 'react-router-dom';
import ExercisesContext from '../../context/ExercisesContext';
import ExercisesApiService from '../../services/exercises-api-service';


export default class WorkoutsListPage extends Component {
  static contextType = ExercisesContext;
  componentDidMount() {
    this.context.clearError()
    ExercisesApiService.getExercises()
      .then(this.context.setExercises)
      .catch(this.context.setError)
  }
  renderWorkouts() {
    const { workouts = [] } = this.props.location.state
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
        <Link to={{
          pathname: "/create/workout",
          state: {
            exercises: this.context.exercises
          }
        }}>
          <button type="button" className="add-workout-button">+ Add New Workout</button>
        </Link>
       </section>
     )
   }
}