import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../../src/components/Loader/Loader'
import { MainLayout } from '../../src/PageComponents/MainLayout/MainLayout'
import { DeleteButton } from '../../src/PageComponents/MainPage/MainPage'
import { RootState } from '../../src/state'
import { NextThunkDispatch, wrapper } from '../../src/state/store'
import { fetchPost, removePost } from '../../src/state/thunks'
import { getLoading, getPost, getPostDeleted } from '../../src/utils/selectors'

export default function Post() {
  const router = useRouter()
  const dispatch = useDispatch()
  const post = useSelector((state: RootState) => getPost(state))
  const isLoading = useSelector((state: RootState) => getLoading(state))
  const postDeleted = useSelector((state: RootState) => getPostDeleted(state))

  const deletePostHandler = (postId: number) => {
    dispatch(removePost(postId, true))
  }

  useEffect(() => {
    dispatch(fetchPost(router.query.id))
  }, [])

  if (postDeleted) {
    router.push('/')
  }

  return (
    post && (
      <MainLayout>
        <Head>
          <title>Post {post.title}</title>
        </Head>
        {isLoading && <Loader />}
        <div>
          <h2>{post.title ? post.title : '--No post title--'}</h2>
          <p>{post.body ? post.body : '--No post body--'}</p>
          <DeleteButton onClick={() => deletePostHandler(post.id)}>
            Delete
          </DeleteButton>
        </div>
      </MainLayout>
    )
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, params }) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchPost(params.id))
  }
)
