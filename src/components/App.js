import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import RandomQuestion from './RandomQuestion';
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import Poll from './Poll';
import SignIn from './SignIn';
import My404 from './My404';


class App extends Component {
  //is usered logged in?
  isLoggedIn() {
    return this.props.loading;
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div className="App">
            <Nav />
            {//check credential
             this.isLoggedIn()
              ? <div>
                  <SignIn/>
                </div>
              : <div>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <Redirect to="/home" />
                    )}
                  />
                  <Route
                    path="/randomquestion"
                    component={RandomQuestion}
                  />
                  <Route
                    path="/home"
                    component={Home}
                  />
                  <Route
                    exact
                    path="/newquestion"
                    render={() => (
                      <NewQuestion

                      />
                    )}
                  />
                  <Route
                    exact
                    path="/leaderboard"
                    render={() => (
                      <LeaderBoard

                      />
                    )}
                  />

                  <Route
                    exact
                    path="/logout"
                    render={() => (
                      <SignIn

                      />
                    )}
                  />
                  <Route
                    exact
                    path="/questions/:id"
                    component={Poll}
                  />
                  <Route path="/404" component={My404} />
                </div>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)








