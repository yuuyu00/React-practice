import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const CommentList = props => {
  const renderComments = () => {
    return (
      <ul>
        {props.comments.map(comment => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
    );
  };
  return renderComments();
};

const mapStateToProps = state => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps)(CommentList);
