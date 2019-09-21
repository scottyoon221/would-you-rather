import React from 'react';
import { connect } from 'react-redux';
import User from './User';
class LeaderBoard extends React.Component {
  render () {
    const { users } = this.props;
    return (
      <div class="container">
        {Object.keys(users).length ?
          Object.keys(users).map(key =>
            <div class="row border leader-box" key={key}>
              <User user={users[key]}/>
            </div>
          )
        :
          null}
      </div>
    );
  }
}

export default connect(mapStateToProps)(LeaderBoard);

function mapStateToProps ({ users }) {
  return { users: users }
}