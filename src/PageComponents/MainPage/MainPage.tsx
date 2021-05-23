import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Loader } from '../../components/Loader/Loader'
import { RootState } from '../../state'
import { removePost } from '../../state/thunks'
import { PostType } from '../../types'
import { getLoading } from '../../utils/selectors'

const PostsList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const PostItem = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  padding: 20px;
  border: 1px solid grey;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.63);
  margin: 20px;

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`

type MainPagePropsType = {
  posts: PostType[]
}

const PostTitle = styled.h5`
  font-size: 24px;
  font-weight: bold;
`

const PostComments = styled.span`
  font-size: 14px;
  font-weight: bold;
`

const PostLink = styled.a`
  color: blue;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;

  &:hover {
    cursor: pointer;
  }
`

export const DeleteButton = styled.button`
  color: white;
  width: 200px;
  background: red;
  padding: 7px 0px;
  border: none;
  border-radius: 7px;

  &:hover {
    cursor: pointer;
    background: #8b0000;
  }
`

export const MainPage: React.FC<MainPagePropsType> = ({ posts }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: RootState) => getLoading(state))
  const deletePostHandler = (postId: number) => {
    dispatch(removePost(postId, false))
  }

  return (
    <div>
      {isLoading && <Loader />}
      <h1>All Posts</h1>
      <PostsList>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <p>
              {post.body && post.body.length > 50
                ? `${post.body.substr(0, 150)}...`
                : post.body}
            </p>
            <PostComments>
              {post.comments
                ? `There are ${post.comments.length} comments`
                : 'No comments yet'}
            </PostComments>
            <PostLink href={`/posts/${post.id}`}>Read more</PostLink>
            <DeleteButton onClick={() => deletePostHandler(post.id)}>
              Delete
            </DeleteButton>
          </PostItem>
        ))}
      </PostsList>
    </div>
  )
}
