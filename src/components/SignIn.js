import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

class SignIn extends React.Component {
  constructor (props) {
    super(props);
    this.selected = null;
    this.props.dispatch(setAuthedUser(this.selected));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.selected.value));
    this.props.history.push(`/randomquestion`);
  }

  render () {
    const { users } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>Welcome to the Would You Rather App!</div>
        <div>Please sign in to continue</div>
        <div>Sign in</div>
        <div>
          <select ref={(select) => this.selected = select} onChange={this.handleSelect} defaultValue="choose" >
            <option value="choose" disabled hidden>Choose here</option>
            {
              users ?
              Object.keys(users).map((keyname) => {
                return <option key={keyname} value={users[keyname].id}>{users[keyname].name}</option>
              })
              :
              null
            }
          </select>
        </div>
        <input type="submit" value="Sign In" />
      </form>
    );
  }
}

function mapStateToProps ({ users }) {
  return {users}
}

export default withRouter(connect(mapStateToProps)(SignIn));
