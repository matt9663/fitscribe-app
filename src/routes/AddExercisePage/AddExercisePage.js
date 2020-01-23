import React, { Component } from 'react'
import ExercisesApiService from '../../services/exercises-api-service'

export default class AddExercisePage extends Component {
  state = {
    error: null,
    liftName: '',
    group: ''
  }
  renderMuscleGroupOptions() {
    let { exercises } = this.props.location.state
    let allMuscleGroups = exercises.map(exercise => exercise.muscle_group)
    let dedupedMuscleGroupsSet = new Set(allMuscleGroups)
    let dedupedMuscleGroups = [...dedupedMuscleGroupsSet.values()]
    return dedupedMuscleGroups.map((muscle_group, index) => 
      <option value={muscle_group} key={index}>{muscle_group}</option>
    )
  }
  handleSubmit = e => {
    e.preventDefault()
    let liftName = this.state.liftName
    let group = this.state.group
    ExercisesApiService.postExercise(liftName, group)
      .then(this.handleSubmitSuccess)
      .catch()
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmitSuccess = () => {
    const { history } = this.props
    history.push('/exercises')
  }
  render() {
    return (
      <div className='add-exercise-page'>
        <header className='section-header'>
          <h1>Add New Exercise</h1>
        </header>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <label htmlFor='liftName'>Lift Name:</label>
          <input type='text' name="liftName" id='liftName' placeholder='Lift name' required/>
          <label htmlFor='muscle_group'>Group:</label>
          <select name='group' id='muscle_group' defaultValue='Select group' required>
            <option></option>
            {this.renderMuscleGroupOptions()}
          </select>
          <input type='submit' value='Add Exercise'/>
        </form>
      </div>
    )
  }
}