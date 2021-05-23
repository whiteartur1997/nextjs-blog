import get from 'lodash/get'
import { RootState } from '../state'

export const getLoading = (state: RootState) => get(state, 'isLoading')

export const getPosts = (state: RootState) => get(state, 'allPosts')

export const getPost = (state: RootState) => get(state, 'currentPost')

export const getError = (state: RootState) => get(state, 'error')

export const getPostCreated = (state: RootState) => get(state, 'postCreated')

export const getPostDeleted = (state: RootState) => get(state, 'postDeleted')
