import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import logo from './img/logo192.png'

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const addCounter = () =>{
    setNumClicks(numClicks + 1);
  }

  const restartCounter = () =>{
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='logo-container'>
        <h1>Contador </h1>
        <img 
          className='logo'
          src={logo}
          alt='logo'
        />
      </div>
      <div className='main-container'>
        <Counter 
          number={numClicks}
        />
        <Button
          text='Add'
          isClickButton={true}
          actionClick={addCounter}
        />
        <Button
          text='Restart'
          isClickButton={false}
          actionClick={restartCounter}
        />
      </div>
    </div>
  );
}

export default App;
