import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panicked: false,
    }

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    // this.exclaimAudio.addEventListener("ended", () => {
    //   this.throwAFit()
    // }, false)
  }

  throwAFit = () => {
    this.setState({
      panicked: true
    })
    
    setTimeout(this.relax, 4000); 
  }

  relax = () => {
    this.props.relax()
    this.setState({
      panicked: false
    })
  }

  exclaim = () => {
    if (!this.state.panicked) {
      this.exclaimAudio.play()
      this.squeelAudio.play()
      this.throwAFit()
      
      setTimeout(() => {this.props.alterEnvironment("inhospitable")}, 2000)
     }
  }

  panic = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)

  render() {
    return(
      <div id="galaxy-s-note" onClick={this.exclaim}>
        {(this.state.panicked) ? this.panic() : null}
      </div>
    )
  }
}
