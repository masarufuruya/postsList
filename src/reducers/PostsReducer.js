import { PostsScreen } from '../actions/types';

//投稿一覧画面の初期ステート
const INITIAL_STATE = {
  posts: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostsScreen.Reducer.FETCH_POSTS: {
      return Object.assign({}, state, {
        posts: action.payload
      })
    }
    default: {
      return state;
    }
  }
};
