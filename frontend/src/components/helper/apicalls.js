import React from 'react'
import {API} from '../../backend'

export const getJobPosts = () => {
  return fetch(`${API}jobpost/`, {method: 'GET'})
  .then(response => {
    return response.json()
  })
  .catch(err => console.log(err))
}




