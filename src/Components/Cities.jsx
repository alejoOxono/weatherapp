import React, { useState } from "react"
import { connect } from "react-redux"
import { cityDeleted } from "../actions/actionsCreator"
import styles from '../css-module/cities.module.css';


const Cities = (props) => {
    var { city } = props
    const [citiesView, setCitiesView] = useState(3)
    const [lastCity, setLastCity] = useState(3)
    const firstCity = lastCity - citiesView
    const arrayCities = city.slice(firstCity, lastCity)

    const deleteFav = (e, favCity) => {
        e.preventDefault()
        props.cityDeleted(favCity)
    }

    const moveRight = (e) => {
        e.preventDefault()
        if (lastCity === city.length) {
            setLastCity(citiesView)
        } else {
            setLastCity(lastCity + 1)
        }
    }

    const moveLeft = (e) => {
        e.preventDefault()
        if (firstCity <= 0) {
            setLastCity(citiesView)
        } else {
            setLastCity(lastCity - 1)
        }
    }

    return (
        <>
            {city[0] ?
                <div className={styles.container}>
                    <button onClick={(e) => moveLeft(e)} id={styles.leftBtn}><i className={styles.arrow}></i></button>

                    <div className={styles.citiesSelected}>
                        {
                            arrayCities.map(el => {
                                return (
                                    <div className={styles.contenido}>
                                        <h3>city: </h3><p>{el.name}</p>
                                        <h3>Description: </h3><p>{el.weather[0].description}</p>
                                        <h3>Temp: </h3><p>{el.main.temp}</p>
                                        <div className={styles.buttonQuit}>
                                            <button onClick={(e) => deleteFav(e, el)} ><span>Delete City</span></button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <button onClick={(e) => moveRight(e)} id={styles.rightBtn}><i className={styles.arrow}></i></button>
                </div>
                : <></>}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        city: state.cities
    }
}


export default connect(mapStateToProps, { cityDeleted })(Cities)