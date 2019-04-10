import { combineReducers } from 'redux';
import comments from 'reducers/comments.reducer';
import authReducer from 'reducers/auth.reducer';

export default combineReducers({
  comments: comments,
  auth: authReducer
});
