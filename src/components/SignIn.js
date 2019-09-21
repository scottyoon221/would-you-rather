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
    const assets = require.context('../assets', false);
    let avatar;
    return (
      <div class="container border">
        <form onSubmit={this.handleSubmit}>
          <div class="welcome border">
            <div class="row">
              <div class="col text-center">
                <b>Welcome to the Would You Rather App!</b>
              </div>
            </div>
            <div class="row text-center">
              <div class="col">Please sign in to continue</div>
            </div>
          </div>
          <div class="row text-center">
            <div class="col">
              <img src={assets('./logo.png')} alt="logo" width="300px" />
            </div>
          </div>
          <div class="row text-center">
            <div class="col signin-text"><b>Sign in</b></div>
          </div>
          <div class="user-dropdown row">
            <div class="col text-center">
              <select class="form-control" ref={(select) => this.selected = select} defaultValue="choose" >
                <option value="choose" disabled hidden>Select User</option>
                {
                  users
                  ? Object.keys(users).map((keyname) => {
                    avatar = assets(users[keyname].avatarURL);
                    return <option data-thumbnail={avatar} key={keyname} value={users[keyname].id} >{users[keyname].name}</option>
                    })
                  : null
                }
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col text-center">
              <input type="submit" value="Sign In" class="signin btn btn-primary"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps ({ users }) {
  return {users}
}

export default withRouter(connect(mapStateToProps)(SignIn));
