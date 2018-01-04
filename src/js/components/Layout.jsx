import React from "react"
import classnames from "classnames"
import Toolbar from "./Toolbar.jsx"
import Lights from "./Lights.jsx"
import Settings from "./Settings.jsx"
import Heater from "./Heater.jsx"
import Card from "./Card.jsx"
import { Route, Switch } from 'react-router-dom'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state ={ 
      blurContent: false
    }
  }

  render() {
    const { blurContent } = this.state
    return (
      <div>
        <Toolbar onMenuToggle={isMenuOpen => this.setState({ blurContent: isMenuOpen })} />
        <div className={classnames({ blurContent }) + " transition"}>
          <Switch>
            <Route
              exact
              path='/'
              component={() => <Lights/>} />
            <Route
              exact
              path='/lights'
              component={() => <Lights/>} />
            <Route
              exact
              path='/lights/mom'
              component={() => <Lights />} />
            <Route
              exact
              path='/lights/dad'
              component={() => <Lights />} />
            <Route
              exact
              path='/lights/ryan'
              component={() => <Lights />} />
            <Route
              exact
              path='/lights/neekon'
              component={() => <Lights />} />
            <Route
              exact
              path='/lights/laleh'
              component={() => <Lights />} />
            <Route
              exact
              path='/heater'
              component={() => <Heater/>} />
            <Route
              exact
              path='/settings'
              component={() => <Settings/>} />
          </Switch>
        </div>
      </div>
    )
  }
}