import React, { useEffect } from "react";
import { connect } from "react-redux"
import { citySearch } from "../actions/actionsCreator"
import CitySelected from "./CitySelected";
import styles from '../css-module/search.module.css';
import Nav from "./Nav";
import NavBotton from "./NavBotton";


//   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)

function City(props) {
    const [cityInput, setCityInput] = React.useState('');
    const [url, setUrl] = React.useState('');
    const apiKey = '882029dd6410ec072c925bf0f7c492ab';
    const [control, setControl] = React.useState(true);

    const inputOnChange = (e) => {
        setCityInput(e.target.value);
    }

    const buttonOnClick = (e) => {
        e.preventDefault()
        setUrl(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)

    }

    useEffect(() => {
        if (url) {
            props.citySearch(url)
        }
    }, [url])

    return (

        <div className={styles.gridContainer}>

            <div className={styles.classNav}>
                <Nav />
            </div>

            <div className={styles.imagen}>
                <h2>Weather APP</h2>
            </div>

            <div className={styles.classContent}>
                <div className={styles.barSearch}>
                    <h4>Search City</h4>

                    <div className={styles.inputSearch}>
                        <form>
                            <input type="text" placeholder="City..." onChange={(e) => inputOnChange(e)} />
                            <button type='submit' onClick={(e) => buttonOnClick(e)}>Search</button>
                        </form>
                    </div>

                </div>
                <>
                    {props.city?.clouds ? <CitySelected /> : <></>}
                </>
            </div>

            <div className={styles.classFooter}>
                <NavBotton />
            </div>

        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        city: state.city,
        name: state.cityName
    }
}

export default connect(mapStateToProps, { citySearch })(City)