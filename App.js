import './App.css';
import { useState } from "react";
import Keypad from "./Keypad";

function App() {
  let [input, setInput] = useState("");
  function handleClick(value) {
    setInput(input + value);
  }
  function calculate(value) {
    let outputVal = eval(input);
    setInput(outputVal);
  }
  function handleClear() {
    setInput("");
  }

  return (
    <div className="container">
      <h1>Calculator App using react</h1>
      <div>
        <input type="text" value={input} 
            className="output" readOnly />
        <Keypad
          handleClick={handleClick} 
          handleClear={handleClear}
          calculate={calculate}
        />
      </div>
    </div>
  );
}

export default App;