import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../../styles/Home.module.css'


const layouts = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Navbar/>
            { children }
            <Footer/>
        </div>
    );
}

export default layouts;