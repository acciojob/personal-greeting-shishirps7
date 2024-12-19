
import React ,{useState}from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName]=useState("Hello na!")
  function update(e){
    let value = e.target.value 
    setName(value)
     
  }
  return (
    <div>
      <p>Enter your  name:</p>
        <input type="text" onChange={update} value={name}/>    
        <p>{name}</p>
        </div>
  )
}

export default App
