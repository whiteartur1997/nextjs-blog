import { ReactNode } from 'react'
import styled from 'styled-components'
import StyledLink from '../../components/StyledLink/StyledLink'

type MainLayoutPropsType = {
  children: ReactNode
}

const AppHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  padding: 0 70px;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  background: white;
`

const AppNavigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const ContainerForMainContent = styled.main`
  width: 100%;
  padding: 0 10%;
  margin-top: 100px;
`

export const MainLayout: React.FC<MainLayoutPropsType> = ({ children }) => {
  return (
    <>
      <AppHeader>
        <AppNavigation>
          <StyledLink page="/" href="/">
            All posts
          </StyledLink>
          <StyledLink page="/posts/new" href="/posts/new">
            Create new post
          </StyledLink>
        </AppNavigation>
      </AppHeader>
      <ContainerForMainContent>{children}</ContainerForMainContent>
    </>
  )
}
