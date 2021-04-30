import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  onKeyPressed(event) {
    let key = event.key.toUpperCase();
    let target = document.getElementById(key);
    if (target) {
      target.play();
      document.getElementById("display").innerText = `${key} sound played !`;
    }
  }

  sound(event) {
    let key = event.target.textContent;
    document.getElementById(key).play();
    document.getElementById("display").innerText = `${key} sound played !`;
  }

  render() {
    return (
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        <h2 id="display">Output</h2>
        <div className="row">
          <div className="drum-pad col-3" id="Qsound" onClick={this.sound}>
            Q
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              className="clip"
              id="Q"
            />
          </div>
          <div className="drum-pad col-3" id="Wsound" onClick={this.sound}>
            W
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              className="clip"
              id="W"
            />
          </div>
          <div className="drum-pad col-3" id="Esound" onClick={this.sound}>
            E
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              className="clip"
              id="E"
            />
          </div>
          <div className="row"></div>
          <div className="drum-pad col-3" id="Asound" onClick={this.sound}>
            A
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              className="clip"
              id="A"
            />
          </div>
          <div className="drum-pad col-3" id="Ssound" onClick={this.sound}>
            S
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              className="clip"
              id="S"
            />
          </div>
          <div className="drum-pad col-3" id="Dsound" onClick={this.sound}>
            D
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              className="clip"
              id="D"
            />
          </div>
        </div>
        <div className="row">
          <div className="drum-pad col-3" id="Zsound" onClick={this.sound}>
            Z
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              className="clip"
              id="Z"
            />
          </div>
          <div className="drum-pad col-3" id="Xsound" onClick={this.sound}>
            X
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              className="clip"
              id="X"
            />
          </div>
          <div className="drum-pad col-3" id="Csound" onClick={this.sound}>
            C
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              className="clip"
              id="C"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
