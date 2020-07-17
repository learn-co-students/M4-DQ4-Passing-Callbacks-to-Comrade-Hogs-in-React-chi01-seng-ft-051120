import React from "react"
import Pig from "./Pig.js"
import GalaxySNote7 from "./GalaxySNote7.js"
import exclaim from '../assets/exclaim.mp3';
import wreee from '../assets/wreee.mp3';
const pigs = [
  "Sobriety",
  "Trouble",
  "Cherub",
  "MasterBlaster"
]
export default class PigPen extends React.Component {
  constructor() {
    super()
    this.state = {
      environment: "docile"
    }
    this.audio = new Audio(exclaim)
    this.squealAudio= new Audio(wreee)
  }
  relax = () => {
    const newState = {environment: 'docile'}
    this.setState(newState)
  }
  alterEnvironment = (vibe) => {
    if (vibe === "inhospitable"){
      this.audio.play()
      this.squealAudio.play()
      const newState = {environment: vibe}
      this.setState(newState)
    }
  }
  generateSheeple = () => {
    return pigs.map((name, idx) => (
      <Pig key={idx} id={name} name={name} environment={this.state.environment} alterEnvironment={this.alterEnvironment}/>
    ))
  }
  render() {
    const sheeple = this.generateSheeple()
    return(
      <div id="pig-pen">
        {sheeple}
        <GalaxySNote7 environment={this.state.environment} alterEnvironment={this.alterEnvironment} relax={this.relax} />
      </div>
    )
  }
}