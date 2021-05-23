import { AppActions, AppActionTypes, AppStateType, PostType } from '../types'

const initialState: AppStateType = {
  error: null,
  isLoading: false,
  allPosts: [],
  currentPost: null,
  postCreated: false,
  postDeleted: false,
}

export const appReducer = (
  state = initialState,
  action: AppActions
): AppStateType => {
  switch (action.type) {
    case AppActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload }
    case AppActionTypes.SET_ERROR:
      return { ...state, error: action.payload }
    case AppActionTypes.SET_POST_CREATED:
      return { ...state, postCreated: action.payload }
    case AppActionTypes.SET_POST:
      return { ...state, currentPost: action.payload }
    case AppActionTypes.SET_POSTS:
      return { ...state, allPosts: action.payload }
    case AppActionTypes.SET_POST_DELETED:
      return { ...state, postDeleted: action.payload }
    case AppActionTypes.DELETE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter((post) => post.id !== action.payload),
      }
    default:
      return state
  }
}
