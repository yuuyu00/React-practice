import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    console.log();
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
