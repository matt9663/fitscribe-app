import React from 'react';
import './App.css';
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom' 
import Dashboard from '../Dashboard/Dashboard'
import WORKOUTS from '../../STORE/workouts-data'
import EXERCISES from '../../STORE/exercise-data'
import WorkoutsListPage from '../../routes/WorkoutsListPage/WorkoutsListPage';
import CreateWorkoutPage from '../../routes/CreateWorkoutPage/CreateWorkout'
import ExercisesListPage from '../../routes/ExercisesListPage/ExercisesListPage.js'
import PlanWorkoutPage from '../../routes/PlanWorkoutPage/PlanWorkoutPage.js'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegisterUserPage from '../../routes/RegisterUserPage/RegisterUserPage';

function App() {
  return (
    <main className="App">
      <header className="nav_header">
        <Header />
      </header>
      <Switch>
        <Route
          exact
          path='/'
          component={Dashboard}
        />
        <Route
          path='/login'
          component={LoginPage}
        />
        <Route
          path='/register'
          component={RegisterUserPage}
        />
        <Route
          path='/workouts'
          render={(routeProps) => (<WorkoutsListPage {...routeProps} workouts={WORKOUTS}/>)}
        />
        {<Route
          path="/exercises"
          render={(routeProps) => (<ExercisesListPage {...routeProps} exercises={EXERCISES}/>)}
        />}
        <Route
          path='/create/workout'
          component={CreateWorkoutPage}
        />
        <Route
          path='/plan'
          render={(routeProps) => (<PlanWorkoutPage {...routeProps} workouts={WORKOUTS}/>)}
        />
      </Switch>
    </main>
  );
}

export default App;
