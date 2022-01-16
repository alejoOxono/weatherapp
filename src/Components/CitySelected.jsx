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
                    <p className={styles.firstTitle}><b>city: </b>&nbsp; {props.city.name}</p>
                    <p><b>Weather: </b>&nbsp; {props.city.weather[0].main}</p>
                    <p><b>Description: </b>&nbsp; {props.city.weather[0].description}</p>
                    <p><b>Temp: </b>&nbsp; {props.city.main.temp}</p>
                    <p><b>Humidity: </b>&nbsp; {props.city.main.humidity}</p>
                    <p><b>Wind speed: </b>&nbsp; {props.city.wind.speed}</p>

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