import commentsReducer from 'reducers/comments.reducer';
import { ADD_COMMENT } from 'actions/types.action';

it('handle actions of type SAVE_COMMENT', () => {
  const actions = {
    type: ADD_COMMENT,
    payload: 'New Comment'
  };

  const newState = commentsReducer([], actions);

  expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
  const newState = commentsReducer([], { type: 'asdkjfnksdf' });

  expect(newState).toEqual([]);
});
