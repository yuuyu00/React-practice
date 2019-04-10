import { ADD_COMMENT, FETCH_COMMENTS } from 'actions/types.action';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      debugger;
      return [...state, ...action.payload.map(comment => comment.name)];
    default:
      return state;
  }
};
