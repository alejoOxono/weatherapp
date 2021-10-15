import React, { useState } from "react"
import { connect } from "react-redux"
import { cityDeleted } from "../actions/actionsCreator"
import styles from '../css-module/cities.module.css';


const Cities = (props) => {
    const [posc, setPosc] = useState(0);

    var { city } = props
    console.log(city)
    console.log(city[posc])

    const deleteFav = (e, favCity) => {
        e.preventDefault()
        props.cityDeleted(favCity)
        setPosc(0)
    }

    const moveRight = (e) => {
        e.preventDefault()
        if (posc < city.length - 1) {
            setPosc(posc + 1)
        } else {
            setPosc(0)
        }
    }

    const moveLeft = (e) => {
        e.preventDefault()
        if (posc >= 1) {
            setPosc(posc - 1)
        } else {
            setPosc(city.length - 1)
        }
    }

    return (
        <>
            {city[posc] ?
                <div className={styles.container}>
                    <button onClick={(e) => moveLeft(e)} id={styles.leftBtn}><i className={styles.arrow}></i></button>


                    <div className={styles.contenido}>
                        <h3>city: </h3><p>{city[posc].name}</p>
                        <h3>Description: </h3><p>{city[posc].weather[0].description}</p>
                        <h3>Temp: </h3><p>{city[posc].main.temp}</p>
                        <div className={styles.buttonQuit}>
                            <button onClick={(e) => deleteFav(e, city[posc])} key={`button${city[posc].id}`}><span>Delete City</span></button>
                        </div>
                    </div>



                    <button onClick={(e) => moveRight(e)} id={styles.rightBtn}><i className={styles.arrow}></i></button>
                </div>
                : []}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        city: state.cities
    }
}


export default connect(mapStateToProps, { cityDeleted })(Cities)