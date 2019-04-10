import { ADD_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types.action';
import axios from 'axios';

export const addComment = comment => {
  return {
    type: ADD_COMMENT,
    payload: comment
  };
};

export const fetchComments = () => async dispatch => {
  const response = await axios.get(
    'http://jsonplaceholder.typicode.com/comments'
  );

  dispatch({ type: FETCH_COMMENTS, payload: response.data });
};

export const changeAuth = isLoggedIn => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};
