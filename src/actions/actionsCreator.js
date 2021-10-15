

const { CITY_DELETED, CITY_SEARCH, CITIES_SELECTED } = require('./constants')


export const citySearch = (url) => {
    return function (dispatch) {
        return fetch(url)
            .then(answer => answer.json())
            .then(json => {
                dispatch({
                    type: CITY_SEARCH,
                    payload: json
                })
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