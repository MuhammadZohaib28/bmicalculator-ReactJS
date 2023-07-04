
import { useState } from "react";
import "./App.css";

const App = () => {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");


  //Logic

  const calcBmi = (e) => {
    event.preventDefault();
    if(weight === 0 || height === 0){
      alert("Enter Valid height and Weight")
    }
    else{
      let bmi = (weight/(height * height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi < 25){
        setMessage("You are Underweight")
      }
      else if(bmi>=25 && bmi < 39){
        setMessage("You are Healthy weighted")
      }

      else{
        setMessage('You are overweighted')
      }
    }
  }


  let reload = () => {
    window.location.reload()
  }




  return (
    <>
      <div className="appContainer">
        <div className="bmiAppContainer">
          <h2 className="heading">BMI Calculator</h2>
          <form className="bmiInputs" onSubmit={calcBmi}>
            <span className="inputNames">Weight (LBS)</span>
            <input
              type="text"
              placeholder="Enter Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>

            <span className="inputNames">Height (In)</span>
            <input
              type="text"
              placeholder="Enter Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            ></input>

            <div className="buttons">
              <button type="submit">Submit</button>
              <button type="submit" onClick={reload}>
                Reload
              </button>
            </div>

            <div className="result">
              <p>Your BMI is: {bmi} </p>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
