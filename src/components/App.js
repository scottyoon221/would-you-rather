import React, { Component, Fragment } from 'react';
import { Route, Redirect } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import Poll from "./Poll";
import SignIn from "./SignIn";
import AnswerSubmission from "./AnswerSubmission";
import My404 from "./My404";

class App extends Component {
  //is usered logged in?
  isLoggedIn() {
    return true === false;
  }

  render() {
    return (
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
                    <Redirect to="/home"/>
                  )}
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
                  path="/answersubmission"
                  render={() => (
                    <AnswerSubmission

                    />
                  )}
                />
                <Route
                  exact
                  path="/questions/:id"
                  component={Poll}
                />
                <Route path='/404' component={My404} />
              </div>
          }
        </div>
      </Fragment>
    );
  }
}

export default App;
