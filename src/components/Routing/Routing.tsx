import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import MatchPage from '../MatchPage/MatchPage'
import ClubPage from '../ClubPage/ClubPage'

class Routing extends Component<any> {
  constructor (props: any) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/1337' render={() => <ClubPage />} />
            <Route path='/aisw-cms-MatchPage/1'>
              <MatchPage />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Routing