import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom'
import { WorkoutsProvider } from './context/WorkoutsContext'
import { UserProvider } from './context/UserContext'
import { ExercisesProvider } from './context/ExercisesContext';


ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <WorkoutsProvider>
        <ExercisesProvider>
          <App />
        </ExercisesProvider>
      </WorkoutsProvider>
    </UserProvider>
  </BrowserRouter>, 
document.getElementById('root')
);


