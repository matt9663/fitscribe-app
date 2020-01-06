import React, { Component } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  render() {
    return (
      <section className='Dashboard'>
        <div className="dash_link">
          <Link to="/exercises">
            Exercises
          </Link>
        </div>
        <div className="dash_link">
          <Link to="/workouts">
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