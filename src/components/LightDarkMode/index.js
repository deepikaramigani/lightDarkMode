// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {darkmode: true}

  onDarkMode = () => {
    this.setState(() => ({darkmode: true}))
  }

  onLightMode = () => {
    this.setState(() => ({darkmode: false}))
  }

  render() {
    const {darkmode} = this.state
    let container
    if (darkmode) {
      container = (
        <div className="change-mode dark-mode">
          <h1>Click To Change Mode</h1>
          <button onClick={this.onLightMode} className="button" type="button">
            Light Mode
          </button>
        </div>
      )
    } else {
      container = (
        <div className="change-mode light-mode">
          <h1>Click To Change Mode</h1>
          <button onClick={this.onDarkMode} className="button" type="button">
            Dark Mode
          </button>
        </div>
      )
    }
    return <div className="container">{container}</div>
  }
}

export default LightDarkMode
