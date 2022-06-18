import {useState} from "react";

import Output from "./Output";

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
            <Output>Inside the Component</Output>
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    );
}

export default Greeting;