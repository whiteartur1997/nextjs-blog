import axios from 'axios'
import { PostType, CommentType } from '../types'

const axiosInstance = axios.create({
  baseURL: 'https://simple-blog-api.crew.red/',
})

export const blogAPI = {
  getPosts: () => {
    return axiosInstance.get<PostType[]>('posts').then((res) => res.data)
  },
  getPost: (id: string | string[]) => {
    return axiosInstance
      .get<PostType>(`posts/${id}?_embed=comments`)
      .then((res) => res.data)
  },
  createPost: (title: string, body: string) => {
    return axiosInstance
      .post<PostType>('posts', {
        title,
        body,
      })
      .then((res) => res.data)
  },
  updatePost: (id: number, title: string, body: string) => {
    return axiosInstance
      .put<PostType>(`posts/${id}`, {
        title,
        body,
      })
      .then((res) => res.data)
  },
  deletePost: (id: number) => {
    return axiosInstance.delete<{}>(`posts/${id}`).then((res) => res.data)
  },
  createComment: (postId: number, body: string) => {
    return axiosInstance
      .post<CommentType>('comments', {
        postId,
        body,
      })
      .then((res) => res.data)
  },
}

// types
