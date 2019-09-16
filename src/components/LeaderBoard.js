import React from 'react';
import { connect } from 'react-redux';
import User from './User';
class LeaderBoard extends React.Component {
  render () {
    const { users } = this.props;
    return (
      <ul>
        {Object.keys(users).length ?
          Object.keys(users).map(key =>
            <div key={key}>
              <User user={users[key]}/>
            </div>
          )
        :
          null}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(LeaderBoard);

function mapStateToProps ({ users }) {
  return { users: users }
}