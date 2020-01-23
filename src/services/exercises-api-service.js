import config from '../config'
import TokenService from '../services/token-service'

const ExercisesApiService = {
  getExercises() {
    return fetch(`${config.API_ENDPOINT}/exercises`, {
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
  postExercise(liftname, muscle_group) {
    return fetch(`${config.API_ENDPOINT}/exercises`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        liftname,
        muscle_group
      })
    })
      .then(res => 
        (!res.ok) 
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default ExercisesApiService