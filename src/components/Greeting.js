import React, { useState } from "react";

let Greeting = () => {
    let [inputValue, setInputValue] = useState("");
    let [name, setName] = useState("Hello na!");

    function update(e) {
        let value = e.target.value;
        setInputValue(value);
    }

    function greet() {
        setName(`Hello ${inputValue}`);
    }

    return (
        <div>
            <p>Enter your name:</p>
            <input type="text" onChange={update} value={inputValue} />
            <button onClick={greet}>Greet</button>
            <p>{name}</p>
        </div>
    );
};

export default Greeting;