import React from 'react';
import { Redirect } from "react-router-dom";
class Poll extends React.Component {
  render () {
    const { match } = this.props;
    // if question id does not exisits
    if (match.url.includes("1")) {
      return <Redirect from='*' to='/404' />
    }

    return (
      <div>
        <div>
          Asked by Tyler McGinnis
        </div>
        <div>
          <div>
            Avatar
          </div>
          <div>
            <div>
              Results:
            </div>
            <div>
              Would you rather be a front-end developer?
              50%
              Your vote
            </div>
            <div>
              Would you rather be a back-end developer?
              50%
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Poll;
