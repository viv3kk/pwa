import React from 'react';
import Lottie from 'react-lottie-player'
import * as c24lottieJson from './splash.json'
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.cars24.com/ae/static/js/8204a0ef62ec940c788094ff723f8df1.svg" alt="logo"  />
        <p>
          Welcome to Cars24 Rider
        </p>
        <Lottie
          loop
          animationData={c24lottieJson}
          play
          style={{ width: 300, height: 600 }}
        />

      </header>
    </div>
  );
}

export default App;
