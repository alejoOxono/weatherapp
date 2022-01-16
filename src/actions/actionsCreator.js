import axios from 'axios'


const { CITY_DELETED, CITY_SEARCH, CITIES_SELECTED } = require('./constants')


export const citySearch = (url) => {
    return async function (dispatch) {
        return axios.get(url)
            .then(data => {
                dispatch({
                    type: CITY_SEARCH,
                    payload: data.data
                })
            })
            .catch((err) => {
                console.log(err);
            })          
    }
}

export const citiesSelected = (city) => {
    return {
        type: CITIES_SELECTED,
        payload: city
    }
}

export const cityDeleted = (city) => {
    return {
        type: CITY_DELETED,
        payload: city
    }
}