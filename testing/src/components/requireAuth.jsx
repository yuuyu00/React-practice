import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent, props) => {
  const shouldNavigateAway = () => {
    if (!props.auth) {
      props.history.push('/');
    }
  };

  useEffect(() => {
    shouldNavigateAway();
  });

  const ComposedComponent = () => {
    return <ChildComponent />;
  };

  const mapStateToProps = state => {
    return {
      auth: state.auth
    };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
