import React, { useState } from "react";

let Greeting = () => {
    let [inputValue, setInputValue] = useState("");
    let [name, setName] = useState("");

    function update(e) {
        let value = e.target.value;
        setInputValue(value);
    }

    function greet() {
        setName(inputValue);
    }

    return (
        <div>
            <p>Enter your name:</p>
            <input type="text" onChange={update} value={inputValue} />
            <button onClick={greet}>Greet</button>
    {name && <p>Hello {name}!</p>}
    
        </div>
    );
};

export default Greeting;
