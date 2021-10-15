import { CITY_DELETED, CITY_SEARCH, CITIES_SELECTED } from "../actions/constants";


const stateInitial = {
    city: {},
    cities: []
}

export default function rootReduce(state = stateInitial, { type, payload }) {
    switch (type) {

        case CITY_SEARCH:
            return ({
                ...state,
                city: payload
            })
        case CITIES_SELECTED:
            if(!state.cities.find((city)=>city.id === payload.id)){
                return ({
                    ...state,
                    cities: [...state.cities, payload]
                })
            }else{
                return ({
                    ...state,
                    cities: [...state.cities]
                })
            }
        case CITY_DELETED:
            return ({
                ...state,
                cities: state.cities.filter((city)=>city.id !== payload.id)
            })

        default:
            return state;
    }
}

