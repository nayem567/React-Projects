import { useState } from 'react';
import './index.css';

const App = () => {

  const [display, setDisplay] = useState('');

  const handleClick = (value) =>{
    setDisplay(display + value);
  }

  const calculate = () =>{
    try{
      setDisplay(eval(display).toString());
    } catch(error){
      setDisplay("Error");
    }
  }

  const clearDisplay = () =>{
    setDisplay('')
  };

  const deleteLast = () =>{
    setDisplay(display.slice(0, -1));
  };

  

  return (
    <main className='calculator-grid'>
      <div className="output">
        <div className="current-operand">{display}</div>
      </div>
      <button onClick={clearDisplay} className='span-two'>AC</button>
      <button onClick={deleteLast} >DEL</button>
      <button onClick={() => handleClick('/')}>÷</button>
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('*')}>*</button>
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('+')}>+</button>
      <button onClick={() => handleClick('7')}>7</button>
      <button onClick={() => handleClick('8')}>8</button>
      <button onClick={() => handleClick('9')}>9</button>
      <button onClick={() => handleClick('-')}>-</button>
      <button onClick={() => handleClick('.')}>.</button>
      <button onClick={() => handleClick('0')}>0</button>
      <button onClick={calculate} className='span-two'>=</button>
    </main>
  )
}

export default App