import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

export class PostUser extends React.Component {}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(PostUser);
