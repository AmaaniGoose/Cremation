import React from 'react';
import Image from 'react-bootstrap/Image'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src="./blueflame.gif" roundedCircle />
            <div class="row">
              <h1 class="display-1">
              <p>
                  Blue Flames of Cremation
              </p>
              </h1>
              </div>
                <div class="row">
                  <p class="lead">
                    Coming Soon
                  </p>
                </div>
      </header>
    </div>
  );
}

export default App;
