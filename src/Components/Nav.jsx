import styles from '../css-module/nav.module.css';


const Nav = () => {


    return (
        <nav className={styles.navBar}>
            <a href="." className={styles.navBarContenido}>
                <h4>Home</h4>
            </a>
            <h4>About</h4>

        </nav>
    )
}


export default Nav