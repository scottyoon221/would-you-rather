import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';

import Questions from './Questions';

class Home extends React.Component {
  render () {
    const {match} = this.props;
    console.log('this-> ',this.props);
    return (
      <div class="container">
        <div class="row border">
          <div class="col-6 border-right text-center">
            <NavLink to={`${match.url}`} activeClassName="active">
              Unanswered Questions
            </NavLink>
          </div>
          <div class="col-6 text-center">
            <NavLink to={`${match.url}/answeredquestions`} activeClassName="active">
              Answered Questions
            </NavLink>
          </div>
        </div>
        <Route
          exact
          path={`${match.path}`}
          component={Questions}
        />
        <Route
          path={`${match.path}/answeredquestions`}
          component={Questions}
        />
      </div>
    );
  }
}

export default withRouter(Home);
