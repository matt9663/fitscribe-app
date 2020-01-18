import config from '../config'
import TokenService from './token-service'

const WorkoutApiService = {
  getWorkouts() {
    return fetch(`${config.API_ENDPOINT}/workouts`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getWorkoutById(workoutId) {
    return fetch(`${config.API_ENDPOINT}/workouts/${workoutId}`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postWorkout(title, exercises) {
    return fetch(`${config.API_ENDPOINT}/workouts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        title,
        exercises
      })
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default WorkoutApiService