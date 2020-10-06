import { combineReducers } from 'redux';
import { appReduser } from './appReducer';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReduser,
});
