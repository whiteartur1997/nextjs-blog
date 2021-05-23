// instance types
export type PostType = {
  id: number
  title: string
  body: string
  comments: CommentType[]
}

export type CommentType = {
  id: number
  postId: number
  body: string
}

// state type
export interface AppStateType {
  error: null | string
  isLoading: boolean
  allPosts: PostType[]
  currentPost: PostType | null
  postCreated: boolean
  postDeleted: boolean
}

// actions types
export enum AppActionTypes {
  SET_LOADING = 'SET-LOADING',
  SET_ERROR = 'SET-ERROR',
  SET_POSTS = 'SET-POSTS',
  SET_POST = 'SET_POST',
  DELETE_POST = 'DELETE_POST',
  SET_POST_CREATED = 'SET_POST_CREATED',
  SET_POST_DELETED = 'SET_POST_DELETED',
}

interface SetIsLoadingAction {
  type: AppActionTypes.SET_LOADING
  payload: boolean
}

interface SetErrorAction {
  type: AppActionTypes.SET_ERROR
  payload: null | string
}

interface SetPostsAction {
  type: AppActionTypes.SET_POSTS
  payload: PostType[]
}

interface SetPostAction {
  type: AppActionTypes.SET_POST
  payload: PostType
}

interface DeletePostAction {
  type: AppActionTypes.DELETE_POST
  payload: number
}

interface SetPostCreatedAction {
  type: AppActionTypes.SET_POST_CREATED
  payload: boolean
}

interface SetPostDeletedAction {
  type: AppActionTypes.SET_POST_DELETED
  payload: boolean
}

export type AppActions =
  | SetIsLoadingAction
  | SetErrorAction
  | SetPostsAction
  | SetPostAction
  | DeletePostAction
  | DeletePostAction
  | SetPostCreatedAction
  | SetPostDeletedAction

// const setIsLoading = (isLoading: boolean) =>
//   ({
//     type: 'SET-LOADING',
//     isLoading,
//   } as const)

// const setError = (error: null | string) =>
//   ({
//     type: 'SET-ERROR',
//     error,
//   } as const)

// const getPosts = (posts: PostType[]) =>
//   ({
//     type: 'GET-POSTS',
//     posts,
//   } as const)

// const getPost = (post: PostType | null) =>
//   ({
//     type: 'GET-POST',
//     post,
//   } as const)
