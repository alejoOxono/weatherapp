import React, { useState } from "react"
import { connect } from "react-redux"
import { cityDeleted } from "../actions/actionsCreator"
import styles from '../css-module/cities.module.css';


const Cities = (props) => {
    var { city } = props
    const citiesView = 3
    const [lastCity, setLastCity] = useState(3)
    var firstCity = lastCity - citiesView
    if (firstCity<0) firstCity = 0;
    const arrayCities = city.slice(firstCity, lastCity)

    const deleteFav = (e, favCity) => {
        if (city.length === lastCity){
            setLastCity(lastCity - 1)
        }
        if ( city.length === 1){
            props.setAddFav(false)
        }
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
            setLastCity(city.length)
        } else {
            setLastCity(lastCity - 1)
        }
    }

    return (
        <>
            {city[0] ?
                <div className={styles.container}>

                    {city.length > 2 ?
                        <button className={styles.buttMove} onClick={(e) => moveLeft(e)} id={styles.leftBtn}><p>{'<'}</p></button>
                        :
                        <></>
                    }

                    <div className={styles.citiesSelected}>
                        {
                            arrayCities.map(el => {
                                return (
                                    <div className={styles.contenido}>
                                        <h3>City </h3><p>{el.name}</p>
                                        <h3>Description </h3><p>{el.weather[0].description}</p>
                                        <h3>Temp </h3><p>{el.main.temp}</p>
                                        <div className={styles.buttonQuit}>
                                            <button onClick={(e) => deleteFav(e, el)} ><span>Del City</span></button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {city.length > 2 ?
                        <button className={styles.buttMove} onClick={(e) => moveRight(e)} id={styles.rightBtn}><p>{'>'}</p></button>
                        :
                        <></>
                    }
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