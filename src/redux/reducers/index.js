import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
    postDetails:postsReducer
})

export default rootReducer;