import React, {useState} from 'react';
import Button from '../components/Button.js';

function Calculator () {
  //displayNum is the is the number currently displayed in the calculator
  const [displayNum, setDisplayNum] = useState("0");
  //storedNum is the current result of running all calculations so far 
  const [storedNum, setStoredNum] = useState("0");
  //calculation is the current calculation being run
  const [calculation, setCalculation] = useState(null);
  //boolean to indicate if decimal has already been used in display num -- will need to be reset every time display num is reset
  const [isFloat, setIsFloat] = useState(false);
  
  //potential resources for calculations: parseInt, parseFloat, math.js, toString


  //callback to add a character to the displayNum string.
  function addNum(num) {
    //if the displayNum is not yet a float and num is a decimal, add decimal
    if (num === "." && isFloat === false) {
      setDisplayNum(prevDisplayNum => prevDisplayNum + num);
      setIsFloat(prevIsFloat => prevIsFloat = true);
    }

    //if num is not a decimal and displayNum is no longer initial "0", add the num
    if (num !== "." && displayNum !== "0") {
      setDisplayNum(prevDisplayNum => prevDisplayNum + num);
    }

    //if displayNum is initial "0", replace "0" with num
    if (displayNum === "0") {
      setDisplayNum(num);
    }
  }

  //callback to clear state to initial values
  function clearAll() {
    setDisplayNum('0');
    setStoredNum('0');
    setCalculation(null);
    setIsFloat(false);
  }

  //callback to back space displayNum 1 character
  function backspace() {
    setDisplayNum(prevDisplayNum => prevDisplayNum.slice(0, -1));  
  }

  //method to send click to the correct method above based on value
  function handleClick(e) {
    //set input to value of button clicked
    let input = e.target.value;
    console.log("input: ", input);

    //handle click if input is a number or decimal
    if (input === '0' || input === '1' || input === '2' || input === '3' || input === '4' || input === '5' || input === '6' || input === '7' || input === '8' || input === '9' || input === ".") {
      return addNum(input);
    }

    //handle click if input is Clear
    if (input === "C") {
      return clearAll();
    }

    //handle click if input is Backspace
    if (input === "<<") {
      return backspace();
    }
  }

  //establishes button info
  const buttons = ["C", "<<", "÷", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", "±", 0, ".", "="];
  const buttonDisplay = [];

  //creates a button componenet for each value
  buttons.forEach(el => {
    buttonDisplay.push(<Button id={el} key={el} value={el} callback={handleClick}/>)
  })

  return (
    <div>
    <div className="display">
      <p>{displayNum}</p>
    </div>
      {buttonDisplay}
    </div>
  )
}

export default Calculator;


//use math.js library?
