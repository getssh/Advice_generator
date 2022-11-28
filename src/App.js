import { useState, useEffect, React } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(data => setAdvice(data.slip))
  }, advice)

  return (
    <div className="App">
      <div className='advice-container'>
        <p className='advice-id'>Advice #173</p>
        <div className='advice'>
          {advice && <p>{advice.advice}</p>}
        </div>
        <svg className='btn' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
      </div>
    </div>
  );
}

export default App;
