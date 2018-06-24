import { fetchSuccess } from '../actions/actions'
import { fetchSuccessOrg } from '../actions/actions'
import { fetchSuccessFollowers } from '../actions/actions'
import { fetchSuccessRepos } from '../actions/actions'

const baseUrl = 'https://api.github.com/users/';


export const sendRequest = (login) => (dispatch) => {
    return fetch(baseUrl + login)
        .then(res => res.json())
        .then(json => dispatch(fetchSuccess(json)));
}

export const sendRequestOrgs = (login) => (dispatch) => {
    return fetch(baseUrl + login + "/orgs")
        .then(res => res.json())
        .then(json => dispatch(fetchSuccessOrg(json)))

}

export const sendRequestFollowers = (login) => (dispatch) => {
    return fetch(baseUrl + login + "/followers")
        .then(res => res.json())
        .then(json => dispatch(fetchSuccessFollowers(json)))
}

export const sendRequestRepos = (login) => (dispatch) => {
    return fetch(baseUrl + login + "/repos")
        .then(res => res.json())
        .then(json => dispatch(fetchSuccessRepos(json)))
}
