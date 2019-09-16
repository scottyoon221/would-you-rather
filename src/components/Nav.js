import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  render () {
    const {user} = this.props;
    const avatars = require.context("../assets", false);
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/home" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/newquestion" activeClassName="active">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" activeClassName="active">
              Leader Board
            </NavLink>
          </li>
          {
            user ?
              <Fragment>
                <li>
                Hello, {user.name}
                </li>
                <li>
                  <img src={avatars(user.avatarURL)} alt={user.name} width="25px"/>
                </li>
                <li>
                  <NavLink to="/logout" activeClassName="active">
                    Log Out
                  </NavLink>
                </li>
              </Fragment>
              :
              null
          }
        </ul>
      </nav>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return { user: users[authedUser] }
}

export default connect(mapStateToProps)(Nav);
