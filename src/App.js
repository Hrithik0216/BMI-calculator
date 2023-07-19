import React, { useState } from "react";


function App() {

  const[weight, setWeight] = useState(0)
  const[height, setHeight] = useState(0)
  const[bmi, setBmi] = useState('')
  const[message, setMessage] = useState('')

  

  let calcBmi = (event) =>{

  //prevent submting
  event.preventDefault()

   if (weight===0 || height === 0){
    alert("Please enter a valid weight and height")
  }else{
    let bmi = (weight/ (height*height)*703)
    setBmi(bmi.toFixed(1))
  }
  }

  //logic for message
  if(bmi<25){
    setMessage('You are underweight')
  }else if(bmi >= 25 && bmi < 30){
    setMessage("You are in healthy weight")
  }else{
    setMessage('You are overweight')
  }

  let reload = ()=>{
    window.location.reload()
  }

 //  show image based on bmi calculation
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else {
    if(bmi < 25) {
      imgSrc = require('./bmi-calc/src/Assets/underweight.png')
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('bmi-calc\src\Assets\healthy.png')
    } else {
      imgSrc = require('bmi-calc\src\Assets\overweight.png')
    }
  }


  return (
    <div className="app">
      <div className="container">
        <div className="center">BMI Calculator</div>
        <form onSubmit={calcBmi}>
          <label>Weight in lbs</label>
          <input value={weight} onChange={(event)=>{setWeight(event.target.value)}}></input>

          <label>Height in inches</label>
          <input value={height} onChange={(event)=>{setHeight(event.target.value)}}></input>

          <button className="btn" type="submit">Submit</button>
          <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
        </form>
         
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt=''></img>
        </div>

      </div>
    </div>
  );
}

export default App;
