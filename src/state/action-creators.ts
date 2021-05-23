import { AppActions, AppActionTypes, PostType } from '../types'

export const setIsLoading = (payload: boolean): AppActions => {
  return { type: AppActionTypes.SET_LOADING, payload }
}

export const setError = (payload: null | string): AppActions => {
  return { type: AppActionTypes.SET_ERROR, payload }
}

export const setPosts = (payload: PostType[]): AppActions => {
  return { type: AppActionTypes.SET_POSTS, payload }
}

export const setPost = (payload: PostType | null): AppActions => {
  return { type: AppActionTypes.SET_POST, payload }
}

export const deletePostOnSuccess = (payload: number): AppActions => {
  return { type: AppActionTypes.DELETE_POST, payload }
}

export const setPostCreated = (payload: boolean): AppActions => {
  return { type: AppActionTypes.SET_POST_CREATED, payload }
}

export const setPostDeleted = (payload: boolean): AppActions => {
  return { type: AppActionTypes.SET_POST_DELETED, payload }
}
