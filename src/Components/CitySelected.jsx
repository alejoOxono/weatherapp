import React, { useState } from "react"
import { connect } from "react-redux"
import Cities from "./Cities";
import { citiesSelected } from "../actions/actionsCreator"
import styles from '../css-module/citySelected.module.css';


const CitySelected = (props) => {
    const [addFav, setAddFav] = useState(false)

    const addCity = (e) => {
        e.preventDefault()
        props.citiesSelected(props.city)
        setAddFav(true)
    }

    return (

        <div className={styles.container}>

            <div className={styles.box}>
                <div className={styles.city}>
                    <h3>city: </h3><span>{props.city.name}</span>
                    <h3>Weather: </h3><span>{props.city.weather[0].main}</span>
                    <h3>Description: </h3><span>{props.city.weather[0].description}</span>
                    <h3>Temp: </h3><span>{props.city.main.temp}</span>
                    <h3>Humidity: </h3><span>{props.city.main.humidity}</span>
                    <h3>Wind speed: </h3><span>{props.city.wind.speed}</span>

                    <div className={styles.searchButton}>
                        <button onClick={(e) => addCity(e)}>List ADD</button>
                    </div>
                </div>
            </div>

            <div className={styles.citiesAdd}>
                {addFav ? <Cities /> : <></>}
            </div>
        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        city: state.city,
        cities: state.cities
    }
}


export default connect(mapStateToProps, { citiesSelected })(CitySelected)