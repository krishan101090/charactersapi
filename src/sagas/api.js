import axios from "axios"

export function getCall(url, params) {
  const config = {}
  config.params = params
  return axios
    .get(url, config)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

export function postCall(url, params, data) {
  const config = {}
  config.params = params
  return axios
    .post(url, config, data)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}
