import { Dispatch } from 'redux'
import { blogAPI } from '../api/api'
import {
  deletePostOnSuccess,
  setError,
  setIsLoading,
  setPost,
  setPostCreated,
  setPostDeleted,
  setPosts,
} from './action-creators'

export const fetchPosts = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setIsLoading(true))
    const res = await blogAPI.getPosts()
    dispatch(setPosts(res))
  } catch (err) {
    dispatch(setError(err))
  } finally {
    dispatch(setIsLoading(false))
  }
}

export const fetchPost =
  (postId: string | string[]) => async (dispatch: Dispatch) => {
    try {
      dispatch(setIsLoading(true))
      const res = await blogAPI.getPost(postId)
      dispatch(setPost(res))
    } catch (err) {
      dispatch(setError(err))
    } finally {
      dispatch(setIsLoading(false))
    }
  }

export const removePost =
  (postId: number, fromPostPage: boolean) => async (dispatch: Dispatch) => {
    try {
      dispatch(setIsLoading(true))
      await blogAPI.deletePost(postId)
      fromPostPage
        ? dispatch(setPostDeleted(true))
        : dispatch(deletePostOnSuccess(postId))
    } catch (err) {
      dispatch(err)
    } finally {
      dispatch(setIsLoading(false))
    }
  }

export const createPost =
  (title: string, body: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(setIsLoading(true))
      await blogAPI.createPost(title, body)
      dispatch(setPostCreated(true))
    } catch (err) {
      dispatch(err)
    } finally {
      dispatch(setIsLoading(false))
    }
  }
