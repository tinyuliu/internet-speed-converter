import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  }
  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <div className="unit-control">
          <div className="unit">Mbps</div>
          <span className="exchange-icon fa-fw fa-stack">
            <i className="far fa-circle fa-stack-2x" ></i>
            <i className="fas fa-exchange-alt fa-stack-1x" ></i>
          </span>
          <div className="unit">MB/s</div>
        </div>
        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">Set</div>
            <input 
              type="number" 
              onChange={handleInputChange}
              value={inputValue}
              className="input-number" 
              min="0" />
          </div>
          <span className="angle-icon fa-2x" style={{marginTop: 30}}>
            <i className="fas fa-angle-right" ></i>
          </span>
          {/* 右側input */}
          <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            <input 
              type="text" 
              className="input-number text-right" 
              disabled 
              value={inputValue / 8} />
          </div>
        </div>
      </div>
      <div class="card-footer">FAST</div>
    </div>
  );
}

export default App;
