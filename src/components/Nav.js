import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

class Navigation extends React.Component {
  render () {
    const {user} = this.props;
    const avatars = require.context("../assets", false);
    return (
      <Fragment>
        <div class="nav-gap">
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/newquestion">New Question</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/leaderboard">Leader Board</Nav.Link>
          </Nav.Item>
          {
            user
            ? <Fragment>
                <Nav.Item>
                  <Nav.Link disabled>
                    Hello, {user.name}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link disabled>
                    <img src={avatars(user.avatarURL)} alt={user.name} width="25px"/>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/logout">
                    Log Out
                  </Nav.Link>
                </Nav.Item>
              </Fragment>
            : null
          }
        </Nav>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps ({ authedUser, users }, props) {
  return { user: users[authedUser] }
}

export default withRouter(connect(mapStateToProps)(Navigation));