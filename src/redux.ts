import axios from 'axios';
import { Reducer } from 'redux';

/**
 * =========================================================
 * ACTIONS
 * =========================================================
 */
export const getCountriesAction = {
  type: 'COUNTRIES_RECEIVED',
  payload: []
}

export const setCountryAction = {
  type: 'SET_COUNTRY',
  payload: ''
}

//   TODO:
//   - Implement getCountries
//   - Use Axios or fetch to get the countries from `/api/countries.json`
//   - Store the result in the reducer
// TODO: move this into actions/redux


export const getCountries = () => (dispatch) => {
  const url = `/api/countries.json`;
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    return dispatch({type: 'COUNTRIES_RECEIVED', payload: data})
  });
}
//   TODO:
//   - Implement setCountry
//   - Store the country in the reducer

export const setCountry = (choice) => (dispatch) => {
  return dispatch({type: 'SET_COUNTRY', payload: choice})
}

/**
 * =========================================================
 * REDUCER
 * =========================================================
 */

export interface IAppState {
//    TODO:
//    - Implement countries as an array of strings
//    - Implement country as a string
  countries: string[]
  country: string
}

// TODO: Initialize app state
const initialState: IAppState = {
  countries: [],
  country: ''
};

export const reducer: Reducer<IAppState> = (state = initialState, action) => {
  switch (action.type) {
    //    TODO:
    //    - Implement case COUNTRIES_RECEIVED
    //    - Store the countries in the reducer
    case 'COUNTRIES_RECEIVED': 
    return {
      ...state,
      countries: action.payload
    }

    //    TODO:
    //    - Implement case SET_COUNTRY
    //    - Store the country in the reducer
    case 'SET_COUNTRY': 
    return {
      ...state,
      country: action.payload
    }

    default:
      return state;
  }
};