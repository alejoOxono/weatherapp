import styles from '../css-module/nav.module.css';


const Nav = () => {


    return (
        <nav className={styles.navBar}>
            <a href="." className={styles.navBarContenido}>
                <h4>Home</h4>
            </a>


            <a className={styles.about} href="#miModal">About</a>
            <div id='miModal' className={styles.modal}>
                <div className={styles.modalContenido}>
                    <a href="#">X</a>
                    <h2>My first APP</h2>
                    <p>This is my first work. I created it because I want to work in my skills
                        while using react-redux, states, promises to connect to a weather API, HTML and finally 
                        diferents ways to aply CSS. Thank you for review my works.
                    </p>
                </div>
            </div>


        </nav>
    )
}


export default Nav