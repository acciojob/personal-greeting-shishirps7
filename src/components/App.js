
import React ,{useState}from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName]=useState("")
  function update(e){
    let value = e.target.value 
    setName(value)
     
  }
  return (
    <div>
      <p>Enter your  name:</p>
        <input type="text" onChange={update}/>    
        <p>{name}</p>
        </div>
  )
}

export default App
