import config from '../config'
import TokenService from './token-service'

const WeeksApiService = {
  getUserWeek() {
    return fetch(`${config.API_ENDPOINT}/weeks`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => 
      (!res.ok)
        ? res.json().then (e => Promise.reject(e))
        : res.json() 
    )
  },
  updateWeek(id, updatedfields) {
    return fetch(`${config.API_ENDPOINT}/weeks/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ ...updatedfields })
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default WeeksApiService