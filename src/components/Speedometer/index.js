// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      if (prevState.count === 200) {
        return {count: prevState.count}
      } else {
        return {count: prevState.count + 10}
      }
    })
  }
  onBrake = () => {
    this.setState(prevState => {
      if (prevState.count === 0) {
        return {count: prevState.count}
      } else {
        return {count: prevState.count - 10}
      }
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="bgcon">
        <h1 className="mainhead">SPEEDOMETER</h1>
        <div>
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
        </div>
        <h2 className="head"> Speed is {count}mph</h2>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btnCon">
          <button className="btn1" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="btn2" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
