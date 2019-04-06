import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addComment, fetchComments } from 'actions';

const CommentBox = props => {
  const [comment, setComment] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addComment(comment);
    setComment('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          className="ui text"
          value={comment}
          onChange={e => handleChange(e)}
        />
        <div>
          <button className="ui button">Submit Comment</button>
        </div>
      </form>
      <button
        className="ui button fetch-comments"
        onClick={props.fetchComments}
      >
        Fetch Comment
      </button>
    </div>
  );
};

export default connect(
  null,
  { addComment, fetchComments },
)(CommentBox);
