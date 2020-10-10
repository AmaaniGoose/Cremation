import React from 'react';
import Image from 'react-bootstrap/Image'
import './App.css';

function App() {
  return (
  <div className="App">
    <header className="App-header">
      <Image src="./blueflame.gif" roundedCircle="roundedCircle"/>
        <div class="row">
          <div class="col-12 col-sm-12 ">
            <h1 class="display-1">
              <p class="text-center">
                Blue Flames of Cremation
              </p>
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12 align-items-center">
            <p class="lead">
              Coming Soon
            </p>
          </div>
        </div>
    </header>
  </div>
);
}

export default App;
