import React from 'react';
import Lottie from 'react-lottie';
import * as c24Animated from './splash.json'
import './App.css';

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: c24Animated,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.cars24.com/ae/static/js/8204a0ef62ec940c788094ff723f8df1.svg" alt="logo"  />
        <p>
          Welcome to Cars24 Rider
        </p>
        <Lottie options={defaultOptions}
              height={200}
              width={200}
              />

      </header>
    </div>
  );
}

export default App;
