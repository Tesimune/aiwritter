import {useContext} from "react";
import {AppContext} from "../utils/app-context";
import styles from "../styles/Home.module.css";

export default function TextArea(props) {

    const {text, setText} = useContext(AppContext);

    return(
        <div className="">
            <textarea
                className={styles.textarea}
                value={text}
                onChange={ (e) => setText(e.target.value)}
            />
            <p className="text-4xl absolute font-medium">{text.length}</p>
        </div>
    )
}