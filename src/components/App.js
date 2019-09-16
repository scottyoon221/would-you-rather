import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import Nav from './Nav';
import RandomQuestion from './RandomQuestion';
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import Poll from './Poll';
import SignIn from './SignIn';
import My404 from './My404';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        <Router>
        <div className="App">
        {
          this.props.loading
            ? null
            : <Fragment>
                <Nav />
                {
                  this.props.isLoggedOut
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
                          <NewQuestion />
                        )}
                      />
                      <Route
                        exact
                        path="/leaderboard"
                        render={() => (
                          <LeaderBoard />
                        )}
                      />
                      <Route
                        exact
                        path="/logout"
                        render={() => (
                          <SignIn />
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
              </Fragment>
        }
        </div>
        </Router>
      </Fragment>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  console.log('mapStateToProps');
  return {
    loading: Object.keys(users).length === 0,
    isLoggedOut: authedUser === null
  }
}

export default connect(mapStateToProps)(App)