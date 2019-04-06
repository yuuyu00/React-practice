import { ADD_COMMENT, FETCH_COMMENTS } from 'actions/types';
import axios from 'axios';

export const addComment = comment => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};

export const fetchComments = () => async dispatch => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/comments',
  );

  dispatch({ type: FETCH_COMMENTS, payload: response.data });
};
