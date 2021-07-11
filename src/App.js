import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Key from "./Components/Key"

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
          <Key onClick={this.sound} btn="Q" url="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
          <Key onClick={this.sound} btn="W" url="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
          <Key onClick={this.sound} btn="E" url="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
          </div><div className="row">
          <Key onClick={this.sound} btn="A" url="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
          <Key onClick={this.sound} btn="S" url="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
          <Key onClick={this.sound} btn="D" url="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
          </div><div className="row">
          <Key onClick={this.sound} btn="Z" url="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
          <Key onClick={this.sound} btn="X" url="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
          <Key onClick={this.sound} btn="C" url="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
          </div>
        </div>
    );
  }
}

export default App;
