import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import { Switch } from 'react-router-dom' 
import Dashboard from '../Dashboard/Dashboard'
import WorkoutsListPage from '../../routes/WorkoutsListPage/WorkoutsListPage';
import CreateWorkoutPage from '../../routes/CreateWorkoutPage/CreateWorkout'
import ExercisesListPage from '../../routes/ExercisesListPage/ExercisesListPage.js'
import PlanWorkoutPage from '../../routes/PlanWorkoutPage/PlanWorkoutPage.js'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegisterUserPage from '../../routes/RegisterUserPage/RegisterUserPage';
import PublicOnlyRoute from '../../route-validation/PublicOnlyRoute'
import PrivateRoute from '../../route-validation/PrivateRoute'
import UserContext from '../../context/UserContext'



class App extends Component {
    static contextType = UserContext
    render() {
      return (
        <div className="App">
          <header className="nav_header">
            <Header />
          </header>
          <main className='app-main'>
            <Switch>
              <PrivateRoute
                exact
                path='/'
                component={Dashboard}
              />
              <PublicOnlyRoute
                path='/login'
                component={LoginPage}
              />
              <PublicOnlyRoute
                path='/register'
                component={RegisterUserPage}
              />
              <PrivateRoute
                path='/workouts'
                component={WorkoutsListPage}
              />
              {<PrivateRoute
                path="/exercises"
                component={ExercisesListPage}
              />}
              <PrivateRoute
                path='/create/workout'
                component={CreateWorkoutPage}
              />
              <PrivateRoute
                path='/plan'
                component={PlanWorkoutPage}
              />
            </Switch>
          </main>
        </div>
    );
  }
}

export default App;