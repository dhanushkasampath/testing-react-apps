import {useState} from "react";

const Greeting = () => {
    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = () => {
        setChangeText(true);
    }
    return (
        <div>
            <h2>Hellow World!</h2>
            {!changeText && <p>Its good to see you</p>}
            {changeText && <p>Changed</p>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    );
}

export default Greeting;