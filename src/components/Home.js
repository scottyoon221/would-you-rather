import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Questions from './Questions';

class Home extends React.Component {
  render () {
    const {match} = this.props;
    return (
      <div>
        <ul>
          <li>
            <NavLink to={`${match.url}`} activeClassName="active">
              Unanswered Questions
            </NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/answeredquestions`} activeClassName="active">
              Answered Questions
            </NavLink>
          </li>
        </ul>
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

export default Home;
